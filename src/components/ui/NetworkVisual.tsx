import type { ReactNode } from "react";
import {
  AntennaIcon,
  BuildingIcon,
  CloudIcon,
  DataCenterIcon,
  ShieldIcon,
} from "@/components/ui/icons";

/**
 * Animated network topology visuals — the site's signature graphic.
 * Light pulses travel the links (CSS `.ds-flow`), nodes ping (`.ds-ping`).
 * Colors come from design tokens so both themes work automatically.
 * Decorative only: aria-hidden.
 *
 * - default export `NetworkVisual` — wide banner (hero)
 * - named export `MiniTopology` — square hub-and-spoke (content sections)
 */

const Node = ({
  x,
  y,
  label,
  pingDelay,
  children,
}: {
  x: number;
  y: number;
  label?: string;
  pingDelay: number;
  children: ReactNode;
}) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle
      r="34"
      fill="none"
      stroke="var(--ds-brand)"
      strokeWidth="1.4"
      strokeOpacity="0.4"
      className="ds-ping"
      style={{ animationDelay: `${pingDelay}s` }}
    />
    <rect
      x="-28"
      y="-28"
      width="56"
      height="56"
      rx="15"
      fill="var(--ds-surface)"
      stroke="var(--ds-edge-2)"
      strokeWidth="1.2"
    />
    <g style={{ color: "var(--ds-brand)" }}>{children}</g>
    {label && (
      <text
        y="52"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="var(--ds-muted)"
        className="hidden sm:block"
      >
        {label}
      </text>
    )}
  </g>
);

const Pulse = ({
  d,
  delay,
  duration,
  accent,
}: {
  d: string;
  delay: number;
  duration: number;
  accent?: boolean;
}) => (
  <path
    d={d}
    pathLength={100}
    stroke={accent ? "var(--ds-cta)" : "var(--ds-brand)"}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeOpacity="0.9"
    className="ds-flow"
    style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
  />
);

const BaseLink = ({ d }: { d: string }) => (
  <path d={d} stroke="var(--ds-edge-2)" strokeWidth="1.1" strokeOpacity="0.65" />
);

/* ---------------- Wide hero banner ---------------- */

const heroLinks: { d: string; delay: number; duration: number; accent?: boolean }[] = [
  // tower → data center
  { d: "M110 230 C 200 230, 290 90, 390 90", delay: 0, duration: 3.4 },
  // data center → core cloud
  { d: "M390 90 C 470 90, 530 210, 610 210", delay: 0.9, duration: 3.2 },
  // core cloud → security
  { d: "M610 210 C 700 210, 770 80, 860 80", delay: 1.7, duration: 3.4 },
  // security → enterprise
  { d: "M860 80 C 940 80, 990 220, 1070 220", delay: 2.4, duration: 3.2 },
  // tower → core cloud (southern arc, orange accent pulse)
  { d: "M110 230 C 280 305, 450 295, 610 210", delay: 1.2, duration: 4.6, accent: true },
  // data center → security (northern arc)
  { d: "M390 90 C 550 18, 700 18, 860 80", delay: 2.9, duration: 4.4 },
];

const NetworkVisual = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1180 320" fill="none" aria-hidden className={`h-auto w-full ${className}`}>
    {heroLinks.map(({ d }, i) => (
      <BaseLink key={`base-${i}`} d={d} />
    ))}
    {heroLinks.map(({ d, delay, duration, accent }, i) => (
      <Pulse key={`pulse-${i}`} d={d} delay={delay} duration={duration} accent={accent} />
    ))}

    {/* ambient data points */}
    <circle cx="255" cy="160" r="2.5" fill="var(--ds-brand)" fillOpacity="0.45" className="ds-float" />
    <circle cx="500" cy="150" r="2" fill="var(--ds-brand)" fillOpacity="0.35" className="ds-float" style={{ animationDelay: "1.4s" }} />
    <circle cx="735" cy="145" r="2.5" fill="var(--ds-cta)" fillOpacity="0.4" className="ds-float" style={{ animationDelay: "2.6s" }} />
    <circle cx="965" cy="150" r="2" fill="var(--ds-brand)" fillOpacity="0.35" className="ds-float" style={{ animationDelay: "0.8s" }} />

    <Node x={110} y={230} label="Edge / RAN" pingDelay={0}>
      <AntennaIcon size={28} x={-14} y={-14} />
    </Node>
    <Node x={390} y={90} label="Data Center" pingDelay={0.7}>
      <DataCenterIcon size={28} x={-14} y={-14} />
    </Node>
    <Node x={610} y={210} label="Core Cloud" pingDelay={1.4}>
      <CloudIcon size={28} x={-14} y={-14} />
    </Node>
    <Node x={860} y={80} label="Security" pingDelay={2.1}>
      <ShieldIcon size={28} x={-14} y={-14} />
    </Node>
    <Node x={1070} y={220} label="Enterprise" pingDelay={2.8}>
      <BuildingIcon size={28} x={-14} y={-14} />
    </Node>
  </svg>
);

export default NetworkVisual;

/* ---------------- Square hub-and-spoke ---------------- */

const miniLinks: { d: string; delay: number; duration: number; accent?: boolean }[] = [
  { d: "M80 70 Q 150 120 240 200", delay: 0, duration: 3 },
  { d: "M400 70 Q 330 120 240 200", delay: 0.8, duration: 3.2 },
  { d: "M80 330 Q 150 280 240 200", delay: 1.6, duration: 3.1, accent: true },
  { d: "M400 330 Q 330 280 240 200", delay: 2.4, duration: 3.3 },
];

export const MiniTopology = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 480 400" fill="none" aria-hidden className={`h-auto w-full ${className}`}>
    {/* dashed orbit around the hub */}
    <circle
      cx="240"
      cy="200"
      r="150"
      stroke="var(--ds-edge)"
      strokeWidth="1"
      strokeDasharray="3 7"
    />

    {miniLinks.map(({ d }, i) => (
      <BaseLink key={`base-${i}`} d={d} />
    ))}
    {miniLinks.map(({ d, delay, duration, accent }, i) => (
      <Pulse key={`pulse-${i}`} d={d} delay={delay} duration={duration} accent={accent} />
    ))}

    <Node x={240} y={200} pingDelay={0.4}>
      <CloudIcon size={28} x={-14} y={-14} />
    </Node>
    <Node x={80} y={70} pingDelay={1.1}>
      <AntennaIcon size={26} x={-13} y={-13} />
    </Node>
    <Node x={400} y={70} pingDelay={1.8}>
      <DataCenterIcon size={26} x={-13} y={-13} />
    </Node>
    <Node x={80} y={330} pingDelay={2.5}>
      <ShieldIcon size={26} x={-13} y={-13} />
    </Node>
    <Node x={400} y={330} pingDelay={3.2}>
      <BuildingIcon size={26} x={-13} y={-13} />
    </Node>
  </svg>
);
