import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionPattern from "@/components/ui/SectionPattern";

type AboutHeroProps = {
  eyebrow?: string;
  title: string;
  highlight: string;
  description: string;
};

const NetworkPulse = () => (
  <svg
    viewBox="0 0 400 400"
    className="mx-auto h-full w-full"
    aria-hidden
  >
    {/* Grid background */}
    <defs>
      <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="0" cy="0" r="1" fill="var(--ds-edge-2)" opacity="0.3" />
      </pattern>
      <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="var(--ds-brand)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="var(--ds-brand)" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background grid */}
    <rect width="400" height="400" fill="url(#grid-pattern)" />

    {/* Center node */}
    <circle
      cx="200"
      cy="200"
      r="12"
      fill="var(--ds-brand)"
      className="ds-pulse-center"
      style={{ animationDuration: "3s" }}
    />

    {/* Network nodes and connections */}
    {[
      { x: 80, y: 80 },
      { x: 320, y: 80 },
      { x: 320, y: 320 },
      { x: 80, y: 320 },
      { x: 200, y: 80 },
      { x: 320, y: 200 },
      { x: 200, y: 320 },
      { x: 80, y: 200 },
    ].map((node, i) => (
      <g key={i}>
        {/* Connection line */}
        <line
          x1="200"
          y1="200"
          x2={node.x}
          y2={node.y}
          stroke="var(--ds-primary)"
          strokeWidth="1.5"
          opacity="0.3"
          strokeDasharray="4 4"
        />

        {/* Outer node */}
        <circle
          cx={node.x}
          cy={node.y}
          r="6"
          fill="var(--ds-brand)"
          opacity="0.8"
        />
      </g>
    ))}

    {/* Animated rings at center */}
    <circle
      cx="200"
      cy="200"
      r="30"
      fill="none"
      stroke="var(--ds-brand)"
      strokeWidth="1"
      opacity="0.4"
      className="ds-ring-pulse"
      style={{ animationDuration: "4s" }}
    />
    <circle
      cx="200"
      cy="200"
      r="50"
      fill="none"
      stroke="var(--ds-brand)"
      strokeWidth="1"
      opacity="0.2"
      className="ds-ring-pulse"
      style={{
        animationDuration: "4s",
        animationDelay: "0.5s",
      }}
    />
  </svg>
);

const AboutHero = ({ eyebrow, title, highlight, description }: AboutHeroProps) => (
  <section className="relative overflow-hidden bg-canvas pb-16 pt-[120px] md:pb-24 md:pt-[150px] xl:pt-[170px]">
    <SectionPattern />

    <div className="container relative z-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: Content */}
        <Reveal variant="left" className="max-w-xl">
          {eyebrow && (
            <div className="mb-6">
              <Badge variant="brand" dot>
                {eyebrow}
              </Badge>
            </div>
          )}

          <h1 className="mb-6 text-4xl font-bold leading-tight text-fg sm:text-5xl lg:text-5xl">
            {title} <span className="text-primary">{highlight}</span>
          </h1>

          <p className="text-lg leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>

        {/* Right: Animated Network Visualization */}
        <Reveal variant="right" className="relative">
          <div className="relative mx-auto h-96 w-full max-w-md lg:h-full lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl border border-primary/20 bg-gradient-to-br from-brand-muted/40 to-transparent backdrop-blur-sm" />
            <div className="relative h-full w-full p-8">
              <NetworkPulse />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutHero;
