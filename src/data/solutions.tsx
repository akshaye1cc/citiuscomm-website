import type { ReactNode } from "react";
import {
  CpuIcon,
  DataCenterIcon,
  EvChargerIcon,
  NetworkIcon,
  OpsIcon,
  ShieldIcon,
} from "@/components/ui/icons";

export interface SolutionPillar {
  /** Must match the `slug` of the same service in homeServices.tsx. */
  slug: string;
  /** Must match `name` in homeServices.tsx. */
  title: string;
  /** Short line under the title. No equivalent in homeServices. */
  tagline: string;
  /** Must match `description` in homeServices.tsx, word for word. */
  description: string;
  /** The longer body, shown only on /solutions/services. */
  body: string;
  points: string[];
  icon: ReactNode;
}

/**
 * The six solution practices, in the same order and under the same slugs as
 * homeServices.tsx. The two files describe one list and must be updated
 * together: the homepage service row deep-links to `/solutions/services#slug`,
 * so a slug that exists in one and not the other is a link to nowhere.
 *
 * `slug`, `title`, and `description` mirror homeServices exactly. `tagline`,
 * `body`, and `points` exist only here, because only this page has room for
 * them.
 *
 * This list replaced an older six (data-center, ict-infrastructure,
 * cybersecurity, telecom-networks, cloud-engineering, noc-operations). Four of
 * those carried forward under new titles. The 5G & Telecom Networks and Cloud
 * Engineering practices were dropped rather than renamed, and their reviewed
 * copy went with them.
 */
export const pillars: SolutionPillar[] = [
  {
    slug: "networking-fttx",
    title: "Networking & FTTx",
    tagline: "Enterprise and carrier networks, end to end",
    description:
      "Enterprise and carrier networks built on fibre-to-the-x access, structured cabling, and multi-vendor routing and switching.",
    body: "Routing, switching, transmission, and unified communications, designed, deployed, and supported across multi-vendor environments with partners like Cisco, HPE, and Juniper.",
    points: [
      "FTTx and fibre access networks",
      "Enterprise routing and switching",
      "Transmission and backhaul",
      "Unified communications",
      "Structured cabling and passive infrastructure",
      "Multi-vendor integration",
    ],
    icon: <NetworkIcon size={28} className="ds-draw" />,
  },
  {
    slug: "hyperscaler-data-center",
    title: "Hyperscaler & Data Center",
    tagline: "Compute, storage, and networking engineered for uptime",
    description:
      "Data center design, build, and modernization. Compute, storage, and network fabric sourced through our OEM partnerships and delivered turnkey.",
    body: "We design, build, and modernize data center infrastructure for carriers and enterprises, from rack and power planning to compute, storage, and network fabric, sourced through our OEM partnerships and delivered turnkey.",
    points: [
      "Data center design and build",
      "Compute, storage, and network fabric",
      "Power, cooling, and rack planning",
      "Migration and modernization",
      "Multi-OEM sourcing and integration",
    ],
    icon: <DataCenterIcon size={28} className="ds-draw" />,
  },
  {
    slug: "enterprise-cyber-security",
    title: "Enterprise Cyber Security",
    tagline: "Carrier-grade protection for critical infrastructure",
    description:
      "Perimeter, network, and endpoint security built on proven platforms to keep enterprise infrastructure resilient against evolving threats.",
    body: "Perimeter, network, and endpoint security built on proven platforms, including Palo Alto, to keep carrier and enterprise infrastructure resilient against evolving threats.",
    points: [
      "Network and perimeter security",
      "Next-generation firewalls",
      "Threat detection and response",
      "Security assessments and hardening",
      "Compliance-driven architectures",
    ],
    icon: <ShieldIcon size={28} className="ds-draw" />,
  },
  {
    slug: "managed-services-noc",
    title: "Managed Services & NOC",
    tagline: "Network operations managed around the clock",
    description:
      "Round-the-clock network operations, monitoring, and OSS/BSS integration. The operational backbone behind carrier and enterprise networks.",
    body: "Round-the-clock network operations, monitoring, and OSS/BSS integration, the operational backbone behind carrier and enterprise networks.",
    points: [
      "24×7 NOC operations",
      "Network monitoring and fault management",
      "OSS/BSS integration",
      "Performance reporting and SLAs",
      "Field operations coordination",
    ],
    icon: <OpsIcon size={28} className="ds-draw" />,
  },
  {
    // TODO: new copy, not yet reviewed. No predecessor practice existed, so the
    // tagline, body, and points below were written from the stated scope (EV
    // site assessment, grid integration, charger installation, remote charging)
    // rather than carried forward from reviewed material.
    slug: "electric-mobility",
    title: "Electric Mobility",
    tagline: "Charging infrastructure from site survey to live network",
    description:
      "Charging infrastructure and connected fleet systems designed and deployed for the EV ecosystem, from planning through field operations.",
    body: "We assess and prepare sites for EV charging, handle the grid integration and electrical works behind them, install and commission the chargers, and connect them for remote monitoring and control once they are live.",
    points: [
      "EV site assessment and feasibility",
      "Grid integration and electrical works",
      "Charger supply, installation, and commissioning",
      "Remote charging management and monitoring",
    ],
    icon: <EvChargerIcon size={28} className="ds-draw" />,
  },
  {
    // TODO: new copy, not yet reviewed. No predecessor practice existed, so the
    // tagline, body, and points below were written from the stated scope (asset
    // visibility, predictive maintenance) rather than carried forward from
    // reviewed material.
    slug: "iot-industrial-automation",
    title: "IoT & Industrial Automation",
    tagline: "Real-time visibility across plant and field assets",
    description:
      "Sensor networks, industrial connectivity, and automation platforms that bring real-time visibility to plant and field operations.",
    body: "We connect plant and field equipment through sensor networks and industrial connectivity, then turn what those assets report into usable operational data. That gives teams live visibility of asset condition, and the basis to plan maintenance ahead of a failure rather than after one.",
    points: [
      "Asset visibility and condition monitoring",
      "Predictive maintenance",
      "Sensor networks and industrial connectivity",
      "Automation platform integration",
    ],
    icon: <CpuIcon size={28} className="ds-draw" />,
  },
];
