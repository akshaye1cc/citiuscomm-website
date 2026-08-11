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
  icon: ReactNode;
}

/**
 * The six services on the homepage row. Icon and name only — no tagline or
 * description, by design.
 *
 * Deliberately NOT `pillars` from solutions.tsx. That list drives the whole of
 * /solutions/services, which is to stay as it is for now, so the two lists are
 * separate on purpose rather than by accident. They will need reconciling once
 * the services page is rewritten to match — until then, editing one does not
 * change the other.
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
    icon: <NetworkIcon className="ds-draw" />,
  },
  {
    slug: "hyperscaler-data-center",
    name: "Hyperscaler & Data Center",
    icon: <DataCenterIcon className="ds-draw" />,
  },
  {
    slug: "enterprise-cyber-security",
    name: "Enterprise Cyber Security",
    icon: <ShieldIcon className="ds-draw" />,
  },
  {
    slug: "managed-services-noc",
    name: "Managed Services & NOC",
    icon: <OpsIcon className="ds-draw" />,
  },
  {
    slug: "electric-mobility",
    name: "Electric Mobility",
    icon: <EvChargerIcon className="ds-draw" />,
  },
  {
    slug: "iot-industrial-automation",
    name: "IoT & Industrial Automation",
    icon: <CpuIcon className="ds-draw" />,
  },
];

export default homeServices;
