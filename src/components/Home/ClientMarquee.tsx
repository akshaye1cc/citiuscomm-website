import Counter from "@/components/ui/Counter";
import SectionAccent from "@/components/ui/SectionAccent";
import SectionShell from "@/components/ui/SectionShell";
import clientMarquee from "@/data/clientMarquee";

/**
 * The two figures the site is allowed to claim. Deliberately only two: the
 * node count and the subscriber count that used to sit alongside them were
 * never verified against a source of record, so they have been dropped rather
 * than published. 20+ partners is supported by /partners, which lists 24 named
 * vendors in its ecosystem grid.
 *
 * These used to be their own navy band directly under the hero. They are proof
 * for the client list, not a claim that needs a section of its own, so they now
 * run as one slim line above it.
 */
const stats = [
  { value: "30+", label: "Years of combined expertise" },
  { value: "20+", label: "Partners" },
];

/**
 * ClientMarquee — the customer logo scroll, and the three proof figures above
 * it. First section after the hero.
 *
 * Deliberately separate from PartnerMarquee: that one is the OEM wall ("built
 * with"), this one is the client wall ("trusted by"). Same tile treatment so
 * they read as a pair, but they never share a data source — see
 * src/data/clientMarquee.ts.
 *
 * Two copies of the track is enough here. The .ds-marquee-track keyframe
 * translates -50%, so a seamless loop needs half the track to be at least as
 * wide as the viewport: seventeen tiles at 280px (w-64 + mx-3) is 4,760px per
 * copy, which clears 2,560px comfortably. PartnerMarquee needs four copies only
 * because it carries nine logos.
 *
 * Duration is set so the tiles travel at ~133px/s, matching PartnerMarquee and
 * the /partners marquee. Direction is reversed so the two homepage marquees
 * counter-scroll rather than reading as one long belt.
 */

const COPIES = 2;

const track = Array.from({ length: COPIES }, (_, copy) =>
  clientMarquee.map((client) => ({ ...client, copy })),
).flat();

/* The shared tile primitive, same as every other surface on the site. White
   fill plus the hairline is what separates each logo from the page behind it.
   Sized up from h-32/w-64 to give the square marks room: at the old height the
   content box was only 80px tall, which capped how large a 1:1 logo could ever
   render no matter what logoScale said. Content box is now 208 x 120. */
const TILE = "ds-tile mx-3 flex h-40 w-72 shrink-0 items-center justify-center px-10 py-5";

export default function ClientMarquee() {
  return (
    <SectionShell>
      <div className="container mb-10 flex flex-col items-center text-center">
        <SectionAccent className="mb-6" />

        {/* One line, not a band. Figures in brand blue so they carry on white
            without needing a fill behind them. */}
        <dl className="mb-6 flex flex-wrap items-baseline justify-center gap-x-8 gap-y-2">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex items-baseline gap-2">
              <dt className="sr-only">{label}</dt>
              <dd className="flex items-baseline gap-2">
                <Counter value={value} className="text-xl font-bold text-brand" />
                <span aria-hidden className="text-sm text-muted">
                  {label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-xs font-semibold uppercase tracking-widest text-faint">
          Trusted by carriers, broadcasters, and enterprises
        </p>
      </div>

      <div className="relative">
        <div className="ds-fade-x overflow-hidden">
          <div
            className="ds-marquee-track"
            style={{ animationDirection: "reverse", animationDuration: "36s" }}
          >
            {track.map((client) => {
              // Only the first copy is announced and reachable — the second is
              // the same seventeen logos again, and would otherwise repeat
              // itself to a screen reader and double every tab stop.
              const isDuplicate = client.copy > 0;

              const logo = (
                <img
                  src={client.logoSlot}
                  alt={isDuplicate ? "" : client.name}
                  style={
                    client.logoScale ? { maxHeight: `${4 * client.logoScale}rem` } : undefined
                  }
                  // max-w-full so a scaled-up mark is capped by the tile's
                  // content width rather than overflowing it — object-contain
                  // then letterboxes it instead of cropping.
                  className="max-h-16 w-auto max-w-full select-none object-contain opacity-90"
                  draggable={false}
                />
              );

              // Clients without a confirmed official domain render as a plain
              // tile rather than a link to nowhere.
              return client.url ? (
                <a
                  key={`${client.copy}-${client.name}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isDuplicate ? undefined : client.name}
                  aria-hidden={isDuplicate}
                  tabIndex={isDuplicate ? -1 : undefined}
                  className={`${TILE} ds-tile-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                >
                  {logo}
                </a>
              ) : (
                <div
                  key={`${client.copy}-${client.name}`}
                  aria-label={isDuplicate ? undefined : client.name}
                  aria-hidden={isDuplicate}
                  className={TILE}
                >
                  {logo}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
