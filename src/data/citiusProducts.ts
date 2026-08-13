export type CitiusProduct = {
  name: string;
  logo: string;
  /** One line, shown under the name. */
  description: string;
  /** Official site. `null` renders a non-anchor panel — see partnerEcosystem. */
  url: string | null;
  /** Multiplier on the rendered logo height (1 = the default 3rem). */
  logoScale?: number;
};

/**
 * Citiuscomm's own ventures — NOT partners, NOT clients.
 *
 * These are the products we build and own, which is why the partners page gives
 * them their own section above the OEM grid rather than a tile inside it. Adopt
 * and Xconics also appear in partnerEcosystem.tsx as integration partners; that
 * duplication is deliberate for now and flagged there.
 */
const citiusProducts: CitiusProduct[] = [
  {
    name: "Adopt NetTech",
    logo: "/images/Partners/Adopt logo.svg",
    // TODO(copy): placeholder — confirm how Adopt NetTech should be positioned.
    // Carried over from the partnerEcosystem entry, which is itself provisional.
    description: "Systems integration and managed services for network infrastructure deployment.",
    // TODO(url): no confirmed official domain.
    url: null,
  },
  {
    name: "Easy My AI",
    // TODO(asset): no logo supplied — using the shared placeholder mark so the
    // panel keeps its shape. Drop the real file in and swap this path.
    logo: "/images/placeholders/logo-placeholder.svg",
    // TODO(copy): placeholder — no description supplied for this venture.
    description: "Applied AI tooling that turns operational data into decisions teams can act on.",
    // TODO(url): no confirmed official domain.
    url: null,
  },
  {
    name: "Xconics",
    logo: "/images/Partners/xconics logo.svg",
    // TODO(copy): placeholder — confirm how Xconics should be positioned.
    description: "Technology solutions and integration services for enterprise networks.",
    // TODO(url): no confirmed official domain.
    url: null,
  },
];

export default citiusProducts;
