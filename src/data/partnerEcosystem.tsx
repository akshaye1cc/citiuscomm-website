export type EcosystemPartner = {
  name: string;
  logo: string;
  /** Sector / industry shown as a badge. */
  sector: string;
  /** ~2 lines describing what they bring to the ecosystem. */
  description: string;
  url: string;
};

/**
 * Section 3 — partner ecosystem grid (5 × 5 = 25 slots).
 *
 * TO ADD REAL CONTENT:
 *   1. Drop each partner logo in /public/images/Clients/ (SVG/WebP, transparent).
 *   2. Replace `logo`, `name`, `sector`, and `description` per slot below.
 * Every slot currently uses /images/placeholders/logo-placeholder.svg and
 * placeholder copy — edit freely or remove unused slots.
 */
const PLACEHOLDER = "/images/placeholders/logo-placeholder.svg";

const SECTORS = [
  "Telecom",
  "Broadcast",
  "Cloud",
  "AI / ML",
  "IoT",
  "Enterprise",
  "Cybersecurity",
  "Data Center",
  "Fiber / FTTH",
  "Systems Integration",
];

const partnerEcosystem: EcosystemPartner[] = Array.from({ length: 25 }, (_, i) => ({
  name: `Partner ${String(i + 1).padStart(2, "0")}`,
  logo: PLACEHOLDER,
  sector: SECTORS[i % SECTORS.length],
  description:
    "Short two-line description of this partner and the capabilities they add to the Citiuscomm ecosystem.",
  url: "#",
}));

export default partnerEcosystem;
