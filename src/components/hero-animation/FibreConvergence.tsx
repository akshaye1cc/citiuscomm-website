'use client';

import { useEffect, useMemo } from 'react';
import { motion, useAnimate, useReducedMotion } from 'motion/react';
import { buildNetwork, buildParticles, COLORS, EXIT_X, NODE, VIEW } from './networkGeometry';
import NetworkPaths from './NetworkPaths';
import ConvergenceNode from './ConvergenceNode';
import Packet from './Packet';

/**
 * FibreConvergence
 *
 * Held for reuse. This was the homepage hero visual until the hero moved to a
 * two-column split with NodeMesh on the right; it is not rendered anywhere at
 * the moment, and is kept intact rather than deleted because the argument it
 * makes is specific and worth redeploying.
 *
 * The argument: around thirty vendor routes arrive from the left, every one of
 * them resolves into a single node, and one line carries on out of the frame.
 * That is "one accountable team across the full lifecycle" drawn rather than
 * claimed — which suits a solutions or about page as well as it suited the hero.
 *
 * Motion drives everything stateful: the node, the pulse cycle, brightness gain
 * near the convergence, drifting particles. Packet travel uses native SVG
 * attribute animation, because forty simultaneous path traversals on a JS
 * timeline would be the largest scripting cost on the page. Nothing here runs a
 * per-frame callback.
 *
 * The dense half of the bundle owns the left of the frame and the outgoing line
 * exits right, so this wants copy to its right, or a full-bleed band of its own.
 */

export interface FibreConvergenceProps {
  /** Lower on low-end targets. 30 is the design intent. */
  routeCount?: number;
  /** Change to reshape the whole route bundle. */
  seed?: number;
  className?: string;
}

export default function FibreConvergence({
  routeCount = 30,
  seed = 20260730,
  className = 'absolute left-0 top-1/2 aspect-[2/1] w-full -translate-y-1/2 opacity-40 xl:opacity-100',
}: FibreConvergenceProps) {
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
    <svg
      ref={scope}
      className={className}
      viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      aria-hidden
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
  );
}
