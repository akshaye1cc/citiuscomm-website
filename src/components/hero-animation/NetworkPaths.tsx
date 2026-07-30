'use client';

import { memo } from 'react';
import { motion } from 'motion/react';
import { COLORS, EXIT_X, NODE, VIEW, type Route } from './networkGeometry';

/**
 * NetworkPaths
 *
 * Static infrastructure. The paths never move: everything that reads as motion
 * is either a packet travelling a path or a brightness change near the node.
 *
 * Three layers:
 *  1. base routes, hairline, faded in from the left edge with a mask
 *  2. a brightness layer masked to a radial region around the convergence
 *     point, so paths visibly gain intensity as traffic arrives
 *  3. the outgoing line, plus the orange pulse that the parent sequence fires
 */

interface NetworkPathsProps {
  routes: Route[];
  reduceMotion: boolean;
}

function NetworkPathsBase({ routes, reduceMotion }: NetworkPathsProps) {
  const trunks = routes.filter((route) => route.role === 'trunk');
  const spurs = routes.filter((route) => route.role === 'spur');

  return (
    <>
      <defs>
        {/* Routes fade in from the left edge instead of being clipped flat. */}
        <linearGradient id="nh-edge-grad" x1="0" y1="0" x2={VIEW.width} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#000000" />
          <stop offset="0.11" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <mask id="nh-edge-fade" maskUnits="userSpaceOnUse" x="-120" y="-120" width={VIEW.width + 240} height={VIEW.height + 240}>
          <rect x="-120" y="-120" width={VIEW.width + 240} height={VIEW.height + 240} fill="url(#nh-edge-grad)" />
        </mask>

        {/* Radial window around the convergence point. */}
        <radialGradient id="nh-node-grad" gradientUnits="userSpaceOnUse" cx={NODE.x} cy={NODE.y} r="330">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.45" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#000000" />
        </radialGradient>
        <mask id="nh-node-mask" maskUnits="userSpaceOnUse" x="-120" y="-120" width={VIEW.width + 240} height={VIEW.height + 240}>
          <rect x="-120" y="-120" width={VIEW.width + 240} height={VIEW.height + 240} fill="url(#nh-node-grad)" />
        </mask>

        {/* Outgoing line: hot at the node, calm as it reaches the headline. */}
        <linearGradient id="nh-outgoing-grad" gradientUnits="userSpaceOnUse" x1={NODE.x} y1="0" x2={EXIT_X} y2="0">
          <stop offset="0" stopColor={COLORS.orange} stopOpacity="0.85" />
          <stop offset="0.18" stopColor={COLORS.blue} stopOpacity="0.5" />
          <stop offset="0.75" stopColor={COLORS.path} stopOpacity="0.9" />
          <stop offset="1" stopColor={COLORS.path} stopOpacity="0.35" />
        </linearGradient>

        <linearGradient id="nh-trail-grad" gradientUnits="userSpaceOnUse" x1={-58} y1="0" x2="0" y2="0">
          <stop offset="0" stopColor={COLORS.orange} stopOpacity="0" />
          <stop offset="1" stopColor={COLORS.orange} stopOpacity="0.9" />
        </linearGradient>

        <filter id="nh-pulse-glow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="3.4" />
        </filter>
      </defs>

      {/* 1. Base infrastructure */}
      <g mask="url(#nh-edge-fade)" fill="none" strokeLinecap="round">
        {trunks.map((route) => (
          <path
            key={route.id}
            id={route.id}
            d={route.d}
            stroke={COLORS.path}
            strokeWidth={route.width}
            strokeOpacity={route.opacity}
          />
        ))}
        {spurs.map((route) => (
          <path
            key={route.id}
            id={route.id}
            d={route.d}
            stroke={COLORS.path}
            strokeWidth={route.width}
            strokeOpacity={route.opacity}
            strokeDasharray="3 7"
          />
        ))}

        {/* 2. Brightness gain around the convergence point.
            Outer group breathes on its own loop, inner group is driven by the
            hero's pulse sequence, so the two never fight over one value. */}
        <motion.g
          mask="url(#nh-node-mask)"
          initial={{ opacity: 0.5 }}
          animate={reduceMotion ? { opacity: 0.5 } : { opacity: [0.42, 0.78, 0.42] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <g id="nh-brighten" opacity={0.55}>
            {trunks.map((route) => (
              <path
                key={`bright-${route.id}`}
                d={route.d}
                stroke={COLORS.white}
                strokeWidth={route.width * 2.2}
                strokeOpacity={0.5}
              />
            ))}
            {trunks.map((route) => (
              <path
                key={`bright-core-${route.id}`}
                d={route.d}
                stroke={COLORS.blue}
                strokeWidth={route.width * 0.9}
                strokeOpacity={0.28}
              />
            ))}
          </g>
        </motion.g>
      </g>

      {/* 3. Outgoing line toward the headline */}
      <g fill="none" strokeLinecap="round">
        <line
          x1={NODE.x}
          y1={NODE.y}
          x2={EXIT_X}
          y2={NODE.y}
          stroke="url(#nh-outgoing-grad)"
          strokeWidth={1.15}
        />
        <line
          id="nh-outgoing-bright"
          x1={NODE.x}
          y1={NODE.y}
          x2={EXIT_X}
          y2={NODE.y}
          stroke={COLORS.orange}
          strokeWidth={1.9}
          opacity={0}
        />
      </g>

      {/* The pulse that leaves the node. Position is driven by Motion. */}
      <motion.g id="nh-outgoing-pulse" initial={{ x: 0, opacity: 0 }}>
        <line
          x1={NODE.x - 58}
          y1={NODE.y}
          x2={NODE.x}
          y2={NODE.y}
          stroke="url(#nh-trail-grad)"
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <circle cx={NODE.x} cy={NODE.y} r={5.5} fill={COLORS.orange} opacity={0.5} filter="url(#nh-pulse-glow)" />
        <circle cx={NODE.x} cy={NODE.y} r={2.6} fill={COLORS.white} />
        <circle cx={NODE.x} cy={NODE.y} r={1.5} fill={COLORS.orange} />
      </motion.g>
    </>
  );
}

export const NetworkPaths = memo(NetworkPathsBase);
export default NetworkPaths;
