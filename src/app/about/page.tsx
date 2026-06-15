import WhoWeAre from "@/components/About/WhoWeAre";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "About Us | Citiuscomm",
  description:
    "Citiuscomm builds technology ecosystems that scale with ambition — combining innovation, reliability, and deep execution expertise.",
};

const AboutPage = () => (
  <main>
    <PageHero
      eyebrow="About Us"
      title="Who"
      highlight="We Are"
      description="We build technology ecosystems that scale with ambition — combining innovation, reliability, and deep execution expertise."
    />
    <WhoWeAre />
    <CtaBand
      title="Three decades of execution. One conversation away."
      description="See how our experience across carriers, OEMs, and enterprises translates to your next project."
    />
  </main>
);

export default AboutPage;
