import type { ReactNode } from "react";
import {
  AntennaIcon,
  BankIcon,
  BoltIcon,
  BuildingIcon,
  DataCenterIcon,
  EducationIcon,
  FactoryIcon,
  GovIcon,
  HealthIcon,
  MediaIcon,
  RetailIcon,
  RouteIcon,
} from "@/components/ui/icons";

export interface Industry {
  title: string;
  description: string;
  solutions: string[];
  icon: ReactNode;
}

/** Sectors we serve — used by /solutions (chips) and /solutions/industries (cards). */
export const industries: Industry[] = [
  {
    title: "Telecom Carriers & ISPs",
    description: "Rollout, operations, and modernization for mobile and fixed-line operators.",
    solutions: ["5G Rollout", "NOC Operations", "Transmission", "OSS/BSS"],
    icon: <AntennaIcon size={26} className="ds-draw" />,
  },
  {
    title: "Data Centers & Cloud",
    description: "Build-outs, fabric, and interconnect for colocation and cloud providers.",
    solutions: ["DC Build", "Network Fabric", "Migration", "Security"],
    icon: <DataCenterIcon size={26} className="ds-draw" />,
  },
  {
    title: "Banking & Financial Services",
    description: "Secure, always-on infrastructure for banks, insurers, and fintech.",
    solutions: ["Network Security", "DC & DR", "Connectivity", "Compliance"],
    icon: <BankIcon size={26} className="ds-draw" />,
  },
  {
    title: "Government & Public Sector",
    description: "Secure networks for public programs and smart infrastructure.",
    solutions: ["Secure Networks", "Data Centers", "Surveillance", "Connectivity"],
    icon: <GovIcon size={26} className="ds-draw" />,
  },
  {
    title: "Healthcare",
    description: "Reliable connectivity and secure data infrastructure for care delivery.",
    solutions: ["Hospital Networks", "Data Security", "Cloud", "Wi-Fi"],
    icon: <HealthIcon size={26} className="ds-draw" />,
  },
  {
    title: "Energy & Utilities",
    description: "Industrial-grade communications for generation, transmission, and distribution.",
    solutions: ["SCADA Networks", "Field Connectivity", "Security", "IoT"],
    icon: <BoltIcon size={26} className="ds-draw" />,
  },
  {
    title: "Manufacturing",
    description: "Plant-floor connectivity and IT/OT convergence for modern manufacturing.",
    solutions: ["Industrial Networks", "IoT", "Private 5G", "Security"],
    icon: <FactoryIcon size={26} className="ds-draw" />,
  },
  {
    title: "Education",
    description: "Campus-wide networks and digital learning infrastructure.",
    solutions: ["Campus Wi-Fi", "Networking", "Cloud", "Security"],
    icon: <EducationIcon size={26} className="ds-draw" />,
  },
  {
    title: "Transportation & Logistics",
    description: "Connectivity across hubs, fleets, and transport corridors.",
    solutions: ["Hub Networks", "Tracking Infrastructure", "Connectivity", "Security"],
    icon: <RouteIcon size={26} className="ds-draw" />,
  },
  {
    title: "Media & Broadcasting",
    description: "High-throughput networks for content production and distribution.",
    solutions: ["Broadcast Networks", "Edge & CDN", "Cloud", "Connectivity"],
    icon: <MediaIcon size={26} className="ds-draw" />,
  },
  {
    title: "Retail & E-commerce",
    description: "Store and fulfillment connectivity at chain scale.",
    solutions: ["Store Networks", "SD-WAN", "Cloud", "Security"],
    icon: <RetailIcon size={26} className="ds-draw" />,
  },
  {
    title: "Large Enterprises",
    description: "Campus and branch infrastructure for corporate environments.",
    solutions: ["Campus Networks", "Unified Comms", "Security", "Cloud"],
    icon: <BuildingIcon size={26} className="ds-draw" />,
  },
];
