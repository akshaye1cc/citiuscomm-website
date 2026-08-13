export type MarqueeClient = {
  name: string;
  /**
   * Path to the logo asset. Named a "slot" because the mapping below is
   * provisional — several entries point at whatever mark already exists under
   * /images/Clients (or /images/Partners) rather than at an asset supplied and
   * approved for this list. Swap the path, not the entry, when a final logo
   * arrives.
   */
  logoSlot: string;
  /**
   * Official site, opened in a new tab. `null` where no official domain has
   * been confirmed — the marquee renders those as a plain tile rather than a
   * dead link.
   */
  url: string | null;
  /**
   * Multiplier on the logo's rendered max-height (1 = the default 4rem). Same
   * device as HomePartner.logoScale: for marks that are square or near-square,
   * which render short and narrow next to the wide wordmarks in this list even
   * though every logo shares the same max-height. Not a fix for padding baked
   * into the asset — re-crop the file for that instead.
   */
  logoScale?: number;
};

/**
 * Clients shown in the homepage client marquee.
 *
 * Deliberately separate from partnerEcosystem / homePartners, which are the OEM
 * and vendor lists. The two are different claims — "we build with them" versus
 * "they buy from us" — and must not be merged or derived from one another.
 *
 * ⚠ Four entries below (Ciena, HPE, EfficientIP, TIBCO) also appear in the OEM
 * lists, so they are being claimed in both directions. They are included here
 * as given, pending confirmation of which relationship is the right one.
 */
const clientMarquee: MarqueeClient[] = [
  { name: "Rakuten",       logoSlot: "/images/Clients/2000px-Rakuten_Global_Brand_Logo.svg_.png", url: "https://www.rakuten.com" },
  // No official domain confirmed — needs a source before it can be linked.
  { name: "UCN",           logoSlot: "/images/Clients/ucn.png",                      url: null },
  { name: "Hathway",       logoSlot: "/images/Clients/HATHWAY.NS_BIG-7c7b81b8.png",  url: "https://www.hathway.com" },
  // Only mark on hand lives under Partners/ — Ciena has no asset in Clients/.
  { name: "Ciena",         logoSlot: "/images/Partners/ciena.png",                   url: "https://www.ciena.com" },
  { name: "Sony",          logoSlot: "/images/Clients/sony.svg",                     url: "https://www.sony.com" },
  { name: "Discovery",     logoSlot: "/images/Clients/Discovery-Logo-Vector.svg-.png", url: "https://www.discovery.com" },
  // Square and near-square marks. A 1:1 logo at the shared 4rem max-height is
  // 64px wide; the wordmarks beside it run the full 208px of the tile's content
  // width, so the squares read as a fraction of the size at the same nominal
  // height. These scales bring them to ~118px, close to filling the tile's
  // 120px content height. Ratios are from the assets themselves, so the two
  // wider marks below take a lower multiplier and are capped by width instead.
  { name: "Vianet",        logoSlot: "/images/Clients/vianet.svg",                   url: "https://www.vianet.com.np", logoScale: 1.85 },
  { name: "Subisu",        logoSlot: "/images/Clients/subisu.svg",                   url: "https://www.subisu.net.np" },
  { name: "Fastway",       logoSlot: "/images/Clients/fastway.svg",                  url: "https://www.fastway.in" },
  { name: "Nepal Telecom", logoSlot: "/images/Clients/nepal telecom.svg",            url: "https://www.ntc.net.np", logoScale: 1.85 },
  { name: "HPE",           logoSlot: "/images/Clients/HPE.svg",                      url: "https://www.hpe.com", logoScale: 1.85 },
  { name: "Yes Bank",      logoSlot: "/images/Clients/yes bank.png",                 url: "https://www.yesbank.in", logoScale: 1.85 },
  { name: "Kotak Bank",    logoSlot: "/images/Clients/kotak.png",                    url: "https://www.kotak.com" },
  { name: "ICICI Bank",    logoSlot: "/images/Clients/icici.png",                    url: "https://www.icicibank.com", logoScale: 1.85 },
  { name: "Siti",          logoSlot: "/images/Clients/siti digital.png",             url: "https://www.sitinetworks.com", logoScale: 1.85 },
  // 2:1, so width caps this one at ~104px tall whatever the multiplier says.
  { name: "EfficientIP",   logoSlot: "/images/Clients/efficient ip.svg",             url: "https://www.efficientip.com", logoScale: 1.7 },
  { name: "TIBCO",         logoSlot: "/images/Clients/tibco.svg",                    url: "https://www.tibco.com" },
];

export default clientMarquee;
