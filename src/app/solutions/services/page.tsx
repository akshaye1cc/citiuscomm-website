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

    <section className="bg-canvas py-16 md:py-20 lg:py-24">
      <div className="container">
        <Reveal>
          <ServicesBentoGrid />
        </Reveal>
      </div>
    </section>
  </main>
);

export default ServicesPage;
