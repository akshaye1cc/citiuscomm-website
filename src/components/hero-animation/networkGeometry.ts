/**
 * networkGeometry.ts
 *
 * Pure, deterministic geometry for the Citius network hero.
 * Everything is generated from a seeded PRNG so server and client render the
 * exact same markup (no hydration mismatch in Next.js) and so the composition
 * is tunable by changing one seed instead of editing path data by hand.
 */

export const VIEW = { width: 1440, height: 720 } as const;

/** Convergence point sits at 70% of the width, vertically centred. */
export const NODE = { x: 1008, y: 360 } as const;

/** Where the outgoing line stops (leaves a little breathing room at the edge). */
export const EXIT_X = 1404;

/** Routes start off-canvas so strokes never show a cut end. */
export const START_X = -80;

export const COLORS = {
  path: '#CBD5E1',
  blue: '#2563EB',
  orange: '#F97316',
  white: '#FFFFFF',
  surface: '#FAFBFD',
} as const;

export type RouteRole = 'trunk' | 'spur';
export type RouteKind = 'straight' | 'sweep' | 'dip' | 'rise' | 'scurve';

export interface Route {
  id: string;
  d: string;
  role: RouteRole;
  kind: RouteKind;
  width: number;
  opacity: number;
}

export interface PacketSpec {
  id: string;
  d: string;
  color: string;
  /** Stroke width of the bright core. */
  width: number;
  /** Length of the visible comet, in normalised path units (pathLength = 1000). */
  tail: number;
  /** Seconds for one full cycle: travel plus the idle gap before it repeats. */
  cycle: number;
  /** Fraction of the cycle spent moving (the rest is invisible dead time). */
  travel: number;
  /** Start offset in seconds. */
  delay: number;
  /** Adds a bright animated head dot. Used sparingly. */
  head: boolean;
  /** Packet dies partway along the route instead of reaching the node. */
  drop: boolean;
}

export interface Network {
  routes: Route[];
  packets: PacketSpec[];
}

export interface Particle {
  id: string;
  x: number;
  y: number;
  r: number;
  drift: number;
  rise: number;
  duration: number;
  delay: number;
  opacity: number;
}

/** Small LCG. Deterministic across environments, no dependencies. */
function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

/** Fixed spurs: routes that peel away and never reach the node. */
const SPUR_PATHS: string[] = [
  `M ${START_X} 244 C 214 226, 430 296, 566 424 C 668 520, 706 656, 694 792`,
  `M ${START_X} 486 C 246 494, 438 434, 606 300 C 706 220, 736 84, 726 -68`,
];

export function buildNetwork(seed = 20260730, trunkCount = 30): Network {
  const rand = createRandom(seed);
  const routes: Route[] = [];

  for (let i = 0; i < trunkCount; i++) {
    const t = trunkCount === 1 ? 0.5 : i / (trunkCount - 1);
    // Ease the vertical spread so the bundle is denser near the centre line.
    const signed = (t - 0.5) * 2;
    const eased = Math.sign(signed) * Math.pow(Math.abs(signed), 0.82);
    const entryY = NODE.y + eased * 332 + (rand() - 0.5) * 24;

    const nearCentre = Math.abs(entryY - NODE.y) < 46;
    const pool: RouteKind[] = ['straight', 'sweep', 'dip', 'rise', 'scurve'];
    const kind: RouteKind = nearCentre
      ? 'straight'
      : pool[Math.floor(rand() * pool.length)];

    // Every route arrives with a horizontal tangent, which is what makes the
    // bundle read as a true convergence instead of a fan of separate lines.
    const approachX = NODE.x - (150 + rand() * 170);

    let d: string;

    if (kind === 'scurve') {
      const mx = 300 + rand() * 200;
      const swing = (rand() < 0.5 ? -1 : 1) * (86 + rand() * 118);
      const my = clamp(entryY + swing, 46, VIEW.height - 46);
      d =
        `M ${START_X} ${r1(entryY)} ` +
        `C ${r1(START_X + 190)} ${r1(entryY)}, ${r1(mx - 150)} ${r1(my)}, ${r1(mx)} ${r1(my)} ` +
        `C ${r1(mx + 230)} ${r1(my)}, ${r1(approachX)} ${NODE.y}, ${NODE.x} ${NODE.y}`;
    } else {
      let cx: number;
      let cy: number;
      if (kind === 'straight') {
        cx = START_X + 300 + rand() * 190;
        cy = entryY + (rand() - 0.5) * 28;
      } else if (kind === 'sweep') {
        cx = START_X + 470 + rand() * 230;
        cy = entryY - (entryY - NODE.y) * (0.14 + rand() * 0.22);
      } else if (kind === 'dip') {
        cx = START_X + 330 + rand() * 120;
        // Keep the swing inside the frame so no route leaves and re-enters.
        cy = entryY + Math.min(118 + rand() * 132, Math.max(40, VIEW.height - 54 - entryY));
      } else {
        cx = START_X + 330 + rand() * 120;
        cy = entryY - Math.min(118 + rand() * 132, Math.max(40, entryY - 54));
      }
      d =
        `M ${START_X} ${r1(entryY)} ` +
        `C ${r1(cx)} ${r1(cy)}, ${r1(approachX)} ${NODE.y}, ${NODE.x} ${NODE.y}`;
    }

    routes.push({
      id: `route-${i}`,
      d,
      role: 'trunk',
      kind,
      width: r1(0.75 + rand() * 0.65),
      opacity: r1(0.4 + rand() * 0.42),
    });
  }

  SPUR_PATHS.forEach((d, i) => {
    routes.push({
      id: `spur-${i}`,
      d,
      role: 'spur',
      kind: 'sweep',
      width: 0.7,
      opacity: 0.22,
    });
  });

  // Traffic. Weighted so blue carries the volume, white accents it and orange
  // stays rare enough to still mean something when the pulse fires.
  const trunks = routes.filter((route) => route.role === 'trunk');
  const spurs = routes.filter((route) => route.role === 'spur');
  const packets: PacketSpec[] = [];

  const pickColor = (): string => {
    const roll = rand();
    if (roll < 0.52) return COLORS.blue;
    if (roll < 0.84) return COLORS.white;
    return COLORS.orange;
  };

  const addPacket = (route: Route, index: number, opts: { drop?: boolean } = {}) => {
    const color = opts.drop ? COLORS.blue : pickColor();
    const travelTime = 3.1 + rand() * 4.2;
    const gap = rand() * 5.4;
    const cycle = r1(travelTime + gap);
    packets.push({
      id: `${route.id}-p${index}`,
      d: route.d,
      color,
      width: r1(1.5 + rand() * 1.1),
      tail: Math.round(22 + rand() * 46),
      cycle,
      travel: r1(travelTime / cycle),
      delay: r1(rand() * 9),
      head: color !== COLORS.blue && rand() < 0.45,
      drop: Boolean(opts.drop),
    });
  };

  trunks.forEach((route, i) => {
    addPacket(route, 0);
    if (rand() < 0.34) addPacket(route, 1);
  });

  // Two packets that give up partway: the network looks decided, not scripted.
  [trunks[4], trunks[19]].forEach((route, i) => {
    if (route) addPacket(route, 90 + i, { drop: true });
  });

  // Spur traffic: packets that take a different route and leave the frame.
  spurs.forEach((route, i) => addPacket(route, 80 + i));

  return { routes, packets };
}

/** Ambient dust. Deterministic, so it survives SSR hydration. */
export function buildParticles(seed = 9142, count = 16): Particle[] {
  const rand = createRandom(seed);
  return Array.from({ length: count }, (_, i) => ({
    id: `particle-${i}`,
    x: r1(rand() * VIEW.width),
    y: r1(rand() * VIEW.height),
    r: r1(0.7 + rand() * 1.2),
    drift: r1((rand() - 0.5) * 26),
    rise: r1(-(14 + rand() * 30)),
    duration: r1(22 + rand() * 20),
    delay: r1(rand() * 12),
    opacity: r1(0.1 + rand() * 0.18),
  }));
}
