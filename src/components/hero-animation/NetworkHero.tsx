'use client';

import { useEffect, useMemo, type ReactNode } from 'react';
import { motion, useAnimate, useReducedMotion } from 'motion/react';
import {
  buildNetwork,
  buildParticles,
  COLORS,
  EXIT_X,
  NODE,
  VIEW,
} from './networkGeometry';
import NetworkPaths from './NetworkPaths';
import ConvergenceNode from './ConvergenceNode';
import Packet from './Packet';

/**
 * NetworkHero
 *
 * Around thirty fibre routes enter from the left, converge into a single node
 * at 70% width, and one clean line carries on to the headline.
 *
 * Division of labour:
 *  - Motion drives everything stateful or orchestrated: the node, the pulse
 *    cycle, brightness gain, drifting particles.
 *  - Packet travel uses native SVG attribute animation, because forty
 *    simultaneous path traversals on a JS tick is the one thing that would cost
 *    real scripting time. Nothing here runs a per-frame callback.
 *
 * Usage:
 *   npm i motion
 *   <NetworkHero />
 */

export interface NetworkHeroProps {
  eyebrow?: string;
  headline?: ReactNode;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Lower this on low-end targets. 30 is the design intent. */
  routeCount?: number;
  /** Change to reshape the whole route bundle. */
  seed?: number;
  className?: string;
}

const DEFAULTS = {
  eyebrow: 'Citius Communications',
  headline: 'Enterprise networks, engineered end to end.',
  subhead:
    'Design, deployment and managed operations for telecom and enterprise infrastructure. Built once, monitored always.',
  primaryCta: { label: 'Talk to our team', href: '#contact' },
  secondaryCta: { label: 'See what we deliver', href: '#capabilities' },
};

export function NetworkHero({
  eyebrow = DEFAULTS.eyebrow,
  headline = DEFAULTS.headline,
  subhead = DEFAULTS.subhead,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  routeCount = 30,
  seed = 20260730,
  className,
}: NetworkHeroProps) {
  const prefersReduced = useReducedMotion();
  const reduceMotion = Boolean(prefersReduced);

  const { routes, packets } = useMemo(
    () => buildNetwork(seed, routeCount),
    [seed, routeCount],
  );
  const particles = useMemo(() => buildParticles(seed + 7), [seed]);

  const [scope, animate] = useAnimate();

  // The pulse cycle: node charges, a pulse leaves along the outgoing line,
  // it lands, rings expand, everything settles back to idle.
  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    const travel = EXIT_X - NODE.x;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, ms);
        if (cancelled) clearTimeout(timer);
      });

    const run = async () => {
      await wait(1600);
      while (!cancelled) {
        try {
          await animate([
            ['#nh-node-core', { scale: [1, 1.5, 1] }, { duration: 1.1, ease: 'easeOut' }],
            ['#nh-node-flare', { opacity: [0.18, 0.8, 0.18] }, { duration: 1.4, at: 0 }],
            ['#nh-brighten', { opacity: [0.55, 1, 0.55] }, { duration: 1.6, at: 0, ease: 'easeInOut' }],
            [
              '#nh-outgoing-pulse',
              { x: [0, travel], opacity: [0, 1, 1, 0.9] },
              { duration: 1.5, at: 0.3, ease: [0.32, 0, 0.24, 1] },
            ],
            ['#nh-outgoing-bright', { opacity: [0, 0.7, 0] }, { duration: 1.1, at: 1.1 }],
            ['#nh-outgoing-pulse', { opacity: 0 }, { duration: 0.25, at: 1.8 }],
            ['#nh-emit-ring', { scale: [0.5, 3.8], opacity: [0.42, 0] }, { duration: 1.8, at: 1.8, ease: 'easeOut' }],
            ['#nh-emit-ring-2', { scale: [0.5, 2.4], opacity: [0.3, 0] }, { duration: 1.4, at: 1.95, ease: 'easeOut' }],
          ]);
        } catch {
          return;
        }
        if (cancelled) return;
        await wait(2600 + Math.random() * 2600);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [animate, reduceMotion]);

  return (
    <section className={['nh-hero', className].filter(Boolean).join(' ')}>
      <style>{HERO_CSS}</style>

      <svg
        ref={scope}
        className="nh-canvas"
        viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Dotted engineering grid */}
          <pattern id="nh-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.85" fill={COLORS.path} />
          </pattern>
          <linearGradient id="nh-grid-fade" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={VIEW.width} y2="0">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="0.6" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="0.82" stopColor="#000000" />
          </linearGradient>
          <mask id="nh-grid-mask" maskUnits="userSpaceOnUse" x="0" y="0" width={VIEW.width} height={VIEW.height}>
            <rect width={VIEW.width} height={VIEW.height} fill="url(#nh-grid-fade)" />
          </mask>

          {/* Almost invisible film grain. Static, so it paints once. */}
          <filter id="nh-noise" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>

        <rect width={VIEW.width} height={VIEW.height} fill={COLORS.surface} />
        <g mask="url(#nh-grid-mask)">
          <rect width={VIEW.width} height={VIEW.height} fill="url(#nh-grid)" opacity={0.5} />
        </g>
        <rect width={VIEW.width} height={VIEW.height} filter="url(#nh-noise)" opacity={0.035} />

        {/* Drifting dust */}
        <g fill={COLORS.blue}>
          {particles.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={particle.x}
              cy={particle.y}
              r={particle.r}
              initial={{ opacity: particle.opacity, x: 0, y: 0 }}
              animate={
                reduceMotion
                  ? { opacity: particle.opacity }
                  : {
                      x: [0, particle.drift, 0],
                      y: [0, particle.rise, 0],
                      opacity: [particle.opacity * 0.4, particle.opacity, particle.opacity * 0.4],
                    }
              }
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </g>

        <NetworkPaths routes={routes} reduceMotion={reduceMotion} />

        {!reduceMotion && (
          <g mask="url(#nh-edge-fade)" fill="none">
            {packets.map((packet) => (
              <Packet key={packet.id} packet={packet} />
            ))}
          </g>
        )}

        <ConvergenceNode reduceMotion={reduceMotion} />
      </svg>

      <div className="nh-content">
        <div className="nh-copy">
          <p className="nh-eyebrow">{eyebrow}</p>
          <h1 className="nh-headline">{headline}</h1>
          <p className="nh-subhead">{subhead}</p>
          <div className="nh-actions">
            <a className="nh-cta nh-cta-primary" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            <a className="nh-cta nh-cta-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetworkHero;

const HERO_CSS = `
.nh-hero {
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: 640px;
  height: clamp(560px, 78vh, 860px);
  background: #FAFBFD;
  overflow: hidden;
  color: #0F172A;
}
.nh-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.nh-content {
  position: relative;
  z-index: 1;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 72px);
  display: flex;
  align-items: center;
}
.nh-copy {
  margin-left: auto;
  width: min(430px, 40%);
}
.nh-eyebrow {
  margin: 0 0 18px;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #64748B;
}
.nh-eyebrow::before {
  content: '';
  display: inline-block;
  width: 22px;
  height: 1px;
  margin-right: 12px;
  vertical-align: middle;
  background: #F97316;
}
.nh-headline {
  margin: 0 0 20px;
  font-size: clamp(30px, 3.1vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 560;
  text-wrap: balance;
}
.nh-subhead {
  margin: 0 0 32px;
  font-size: clamp(14.5px, 1.1vw, 16.5px);
  line-height: 1.6;
  color: #475569;
  max-width: 40ch;
}
.nh-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.nh-cta {
  display: inline-flex;
  align-items: center;
  height: 42px;
  padding: 0 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 550;
  text-decoration: none;
  transition: background-color 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;
}
.nh-cta:hover { transform: translateY(-1px); }
.nh-cta:focus-visible {
  outline: 2px solid #2563EB;
  outline-offset: 2px;
}
.nh-cta-primary {
  background: #0F172A;
  color: #FFFFFF;
}
.nh-cta-primary:hover { background: #1E293B; }
.nh-cta-secondary {
  border: 1px solid #CBD5E1;
  color: #1E293B;
  background: rgba(255, 255, 255, 0.6);
}
.nh-cta-secondary:hover { border-color: #94A3B8; }

@media (max-width: 1100px) {
  .nh-copy { width: min(520px, 56%); }
}
@media (max-width: 860px) {
  .nh-hero { height: auto; min-height: 0; padding: 88px 0 96px; }
  .nh-content { align-items: flex-start; }
  .nh-copy { margin-left: 0; width: 100%; max-width: 560px; }
  .nh-canvas { opacity: 0.72; }
}
@media (prefers-reduced-motion: reduce) {
  .nh-cta:hover { transform: none; }
}
`;
