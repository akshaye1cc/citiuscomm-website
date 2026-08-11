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
  { name: "Vianet",        logoSlot: "/images/Clients/vianet.svg",                   url: "https://www.vianet.com.np" },
  { name: "Subisu",        logoSlot: "/images/Clients/subisu.svg",                   url: "https://www.subisu.net.np" },
  { name: "Fastway",       logoSlot: "/images/Clients/fastway.svg",                  url: "https://www.fastway.in" },
  { name: "Nepal Telecom", logoSlot: "/images/Clients/nepal telecom.svg",            url: "https://www.ntc.net.np" },
  { name: "HPE",           logoSlot: "/images/Clients/HPE.svg",                      url: "https://www.hpe.com" },
  { name: "Yes Bank",      logoSlot: "/images/Clients/yes bank.png",                 url: "https://www.yesbank.in" },
  { name: "Kotak Bank",    logoSlot: "/images/Clients/kotak.png",                    url: "https://www.kotak.com" },
  { name: "ICICI Bank",    logoSlot: "/images/Clients/icici.png",                    url: "https://www.icicibank.com" },
  { name: "Siti",          logoSlot: "/images/Clients/siti digital.png",             url: "https://www.sitinetworks.com" },
  { name: "EfficientIP",   logoSlot: "/images/Clients/efficient ip.svg",             url: "https://www.efficientip.com" },
  { name: "TIBCO",         logoSlot: "/images/Clients/tibco.svg",                    url: "https://www.tibco.com" },
];

export default clientMarquee;
