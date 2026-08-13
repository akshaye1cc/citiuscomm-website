export type EcosystemPartner = {
  name: string;
  logo: string;
  /** Sector / industry. No longer grouped on in the UI — kept as data. */
  sector: string;
  /**
   * ~2 lines describing what they bring to the ecosystem. Not currently
   * rendered: the partners grid is logo + name only. Kept for future use.
   */
  description: string;
  /**
   * Official site, opened in a new tab. `"#"` marks an entry whose destination
   * has NOT been confirmed — those render as plain tiles rather than links, so
   * a "#" here is a safe placeholder rather than a dead anchor on the page.
   */
  url: string;
  /**
   * Multiplier on the logo's rendered max-height (1 = the default 2.5rem).
   *
   * Only for genuinely square marks, which lose height against wordmarks even
   * when the asset is cropped tight. It is NOT a workaround for a file with
   * transparent padding baked in — fix the asset instead, or the padding scales
   * up along with the mark.
   */
  logoScale?: number;
};

const partnerEcosystem: EcosystemPartner[] = [
  {
    name: "Cisco",
    logo: "/images/Partners/Cicso.svg",
    sector: "Telecom",
    description: "Enterprise networking and security infrastructure for carriers and service providers.",
    url: "https://www.cisco.com",
  },
  {
    name: "Juniper Networks",
    logo: "/images/Partners/Juniper networks.svg",
    sector: "Telecom",
    description: "Routing, switching, and security solutions for next-gen telecom networks.",
    url: "https://www.juniper.net",
  },
  {
    name: "Ciena",
    logo: "/images/Partners/ciena.png",
    sector: "Fiber / FTTH",
    description: "Optical transport and software-defined networking for fiber infrastructure.",
    url: "https://www.ciena.com",
  },
  {
    name: "Cambium Networks",
    logo: "/images/Partners/Cambium-Networks.png",
    sector: "Telecom",
    description: "Wireless broadband and connectivity solutions for last-mile delivery.",
    url: "https://www.cambiumnetworks.com",
  },
  {
    name: "Ruckus",
    logo: "/images/Partners/ruckus.png",
    sector: "Telecom",
    description: "Wi-Fi and wired network infrastructure for enterprises and service providers.",
    url: "https://www.ruckusnetworks.com",
  },
  {
    name: "Dell",
    logo: "/images/Partners/dell.svg",
    sector: "Enterprise",
    description: "Servers and infrastructure solutions powering carrier-grade systems.",
    url: "https://www.dell.com",
  },
  {
    name: "HP",
    logo: "/images/Partners/hp.svg",
    sector: "Enterprise",
    description: "Enterprise computing and data center infrastructure for mission-critical operations.",
    // TODO(url): confirm whether this entry is HP Inc. (hp.com) or HPE
    // (hpe.com) before linking — the two are separate companies and the logo
    // asset does not settle it. HPE already appears in the homepage client
    // marquee, which makes guessing here actively risky.
    url: "#",
    // Square circular mark in a square viewBox — already renders full height, but
    // reads small beside wordmarks. Cropping cannot help a shape that is square.
    logoScale: 1.25,
  },
  {
    name: "Hitachi",
    logo: "/images/Partners/hitachi.png",
    sector: "Data Center",
    description: "Storage and computing solutions for large-scale data center environments.",
    url: "https://www.hitachivantara.com",
  },
  {
    name: "Oracle",
    logo: "/images/Partners/oracle.svg",
    sector: "Cloud",
    description: "Database and cloud infrastructure for enterprise applications and data management.",
    url: "https://www.oracle.com",
  },
  {
    name: "Red Hat",
    logo: "/images/Partners/Redhat.png",
    sector: "Cloud",
    description: "Open-source cloud and container platforms for hybrid infrastructure.",
    url: "https://www.redhat.com",
  },
  {
    name: "VMware",
    logo: "/images/Partners/VMware-Logo.wine.png",
    sector: "Cloud",
    description: "Virtualization and cloud management solutions for distributed environments.",
    url: "https://www.vmware.com",
  },
  {
    name: "Arista",
    logo: "/images/Partners/arista.png",
    sector: "Cloud",
    description: "Cloud networking and software-defined infrastructure for data centers.",
    url: "https://www.arista.com",
  },
  {
    name: "F5",
    logo: "/images/Partners/f5.webp",
    sector: "Cloud",
    description: "Application delivery and load balancing for cloud and on-premises infrastructure.",
    url: "https://www.f5.com",
  },
  {
    name: "Palo Alto Networks",
    logo: "/images/Partners/paloalto.svg",
    sector: "Cybersecurity",
    description: "Cloud-native security platform protecting networks and endpoints across the enterprise.",
    url: "https://www.paloaltonetworks.com",
  },
  {
    name: "CrowdStrike",
    logo: "/images/Partners/CrowdStrike-Logo-Vector.svg-.png",
    sector: "Cybersecurity",
    description: "Endpoint protection and threat intelligence for enterprise security operations.",
    url: "https://www.crowdstrike.com",
  },
  {
    name: "Thales",
    logo: "/images/Partners/thales.webp",
    sector: "Cybersecurity",
    description: "Encryption and data security solutions for critical infrastructure protection.",
    url: "https://www.thalesgroup.com",
  },
  {
    name: "Trellix",
    logo: "/images/Partners/trellix.png",
    sector: "Cybersecurity",
    description: "Advanced threat detection and response for enterprise security teams.",
    url: "https://www.trellix.com",
  },
  {
    name: "Rapid7",
    logo: "/images/Partners/rapid 7.png",
    sector: "Cybersecurity",
    description: "Vulnerability management and threat detection for enterprise environments.",
    url: "https://www.rapid7.com",
  },
  {
    name: "SmartBear",
    logo: "/images/Partners/smartbear.png",
    sector: "Enterprise",
    description: "API testing and quality assurance tools for continuous integration pipelines.",
    url: "https://www.smartbear.com",
  },
  {
    name: "Adopt",
    logo: "/images/Partners/Adopt logo.svg",
    sector: "Systems Integration",
    description: "Systems integration and managed services for network infrastructure deployment.",
    // TODO(url): no confirmed official domain. Also appears in citiusProducts.ts
    // as one of our own ventures — confirm which list it actually belongs in.
    url: "#",
  },
  {
    name: "Xconics",
    logo: "/images/Partners/xconics logo.svg",
    sector: "Systems Integration",
    description: "Technology solutions and integration services for enterprise networks.",
    // TODO(url): no confirmed official domain. Also appears in citiusProducts.ts
    // as one of our own ventures — confirm which list it actually belongs in.
    url: "#",
  },
  {
    name: "EMA",
    logo: "/images/Partners/EMA logo.svg",
    sector: "Enterprise",
    description: "Enterprise mobility and communications solutions for distributed workforces.",
    // TODO(url): no confirmed official domain. "EMA" is ambiguous on its own.
    url: "#",
  },
  {
    name: "Nearby",
    logo: "/images/Partners/nearby.svg",
    sector: "IoT",
    description: "IoT connectivity and edge computing solutions for smart infrastructure.",
    // TODO(url): no confirmed official domain.
    url: "#",
  },
];

export default partnerEcosystem;
