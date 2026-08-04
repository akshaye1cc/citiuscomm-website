import {
  RouteIcon,
  BoltIcon,
  DataCenterIcon,
  OpsIcon,
  GlobeIcon,
  ShieldIcon,
  type IconProps,
} from "@/components/ui/icons";
import type { ComponentType } from "react";

export type WhyPartnerCard = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  /** Small label above the title — e.g. "Solution" or "Why us". */
  tag: string;
  /** Highlight the card visually (used for our headline capabilities). */
  featured?: boolean;
};

/**
 * Section 1 ("Why partner with us") cards.
 *
 * The first three are our core solutions/services — written as capabilities,
 * NOT as named umbrella partners. Copy here is a starting point; refine the
 * `description` text to match exactly how you want each platform positioned.
 */
const whyPartner: WhyPartnerCard[] = [
  {
    tag: "Solution",
    title: "OSS / BSS Telecom Ecosystem",
    description:
      "Carrier-grade operational and business support systems: billing, provisioning, mediation, and service assurance across the full telecom stack.",
    icon: RouteIcon,
    featured: true,
  },
  {
    tag: "Solution",
    title: "Applied AI & RedX Platform",
    description:
      "Production-ready AI and automation through the RedX platform, turning operational data into faster, smarter decisions.",
    icon: BoltIcon,
    featured: true,
  },
  {
    tag: "Solution",
    title: "IoT & Embedded Systems",
    description:
      "Connected hardware, embedded systems, and IoT that keep networks resilient and intelligent from the edge to the core.",
    icon: DataCenterIcon,
    featured: true,
  },
  {
    tag: "Why us",
    title: "End-to-end ownership",
    description:
      "We design, build, and operate as one accountable partner across the entire infrastructure lifecycle.",
    icon: OpsIcon,
  },
  {
    tag: "Why us",
    title: "Proven at carrier scale",
    description:
      "Trusted by carriers, broadcasters, and enterprises across India, SAARC, and beyond.",
    icon: GlobeIcon,
  },
  {
    tag: "Why us",
    title: "Engineering depth & support",
    description:
      "Specialist teams and dependable support that keep business-critical infrastructure running.",
    icon: ShieldIcon,
  },
];

export default whyPartner;
