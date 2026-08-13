import ScrollUp from "@/components/Common/ScrollUp";
import CtaBand from "@/components/CtaBand";
import Awards from "@/components/Home/Awards";
import CaseStudyRow from "@/components/Home/CaseStudyRow";
import ClientMarquee from "@/components/Home/ClientMarquee";
import ServicesGrid from "@/components/Home/ServicesGrid";
import Testimonials from "@/components/Home/Testimonials";
import NetworkHero from "@/components/hero-animation/NetworkHero";
import PageBackdrop from "@/components/ui/PageBackdrop";

/**
 * One page, one surface.
 *
 * There is no band system here any more. Every section is transparent, so the
 * white canvas and its dot grid run unbroken from the hero to the footer, and
 * the grid stays phase-continuous the whole way down — which is the thing the
 * single PageBackdrop was always for. Sections are separated by the shared
 * vertical rhythm in SectionShell and by nothing else: no tone changes, no
 * dividers, no edge treatments — and, as of this pass, no doubled padding
 * either. SectionShell's sizes are top-padding-only for exactly that reason:
 * two adjacent sections used to each bring their own top *and* bottom padding,
 * which stacked into a visibly oversized gap at every boundary. See the note
 * on `sizes` in SectionShell for the full reasoning.
 *
 * Colour moved into the components. The page is the constant; the cards are
 * what carry the brand, and they alternate fills so no two neighbouring
 * sections read the same:
 *
 *   hero          the node mesh
 *   clients       stats + logo tiles          white
 *   services      icon + copy, two rows       none (icons only, brand-coloured)
 *   case studies  full-width cards            navy
 *   testimonials  cards                       brand
 *   awards        cards                       white, brand hairline
 *   CTA           inset panel                 navy
 *
 * That alternation is doing the job the bands used to do, at a scale the reader
 * actually looks at. A striped background separates sections you were not
 * reading; a filled card separates the one you are. Services is the one
 * exception — no card, no fill, just icon and copy — so the page has one
 * unfilled beat between the client logos and the first navy card instead of
 * fills stacking three deep before anything breaks the pattern.
 *
 * SectionShell keeps its tone prop for other pages. The homepage just never
 * asks for anything but the default.
 *
 * Only one logo marquee belongs here. ClientMarquee is who we serve;
 * PartnerMarquee is the OEM wall — who we build with — and that claim belongs
 * on /partners. The component and its data are kept, just not rendered here.
 */
export default function Home() {
  return (
    <main className="relative bg-canvas">
      <ScrollUp />
      {/* One dot grid for the whole page — see PageBackdrop for why it is not fixed. */}
      <PageBackdrop />

      <div className="relative z-10">
        <NetworkHero />
        <ClientMarquee />
        <ServicesGrid />
        <CaseStudyRow />
        <Testimonials />
        <Awards />
        <CtaBand />
      </div>
    </main>
  );
}
