import type { ReactNode } from "react";
import {
  AntennaIcon,
  CloudIcon,
  DataCenterIcon,
  NetworkIcon,
  OpsIcon,
  ShieldIcon,
} from "@/components/ui/icons";

export interface SolutionPillar {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: ReactNode;
}

/**
 * The six solution practices. Used by /solutions (summary cards) and
 * /solutions/services (full detail) — keep copy factual and conservative.
 */
export const pillars: SolutionPillar[] = [
  {
    slug: "data-center",
    title: "Data Center Solutions",
    tagline: "Compute, storage, and networking engineered for uptime",
    description:
      "We design, build, and modernize data center infrastructure for carriers and enterprises — from rack and power planning to compute, storage, and network fabric — sourced through our OEM partnerships and delivered turnkey.",
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
    slug: "ict-infrastructure",
    title: "ICT Infrastructure",
    tagline: "Enterprise and carrier networks, end to end",
    description:
      "Routing, switching, transmission, and unified communications — designed, deployed, and supported across multi-vendor environments with partners like Cisco, HPE, and Juniper.",
    points: [
      "Enterprise routing and switching",
      "Transmission and backhaul",
      "Unified communications",
      "Structured cabling and passive infrastructure",
      "Multi-vendor integration",
    ],
    icon: <NetworkIcon size={28} className="ds-draw" />,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Carrier-grade protection for critical infrastructure",
    description:
      "Perimeter, network, and endpoint security built on proven platforms — including Palo Alto — to keep carrier and enterprise infrastructure resilient against evolving threats.",
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
    slug: "telecom-networks",
    title: "5G & Telecom Networks",
    tagline: "Multi-generation rollout at carrier scale",
    description:
      "From 2G to 5G and vRAN, we deliver radio and core network rollout, transmission, and RF engineering — backed by experience across 100K+ network sites.",
    points: [
      "2G–5G network rollout",
      "vRAN and Open RAN readiness",
      "RF planning and optimization",
      "Transmission and microwave",
      "Site build and integration",
    ],
    icon: <AntennaIcon size={28} className="ds-draw" />,
  },
  {
    slug: "cloud-engineering",
    title: "Cloud Engineering",
    tagline: "Private, public, and hybrid — built for telco-grade workloads",
    description:
      "Cloud design, virtualization, and migration services that move enterprise and telco workloads onto scalable, cost-efficient platforms without disrupting operations.",
    points: [
      "Private and hybrid cloud build-outs",
      "Virtualization and containerization",
      "Workload migration",
      "Cloud networking and security",
      "Cost and capacity optimization",
    ],
    icon: <CloudIcon size={28} className="ds-draw" />,
  },
  {
    slug: "noc-operations",
    title: "OSS/BSS & NOC Operations",
    tagline: "13,000+ nodes managed around the clock",
    description:
      "Round-the-clock network operations, monitoring, and OSS/BSS integration — the operational backbone behind networks serving 100M+ subscribers.",
    points: [
      "24×7 NOC operations",
      "Network monitoring and fault management",
      "OSS/BSS integration",
      "Performance reporting and SLAs",
      "Field operations coordination",
    ],
    icon: <OpsIcon size={28} className="ds-draw" />,
  },
];
