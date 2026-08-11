import type { Testimonial } from "@/types/testimonial";

/**
 * PLACEHOLDER DATA. Nobody said any of this. Names, titles, companies, and
 * quotes are invented to shape the section — replace each entry with an
 * attributed, approved quote and drop the `placeholder` flag before publishing.
 *
 * Logos point at the shared placeholder mark until real ones are cleared.
 */
export const testimonials: Testimonial[] = [
  {
    company: "Placeholder Telecom",
    companyLogo: "/images/placeholders/logo-placeholder.svg",
    personName: "Placeholder Name",
    personTitle: "Placeholder Title, Network Operations",
    review:
      "Placeholder quote. This paragraph stands in for an approved customer quote about a rollout delivered on schedule, and runs to roughly the length a real one should.",
    placeholder: true,
  },
  {
    company: "Placeholder Bank",
    companyLogo: "/images/placeholders/logo-placeholder.svg",
    personName: "Placeholder Name",
    personTitle: "Placeholder Title, Infrastructure",
    review:
      "Placeholder quote. Stand-in copy for a quote about a multi-vendor refresh, written at the length we expect so the three cards sit level with each other.",
    placeholder: true,
  },
  {
    company: "Placeholder Enterprise",
    companyLogo: "/images/placeholders/logo-placeholder.svg",
    personName: "Placeholder Name",
    personTitle: "Placeholder Title, IT",
    review:
      "Placeholder quote. Another stand-in, covering a data center migration, kept to the same rough length as the other two until real quotes replace all three.",
    placeholder: true,
  },
];

export default testimonials;
