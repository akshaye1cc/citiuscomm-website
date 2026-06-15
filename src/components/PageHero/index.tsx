import Badge from "@/components/ui/Badge";
import SectionPattern from "@/components/ui/SectionPattern";

type PageHeroProps = {
  title: string;
  highlight?: string;
  description: string;
  eyebrow?: string;
};

/**
 * Inner-page hero. Brand dot-grid + a single network arc with a traveling
 * pulse — consistent with the homepage's signature visual.
 */
const PageHero = ({ title, highlight, description, eyebrow }: PageHeroProps) => (
  <section className="relative z-10 overflow-hidden bg-canvas pb-16 pt-[120px] md:pb-20 md:pt-[150px] xl:pt-[170px]">
    <SectionPattern />

    {/* network arc accent along the bottom edge */}
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-[90px] w-full"
    >
      <path
        d="M-20 100 C 360 20, 1080 20, 1460 100"
        stroke="var(--ds-edge-2)"
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      <path
        d="M-20 100 C 360 20, 1080 20, 1460 100"
        pathLength={100}
        stroke="var(--ds-brand)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeOpacity="0.9"
        className="ds-flow"
        style={{ animationDuration: "5s" }}
      />
    </svg>

    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <div className="mb-6">
            <Badge variant="brand" dot>{eyebrow}</Badge>
          </div>
        )}

        <h1 className="mb-6 text-4xl font-bold leading-tight text-fg sm:text-5xl md:text-6xl">
          {title} {highlight && <span className="text-primary">{highlight}</span>}
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {description}
        </p>
      </div>
    </div>
  </section>
);

export default PageHero;
