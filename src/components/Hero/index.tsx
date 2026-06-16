import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
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
    className="overflow-hidden pb-14 pt-[120px] md:pb-20 md:pt-[150px] xl:pt-[170px]"
  >
    <div className="container relative z-10">
      <div className="mx-auto max-w-[820px] text-center">

        <div className="mb-6">
          <Badge variant="brand" dot>ICT Infrastructure &amp; Telecom Solutions</Badge>
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-fg sm:text-6xl md:text-7xl">
          Connecting You,{" "}
          <br className="hidden sm:block" />
          Every Step of the Way.
        </h1>

        <p className="mx-auto mb-4 max-w-[620px] text-lg leading-relaxed text-muted sm:text-xl">
          Delivering cutting-edge, carrier-grade solutions that fuel the rapid evolution
          of Communications and Networking Infrastructure.
        </p>

        <p className="mb-10 text-sm font-medium text-primary/80 dark:text-brand/80">
          Data Center · ICT Infrastructure · Cybersecurity · 5G Networks · Cloud Engineering
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="cta" size="lg" href="/contact">
            Get In Touch
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <Button variant="ghost" size="lg" href="/solutions">
            Explore Solutions
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[820px] md:mt-20">
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
