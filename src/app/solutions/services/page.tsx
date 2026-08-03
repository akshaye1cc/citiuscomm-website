import PageHero from "@/components/PageHero";
import PageBackdrop from "@/components/ui/PageBackdrop";
import ServiceCards from "./ServiceCards";

export const metadata = {
  title: "Services | Citiuscomm",
  description:
    "Detailed capabilities across data center, ICT infrastructure, cybersecurity, 5G networks, cloud engineering, and NOC operations.",
};

const ServicesPage = () => (
  <main className="relative bg-canvas">
    {/* One dot grid for the whole page — the hero opts out of its own via pattern={false}. */}
    <PageBackdrop />

    <div className="relative z-10">
      <PageHero
        eyebrow="Our Services"
        title="Six Practices."
        highlight="One Accountable Partner."
        description="Every practice is delivered turnkey — design, sourcing, deployment, integration, and operations — so there is always a single throat to choke and a single team to call."
        pattern={false}
      />

      <section className="bg-transparent py-16 md:py-20 lg:py-24">
        <div className="container">
          {/* Level-2 anchor for the outline — each practice card below is an h3. */}
          <h2 className="sr-only">Our practices</h2>
          <ServiceCards />
        </div>
      </section>
    </div>
  </main>
);

export default ServicesPage;
