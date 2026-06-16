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
  <section id="about" className="bg-canvas py-16 md:py-24">
    <div className="container">
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
                    <div className="h-full rounded-xl border border-edge bg-surface p-4 transition-colors duration-200 hover:border-primary/40">
                      <h4 className="mb-1 text-sm font-bold text-fg">{title}</h4>
                      <p className="text-xs leading-relaxed text-muted">{text}</p>
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
