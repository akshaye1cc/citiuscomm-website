export interface Award {
  name: string;
  /** Who issued it — the body, not the customer. */
  issuingBody: string;
  year: string;
  image: string;
  /** Dummy copy — do not publish while this is true. */
  placeholder: boolean;
}

/**
 * PLACEHOLDER DATA. None of these have been awarded to Citiuscomm. They exist
 * to shape the awards row — replace with real recognitions and certifications
 * (with their issuing body and year) and drop the `placeholder` flag before
 * publishing. Anything unverifiable should come out of the list entirely
 * rather than ship as a claim.
 */
export const awards: Award[] = [
  {
    name: "Placeholder Award Name",
    issuingBody: "Placeholder Issuing Body",
    year: "2024",
    image: "/images/placeholders/logo-placeholder.svg",
    placeholder: true,
  },
  {
    name: "Placeholder Certification",
    issuingBody: "Placeholder Standards Body",
    year: "2023",
    image: "/images/placeholders/logo-placeholder.svg",
    placeholder: true,
  },
  {
    name: "Placeholder Partner Recognition",
    issuingBody: "Placeholder OEM Programme",
    year: "2023",
    image: "/images/placeholders/logo-placeholder.svg",
    placeholder: true,
  },
];

export default awards;
