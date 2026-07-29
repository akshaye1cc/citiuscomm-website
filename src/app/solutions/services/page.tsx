import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import ServicesBentoGrid from "./ServicesBentoGrid";

export const metadata = {
  title: "Services | Citiuscomm",
  description:
    "Detailed capabilities across data center, ICT infrastructure, cybersecurity, 5G networks, cloud engineering, and NOC operations.",
};

const ServicesPage = () => (
  <main>
    <PageHero
      eyebrow="Our Services"
      title="Six Practices."
      highlight="One Accountable Partner."
      description="Every practice is delivered turnkey — design, sourcing, deployment, integration, and operations — so there is always a single throat to choke and a single team to call."
    />

    <section className="bg-canvas-subtle py-16 md:py-20 lg:py-24">
      <div className="container">
        {/* Level-2 anchor for the outline — each practice card below is an h3. */}
        <h2 className="sr-only">Our practices</h2>
        <Reveal>
          <ServicesBentoGrid />
        </Reveal>
      </div>
    </section>
  </main>
);

export default ServicesPage;
