export interface Industry {
  /** Matches the image basename in public/images/industries. */
  slug: string;
  /** Short uppercase label above the title. */
  tag: string;
  title: string;
  description: string;
  /** Describes the photograph itself, not the sector. */
  alt: string;
  /** Optional sector figure, rendered in orange beneath the line. */
  proof?: string;
}

/** Sectors we serve, rendered as full-bleed scrim cards on /solutions/industries. */
export const industries: Industry[] = [
  {
    slug: "telecom",
    tag: "TELECOM",
    title: "Telecom Carriers & ISPs",
    description: "2G through 5G, planned, rolled out, and run.",
    alt: "Lattice cell tower carrying panel antennas and microwave dishes, lit against a night sky above an industrial site.",
  },
  {
    slug: "data-center",
    tag: "DATA CENTER",
    title: "Data Centers & Cloud",
    description: "White space to live fabric, one contractor.",
    alt: "Rear of a server rack, cooling fans and bundled blue patch cables running between chassis.",
  },
  {
    slug: "banking",
    tag: "BANKING",
    title: "Banking & Financial Services",
    description: "Networks that cannot be down when markets open.",
    alt: "Stone facade of the Reserve Bank of India, its engraved nameplate mounted behind iron railings.",
  },
  {
    slug: "government",
    tag: "GOVERNMENT",
    title: "Government & Public Sector",
    description: "National-scale networks, built to tender.",
    alt: "Red sandstone dome of the Supreme Court of India with the national flag flying in front of it.",
  },
  {
    slug: "healthcare",
    tag: "HEALTHCARE",
    title: "Healthcare",
    description: "Connectivity that holds when the ward depends on it.",
    alt: "Hospital entrance canopy lit at night beneath an illuminated HOSPITAL sign.",
  },
  {
    slug: "energy",
    tag: "ENERGY",
    title: "Energy & Utilities",
    description: "SCADA and field comms across the grid.",
    alt: "Refinery distillation columns and pipework picked out by floodlights after dark.",
  },
  {
    slug: "manufacturing",
    tag: "MANUFACTURING",
    title: "Manufacturing",
    description: "Private 5G and IT/OT convergence on the plant floor.",
    alt: "Robotic arms stacking cartons onto pallets along a factory packing line.",
  },
  {
    slug: "education",
    tag: "EDUCATION",
    title: "Education",
    description: "Campus-wide coverage for tens of thousands of devices.",
    alt: "Empty classroom with rows of desks facing a whiteboard, daylight coming through window blinds.",
  },
  {
    slug: "logistics",
    tag: "LOGISTICS",
    title: "Transportation & Logistics",
    description: "Ports, corridors, and fleets, kept in contact.",
    alt: "Container ship berthed beneath gantry cranes, freight containers stacked along the quay.",
  },
  {
    slug: "broadcast",
    tag: "BROADCAST",
    title: "Media & Broadcasting",
    description: "Throughput for live production and distribution.",
    alt: "Television news studio with an anchor desk facing a wall of screens reading BREAKING NEWS.",
  },
  {
    slug: "retail",
    tag: "RETAIL",
    title: "Retail & E-commerce",
    description: "Hundreds of stores on one managed network.",
    alt: "Long warehouse aisle running between tall racks of stock, a single worker at the far end.",
  },
  {
    slug: "enterprise",
    tag: "ENTERPRISE",
    title: "Large Enterprises",
    description: "Campus, branch, and everything between.",
    alt: "Angular glass and steel corporate tower photographed from below at dusk.",
  },
];
