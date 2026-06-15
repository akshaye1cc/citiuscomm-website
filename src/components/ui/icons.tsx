import type { SVGProps } from "react";

/**
 * Citiuscomm line icon set — 24×24, stroke-based, consistent weight.
 * Every shape carries pathLength={100} so the global `.ds-draw` class can
 * animate stroke draw-on when a card reveals.
 */

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const Icon = ({ size = 24, children, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    {...props}
  >
    {children}
  </svg>
);

/* ---------- Solution pillars ---------- */

export const DataCenterIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3.5" y="3.5" width="17" height="6.5" rx="1.6" pathLength={100} />
    <rect x="3.5" y="14" width="17" height="6.5" rx="1.6" pathLength={100} />
    <path d="M7 6.75h.01" pathLength={100} />
    <path d="M7 17.25h.01" pathLength={100} />
    <path d="M12.5 6.75H17" pathLength={100} />
    <path d="M12.5 17.25H17" pathLength={100} />
  </Icon>
);

export const NetworkIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="2.7" pathLength={100} />
    <circle cx="5" cy="5" r="1.9" pathLength={100} />
    <circle cx="19" cy="5" r="1.9" pathLength={100} />
    <circle cx="5" cy="19" r="1.9" pathLength={100} />
    <circle cx="19" cy="19" r="1.9" pathLength={100} />
    <path d="M6.4 6.4l3.5 3.5" pathLength={100} />
    <path d="M17.6 6.4l-3.5 3.5" pathLength={100} />
    <path d="M6.4 17.6l3.5-3.5" pathLength={100} />
    <path d="M17.6 17.6l-3.5-3.5" pathLength={100} />
  </Icon>
);

export const ShieldIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 3l7 2.8v5.1c0 4.6-2.9 8.3-7 9.9-4.1-1.6-7-5.3-7-9.9V5.8L12 3z" pathLength={100} />
    <path d="M9.1 12.1l2 2 3.8-4.1" pathLength={100} />
  </Icon>
);

export const AntennaIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="7.5" r="1.8" pathLength={100} />
    <path d="M12 9.3V21" pathLength={100} />
    <path d="M8.4 21l3.6-8.5 3.6 8.5" pathLength={100} />
    <path d="M7.6 4.1a5.6 5.6 0 0 0 0 6.8" pathLength={100} />
    <path d="M16.4 4.1a5.6 5.6 0 0 1 0 6.8" pathLength={100} />
  </Icon>
);

export const CloudIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M6.8 18.5a4.3 4.3 0 0 1-.6-8.55 6 6 0 0 1 11.7-1.2 4 4 0 0 1-.6 9.75H6.8z"
      pathLength={100}
    />
  </Icon>
);

export const OpsIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="12.5" rx="2" pathLength={100} />
    <path d="M6.5 10.5h2.1l1.5-2.7 2 5.2 1.6-2.5h3.8" pathLength={100} />
    <path d="M9.5 20.5h5" pathLength={100} />
    <path d="M12 16.5v4" pathLength={100} />
  </Icon>
);

export const ChartIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 4v16h16" pathLength={100} />
    <path d="M8.5 16.5v-4.2" pathLength={100} />
    <path d="M12.5 16.5V9.2" pathLength={100} />
    <path d="M16.5 16.5V6.2" pathLength={100} />
  </Icon>
);

export const GlobeIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8.5" pathLength={100} />
    <path d="M3.5 12h17" pathLength={100} />
    <path
      d="M12 3.5c2.7 2.3 4.1 5.1 4.1 8.5s-1.4 6.2-4.1 8.5c-2.7-2.3-4.1-5.1-4.1-8.5S9.3 5.8 12 3.5z"
      pathLength={100}
    />
  </Icon>
);

/* ---------- Industries ---------- */

export const BankIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3.5" y="4" width="17" height="14.5" rx="2" pathLength={100} />
    <circle cx="12" cy="11.2" r="3.4" pathLength={100} />
    <path d="M14.4 13.6l1.7 1.7" pathLength={100} />
    <path d="M9.6 13.6l-1.7 1.7" pathLength={100} />
    <path d="M6.5 18.5v2" pathLength={100} />
    <path d="M17.5 18.5v2" pathLength={100} />
  </Icon>
);

export const GovIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 3.5l8 4.5H4l8-4.5z" pathLength={100} />
    <path d="M6 10.5v7" pathLength={100} />
    <path d="M10 10.5v7" pathLength={100} />
    <path d="M14 10.5v7" pathLength={100} />
    <path d="M18 10.5v7" pathLength={100} />
    <path d="M4 20.5h16" pathLength={100} />
  </Icon>
);

export const HealthIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3.2" pathLength={100} />
    <path d="M12 8.2v7.6" pathLength={100} />
    <path d="M8.2 12h7.6" pathLength={100} />
  </Icon>
);

export const BoltIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M13 2.5L5.5 13.5h5l-1.5 8 7.5-11h-5l1.5-8z" pathLength={100} />
  </Icon>
);

export const FactoryIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4.5 20.5V10l4.5 3.2V10l4.5 3.2V5.5h6v15" pathLength={100} />
    <path d="M3.5 20.5h17" pathLength={100} />
    <path d="M17 9h1.5" pathLength={100} />
    <path d="M17 12.5h1.5" pathLength={100} />
  </Icon>
);

export const EducationIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M2.5 9.5L12 5l9.5 4.5L12 14 2.5 9.5z" pathLength={100} />
    <path d="M6.5 11.6v4.1c0 1.3 2.5 2.3 5.5 2.3s5.5-1 5.5-2.3v-4.1" pathLength={100} />
    <path d="M21.5 9.5v5" pathLength={100} />
  </Icon>
);

export const RouteIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="5.5" cy="18.5" r="2" pathLength={100} />
    <circle cx="18.5" cy="5.5" r="2" pathLength={100} />
    <path d="M5.5 16.5v-2.5a4 4 0 0 1 4-4h5a4 4 0 0 0 4-4V7.5" pathLength={100} />
  </Icon>
);

export const MediaIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="3.2" pathLength={100} />
    <path d="M5.3 5.3a9.5 9.5 0 0 0 0 13.4" pathLength={100} />
    <path d="M18.7 5.3a9.5 9.5 0 0 1 0 13.4" pathLength={100} />
  </Icon>
);

export const RetailIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M5 8.5h14l-1.2 10.9a1.8 1.8 0 0 1-1.8 1.6H8a1.8 1.8 0 0 1-1.8-1.6L5 8.5z" pathLength={100} />
    <path d="M8.8 11V6.8a3.2 3.2 0 0 1 6.4 0V11" pathLength={100} />
  </Icon>
);

export const BuildingIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M5.5 20.5V5A1.5 1.5 0 0 1 7 3.5h7A1.5 1.5 0 0 1 15.5 5v15.5" pathLength={100} />
    <path d="M15.5 9.5H18a1.5 1.5 0 0 1 1.5 1.5v9.5" pathLength={100} />
    <path d="M3.5 20.5h17" pathLength={100} />
    <path d="M8.5 7.5h3.5" pathLength={100} />
    <path d="M8.5 11h3.5" pathLength={100} />
    <path d="M8.5 14.5h3.5" pathLength={100} />
  </Icon>
);

/* ---------- Utility ---------- */

export const CheckIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4.5 12.5l4.5 4.5L19.5 6.5" pathLength={100} />
  </Icon>
);

export const ArrowRightIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4.5 12h15" pathLength={100} />
    <path d="M13.5 6l6 6-6 6" pathLength={100} />
  </Icon>
);

export const ChevronRightIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M9 5.5l6.5 6.5L9 18.5" pathLength={100} />
  </Icon>
);
