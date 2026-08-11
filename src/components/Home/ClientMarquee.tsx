import SectionShell from "@/components/ui/SectionShell";
import clientMarquee from "@/data/clientMarquee";

/**
 * ClientMarquee — the customer logo scroll on the homepage.
 *
 * Deliberately a second, separate band from PartnerMarquee: that one is the OEM
 * wall ("built with"), this one is the client wall ("trusted by"). Same tint
 * band and same tile treatment so they read as a pair, but they never share a
 * data source — see src/data/clientMarquee.ts.
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

/* Bordered tile on a tinted band: white fill plus the hairline is what
   separates each logo from the wash behind it. */
const TILE =
  "mx-3 flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl border border-edge bg-surface px-8 py-6 shadow-e1";

export default function ClientMarquee() {
  return (
    <SectionShell tone="tint" size="compact">
      <div className="container mb-9 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-faint">
          Trusted by carriers, broadcasters, and enterprises
        </p>
      </div>

      <div className="relative">
        {/* Edge fades run to canvas-tint-FLAT, not canvas and not canvas-tint.
            The band itself is a 70% tint, so fading to the tint token would
            stack a second pass of it over the band and leave a darker column at
            each edge; fading to canvas leaves a white seam. The flat token is
            that same tint already composited over canvas. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas-tint-flat to-transparent md:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas-tint-flat to-transparent md:w-48" />

        <div className="overflow-hidden">
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
                  className="w-auto select-none object-contain opacity-90 max-h-16"
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
                  className={`${TILE} transition-colors duration-200 hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
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
