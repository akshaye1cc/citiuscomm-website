import Button from "@/components/ui/Button";

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Closing call-to-action band — brand navy in both themes, dot-grid pattern,
 * one orange CTA. Drop it before the footer on any page.
 */
const CtaBand = ({
  title = "Ready to build your next-generation network?",
  description = "Talk to our engineers about data center, ICT, 5G, and cloud infrastructure — from design to deployment and operations.",
  primaryLabel = "Start the Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Solutions",
  secondaryHref = "/solutions",
}: CtaBandProps) => (
  <section className="relative overflow-hidden bg-secondary py-20 md:py-24">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="ds-dots absolute inset-0 text-white/[0.07]" />
      <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />
    </div>

    <div className="container relative z-10 text-center">
      <h2 className="mx-auto mb-4 max-w-[680px] text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mb-9 max-w-[560px] text-lg leading-relaxed text-white/70">
        {description}
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button variant="cta" size="lg" href={primaryHref}>
          {primaryLabel}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
        {secondaryLabel && (
          <Button variant="inverse" size="lg" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  </section>
);

export default CtaBand;
