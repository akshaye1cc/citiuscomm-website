import WhoWeAre from "@/components/About/WhoWeAre";
import Badge from "@/components/ui/Badge";
import PageBackdrop from "@/components/ui/PageBackdrop";

export const metadata = {
  title: "About Us | Citiuscomm",
  description:
    "Citiuscomm builds technology ecosystems that scale with ambition — combining innovation, reliability, and deep execution expertise.",
};

const AboutPage = () => (
  <main className="relative bg-canvas">
    {/* One dot grid for the whole page — see PageBackdrop for why it is not fixed. */}
    <PageBackdrop />

    <div className="relative z-10">
      <section className="relative overflow-hidden bg-transparent pb-0 pt-[120px] md:pt-[150px] xl:pt-[170px]">
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="max-w-xl">
              <div className="mb-6">
                <Badge variant="brand" dot>About Us</Badge>
              </div>

              <h1 className="mb-8 text-4xl font-bold leading-tight text-fg sm:text-5xl lg:text-5xl">
                Who <span className="text-brand">We Are</span>
              </h1>

              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  We are a trusted technology solutions aggregator enabling telecom operators, internet service providers, enterprises, and government organizations to build, modernize, and manage secure, scalable, and future-ready digital infrastructure.
                </p>
                <p>
                  By bringing together world-class technologies, strategic partnerships, and deep technical expertise, we deliver end-to-end solutions across networking, cybersecurity, cloud, data centers, collaboration, and managed services.
                </p>
                <p>
                  Serving as a single partner throughout the entire technology lifecycle, we transform complex challenges into competitive advantages.
                </p>
              </div>
            </div>

            {/* Right: Animated Network Visualization */}
            <div className="relative">
              <div className="relative mx-auto h-96 w-full max-w-md lg:h-full lg:max-w-none">
                <div className="absolute inset-0 rounded-3xl border border-primary/20 bg-gradient-to-br from-brand-muted/40 to-transparent backdrop-blur-sm" />
                <div className="relative h-full w-full p-8">
                  <svg viewBox="0 0 480 480" className="mx-auto h-full w-full" aria-hidden>
                    <defs>
                      <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--ds-brand)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--ds-brand)" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="flow-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--ds-brand)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="var(--ds-brand)" stopOpacity="0.2" />
                      </linearGradient>
                      <filter id="node-glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <g opacity="0.2">
                      <circle cx="240" cy="240" r="200" fill="none" stroke="var(--ds-brand)" strokeWidth="0.5" />
                      <circle cx="240" cy="240" r="150" fill="none" stroke="var(--ds-brand)" strokeWidth="0.5" />
                      <circle cx="240" cy="240" r="100" fill="none" stroke="var(--ds-brand)" strokeWidth="0.5" />
                    </g>

                    {[
                      { x: 240, y: 80 },
                      { x: 400, y: 150 },
                      { x: 400, y: 330 },
                      { x: 240, y: 400 },
                      { x: 80, y: 330 },
                      { x: 80, y: 150 },
                    ].map((node, i) => (
                      <g key={i}>
                        <line x1="240" y1="240" x2={node.x} y2={node.y} stroke="url(#flow-gradient-1)" strokeWidth="1.5" opacity="0.5" className="ds-tech-line" style={{ animationDelay: `${i * 0.1}s` }} />
                        <circle cx={node.x} cy={node.y} r="18" fill="none" stroke="var(--ds-brand)" strokeWidth="1" opacity="0.3" className="ds-node-ring" style={{ animationDelay: `${i * 0.15}s` }} />
                        <circle cx={node.x} cy={node.y} r="10" fill="var(--ds-brand)" filter="url(#node-glow)" className="ds-node-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                        <circle cx={node.x} cy={node.y} r="6" fill="var(--ds-brand)" opacity="0.6" />
                      </g>
                    ))}

                    <g>
                      <circle cx="240" cy="240" r="50" fill="none" stroke="var(--ds-brand)" strokeWidth="1" opacity="0.2" className="ds-ring-expand" style={{ animationDelay: "0s" }} />
                      <circle cx="240" cy="240" r="50" fill="none" stroke="var(--ds-brand)" strokeWidth="1" opacity="0.15" className="ds-ring-expand" style={{ animationDelay: "0.3s" }} />
                      <circle cx="240" cy="240" r="50" fill="none" stroke="var(--ds-brand)" strokeWidth="1" opacity="0.1" className="ds-ring-expand" style={{ animationDelay: "0.6s" }} />
                      <circle cx="240" cy="240" r="16" fill="url(#flow-gradient-2)" filter="url(#node-glow)" className="ds-core-pulse" />
                      <circle cx="240" cy="240" r="10" fill="var(--ds-brand)" opacity="0.8" />
                      <circle cx="240" cy="240" r="6" fill="white" opacity="0.4" className="ds-twinkle" />
                    </g>

                    <g opacity="0.15">
                      <path d="M 240 80 Q 400 150 400 330" fill="none" stroke="var(--ds-brand)" strokeWidth="1" />
                      <path d="M 400 330 Q 240 400 80 330" fill="none" stroke="var(--ds-brand)" strokeWidth="1" />
                      <path d="M 80 330 Q 80 150 240 80" fill="none" stroke="var(--ds-brand)" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhoWeAre />
    </div>
  </main>
);

export default AboutPage;
