import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/Common/SectionTitle";
import PageBackdrop from "@/components/ui/PageBackdrop";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";

export const metadata = {
  title: "Industries | Citiuscomm",
  description:
    "Carrier-grade infrastructure for telecom, BFSI, government, healthcare, energy, manufacturing, and more.",
};

const IndustriesPage = () => (
  <main className="relative bg-canvas">
    {/* One dot grid for the whole page — the hero opts out of its own via pattern={false}. */}
    <PageBackdrop />

    <div className="relative z-10">
      <PageHero
        eyebrow="Industries"
        title="Critical Infrastructure for"
        highlight="Every Sector"
        description="Wherever connectivity is mission-critical, the same carrier-grade delivery model applies: designed, deployed, and operated end to end."
        pattern={false}
      />

      <section className="relative bg-transparent py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            eyebrow="Who We Serve"
            title="Built for Demanding Environments"
            paragraph="From live carrier networks to plant floors and trading floors, sectors where downtime isn't an option."
            center
            width="640px"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry, i) => (
              // Per-index stagger rather than a modulo tied to one column count,
              // capped so the last row does not lag behind the scroll.
              <Reveal key={industry.slug} delay={Math.min(i, 7) * 0.05} className="h-full">
                <IndustryCard {...industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default IndustriesPage;
