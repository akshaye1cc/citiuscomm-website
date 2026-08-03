import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import NetworkHero from "@/components/hero-animation/NetworkHero";

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <NetworkHero />
      <Features />
      <AboutSectionOne />
    </main>
  );
}
