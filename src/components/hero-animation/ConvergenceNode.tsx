'use client';

import { memo } from 'react';
import { motion } from 'motion/react';
import { COLORS, NODE } from './networkGeometry';

/**
 * ConvergenceNode
 *
 * The single point every route resolves into.
 *
 * The whole node lives inside one translated group, so every child sits at a
 * local origin of 0,0. That lets Motion scale rings and the core without
 * relying on transform-box or transform-origin, which is the part browsers
 * disagree about on SVG elements.
 *
 * Four independent behaviours, each on its own element so no two animations
 * ever compete for the same value:
 *
 *  - halo             slow ambient breathing, always running
 *  - idle ring        one quiet expansion every 5 seconds, always running
 *  - #nh-node-breath  core breathing, always running
 *  - #nh-node-core,
 *    #nh-node-flare,
 *    #nh-emit-ring*   driven by the hero's pulse sequence
 */

interface ConvergenceNodeProps {
  reduceMotion: boolean;
}

function ConvergenceNodeBase({ reduceMotion }: ConvergenceNodeProps) {
  return (
    <>
      <defs>
        <radialGradient id="nh-node-halo">
          <stop offset="0" stopColor={COLORS.white} stopOpacity="0.95" />
          <stop offset="0.35" stopColor="#DBEAFE" stopOpacity="0.5" />
          <stop offset="1" stopColor="#BFDBFE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nh-node-flare-grad">
          <stop offset="0" stopColor={COLORS.orange} stopOpacity="0.7" />
          <stop offset="0.55" stopColor={COLORS.orange} stopOpacity="0.16" />
          <stop offset="1" stopColor={COLORS.orange} stopOpacity="0" />
        </radialGradient>
        <filter id="nh-node-soft" x="-250%" y="-250%" width="600%" height="600%">
          <feGaussianBlur stdDeviation="2.6" />
        </filter>
      </defs>

      <g transform={`translate(${NODE.x} ${NODE.y})`}>
        {/* Faint radial glow on a long breathing cycle */}
        <motion.circle
          r={74}
          fill="url(#nh-node-halo)"
          initial={{ opacity: 0.4, scale: 1 }}
          animate={
            reduceMotion
              ? { opacity: 0.4, scale: 1 }
              : { opacity: [0.34, 0.6, 0.34], scale: [1, 1.07, 1] }
          }
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Orange flare: nearly off at idle, lit by the pulse sequence */}
        <circle id="nh-node-flare" r={36} fill="url(#nh-node-flare-grad)" opacity={0.18} />

        {/* Rings emitted when a pulse lands at the destination */}
        <circle
          id="nh-emit-ring"
          r={13}
          fill="none"
          stroke={COLORS.orange}
          strokeWidth={1.2}
          opacity={0}
        />
        <circle
          id="nh-emit-ring-2"
          r={13}
          fill="none"
          stroke={COLORS.blue}
          strokeWidth={0.9}
          opacity={0}
        />

        {/* Idle ring: one quiet expansion every 5 seconds */}
        {!reduceMotion && (
          <motion.circle
            r={11}
            fill="none"
            stroke={COLORS.blue}
            strokeWidth={1}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 3.6], opacity: [0.32, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, repeatDelay: 3.1, ease: 'easeOut' }}
          />
        )}

        {/* Core */}
        <motion.g
          id="nh-node-breath"
          initial={{ scale: 1 }}
          animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.06, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle r={9} fill={COLORS.white} opacity={0.85} filter="url(#nh-node-soft)" />
          <motion.g id="nh-node-core" initial={{ scale: 1 }}>
            <circle r={4.6} fill={COLORS.white} />
            <circle r={2.4} fill={COLORS.orange} />
          </motion.g>
        </motion.g>
      </g>
    </>
  );
}

export const ConvergenceNode = memo(ConvergenceNodeBase);
export default ConvergenceNode;
