import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionPattern from "@/components/ui/SectionPattern";

type AboutHeroProps = {
  eyebrow?: string;
  title: string;
  highlight: string;
  description: string;
};

const NetworkVisualization = () => (
  <svg
    viewBox="0 0 480 480"
    className="mx-auto h-full w-full"
    aria-hidden
  >
    <defs>
      {/* Gradients for visual depth */}
      <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--ds-brand)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="var(--ds-brand)" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="flow-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--ds-brand)" stopOpacity="0.6" />
        <stop offset="100%" stopColor="var(--ds-brand)" stopOpacity="0.2" />
      </linearGradient>

      {/* Glow effect for nodes */}
      <filter id="node-glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Outer ring structure */}
    <g opacity="0.2">
      <circle cx="240" cy="240" r="200" fill="none" stroke="var(--ds-brand)" strokeWidth="0.5" />
      <circle cx="240" cy="240" r="150" fill="none" stroke="var(--ds-brand)" strokeWidth="0.5" />
      <circle cx="240" cy="240" r="100" fill="none" stroke="var(--ds-brand)" strokeWidth="0.5" />
    </g>

    {/* Main node network - 6 outer nodes + center */}
    {[
      { x: 240, y: 80, label: "Data" },      // Top
      { x: 400, y: 150, label: "Cloud" },    // Top-right
      { x: 400, y: 330, label: "Network" },  // Bottom-right
      { x: 240, y: 400, label: "Infra" },    // Bottom
      { x: 80, y: 330, label: "Security" },  // Bottom-left
      { x: 80, y: 150, label: "IoT" },       // Top-left
    ].map((node, i) => (
      <g key={i}>
        {/* Connection to center */}
        <line
          x1="240"
          y1="240"
          x2={node.x}
          y2={node.y}
          stroke="url(#flow-gradient-1)"
          strokeWidth="1.5"
          opacity="0.5"
          className="ds-tech-line"
          style={{ animationDelay: `${i * 0.1}s` }}
        />

        {/* Animated data packet traveling along connection */}
        <circle
          cx="240"
          cy="240"
          r="3"
          fill="var(--ds-brand)"
          className="ds-data-packet"
          style={{
            animationDuration: "3s",
            animationDelay: `${i * 0.35}s`,
          }}
        >
          <animate
            attributeName="cx"
            from="240"
            to={node.x}
            dur="3s"
            begin={`${i * 0.35}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            from="240"
            to={node.y}
            dur="3s"
            begin={`${i * 0.35}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Node container */}
        <g>
          {/* Outer glow ring */}
          <circle
            cx={node.x}
            cy={node.y}
            r="18"
            fill="none"
            stroke="var(--ds-brand)"
            strokeWidth="1"
            opacity="0.3"
            className="ds-node-ring"
            style={{ animationDelay: `${i * 0.15}s` }}
          />

          {/* Main node */}
          <circle
            cx={node.x}
            cy={node.y}
            r="10"
            fill="var(--ds-brand)"
            filter="url(#node-glow)"
            className="ds-node-pulse"
            style={{ animationDelay: `${i * 0.15}s` }}
          />

          {/* Inner highlight */}
          <circle
            cx={node.x}
            cy={node.y}
            r="6"
            fill="var(--ds-brand)"
            opacity="0.6"
          />
        </g>
      </g>
    ))}

    {/* Center hub - the core */}
    <g>
      {/* Outer rings */}
      <circle
        cx="240"
        cy="240"
        r="50"
        fill="none"
        stroke="var(--ds-brand)"
        strokeWidth="1"
        opacity="0.2"
        className="ds-ring-expand"
        style={{ animationDelay: "0s" }}
      />
      <circle
        cx="240"
        cy="240"
        r="50"
        fill="none"
        stroke="var(--ds-brand)"
        strokeWidth="1"
        opacity="0.15"
        className="ds-ring-expand"
        style={{ animationDelay: "0.3s" }}
      />
      <circle
        cx="240"
        cy="240"
        r="50"
        fill="none"
        stroke="var(--ds-brand)"
        strokeWidth="1"
        opacity="0.1"
        className="ds-ring-expand"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Core node */}
      <circle
        cx="240"
        cy="240"
        r="16"
        fill="url(#flow-gradient-2)"
        filter="url(#node-glow)"
        className="ds-core-pulse"
      />

      {/* Inner core highlight */}
      <circle
        cx="240"
        cy="240"
        r="10"
        fill="var(--ds-brand)"
        opacity="0.8"
      />

      {/* Core twinkle */}
      <circle
        cx="240"
        cy="240"
        r="6"
        fill="white"
        opacity="0.4"
        className="ds-twinkle"
      />
    </g>

    {/* Cross-connections between outer nodes for complexity */}
    <g opacity="0.15">
      <path
        d="M 240 80 Q 400 150 400 330"
        fill="none"
        stroke="var(--ds-brand)"
        strokeWidth="1"
      />
      <path
        d="M 400 330 Q 240 400 80 330"
        fill="none"
        stroke="var(--ds-brand)"
        strokeWidth="1"
      />
      <path
        d="M 80 330 Q 80 150 240 80"
        fill="none"
        stroke="var(--ds-brand)"
        strokeWidth="1"
      />
    </g>
  </svg>
);

const AboutHero = ({ eyebrow, title, highlight, description }: AboutHeroProps) => (
  <section className="relative overflow-hidden bg-canvas pb-0 pt-[120px] md:pt-[150px] xl:pt-[170px]">
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
            {title} <span className="text-brand">{highlight}</span>
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
              <NetworkVisualization />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutHero;
