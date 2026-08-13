import StaticNodeMesh from "@/components/hero-animation/StaticNodeMesh";
import Button from "@/components/ui/Button";
import SectionAccent from "@/components/ui/SectionAccent";
import SectionShell from "@/components/ui/SectionShell";

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * The closing CTA: a solid navy panel inset into a transparent section, with the
 * hero's node mesh at very low opacity bleeding off its right edge.
 *
 * A panel rather than a full-bleed band. The page is one continuous white
 * surface with a dot grid running through it, and a band would cut that surface
 * in two at the very bottom. An inset panel sits *on* the page instead — same
 * object logic as the filled cards above it, just larger, and the dot grid runs
 * past it on all four sides.
 *
 * The mesh is the point. Every page opens on it and now every page closes on
 * it, which is the one motif the site can claim as its own — so this needs no
 * private decoration. The gradient, the dot-density wedge, and the hairline that
 * preceded it are gone; each was a device that appeared here and nowhere else.
 *
 * Solid navy rather than brand blue: the mesh is blue-ramped and would have
 * nothing to sit against on a brand fill. The panel also carries no dot grid of
 * its own — a 26px grid under a 36px mesh lattice moirés, the same clash
 * NetworkHero puts a scrim behind its mesh to avoid.
 *
 * StaticNodeMesh is server-rendered and never animates, so there is no
 * reduced-motion case to handle: the hero's version is the one that moves.
 *
 * Text colours come from the on-dark tokens, which are measured against navy
 * (16.5:1 and 8.7:1). Orange stays CTA-only — the two buttons and nothing else.
 */
const CtaBand = ({
  title = "Ready to build your next-generation network?",
  description = "Talk to our engineers about data center, ICT, 5G, and cloud infrastructure, from design to deployment and operations.",
  primaryLabel = "Start the Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryHref = "/solutions/services",
}: CtaBandProps) => (
  // SectionShell's sizes are top-padding-only, so that adjacent sections do not
  // stack two paddings into one oversized gap. CtaBand is the last section on
  // every page it appears on, so it is the one place that has to add the
  // bottom edge back — without it the navy panel sits flush against the
  // footer's top border.
  <SectionShell className="pb-20 md:pb-24 lg:pb-28">
    <div className="container">
      <div className="relative overflow-hidden rounded-[var(--ds-radius)] bg-navy px-6 py-16 sm:px-12 md:py-20 lg:px-16">
        {/* Overhangs the right edge and runs past the panel top and bottom, so
            the panel's overflow-hidden crops it on three sides — it reads as a
            much larger field the panel happens to be a window onto. Dropped
            below sm for the same reason NetworkHero drops it: at that width the
            36px lattice compresses into speckle and stops reading as a mesh. */}
        <StaticNodeMesh
          color="#ffffff"
          opacity={0.08}
          fadeLeft
          className="absolute -inset-y-[15%] -right-[8%] hidden w-[68%] sm:block lg:w-[52%]"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <SectionAccent onDark className="mb-6" />
          <h2 className="mx-auto mb-4 max-w-[680px] text-3xl font-bold leading-tight text-on-dark md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mb-9 max-w-[560px] text-lg leading-relaxed text-on-dark-muted">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="cta" size="lg" href={primaryHref}>
              {primaryLabel}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            {/* Both buttons are lg. Hierarchy is carried by treatment — solid
                orange against an orange outline — rather than by size, which
                made the secondary action look like a smaller version of the
                same button instead of a different kind of one. */}
            {secondaryLabel && (
              <Button variant="cta-outline" size="lg" href={secondaryHref}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
);

export default CtaBand;
