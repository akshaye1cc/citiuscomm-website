import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Clients from "@/components/Clients-Marquee";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Clients />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
    </>
  );
}