import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import NetworkHero from "@/components/hero-animation/NetworkHero";
import PageBackdrop from "@/components/ui/PageBackdrop";

export default function Home() {
  return (
    <main className="relative bg-canvas">
      <ScrollUp />
      {/* One dot grid for the whole page — see PageBackdrop for why it is not fixed. */}
      <PageBackdrop />

      <div className="relative z-10">
        <NetworkHero />
        <Features />
        <AboutSectionOne />
      </div>
    </main>
  );
}
