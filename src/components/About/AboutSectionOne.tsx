import SectionTitle from "../Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { MiniTopology } from "@/components/ui/NetworkVisual";
import { CheckIcon } from "@/components/ui/icons";

const differentiators = [
  "30+ years of telecom expertise",
  "100M+ subscribers supported",
  "Multi-generation networks (2G-5G)",
  "13,000+ nodes managed globally",
  "Strategic OEM partnerships",
  "End-to-end deployment capability",
];

const values = [
  {
    title: "Expertise",
    text: "Bespoke end-to-end solutions",
  },
  {
    title: "Innovation",
    text: "Cutting-edge methodologies",
  },
  {
    title: "Customer Focus",
    text: "Unparalleled efficiency",
  },
];

const AboutSectionOne = () => (
  <section id="about" className="relative bg-canvas py-0 md:py-0 pb-20 md:pb-28 lg:pb-32">
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="ds-dots absolute inset-0 text-edge-2/90 dark:text-edge-2/63"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      />
    </div>
    <div className="container relative z-10">
      <div className="-mx-4 flex flex-wrap items-center">

          {/* Left: copy */}
          <div className="w-full px-4 lg:w-1/2">
            <Reveal variant="left">
              <SectionTitle
                eyebrow="Who We Are"
                title="Product Engineering & Technology Innovation"
                paragraph="Citiuscomm pioneers bespoke, end-to-end turnkey solutions that fuel the rapid evolution of the Communications and Networking Industry. With 30 years of expertise, we deliver cost-effective, high-quality solutions with unparalleled efficiency."
                mb="40px"
              />
            </Reveal>

            <div className="mb-12 max-w-[570px] lg:mb-0">
              <Reveal delay={0.1}>
                <h3 className="mb-5 text-xl font-bold text-fg sm:text-2xl">
                  Why Choose Citiuscomm
                </h3>
              </Reveal>

              <ul className="mb-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {differentiators.map((text, i) => (
                  <Reveal as="li" key={text} delay={0.12 + i * 0.06}>
                    <span className="flex items-start gap-3 text-base font-medium text-muted">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-muted text-primary">
                        <CheckIcon size={14} strokeWidth={2.4} />
                      </span>
                      {text}
                    </span>
                  </Reveal>
                ))}
              </ul>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {values.map(({ title, text }, i) => (
                  <Reveal key={title} delay={0.2 + i * 0.08}>
                    <div className="ds-sheen group relative h-full overflow-hidden rounded-2xl border border-edge/60 bg-gradient-to-br from-surface to-surface/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative">
                        <h4 className="mb-2 text-base font-bold text-fg">{title}</h4>
                        <p className="text-sm leading-relaxed text-muted">{text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right: network visual + heritage */}
          <div className="w-full px-4 lg:w-1/2">
            <Reveal variant="right" className="relative mx-auto max-w-[500px] lg:mr-0">
              <MiniTopology />
              <div className="mt-2 rounded-xl border border-edge bg-canvas-subtle p-4 text-center">
                <p className="text-sm font-semibold text-fg">Trusted Heritage</p>
                <p className="mt-1 text-xs text-muted">
                  Leadership backgrounds from Ericsson, Siemens, and ZTE
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
  </section>
);

export default AboutSectionOne;
