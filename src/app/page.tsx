import ScrollUp from "@/components/Common/ScrollUp";
import CtaBand from "@/components/CtaBand";
import Awards from "@/components/Home/Awards";
import CaseStudyRow from "@/components/Home/CaseStudyRow";
import ClientMarquee from "@/components/Home/ClientMarquee";
import NumbersBand from "@/components/Home/NumbersBand";
import ServicesGrid from "@/components/Home/ServicesGrid";
import Testimonials from "@/components/Home/Testimonials";
import NetworkHero from "@/components/hero-animation/NetworkHero";
import PageBackdrop from "@/components/ui/PageBackdrop";

/**
 * Homepage band rhythm, top to bottom:
 *
 *   hero          light   (transparent — the page dot grid shows through)
 *   numbers       navy    (opaque, own inverted grid)
 *   services      tint    (translucent — dots still read)
 *   case studies  light
 *   clients       tint
 *   testimonials  navy
 *   awards        tint
 *   CTA           brand
 *
 * No two adjacent sections share a tone, and no two opaque bands are adjacent:
 * every dark cut has at least one section either side that the page backdrop
 * shows through, which is what keeps the single dot grid reading as continuous.
 *
 * Services is tint rather than light for that reason alone. It was light while
 * PartnerMarquee sat between it and the case studies; with that band gone the
 * two would have been transparent back to back and merged into exactly the flat
 * white run this layout exists to break up.
 *
 * Only one logo marquee belongs on this page. ClientMarquee is who we serve;
 * PartnerMarquee is the OEM wall — who we build with — and that claim belongs on
 * /partners, not between the services row and the case studies. The component
 * and its data are kept, just not rendered here.
 */
export default function Home() {
  return (
    <main className="relative bg-canvas">
      <ScrollUp />
      {/* One dot grid for the whole page — see PageBackdrop for why it is not fixed. */}
      <PageBackdrop />

      <div className="relative z-10">
        <NetworkHero />
        <NumbersBand />
        <ServicesGrid />
        <CaseStudyRow />
        <ClientMarquee />
        <Testimonials />
        <Awards />
        <CtaBand />
      </div>
    </main>
  );
}
