'use client';

import { memo } from 'react';
import type { PacketSpec } from './networkGeometry';

/**
 * Packet
 *
 * A single glowing packet travelling one route.
 *
 * Implementation note: the travel itself is a normalised stroke-dash animation
 * (pathLength = 1000, so dash units are resolution independent and no
 * getTotalLength() measurement is ever needed). Declarative SVG animation is
 * used here on purpose rather than a JS tick per packet: with 40+ packets on
 * screen, native attribute animation keeps main-thread scripting near zero,
 * which is what holds the frame budget. Motion drives everything that needs
 * orchestration or state (node, pulse, brightness, particles) in the other
 * components.
 *
 * The visible comet is two strokes sharing one timeline: a wide, faint one for
 * the glow and a narrow bright one for the core. No blur filter, because a
 * filter on this many moving elements is the one thing that reliably blows the
 * paint budget.
 */

const TOTAL = 1000;

interface PacketProps {
  packet: PacketSpec;
}

function PacketBase({ packet }: PacketProps) {
  const { d, color, width, tail, cycle, delay, head, drop } = packet;

  const travel = Math.min(0.95, Math.max(0.18, packet.travel));
  const dur = `${cycle}s`;
  const begin = `${delay}s`;

  // Where the comet stops. A dropped packet dies just past halfway.
  const endOffset = drop ? -Math.round(TOTAL * 0.56) : -TOTAL;
  const arrival = drop ? travel * 0.62 : travel;

  const offsetValues = `${tail};${endOffset};${endOffset}`;
  const offsetKeyTimes = `0;${round(arrival)};1`;

  const opacityValues = drop
    ? '0;0.85;0.4;0;0'
    : '0;0.95;0.9;0;0';
  const opacityKeyTimes = drop
    ? `0;${round(arrival * 0.16)};${round(arrival * 0.55)};${round(arrival)};1`
    : `0;${round(travel * 0.13)};${round(travel * 0.74)};${round(travel)};1`;

  const dashArray = `${tail} ${TOTAL}`;

  return (
    <g>
      {/* Soft halo */}
      <path
        d={d}
        pathLength={TOTAL}
        fill="none"
        stroke={color}
        strokeWidth={width * 3.4}
        strokeLinecap="round"
        strokeDasharray={dashArray}
        strokeOpacity={0}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={offsetValues}
          keyTimes={offsetKeyTimes}
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
          calcMode="linear"
        />
        <animate
          attributeName="stroke-opacity"
          values={scaleOpacity(opacityValues, 0.16)}
          keyTimes={opacityKeyTimes}
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
          calcMode="linear"
        />
      </path>

      {/* Bright core */}
      <path
        d={d}
        pathLength={TOTAL}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeDasharray={dashArray}
        strokeOpacity={0}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={offsetValues}
          keyTimes={offsetKeyTimes}
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
          calcMode="linear"
        />
        <animate
          attributeName="stroke-opacity"
          values={opacityValues}
          keyTimes={opacityKeyTimes}
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
          calcMode="linear"
        />
      </path>

      {/* Head dot, only on highlight packets */}
      {head && !drop && (
        <circle r={width * 0.95} fill={color} opacity={0}>
          <animateMotion
            path={d}
            dur={dur}
            begin={begin}
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints={`0;1;1`}
            keyTimes={`0;${round(travel)};1`}
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0;0"
            keyTimes={opacityKeyTimes}
            dur={dur}
            begin={begin}
            repeatCount="indefinite"
            calcMode="linear"
          />
        </circle>
      )}
    </g>
  );
}

function round(value: number) {
  return Math.round(value * 1000) / 1000;
}

function scaleOpacity(values: string, factor: number) {
  return values
    .split(';')
    .map((value) => round(Number(value) * factor))
    .join(';');
}

export const Packet = memo(PacketBase);
export default Packet;
