'use client';

import { useEffect, useRef, useState, type ComponentType } from 'react';
import { useReducedMotion } from 'motion/react';
import {
  AntennaIcon,
  BuildingIcon,
  CloudIcon,
  DataCenterIcon,
  ShieldIcon,
  type IconProps,
} from '@/components/ui/icons';

/**
 * CapabilityCluster
 *
 * The layer model — Edge/RAN, Data Center, Security, Enterprise — resolving into
 * one core. The wide topology banner that used to sit above the capability cards
 * is gone, so this is the only place on the page where that model is stated: the
 * nodes are labelled and keyboard reachable rather than decorative.
 *
 * Composition:
 *  - Radii (167–191) and angles sit 8–10° off the diagonals. A perfect X at equal
 *    radius reads as auto-generated; varied spans read as composed.
 *  - The core tile is larger than the spokes so it stays dominant.
 *  - One soft radial glow behind the core, no orbit rings.
 *  - Orange appears exactly once, on the pulse the core emits.
 *
 * Timing lives on the SVG document clock rather than a JS loop. Requirement was
 * that the pulse is what launches the packet, and two animations on one shared
 * timeline cannot drift apart the way a Motion loop and a native animation would.
 * `pauseAnimations()` then stops the whole cycle in one call when off-screen.
 * This mirrors the hero, which also uses native SVG for path traversal and keeps
 * per-frame JS out of it. Motion is still what tells us about reduced motion.
 *
 * Cycle is 9s, deliberately slower than the hero so the two never compete.
 */

interface NodeSpec {
  key: string;
  label: string;
  Icon: ComponentType<IconProps>;
  /** Wide cluster: 440×380 viewBox. */
  desktop: { x: number; y: number; spoke: string };
  /** Narrow spine: 300×460 viewBox. */
  mobile: { x: number; y: number; spoke: string };
}

const CORE = {
  desktop: { x: 216, y: 186 },
  mobile: { x: 150, y: 230 },
};

const VIEW = {
  desktop: { w: 440, h: 380 },
  mobile: { w: 300, h: 460 },
};

const NODES: NodeSpec[] = [
  {
    key: 'edge',
    label: 'Edge / RAN',
    Icon: AntennaIcon,
    desktop: { x: 72, y: 92, spoke: 'M216 186 Q 132 156 72 92' },
    mobile: { x: 84, y: 58, spoke: 'M150 230 Q 106 148 84 58' },
  },
  {
    key: 'datacenter',
    label: 'Data Center',
    Icon: DataCenterIcon,
    desktop: { x: 368, y: 70, spoke: 'M216 186 Q 302 152 368 70' },
    mobile: { x: 216, y: 148, spoke: 'M150 230 Q 196 194 216 148' },
  },
  {
    key: 'security',
    label: 'Security',
    Icon: ShieldIcon,
    desktop: { x: 84, y: 288, spoke: 'M216 186 Q 138 218 84 288' },
    mobile: { x: 88, y: 320, spoke: 'M150 230 Q 106 270 88 320' },
  },
  {
    key: 'enterprise',
    label: 'Enterprise',
    Icon: BuildingIcon,
    desktop: { x: 360, y: 302, spoke: 'M216 186 Q 300 224 360 302' },
    mobile: { x: 212, y: 408, spoke: 'M150 230 Q 192 332 212 408' },
  },
];

/* One cycle. The core pulses, and 0.3s later the packet that pulse launched
   leaves. Launches are 2.1s apart against a 2.35s flight, so the tail of one
   packet overlaps the head of the next and never more than two are in flight. */
const CYCLE = 9;
const PULSE_AT = [0, 2.1, 4.2, 6.3];
const PULSE_DUR = 1;
const LAUNCH_LAG = 0.3;
const TRAVEL = 2.35;
const FADE = 0.25;

const f = (t: number) => +(t / CYCLE).toFixed(4);

/** Fractional keyTimes for one packet: launch, faded in, fade out, arrival. */
function packetTiming(index: number) {
  const start = PULSE_AT[index] + LAUNCH_LAG;
  const end = start + TRAVEL;
  return { t0: f(start), t1: f(start + FADE), t2: f(end - FADE), t3: f(end) };
}

/* The pulse ring, expressed as one CYCLE-long track with four bursts, so it
   shares a period with the packets instead of running on its own repeat. The
   epsilon before each burst is what makes the ring snap back to its start
   radius while it is still invisible. */
const pulseTrack = (() => {
  const times: number[] = [];
  const radii: number[] = [];
  const opacity: number[] = [];
  PULSE_AT.forEach((at, i) => {
    if (i > 0) {
      times.push(f(at - 0.001));
      radii.push(0);
      opacity.push(0);
    }
    times.push(f(at));
    radii.push(0);
    opacity.push(0.45);
    times.push(f(at + PULSE_DUR));
    radii.push(1);
    opacity.push(0);
  });
  times.push(1);
  radii.push(0);
  opacity.push(0);
  return { times, radii, opacity };
})();

type Mode = 'desktop' | 'mobile';

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

function Diagram({
  mode,
  active,
  setActive,
  reduceMotion,
}: {
  mode: Mode;
  active: string | null;
  setActive: (key: string | null) => void;
  reduceMotion: boolean;
}) {
  const view = VIEW[mode];
  const core = CORE[mode];
  const isDesktop = mode === 'desktop';
  const rMin = isDesktop ? 30 : 26;
  const rMax = isDesktop ? 78 : 66;

  return (
    <div
      className={`relative w-full ${isDesktop ? 'hidden sm:block' : 'sm:hidden'}`}
      style={{ aspectRatio: `${view.w} / ${view.h}` }}
    >
      <svg
        aria-hidden
        focusable="false"
        viewBox={`0 0 ${view.w} ${view.h}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          {/* Falloff is deliberately gradual — a two-stop gradient leaves a
              visible shoulder that reads as the ring this replaced. */}
          <radialGradient id={`cc-glow-${mode}`}>
            <stop offset="0" stopColor="var(--ds-brand)" stopOpacity="0.15" />
            <stop offset="0.35" stopColor="var(--ds-brand)" stopOpacity="0.075" />
            <stop offset="0.62" stopColor="var(--ds-brand)" stopOpacity="0.03" />
            <stop offset="0.82" stopColor="var(--ds-brand)" stopOpacity="0.01" />
            <stop offset="1" stopColor="var(--ds-brand)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={core.x} cy={core.y} r={isDesktop ? 150 : 130} fill={`url(#cc-glow-${mode})`} />

        {/* Spokes: one continuous hairline each, brightening on hover/focus. */}
        {NODES.map((node) => (
          <path
            key={`spoke-${node.key}`}
            d={node[mode].spoke}
            fill="none"
            stroke="var(--ds-edge-2)"
            strokeWidth={1}
            strokeOpacity={active === node.key ? 1 : 0.55}
            className="transition-[stroke-opacity] duration-300"
          />
        ))}

        {/* Packets. A 1.6-unit dash on a pathLength=100 path, carried core → node
            by stroke-dashoffset. Presentation attributes rather than inline style,
            because SMIL cannot override a style declaration. */}
        {NODES.map((node, i) => {
          const { t0, t1, t2, t3 } = packetTiming(i);
          return (
            <path
              key={`packet-${node.key}`}
              d={node[mode].spoke}
              pathLength={100}
              fill="none"
              stroke="var(--ds-brand)"
              strokeWidth={3.6}
              strokeLinecap="round"
              strokeDasharray="1.6 98.4"
              strokeDashoffset={0}
              strokeOpacity={0}
            >
              {!reduceMotion && (
                <>
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;0;-100;-100"
                    keyTimes={`0;${t0};${t3};1`}
                    keySplines="0 0 1 1;0.42 0 0.58 1;0 0 1 1"
                    calcMode="spline"
                    dur={`${CYCLE}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0;0;0.95;0.95;0;0"
                    keyTimes={`0;${t0};${t1};${t2};${t3};1`}
                    dur={`${CYCLE}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                </>
              )}
            </path>
          );
        })}

        {/* The emitted pulse — the one orange element in the composition. */}
        <circle
          cx={core.x}
          cy={core.y}
          r={rMin}
          fill="none"
          stroke="var(--ds-cta)"
          strokeWidth={1.2}
          strokeOpacity={0}
        >
          {!reduceMotion && (
            <>
              <animate
                attributeName="r"
                values={pulseTrack.radii.map((v) => rMin + v * (rMax - rMin)).join(';')}
                keyTimes={pulseTrack.times.join(';')}
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />
              <animate
                attributeName="stroke-opacity"
                values={pulseTrack.opacity.join(';')}
                keyTimes={pulseTrack.times.join(';')}
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />
            </>
          )}
        </circle>
      </svg>

      {/* Core tile — larger than the spokes so it stays dominant. */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: pct(core.x, view.w), top: pct(core.y, view.h) }}
      >
        <div
          className={`ds-tile flex items-center justify-center rounded-2xl text-brand ${
            isDesktop ? 'h-20 w-20' : 'h-16 w-16'
          }`}
        >
          <CloudIcon size={isDesktop ? 34 : 28} />
          <span className="sr-only">Core cloud</span>
        </div>
      </div>

      <ul className="list-none">
        {NODES.map((node) => {
          const { x, y } = node[mode];
          const isActive = active === node.key;
          return (
            <li
              key={node.key}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: pct(x, view.w), top: pct(y, view.h) }}
            >
              <div
                tabIndex={0}
                onMouseEnter={() => setActive(node.key)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(node.key)}
                onBlur={() => setActive(null)}
                className={`ds-tile ds-tile-link flex items-center justify-center text-brand outline-none focus-visible:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isDesktop ? 'h-16 w-16' : 'h-14 w-14'
                }`}
              >
                <node.Icon size={isDesktop ? 26 : 22} />
              </div>
              <span
                className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.09em] transition-colors duration-300 ${
                  isActive ? 'text-fg' : 'text-faint'
                }`}
              >
                {node.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function CapabilityCluster() {
  const reduceMotion = Boolean(useReducedMotion());
  const [active, setActive] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Hold the cycle while the section is off-screen. One call per SVG stops the
  // pulse and every packet together, so they resume in phase.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || reduceMotion) return;

    const svgs = Array.from(el.querySelectorAll('svg'));
    const observer = new IntersectionObserver(
      ([entry]) => {
        svgs.forEach((svg) => {
          if (entry.isIntersecting) svg.unpauseAnimations();
          else svg.pauseAnimations();
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div ref={rootRef} className="px-5 pb-2 pt-5">
      <Diagram mode="desktop" active={active} setActive={setActive} reduceMotion={reduceMotion} />
      <Diagram mode="mobile" active={active} setActive={setActive} reduceMotion={reduceMotion} />
    </div>
  );
}
