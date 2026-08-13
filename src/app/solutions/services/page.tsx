import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import PageBackdrop from "@/components/ui/PageBackdrop";
import ServiceCards from "./ServiceCards";

export const metadata = {
  title: "Services | Citiuscomm",
  description:
    "Detailed capabilities across networking and FTTx, hyperscaler and data center, enterprise cyber security, managed services and NOC, electric mobility, and IoT and industrial automation.",
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
        description="Every practice is delivered turnkey: design, sourcing, deployment, integration, and operations, so there is always a single throat to choke and a single team to call."
        pattern={false}
      />

      {/* Bottom padding only: the hero above owns the gap, so adjacent sections
          never stack their padding into a dead band. */}
      <section className="bg-transparent pb-16 md:pb-20 lg:pb-24">
        <div className="container">
          {/* Level-2 anchor for the outline — each practice card below is an h3. */}
          <h2 className="sr-only">Our practices</h2>
          <ServiceCards />
        </div>
      </section>

      {/* Secondary defaults to this page — sent to industries instead. */}
      <CtaBand secondaryLabel="See the Industries We Serve" secondaryHref="/solutions/industries" />
    </div>
  </main>
);

export default ServicesPage;
