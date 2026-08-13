import type { ReactNode } from "react";
import {
  CpuIcon,
  DataCenterIcon,
  EvChargerIcon,
  NetworkIcon,
  OpsIcon,
  ShieldIcon,
} from "@/components/ui/icons";

export interface HomeService {
  /** Also the anchor on /solutions/services. Must match the pillar slug. */
  slug: string;
  name: string;
  /** One to two sentences, rendered under the name. */
  description: string;
  icon: ReactNode;
}

/**
 * The six services on the homepage row.
 *
 * This file and `pillars` in solutions.tsx share the same six slugs, titles,
 * and descriptions, and must be updated together: the row below deep-links to
 * `/solutions/services#slug`, so a change in one file without the other breaks
 * the link. solutions.tsx carries extra fields this list has no room for.
 */
export const homeServices: HomeService[] = [
  {
    slug: "networking-fttx",
    name: "Networking & FTTx",
    description:
      "Enterprise and carrier networks built on fibre-to-the-x access, structured cabling, and multi-vendor routing and switching.",
    icon: <NetworkIcon className="ds-draw" />,
  },
  {
    slug: "hyperscaler-data-center",
    name: "Hyperscaler & Data Center",
    description:
      "Data center design, build, and modernization. Compute, storage, and network fabric sourced through our OEM partnerships and delivered turnkey.",
    icon: <DataCenterIcon className="ds-draw" />,
  },
  {
    slug: "enterprise-cyber-security",
    name: "Enterprise Cyber Security",
    description:
      "Perimeter, network, and endpoint security built on proven platforms to keep enterprise infrastructure resilient against evolving threats.",
    icon: <ShieldIcon className="ds-draw" />,
  },
  {
    slug: "managed-services-noc",
    name: "Managed Services & NOC",
    description:
      "Round-the-clock network operations, monitoring, and OSS/BSS integration. The operational backbone behind carrier and enterprise networks.",
    icon: <OpsIcon className="ds-draw" />,
  },
  {
    slug: "electric-mobility",
    name: "Electric Mobility",
    description:
      "Charging infrastructure and connected fleet systems designed and deployed for the EV ecosystem, from planning through field operations.",
    icon: <EvChargerIcon className="ds-draw" />,
  },
  {
    slug: "iot-industrial-automation",
    name: "IoT & Industrial Automation",
    description:
      "Sensor networks, industrial connectivity, and automation platforms that bring real-time visibility to plant and field operations.",
    icon: <CpuIcon className="ds-draw" />,
  },
];

export default homeServices;
