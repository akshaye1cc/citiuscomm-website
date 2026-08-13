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
  /** Derived from the name. See the note below on where these anchors point. */
  slug: string;
  name: string;
  /** One to two sentences, rendered under the name. */
  description: string;
  icon: ReactNode;
}

/**
 * The six services on the homepage row.
 *
 * Deliberately NOT `pillars` from solutions.tsx. That list drives the whole of
 * /solutions/services, which is to stay as it is for now, so the two lists are
 * separate on purpose rather than by accident. They will need reconciling once
 * the services page is rewritten to match — until then, editing one does not
 * change the other.
 *
 * ⚠ Electric Mobility and IoT & Industrial Automation have no equivalent
 * anywhere else on the site — their descriptions are freshly written for this
 * list rather than adapted from existing, reviewed copy, and should get the
 * same scrutiny as any other new claim before this ships. The other four
 * descriptions are adapted from the matching /solutions/services pillar.
 *
 * ⚠ The slugs below are derived from these names and do NOT match any section
 * on /solutions/services (which still uses data-center, ict-infrastructure,
 * cybersecurity, telecom-networks, cloud-engineering, noc-operations). Every
 * link in this row therefore lands at the top of that page rather than at a
 * matching section. Fix by adding these sections there, or by pointing each
 * entry at its nearest existing anchor.
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
      "Data center design, build, and modernization — compute, storage, and network fabric sourced through our OEM partnerships and delivered turnkey.",
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
      "Round-the-clock network operations, monitoring, and OSS/BSS integration — the operational backbone behind networks serving millions of subscribers.",
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
