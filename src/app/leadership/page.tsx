import Leadership from "@/components/About/Leadership";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Leadership | Citiuscomm",
  description:
    "The team behind Citiuscomm — decades of leadership experience across telecom, networking, and enterprise technology.",
};

const LeadershipPage = () => (
  <main>
    <PageHero
      eyebrow="Leadership"
      title="The Team Behind"
      highlight="the Network"
      description="Decades of operator, OEM, and enterprise leadership — the experience that makes carrier-grade delivery possible."
    />
    <Leadership />
    <CtaBand
      title="Want to work with us?"
      description="Whether you're an operator, an enterprise, or a partner — our leadership team is one message away."
      primaryLabel="Get In Touch"
    />
  </main>
);

export default LeadershipPage;
