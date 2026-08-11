import Button from "@/components/ui/Button";
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
 * The diagonal cut, as a percentage of the band's width at its top and bottom
 * edges. The dense-dot wedge and the hairline are both cut on this one line, so
 * there is exactly one diagonal in the composition — move the pair together or
 * the accent stops agreeing with itself.
 */
const EDGE_TOP = 56;
const EDGE_BOTTOM = 28;

const wedge = `polygon(${EDGE_TOP}% 0, 100% 0, 100% 100%, ${EDGE_BOTTOM}% 100%)`;

/** Same line, 2px wide. Stated in px, not a percentage: a percentage-width
 *  hairline goes sub-pixel and disappears on a 375px screen. */
const hairline =
  `polygon(${EDGE_TOP}% 0, calc(${EDGE_TOP}% + 2px) 0, ` +
  `calc(${EDGE_BOTTOM}% + 2px) 100%, ${EDGE_BOTTOM}% 100%)`;

/**
 * Angular, not atmospheric: a hard diagonal navy→brand gradient, a wedge where
 * the dot grid doubles in density, and one crisp hairline on the cut. No radial
 * glows and no blur anywhere in here — every edge is a straight line, which is
 * what stops the band reading as a soft blue rectangle.
 *
 * Brand rather than navy: navy is already doing work higher up the homepage
 * (numbers band, testimonials), and repeating it would make the closing band
 * read as one more section instead of the end of the page.
 *
 * Text is white or white/90 and nothing lighter. White on brand is 5.3:1, so
 * the white/70 body treatment that works on navy falls to about 2.9:1 over the
 * brand end of the gradient and fails — do not reduce these further.
 *
 * Orange is still CTA-only: it appears on the two buttons and nowhere in the
 * band treatment itself.
 */
const CtaBand = ({
  title = "Ready to build your next-generation network?",
  description = "Talk to our engineers about data center, ICT, 5G, and cloud infrastructure, from design to deployment and operations.",
  primaryLabel = "Start the Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryHref = "/solutions/services",
}: CtaBandProps) => (
  <SectionShell
    tone="brand"
    className="overflow-hidden"
    decoration={
      <>
        {/* Navy fading out, rather than a navy→brand two-stop: the shell's brand
            fill is already the far end, and letting the navy drop to nothing
            lets the shell's own dot grid surface through the brand corner
            instead of being buried under a second opaque layer. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-navy-2/85 to-transparent"
        />
        {/* Density shift: the same grid at half the step, cut to the diagonal. */}
        <div
          aria-hidden
          className="ds-dots-dense pointer-events-none absolute inset-0 text-dots-inverted"
          style={{ clipPath: wedge }}
        />
        {/* The cut itself. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white/30"
          style={{ clipPath: hairline }}
        />
      </>
    }
  >
    <div className="container text-center">
      <h2 className="mx-auto mb-4 max-w-[680px] text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mb-9 max-w-[560px] text-lg leading-relaxed text-white/90">
        {description}
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button variant="cta" size="lg" href={primaryHref}>
          {primaryLabel}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
        {/* Same variant, one step down in size. With both buttons on the one
            CTA colour, size is the only thing left carrying hierarchy — lg for
            the action we want, md for the browse-instead.
            Focus is legible on brand without an override — the base ring carries
            a 2px white offset ring, which is 5.3:1 against brand blue. */}
        {secondaryLabel && (
          <Button variant="cta" size="md" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  </SectionShell>
);

export default CtaBand;
