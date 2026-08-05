/**
 * Geometry for the hero's breathing node mesh.
 *
 * Everything here is pure and deterministic: same seed in, same mesh out. That
 * matters twice over — the server and the client must agree on the first paint,
 * and a mesh that reshuffled on every mount would read as a glitch rather than
 * a texture.
 *
 * The expensive half (which nodes connect to which) is computed once, here.
 * The animation only ever moves existing coordinates; it never re-runs any of
 * this. See NodeMesh.tsx.
 */

/**
 * Design space, sized to exactly what the mesh renders at on a 1440 viewport
 * (594x462, which is 9:7 and so matches the column's aspect). At that width one
 * design unit is one CSS pixel, so the spacing, radius and amplitude below hit
 * the screen at the sizes they claim. Narrower viewports scale the whole
 * lattice down, which is unavoidable for a responsive SVG — 1440 is the
 * reference. Oversizing this silently shrinks the lattice and multiplies the
 * node count, which costs a repaint per frame for points nobody asked for.
 */
export const MESH_VIEW = { width: 594, height: 462 } as const;

const SPACING = 36; // grid step, inside the 34–38 band
const JITTER = 0.85; // as a fraction of the step
const CONNECT_RADIUS = 49; // pair distance that produces the triangulated look

/** Colour ramp stops. Blue only — the accent would go muddy at the midpoint. */
const RAMP: { at: number; rgb: [number, number, number] }[] = [
  { at: 0, rgb: [0xb5, 0xd4, 0xf4] },
  { at: 0.5, rgb: [0x15, 0x6e, 0xb0] }, // --ds-brand
  { at: 1, rgb: [0x0a, 0x25, 0x40] }, // --ds-navy
];

/** Colour is quantised so edges and nodes can be batched into a few paths. */
export const COLOR_STEPS = 7;
export const OPACITY_STEPS = 6;
export const DEGREE_STEPS = 8; // degree is clamped to 7, so 0..7

/** mulberry32 — small, fast, and good enough for scattering points. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** Hermite ease used for the band falloff. */
function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function rampColor(t: number): string {
  const k = clamp01(t);
  let lo = RAMP[0];
  let hi = RAMP[RAMP.length - 1];
  for (let i = 0; i < RAMP.length - 1; i++) {
    if (k >= RAMP[i].at && k <= RAMP[i + 1].at) {
      lo = RAMP[i];
      hi = RAMP[i + 1];
      break;
    }
  }
  const span = hi.at - lo.at || 1;
  const f = (k - lo.at) / span;
  const c = [0, 1, 2].map((i) => Math.round(lerp(lo.rgb[i], hi.rgb[i], f)));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

/** Precomputed swatches, one per colour bucket. */
export const MESH_COLORS: string[] = Array.from({ length: COLOR_STEPS }, (_, i) =>
  rampColor(i / (COLOR_STEPS - 1))
);

export interface MeshNode {
  x: number; // rest position
  y: number;
  degree: number;
  radius: number;
  colorIndex: number;
  opacityIndex: number;
  /** Unit vector this node drifts along. */
  dx: number;
  dy: number;
  amp: number; // 2–4px
  omega: number; // rad/s, from a 15–25s period
  phase: number; // offset by position along the diagonal
}

export interface MeshEdge {
  a: number;
  b: number;
  colorIndex: number;
  opacityIndex: number;
}

export interface Mesh {
  nodes: MeshNode[];
  edges: MeshEdge[];
}

/**
 * Position along the diagonal, 0 at top-left and 1 at bottom-right, plus the
 * signed offset across it. Both are normalised so the band keeps its shape
 * whatever aspect the design space has.
 */
function diagonal(x: number, y: number) {
  const nx = x / MESH_VIEW.width;
  const ny = y / MESH_VIEW.height;
  return { t: clamp01((nx + ny) / 2), across: nx - ny };
}

export function buildMesh(seed = 20260804): Mesh {
  const rng = mulberry32(seed);

  // ---- Points: jittered grid, masked to a diagonal band -------------------
  // A full rectangle of dots reads as stock wallpaper. The band, plus a
  // density ramp that thins toward the light end, is what makes it look drawn.
  const pts: { x: number; y: number; t: number }[] = [];
  const cols = Math.ceil(MESH_VIEW.width / SPACING) + 1;
  const rows = Math.ceil(MESH_VIEW.height / SPACING) + 1;

  for (let gy = 0; gy < rows; gy++) {
    for (let gx = 0; gx < cols; gx++) {
      const x = gx * SPACING + (rng() - 0.5) * SPACING * JITTER;
      const y = gy * SPACING + (rng() - 0.5) * SPACING * JITTER;
      if (x < -SPACING || x > MESH_VIEW.width + SPACING) continue;
      if (y < -SPACING || y > MESH_VIEW.height + SPACING) continue;

      const { t, across } = diagonal(x, y);
      // Soft shoulders on the band: solid core, thinning edges.
      const band = 1 - smoothstep(0.26, 0.72, Math.abs(across));
      if (band <= 0) continue;
      // Sparse at the light end, dense at the navy end.
      const density = lerp(0.42, 1, t);
      if (rng() > band * density) continue;

      pts.push({ x, y, t });
    }
  }

  // ---- Topology: computed once, from rest positions ------------------------
  // Spatial hash so this stays linear rather than O(n^2); it runs a single
  // time per seed, but the hero is server-rendered and that cost is real.
  const cell = CONNECT_RADIUS;
  const buckets = new Map<string, number[]>();
  const key = (cx: number, cy: number) => `${cx},${cy}`;
  pts.forEach((p, i) => {
    const k = key(Math.floor(p.x / cell), Math.floor(p.y / cell));
    const list = buckets.get(k);
    if (list) list.push(i);
    else buckets.set(k, [i]);
  });

  const degree = new Array<number>(pts.length).fill(0);
  const pairs: { a: number; b: number; len: number }[] = [];
  const r2 = CONNECT_RADIUS * CONNECT_RADIUS;

  pts.forEach((p, i) => {
    const cx = Math.floor(p.x / cell);
    const cy = Math.floor(p.y / cell);
    for (let ox = -1; ox <= 1; ox++) {
      for (let oy = -1; oy <= 1; oy++) {
        const list = buckets.get(key(cx + ox, cy + oy));
        if (!list) continue;
        for (const j of list) {
          if (j <= i) continue; // each pair once
          const q = pts[j];
          const ddx = q.x - p.x;
          const ddy = q.y - p.y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 > r2) continue;
          pairs.push({ a: i, b: j, len: Math.sqrt(d2) });
          degree[i]++;
          degree[j]++;
        }
      }
    }
  });

  // ---- Weighting ----------------------------------------------------------
  const nodes: MeshNode[] = pts.map((p, i) => {
    const deg = Math.min(degree[i], 7);
    const angle = rng() * Math.PI * 2;
    // Phase tracks the diagonal so the movement crosses the mesh as a wave.
    // A shared phase would pulse in unison and read as mechanical.
    const phase = p.t * Math.PI * 2 * 1.5 + (rng() - 0.5) * 0.5;
    const period = 15 + rng() * 10;
    const opacity = 0.3 + (deg / 7) * 0.55;

    return {
      x: p.x,
      y: p.y,
      degree: deg,
      radius: 1.4 + deg * 0.42,
      colorIndex: Math.min(COLOR_STEPS - 1, Math.floor(p.t * COLOR_STEPS)),
      opacityIndex: Math.min(OPACITY_STEPS - 1, Math.floor(clamp01(opacity) * OPACITY_STEPS)),
      dx: Math.cos(angle),
      dy: Math.sin(angle),
      amp: 2 + rng() * 2,
      omega: (Math.PI * 2) / period,
      phase,
    };
  });

  const edges: MeshEdge[] = pairs.map(({ a, b, len }) => {
    const k = len / CONNECT_RADIUS;
    // Short edges bright, long ones almost gone — this is what keeps the mesh
    // from flattening into uniform speckle.
    const opacity = 0.5 * (1 - k * k) + 0.04;
    const t = (diagonal(pts[a].x, pts[a].y).t + diagonal(pts[b].x, pts[b].y).t) / 2;
    return {
      a,
      b,
      colorIndex: Math.min(COLOR_STEPS - 1, Math.floor(t * COLOR_STEPS)),
      opacityIndex: Math.min(OPACITY_STEPS - 1, Math.floor(clamp01(opacity) * OPACITY_STEPS)),
    };
  });

  return { nodes, edges };
}

/** Representative alpha for a quantised opacity bucket. */
export const bucketAlpha = (index: number) => (index + 0.5) / OPACITY_STEPS;
