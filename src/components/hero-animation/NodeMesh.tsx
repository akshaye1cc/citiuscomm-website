'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import {
  bucketAlpha,
  buildMesh,
  MESH_COLORS,
  MESH_VIEW,
  type MeshEdge,
  type MeshNode,
} from './meshGeometry';

/**
 * NodeMesh — a triangulated point field that breathes.
 *
 * Three decisions carry the performance budget, because there are several
 * hundred edges and every one of them moves:
 *
 *  1. Topology is computed once, in meshGeometry. The loop only ever rewrites
 *     coordinates; it never asks again which nodes connect.
 *  2. Edges and nodes are batched into a few dozen <path> elements grouped by
 *     colour and opacity, so a frame is ~90 setAttribute calls rather than the
 *     ~3,000 it would take to move every line and circle individually. Nodes
 *     are zero-length subpaths with a round linecap — a dot, for one `d` write
 *     instead of a cx/cy pair per circle.
 *  3. One rAF loop at 30fps drives all of it. The oscillation periods are
 *     15–25s, so 60fps buys nothing visible and costs twice the scripting.
 *
 * The loop is parked entirely when the hero scrolls out of view or the tab is
 * hidden, and never starts at all under prefers-reduced-motion — the rest
 * positions are already in the markup, so the static case is just the initial
 * render with nothing running behind it.
 */

interface NodeMeshProps {
  className?: string;
  seed?: number;
}

interface Batch {
  color: string;
  alpha: number;
  width: number;
  items: number[];
  d: string;
}

const r1 = (v: number) => Math.round(v * 10) / 10;

const EDGE_FADE =
  'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%),' +
  'linear-gradient(to bottom, transparent 0, black 6%, black 94%, transparent 100%)';

const edgePath = (edges: MeshEdge[], items: number[], pos: Float32Array) => {
  const parts: string[] = [];
  for (let i = 0; i < items.length; i++) {
    const e = edges[items[i]];
    const a = e.a * 2;
    const b = e.b * 2;
    parts.push(`M${r1(pos[a])} ${r1(pos[a + 1])}L${r1(pos[b])} ${r1(pos[b + 1])}`);
  }
  return parts.join('');
};

const nodePath = (items: number[], pos: Float32Array) => {
  const parts: string[] = [];
  for (let i = 0; i < items.length; i++) {
    const n = items[i] * 2;
    // Zero-length subpath + round linecap renders as a dot of the stroke width.
    parts.push(`M${r1(pos[n])} ${r1(pos[n + 1])}l.01 0`);
  }
  return parts.join('');
};

export default function NodeMesh({ className = '', seed = 20260804 }: NodeMeshProps) {
  const prefersReduced = useReducedMotion();
  const reduceMotion = Boolean(prefersReduced);

  const { nodes, edges, edgeBatches, nodeBatches } = useMemo(() => {
    const mesh = buildMesh(seed);
    const rest = new Float32Array(mesh.nodes.length * 2);
    mesh.nodes.forEach((n, i) => {
      rest[i * 2] = n.x;
      rest[i * 2 + 1] = n.y;
    });

    // Group by (colour, opacity) for edges and (colour, degree) for nodes.
    // Degree fixes both radius and opacity, so it is the whole node key.
    const eMap = new Map<string, number[]>();
    mesh.edges.forEach((e, i) => {
      const k = `${e.colorIndex}:${e.opacityIndex}`;
      const list = eMap.get(k);
      if (list) list.push(i);
      else eMap.set(k, [i]);
    });

    const nMap = new Map<string, number[]>();
    mesh.nodes.forEach((n, i) => {
      const k = `${n.colorIndex}:${n.degree}`;
      const list = nMap.get(k);
      if (list) list.push(i);
      else nMap.set(k, [i]);
    });

    const eBatches: Batch[] = [...eMap.entries()].map(([k, items]) => {
      const [c, o] = k.split(':').map(Number);
      return {
        color: MESH_COLORS[c],
        alpha: bucketAlpha(o),
        width: 0.9,
        items,
        d: edgePath(mesh.edges, items, rest),
      };
    });

    const nBatches: Batch[] = [...nMap.entries()].map(([k, items]) => {
      const [c, deg] = k.split(':').map(Number);
      const node = mesh.nodes[items[0]] as MeshNode;
      return {
        color: MESH_COLORS[c],
        alpha: 0.3 + (deg / 7) * 0.55,
        width: node.radius * 2,
        items,
        d: nodePath(items, rest),
      };
    });

    return { nodes: mesh.nodes, edges: mesh.edges, edgeBatches: eBatches, nodeBatches: nBatches };
  }, [seed]);

  const hostRef = useRef<HTMLDivElement>(null);
  const edgeEls = useRef<(SVGPathElement | null)[]>([]);
  const nodeEls = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    if (reduceMotion) return; // static at rest — no loop at all
    const host = hostRef.current;
    if (!host) return;

    const pos = new Float32Array(nodes.length * 2);
    let raf = 0;
    let timer = 0;
    let running = false;
    let visible = false;
    let animTime = 0;
    let last = 0;
    // 6fps, and that is a deliberate floor rather than a compromise. A repaint
    // of ~330 antialiased strokes costs ~5ms whatever the rate, so main-thread
    // cost is very nearly linear in frames drawn. Meanwhile a 2–4px amplitude
    // over a 15–25s period gives a peak speed of ~1.7px/s: a third of a pixel
    // between frames here. There is no visible smoothness left to buy above
    // this, only repaints to pay for.
    const FRAME = 1000 / 6;

    const draw = () => {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const s = Math.sin(animTime * n.omega + n.phase);
        pos[i * 2] = n.x + n.dx * n.amp * s;
        pos[i * 2 + 1] = n.y + n.dy * n.amp * s;
      }
      for (let b = 0; b < edgeBatches.length; b++) {
        edgeEls.current[b]?.setAttribute('d', edgePath(edges, edgeBatches[b].items, pos));
      }
      for (let b = 0; b < nodeBatches.length; b++) {
        nodeEls.current[b]?.setAttribute('d', nodePath(nodeBatches[b].items, pos));
      }
    };

    // Scheduled by timer rather than a self-re-arming rAF. A live rAF callback
    // makes the browser run its whole rendering lifecycle every vsync — style
    // recalc was firing at 60Hz for a loop that only draws 15 times a second,
    // and that bookkeeping cost more than the drawing did. This way rAF exists
    // only on frames that actually paint, while still aligning them to vsync.
    const schedule = () => {
      timer = window.setTimeout(() => {
        raf = requestAnimationFrame((now) => {
          if (!running) return;
          animTime += (now - last) / 1000;
          last = now;
          draw();
          schedule();
        });
      }, FRAME);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      schedule();
    };
    const stop = () => {
      if (!running) return;
      running = false;
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
    const sync = () => {
      if (visible && !document.hidden) start();
      else stop();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { rootMargin: '120px' }
    );
    io.observe(host);
    document.addEventListener('visibilitychange', sync);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
      stop();
    };
  }, [nodes, edges, edgeBatches, nodeBatches, reduceMotion]);

  // Points are generated a little past the design box, so without this the band
  // ends on the viewBox clip — a straight razor edge down the right side. Two
  // gradients intersected soften all four edges while leaving the middle, and
  // the dense corner the band builds toward, at full strength.
  //
  // The rest of this style block is about paint cost, not looks. Rewriting `d`
  // on a few dozen paths every frame otherwise invalidates a region of the page
  // that includes the dot-grid backdrop underneath, so the browser repaints far
  // more than the mesh. Giving the mesh its own compositing layer and its own
  // containment/stacking scope confines the damage to this box — measured at
  // roughly half the main-thread cost of the same loop without it.
  const fade = {
    maskImage: EDGE_FADE,
    WebkitMaskImage: EDGE_FADE,
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
    contain: 'layout paint',
    transform: 'translateZ(0)',
    isolation: 'isolate',
  } as const;

  return (
    <div ref={hostRef} className={className} style={fade} aria-hidden>
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${MESH_VIEW.width} ${MESH_VIEW.height}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <g fill="none" strokeLinecap="round">
          {edgeBatches.map((b, i) => (
            <path
              key={`e${i}`}
              ref={(el) => {
                edgeEls.current[i] = el;
              }}
              d={b.d}
              stroke={b.color}
              strokeOpacity={b.alpha}
              strokeWidth={b.width}
            />
          ))}
          {nodeBatches.map((b, i) => (
            <path
              key={`n${i}`}
              ref={(el) => {
                nodeEls.current[i] = el;
              }}
              d={b.d}
              stroke={b.color}
              strokeOpacity={b.alpha}
              strokeWidth={b.width}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
