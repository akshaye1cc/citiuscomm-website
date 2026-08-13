import { bucketAlpha, buildMesh, MESH_VIEW, OPACITY_STEPS } from './meshGeometry';

/**
 * StaticNodeMesh — the hero's node mesh at rest, as a flat monochrome motif.
 *
 * Same geometry as NodeMesh, from the same buildMesh() call: the topology lives
 * in meshGeometry.ts and neither component owns a copy of it. The difference is
 * everything around the geometry — no 'use client', no rAF loop, no observers,
 * no per-frame path rewrites. It renders once on the server and never moves, so
 * prefers-reduced-motion has nothing to suppress here.
 *
 * Colour is flattened too. NodeMesh paints the blue ramp from meshGeometry,
 * which is tuned for a white canvas and would sink into a navy band; this takes
 * a single colour and keeps only the *relative* alpha ramp, so short edges and
 * high-degree nodes still read brighter than long edges and stragglers. That
 * ramp is the thing that stops the mesh flattening into uniform speckle, which
 * is why it survives the flattening to one colour.
 */

interface StaticNodeMeshProps {
  className?: string;
  seed?: number;
  /** Any CSS colour. Defaults to currentColor so callers can drive it with text-*. */
  color?: string;
  /**
   * Alpha of the *brightest* strokes. Every other bucket scales below it, so
   * this is a ceiling rather than a uniform opacity.
   */
  opacity?: number;
  /**
   * Soften the left edge so the motif dissolves into the band instead of
   * starting on a vertical razor line. The other three edges are left to be
   * cropped by the caller's overflow-hidden.
   */
  fadeLeft?: boolean;
}

/** Brightest bucket, so the ramp can be normalised against it. */
const MAX_ALPHA = bucketAlpha(OPACITY_STEPS - 1);

const r1 = (v: number) => Math.round(v * 10) / 10;

/**
 * buildMesh walks a spatial hash over a few hundred points. Cheap, but this
 * component renders on every page that carries a CtaBand, so the result is
 * cached per seed rather than recomputed for each one.
 */
const cache = new Map<number, ReturnType<typeof buildStatic>>();

function buildStatic(seed: number) {
  const mesh = buildMesh(seed);

  // Edges grouped by opacity bucket: one <path> per bucket instead of one per
  // edge, same batching rationale as NodeMesh minus the animation pressure.
  const byOpacity = new Map<number, string[]>();
  for (const e of mesh.edges) {
    const a = mesh.nodes[e.a];
    const b = mesh.nodes[e.b];
    const parts = byOpacity.get(e.opacityIndex);
    const seg = `M${r1(a.x)} ${r1(a.y)}L${r1(b.x)} ${r1(b.y)}`;
    if (parts) parts.push(seg);
    else byOpacity.set(e.opacityIndex, [seg]);
  }

  // Nodes grouped by degree, which fixes both radius and alpha.
  const byDegree = new Map<number, string[]>();
  for (const n of mesh.nodes) {
    const parts = byDegree.get(n.degree);
    // Zero-length subpath + round linecap renders as a dot of the stroke width.
    const seg = `M${r1(n.x)} ${r1(n.y)}l.01 0`;
    if (parts) parts.push(seg);
    else byDegree.set(n.degree, [seg]);
  }

  const edgePaths = [...byOpacity.entries()].map(([index, parts]) => ({
    key: `e${index}`,
    d: parts.join(''),
    alpha: bucketAlpha(index) / MAX_ALPHA,
    width: 0.9,
  }));

  const nodePaths = [...byDegree.entries()].map(([degree, parts]) => ({
    key: `n${degree}`,
    d: parts.join(''),
    alpha: (0.3 + (degree / 7) * 0.55) / MAX_ALPHA,
    width: (1.4 + degree * 0.42) * 2,
  }));

  return { edgePaths, nodePaths };
}

function getStatic(seed: number) {
  const hit = cache.get(seed);
  if (hit) return hit;
  const built = buildStatic(seed);
  cache.set(seed, built);
  return built;
}

export default function StaticNodeMesh({
  className = '',
  seed = 20260804,
  color = 'currentColor',
  opacity = 0.08,
  fadeLeft = false,
}: StaticNodeMeshProps) {
  const { edgePaths, nodePaths } = getStatic(seed);

  const fade = fadeLeft
    ? ({
        maskImage: 'linear-gradient(to right, transparent 0, black 42%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 42%)',
      } as const)
    : undefined;

  return (
    <div aria-hidden className={`pointer-events-none ${className}`} style={fade}>
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${MESH_VIEW.width} ${MESH_VIEW.height}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <g fill="none" stroke={color} strokeLinecap="round">
          {edgePaths.map((p) => (
            <path key={p.key} d={p.d} strokeOpacity={p.alpha * opacity} strokeWidth={p.width} />
          ))}
          {nodePaths.map((p) => (
            <path key={p.key} d={p.d} strokeOpacity={p.alpha * opacity} strokeWidth={p.width} />
          ))}
        </g>
      </svg>
    </div>
  );
}
