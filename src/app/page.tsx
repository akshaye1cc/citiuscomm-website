import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
    </main>
  );
}
