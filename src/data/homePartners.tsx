export type HomePartner = {
  name: string;
  logo: string;
  /**
   * Multiplier on the logo's rendered max-height (1 = the default 4rem).
   *
   * Only for genuinely square marks, which lose height against wordmarks even
   * when the asset is cropped tight. It is NOT a workaround for a file with
   * transparent padding baked in — fix the asset instead, or the padding scales
   * up along with the mark.
   */
  logoScale?: number;
};

/**
 * The nine vendors shown in the homepage marquee, in display order.
 *
 * Kept separate from partnerEcosystem rather than filtered out of it: three of
 * these are not in the ecosystem grid, and matching by name across two files
 * would break silently the first time either list is reordered or renamed.
 *
 * Every asset here has been checked for transparent padding — each mark fills
 * at least ~85% of its canvas vertically, so max-h-16 renders it at full size.
 * Swapping in a raw vendor download will reintroduce the padding and the logo
 * will render visibly small; re-crop before replacing one.
 */
const homePartners: HomePartner[] = [
  { name: "Cisco",            logo: "/images/Partners/Cicso.svg" },
  { name: "Dell",             logo: "/images/Partners/dell.svg" },
  { name: "Arista",           logo: "/images/Partners/arista.png" },
  { name: "Red Hat",          logo: "/images/Partners/Redhat.png" },
  { name: "SonicWall",        logo: "/images/Partners/sonicwall.png" },
  // Square circular mark in a square viewBox — already renders full height, but
  // reads small beside wordmarks. Cropping cannot help a shape that is square.
  { name: "HP",               logo: "/images/Partners/hp.svg", logoScale: 1.25 },
  { name: "IBM",              logo: "/images/Partners/ibm.png" },
  { name: "Fortinet",         logo: "/images/Partners/fortinet.png" },
  { name: "Juniper Networks", logo: "/images/Partners/Juniper networks.svg" },
];

export default homePartners;
