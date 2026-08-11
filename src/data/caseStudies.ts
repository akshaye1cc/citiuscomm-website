export interface CaseStudy {
  /** URL segment under /insights. That route is not built yet. */
  slug: string;
  customer: string;
  /** False until the customer has cleared us to show their mark in public. */
  logoUsable: boolean;
  /** Customer mark. Only rendered when `logoUsable` is also true. */
  logo?: string;
  industry: string;
  /** Short "what was handed over" line, e.g. "42 sites, 11 weeks". */
  delivered: string;
  problem: string;
  whatWeDid: string;
  /** Two or more outcome lines. Keep them measurable. */
  results: string[];
  thumbnail: string;
  /** Dummy copy — do not publish while this is true. */
  placeholder: boolean;
}

/**
 * The first two entries are real engagements; Rakuten is still a stub and
 * carries `placeholder: true`, which keeps it out of the rendered row — see
 * CaseStudyRow. Entries stay in this file while they are being written up.
 *
 * Every `results` array is unfinished — the outcome numbers are the part of a
 * case study that has to come from the account team, and nothing here should be
 * published with a TODO still in it.
 *
 * Thumbnails are stock photography from /images/industries chosen to match the
 * sector, NOT photography of these projects. Swap in real project imagery, or
 * customer-approved stills, when the studies are written up.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "net-broadband",
    customer: "Net+ Broadband",
    logoUsable: true,
    // Fastway's mark — Net+ is its wholly-owned subsidiary and has no separate
    // asset in /images/Clients. Swap for a Net+ mark if one is available.
    logo: "/images/Clients/fastway.svg",
    industry: "Telecom / ISP",
    delivered: "Nokia ONU/OLT deployment for a Punjab ISP",
    problem:
      "Net+, a 100% subsidiary of Fastway Transmission, needed to deliver high-speed internet via cable modem to residential, SME, and corporate customers across major cities and townships in urban Punjab.",
    whatWeDid: "Implemented Nokia's ONU/OLT solution across Net+'s network.",
    // TODO: get number/timeline from account team
    results: [
      "TODO: get subscriber/homes-connected number",
      "TODO: get deployment timeline",
    ],
    thumbnail: "/images/industries/broadcast-600.avif",
    placeholder: false,
  },
  {
    slug: "nepal-telecom",
    customer: "Nepal Telecom",
    logoUsable: true,
    // Filename has a space; encoded so the URL is valid as authored.
    logo: "/images/Clients/nepal%20telecom.svg",
    industry: "Telecom",
    delivered: "Cisco router network + custom AAA software for Nepal's state telecom operator",
    problem:
      "Nepal Telecom, the state-owned telecom provider, needed router infrastructure for its Mid Hill network and a leased-line solution across its network.",
    whatWeDid:
      "Won the Mid Hill Router RFP with a Cisco routing solution, currently in execution. Separately won the Leased Line RFP, deploying Citius's own AAA software solution alongside other network elements.",
    // TODO: get number/timeline from account team
    results: ["TODO: get RFP value or node count", "TODO: get completion date"],
    thumbnail: "/images/industries/telecom-600.avif",
    placeholder: false,
  },
  {
    slug: "rakuten",
    customer: "Rakuten",
    logoUsable: true,
    industry: "E-commerce / Telecom",
    // TODO: get number/timeline from account team
    delivered: "TODO: get full project detail, only have teaser text",
    problem: "TODO",
    whatWeDid: "TODO",
    results: ["TODO", "TODO"],
    thumbnail: "/images/industries/retail-600.avif",
    placeholder: true,
  },
];

export default caseStudies;
