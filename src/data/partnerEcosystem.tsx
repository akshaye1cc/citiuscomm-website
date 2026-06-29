export type EcosystemPartner = {
  name: string;
  logo: string;
  /** Sector / industry shown as a badge. */
  sector: string;
  /** ~2 lines describing what they bring to the ecosystem. */
  description: string;
  url: string;
};

const partnerEcosystem: EcosystemPartner[] = [
  {
    name: "Cisco",
    logo: "/images/Partners/Cicso.svg",
    sector: "Telecom",
    description: "Enterprise networking and security infrastructure for carriers and service providers.",
    url: "#",
  },
  {
    name: "Juniper Networks",
    logo: "/images/Partners/Juniper networks.svg",
    sector: "Telecom",
    description: "Routing, switching, and security solutions for next-gen telecom networks.",
    url: "#",
  },
  {
    name: "Ciena",
    logo: "/images/Partners/ciena.png",
    sector: "Fiber / FTTH",
    description: "Optical transport and software-defined networking for fiber infrastructure.",
    url: "#",
  },
  {
    name: "Cambium Networks",
    logo: "/images/Partners/Cambium-Networks.png",
    sector: "Telecom",
    description: "Wireless broadband and connectivity solutions for last-mile delivery.",
    url: "#",
  },
  {
    name: "Ruckus",
    logo: "/images/Partners/ruckus.png",
    sector: "Telecom",
    description: "Wi-Fi and wired network infrastructure for enterprises and service providers.",
    url: "#",
  },
  {
    name: "Dell",
    logo: "/images/Partners/dell.svg",
    sector: "Enterprise",
    description: "Servers and infrastructure solutions powering carrier-grade systems.",
    url: "#",
  },
  {
    name: "HP",
    logo: "/images/Partners/hp.svg",
    sector: "Enterprise",
    description: "Enterprise computing and data center infrastructure for mission-critical operations.",
    url: "#",
  },
  {
    name: "Hitachi",
    logo: "/images/Partners/hitachi.png",
    sector: "Data Center",
    description: "Storage and computing solutions for large-scale data center environments.",
    url: "#",
  },
  {
    name: "Oracle",
    logo: "/images/Partners/oracle.svg",
    sector: "Cloud",
    description: "Database and cloud infrastructure for enterprise applications and data management.",
    url: "#",
  },
  {
    name: "Red Hat",
    logo: "/images/Partners/Redhat.png",
    sector: "Cloud",
    description: "Open-source cloud and container platforms for hybrid infrastructure.",
    url: "#",
  },
  {
    name: "VMware",
    logo: "/images/Partners/VMware-Logo.wine.png",
    sector: "Cloud",
    description: "Virtualization and cloud management solutions for distributed environments.",
    url: "#",
  },
  {
    name: "Arista",
    logo: "/images/Partners/arista.png",
    sector: "Cloud",
    description: "Cloud networking and software-defined infrastructure for data centers.",
    url: "#",
  },
  {
    name: "F5",
    logo: "/images/Partners/f5.webp",
    sector: "Cloud",
    description: "Application delivery and load balancing for cloud and on-premises infrastructure.",
    url: "#",
  },
  {
    name: "Palo Alto Networks",
    logo: "/images/Partners/paloalto.svg",
    sector: "Cybersecurity",
    description: "Cloud-native security platform protecting networks and endpoints across the enterprise.",
    url: "#",
  },
  {
    name: "CrowdStrike",
    logo: "/images/Partners/CrowdStrike-Logo-Vector.svg-.png",
    sector: "Cybersecurity",
    description: "Endpoint protection and threat intelligence for enterprise security operations.",
    url: "#",
  },
  {
    name: "Thales",
    logo: "/images/Partners/thales.webp",
    sector: "Cybersecurity",
    description: "Encryption and data security solutions for critical infrastructure protection.",
    url: "#",
  },
  {
    name: "Trellix",
    logo: "/images/Partners/trellix.png",
    sector: "Cybersecurity",
    description: "Advanced threat detection and response for enterprise security teams.",
    url: "#",
  },
  {
    name: "Rapid7",
    logo: "/images/Partners/rapid 7.png",
    sector: "Cybersecurity",
    description: "Vulnerability management and threat detection for enterprise environments.",
    url: "#",
  },
  {
    name: "SmartBear",
    logo: "/images/Partners/smartbear.png",
    sector: "Enterprise",
    description: "API testing and quality assurance tools for continuous integration pipelines.",
    url: "#",
  },
  {
    name: "Adopt",
    logo: "/images/Partners/Adopt logo.svg",
    sector: "Systems Integration",
    description: "Systems integration and managed services for network infrastructure deployment.",
    url: "#",
  },
  {
    name: "Xconics",
    logo: "/images/Partners/xconics logo.svg",
    sector: "Systems Integration",
    description: "Technology solutions and integration services for enterprise networks.",
    url: "#",
  },
  {
    name: "EMA",
    logo: "/images/Partners/EMA logo.svg",
    sector: "Enterprise",
    description: "Enterprise mobility and communications solutions for distributed workforces.",
    url: "#",
  },
  {
    name: "Nearby",
    logo: "/images/Partners/nearby.svg",
    sector: "IoT",
    description: "IoT connectivity and edge computing solutions for smart infrastructure.",
    url: "#",
  },
];

export default partnerEcosystem;
