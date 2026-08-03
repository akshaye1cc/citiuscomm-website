'use client';

import { useEffect, useMemo, type ReactNode } from 'react';
import { motion, useAnimate, useReducedMotion } from 'motion/react';
import Button from '@/components/ui/Button';
import { buildNetwork, buildParticles, COLORS, EXIT_X, NODE, VIEW } from './networkGeometry';
import NetworkPaths from './NetworkPaths';
import ConvergenceNode from './ConvergenceNode';
import Packet from './Packet';

/**
 * NetworkHero
 *
 * The hero argues the positioning instead of asserting it: around thirty vendor
 * routes arrive from the left, every one of them resolves into a single node,
 * and one line carries on and points at the headline. That is "one accountable
 * team across the full lifecycle" drawn rather than claimed.
 *
 * Layout is deliberately asymmetric. The dense half of the bundle owns the left
 * of the frame, the copy sits in the right column, and the orange rule above
 * the eyebrow picks up where the outgoing line stops.
 *
 * Motion drives everything stateful: the node, the pulse cycle, brightness gain
 * near the convergence, drifting particles. Packet travel uses native SVG
 * attribute animation, because forty simultaneous path traversals on a JS
 * timeline would be the largest scripting cost on the page. Nothing here runs a
 * per-frame callback.
 */

export interface NetworkHeroProps {
  eyebrow?: string;
  headlineLead?: string;
  headlineMain?: string;
  subhead?: ReactNode;
  credibility?: string;
  proof?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Lower on low-end targets. 30 is the design intent. */
  routeCount?: number;
  /** Change to reshape the whole route bundle. */
  seed?: number;
}

const DEFAULTS = {
  eyebrow: 'Enterprise infrastructure · Networks · Cloud · Security',
  headlineLead: 'Complex infrastructure',
  headlineMain: 'One accountable partner',
  subhead:
    'We design, deploy and operate network, data centre, cloud and security infrastructure for telecom carriers, banks and government bodies.',
  credibility: 'Built to execute mission-critical infrastructure at national scale.',
  proof: ['30+ years of combined leadership', '100M+ subscribers managed'],
  primaryCta: { label: 'Start a conversation', href: '/contact' },
  secondaryCta: { label: 'See what we deliver', href: '/solutions' },
};

const DOT_MASK =
  'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)';

export function NetworkHero({
  eyebrow = DEFAULTS.eyebrow,
  headlineLead = DEFAULTS.headlineLead,
  headlineMain = DEFAULTS.headlineMain,
  subhead = DEFAULTS.subhead,
  credibility = DEFAULTS.credibility,
  proof = DEFAULTS.proof,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  routeCount = 30,
  seed = 20260730,
}: NetworkHeroProps) {
  const prefersReduced = useReducedMotion();
  const reduceMotion = Boolean(prefersReduced);

  const { routes, packets } = useMemo(() => buildNetwork(seed, routeCount), [seed, routeCount]);
  const particles = useMemo(() => buildParticles(seed + 7), [seed]);

  const [scope, animate] = useAnimate();

  // The pulse cycle: the node charges, a pulse leaves along the outgoing line,
  // it lands, rings expand, everything settles back to idle.
  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    const travel = EXIT_X - NODE.x;
    const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

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
              { duration: 1.4, at: 0.3, ease: [0.32, 0, 0.24, 1] },
            ],
            ['#nh-outgoing-bright', { opacity: [0, 0.7, 0] }, { duration: 1.1, at: 1.05 }],
            ['#nh-outgoing-pulse', { opacity: 0 }, { duration: 0.25, at: 1.7 }],
            ['#nh-emit-ring', { scale: [0.5, 3.8], opacity: [0.42, 0] }, { duration: 1.8, at: 1.7, ease: 'easeOut' }],
            ['#nh-emit-ring-2', { scale: [0.5, 2.4], opacity: [0.3, 0] }, { duration: 1.4, at: 1.85, ease: 'easeOut' }],
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
    <section
      id="home"
      className="relative overflow-hidden bg-canvas pb-20 pt-[120px] md:pb-28 md:pt-[150px] xl:pt-[170px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Same dot grid the rest of the site uses, so the hero stays on-system. */}
        <div
          className="ds-dots absolute inset-0 text-edge-2/80"
          style={{ maskImage: DOT_MASK, WebkitMaskImage: DOT_MASK }}
        />

        {/* The band keeps its own 2:1 ratio and is never cropped horizontally,
            so viewBox x percentages map exactly to viewport percentages at every
            width. With "slice" the fan compressed as the hero grew taller and
            the outgoing line crept rightward into the copy column. */}
        <svg
          ref={scope}
          className="absolute left-0 top-1/2 aspect-[2/1] w-full -translate-y-1/2 opacity-40 xl:opacity-100"
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
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
      </div>

      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-[1600px] items-center px-6 md:min-h-[560px] md:px-10 xl:px-16">
        <div className="w-full xl:ml-auto xl:w-[42%] xl:max-w-[560px]">

          {/* The rule picks up where the outgoing line stops. */}
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
            <span aria-hidden className="h-px w-8 shrink-0 bg-cta" />
            {eyebrow}
          </p>

          <h1 className="mb-5 text-4xl leading-[1.07] tracking-tight sm:text-5xl xl:text-[3.25rem]">
            <span className="block font-semibold text-muted">{headlineLead}</span>
            <span className="block text-fg">{headlineMain}</span>
          </h1>

          <p className="mb-3 text-lg leading-relaxed text-muted">{subhead}</p>
          <p className="mb-9 text-base leading-relaxed text-faint">{credibility}</p>

          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="lg" href={primaryCta.href}>
              {primaryCta.label}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="ghost" size="lg" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          </div>

          {/* Proof as one quiet line, not a panel of counters. */}
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-faint">
            {proof.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                {index > 0 && <span aria-hidden className="h-3 w-px bg-edge-2" />}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NetworkHero;