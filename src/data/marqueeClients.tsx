export type MarqueeClient = {
  name: string;
  logo: string;
  url: string;
};

/**
 * Section 2 marquee — 10 client placeholders.
 *
 * TO ADD REAL LOGOS:
 *   1. Drop logo files in /public/images/Clients/ (SVG or WebP, transparent bg).
 *   2. Replace each `logo` path below and update `name` / `url`.
 * Until then every slot shows /images/placeholders/logo-placeholder.svg.
 */
const PLACEHOLDER = "/images/placeholders/logo-placeholder.svg";

const marqueeClients: MarqueeClient[] = Array.from({ length: 10 }, (_, i) => ({
  name: `Client ${String(i + 1).padStart(2, "0")}`,
  logo: PLACEHOLDER,
  url: "#",
}));

export default marqueeClients;
