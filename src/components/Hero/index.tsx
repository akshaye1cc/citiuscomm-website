import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import TypingText from "@/components/ui/TypingText";
import AuroraBackground from "@/components/ui/AuroraBackground";

const stats = [
  { num: "100K+", label: "Network Sites" },
  { num: "13K+",  label: "Nodes Managed" },
  { num: "100M+", label: "Subscribers" },
  { num: "30+",   label: "Years Experience" },
];

const Hero = () => (
  <AuroraBackground
    id="home"
    className="overflow-hidden pb-0 pt-[120px] md:pt-[150px] xl:pt-[170px]"
  >
    <div className="container relative z-10">
      <div className="mx-auto max-w-[820px] text-center">

        <h1 className="mb-6 text-5xl font-bold leading-tight text-fg sm:text-6xl md:text-7xl">
          <TypingText
            phrases={[
              "Connecting You, Every Step of the Way.",
              "Building Infrastructure, Creating Impact.",
              "Powering Networks, Enabling Growth.",
            ]}
            speed={80}
            delayBetweenPhrases={2500}
          />
        </h1>

        <p className="mx-auto mb-4 max-w-[620px] text-lg leading-relaxed text-muted sm:text-xl">
          Delivering cutting-edge, carrier-grade solutions that fuel the rapid evolution
          of Communications and Networking Infrastructure.
        </p>

        <p className="mb-14 text-sm font-medium text-primary/80 dark:text-brand/80">
          Data Center · ICT Infrastructure · Cybersecurity · 5G Networks · Cloud Engineering
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-[820px] md:mt-24 pb-20 md:pb-28 lg:pb-32">
        <dl className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <dt className="text-2xl font-bold text-fg sm:text-3xl">
                <Counter value={num} />
              </dt>
              <dd className="mt-0.5 text-sm text-muted">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </AuroraBackground>
);

export default Hero;
