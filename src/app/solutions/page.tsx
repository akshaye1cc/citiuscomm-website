import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import SectionTitle from "@/components/Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { pillars } from "@/data/solutions";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Solutions | Citiuscomm",
  description:
    "Data center, ICT infrastructure, cybersecurity, 5G networks, cloud engineering, and NOC operations — carrier-grade solutions delivered end to end.",
};

const SolutionsPage = () => (
  <main>
    <PageHero
      eyebrow="What We Do"
      title="Solutions Built for"
      highlight="Carrier-Grade Scale"
      description="From the data center to the radio edge — six practices that design, deploy, and operate the infrastructure connectivity runs on."
    />

    {/* Core practices */}
    <section className="relative bg-canvas py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="Core Practices"
          title="One Partner, Six Disciplines"
          paragraph="Every engagement is delivered turnkey — sourcing, deployment, integration, and operations under a single point of accountability."
          center
          width="640px"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.07}>
              <Link
                href={`/solutions/services#${pillar.slug}`}
                className="ds-sheen group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-muted text-primary">
                  {pillar.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-fg">{pillar.title}</h3>
                <p className="mb-6 flex-1 text-base leading-relaxed text-muted">
                  {pillar.tagline}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 5l7 7-7 7M4 12h16" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Industries strip */}
    <section className="relative bg-canvas-subtle py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="Industries"
          title="One Backbone, Every Sector"
          paragraph="The same carrier-grade delivery model, applied to the sectors where connectivity is mission-critical."
          center
          width="620px"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ title, icon }, i) => (
            <Reveal key={title} delay={i * 0.04}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-edge bg-surface px-4 py-3.5 transition-colors duration-200 hover:border-primary/40">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-primary">
                  {icon}
                </span>
                <span className="text-sm font-semibold leading-snug text-fg">{title}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="md" href="/solutions/industries">
            See How We Serve Each Sector
          </Button>
        </div>
      </div>
    </section>

    <CtaBand
      title="Not sure where to start?"
      description="Tell us what you're building — our engineers will map the right architecture, OEM platforms, and delivery plan."
      primaryLabel="Talk to an Engineer"
      secondaryLabel="See All Services"
      secondaryHref="/solutions/services"
    />
  </main>
);

export default SolutionsPage;
