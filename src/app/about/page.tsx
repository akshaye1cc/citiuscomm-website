import AboutHero from "@/components/About/AboutHero";
import WhoWeAre from "@/components/About/WhoWeAre";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "About Us | Citiuscomm",
  description:
    "Citiuscomm builds technology ecosystems that scale with ambition — combining innovation, reliability, and deep execution expertise.",
};

const AboutPage = () => (
  <main className="relative bg-canvas">
    {/* Page-wide dotted backdrop for seamless flow */}
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div
        className="ds-dots absolute inset-0 text-primary/[0.08] dark:text-brand/[0.1]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 12%, black 88%, transparent 100%)",
        }}
      />
    </div>

    <div className="relative z-10">
      <AboutHero
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
    </div>
  </main>
);

export default AboutPage;
