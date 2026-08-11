import SectionShell from "@/components/ui/SectionShell";
import homePartners from "@/data/homePartners";

/**
 * PartnerMarquee — the OEM/vendor logo scroll, on a tint band.
 *
 * NOT CURRENTLY RENDERED ANYWHERE. It was removed from the homepage: this is
 * the "who we build with" claim, and it does not belong between the services
 * row and the case studies. Kept for /partners, where it does belong. Do not
 * confuse it with Home/ClientMarquee, which is the "who we serve" list.
 *
 * Same tile treatment as the client marquee on /partners, but the track is
 * repeated four times rather than twice. The .ds-marquee-track keyframe
 * translates -50%, so a seamless loop needs *half* the track to be at least as
 * wide as the viewport. Nine tiles at 280px (w-64 + mx-3) is 2,520px per copy:
 * two copies put the halfway mark at 2,520px, which is narrower than a 2,560px
 * screen and opens a growing gap at the trailing edge before each wrap. Four
 * copies put it at 5,040px and the loop holds well past 2,560px. The client
 * marquee gets away with two copies only because it carries twenty logos.
 *
 * Duration is set so the tiles travel at ~133px/s, matching the /partners
 * marquee (5,600px per 42s) rather than matching its number on the clock.
 */

const COPIES = 4;

const track = Array.from({ length: COPIES }, (_, copy) =>
  homePartners.map((partner) => ({ ...partner, copy })),
).flat();

export default function PartnerMarquee() {
  return (
    <SectionShell tone="tint" size="compact">
      <div className="container mb-9 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-faint">
          Built with the industry&apos;s leading infrastructure platforms
        </p>
      </div>

      <div className="relative">
        {/* Edge fades run to canvas-tint-FLAT, not canvas and not canvas-tint.
            The band itself is a 70% tint, so fading to the tint token would
            stack a second pass of it over the band and leave a darker column at
            each edge; fading to canvas leaves the white seam this replaced.
            The flat token is that same tint already composited over canvas. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas-tint-flat to-transparent md:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas-tint-flat to-transparent md:w-48" />

        <div className="overflow-hidden">
          <div className="ds-marquee-track" style={{ animationDuration: "38s" }}>
            {track.map((partner) => (
              <div
                key={`${partner.copy}-${partner.name}`}
                // Only the first copy is announced — the other three are the
                // same nine logos again and would just repeat themselves.
                aria-label={partner.copy === 0 ? partner.name : undefined}
                aria-hidden={partner.copy > 0}
                // Bordered tile on a tinted band: white fill plus the hairline
                // is what separates each logo from the wash behind it.
                className="mx-3 flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl border border-edge bg-surface px-8 py-6 shadow-e1"
              >
                <img
                  src={partner.logo}
                  alt={partner.copy === 0 ? partner.name : ""}
                  style={
                    partner.logoScale
                      ? { maxHeight: `${4 * partner.logoScale}rem` }
                      : undefined
                  }
                  className="w-auto select-none object-contain opacity-90 max-h-16"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
