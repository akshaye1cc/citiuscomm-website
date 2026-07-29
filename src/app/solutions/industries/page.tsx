import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Industries | Citiuscomm",
  description:
    "Carrier-grade infrastructure for telecom, BFSI, government, healthcare, energy, manufacturing, and more.",
};

const IndustriesPage = () => (
  <main>
    <PageHero
      eyebrow="Industries"
      title="Critical Infrastructure for"
      highlight="Every Sector"
      description="Wherever connectivity is mission-critical, the same carrier-grade delivery model applies — designed, deployed, and operated end to end."
    />

    <section className="relative bg-canvas-subtle py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="Who We Serve"
          title="Built for Demanding Environments"
          paragraph="From live carrier networks to plant floors and trading floors — sectors where downtime isn't an option."
          center
          width="640px"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, description, solutions, icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.07}>
              <div className="ds-card ds-sheen group relative flex h-full flex-col overflow-hidden p-7">
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-brand-muted p-3 text-brand">
                  {icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-fg">{title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {solutions.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-edge bg-canvas-subtle px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default IndustriesPage;
