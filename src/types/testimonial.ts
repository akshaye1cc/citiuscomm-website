export type Testimonial = {
  company: string;
  /** Path to the company mark. Rendered knocked out to white on navy. */
  companyLogo: string;
  personName: string;
  personTitle: string;
  review: string;
  /** Dummy copy — do not publish while this is true. */
  placeholder: boolean;
};
