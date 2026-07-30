import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";

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
            <Reveal key={title} delay={(i % 3) * 0.07} className="h-full">
              <IndustryCard title={title} description={description} solutions={solutions} icon={icon} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default IndustriesPage;
