import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/icons";
import { pillars } from "@/data/solutions";
import ServicesNav from "./ServicesNav";

export const metadata = {
  title: "Services | Citiuscomm",
  description:
    "Detailed capabilities across data center, ICT infrastructure, cybersecurity, 5G networks, cloud engineering, and NOC operations.",
};

const ServicesPage = () => (
  <main>
    <PageHero
      eyebrow="Our Services"
      title="Six Practices."
      highlight="One Accountable Partner."
      description="Every practice is delivered turnkey — design, sourcing, deployment, integration, and operations — so there is always a single throat to choke and a single team to call."
    />

    <section className="relative bg-canvas py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">

          {/* Sticky scrollspy nav (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <ServicesNav items={pillars.map(({ slug, title }) => ({ slug, title }))} />
            </div>
          </aside>

          {/* Service detail sections */}
          <div className="space-y-10">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.slug} delay={i === 0 ? 0 : 0.05}>
                <article
                  id={pillar.slug}
                  className="ds-sheen relative scroll-mt-28 overflow-hidden rounded-2xl border border-edge bg-surface p-8 transition-colors duration-200 hover:border-primary/30 md:p-10"
                >
                  <header className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-muted text-primary">
                      {pillar.icon}
                    </div>
                    <div>
                      <h2 className="mb-1 text-2xl font-bold text-fg md:text-3xl">
                        {pillar.title}
                      </h2>
                      <p className="text-sm font-medium text-primary">{pillar.tagline}</p>
                    </div>
                  </header>

                  <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                    {pillar.description}
                  </p>

                  <div className="border-t border-edge pt-6">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-faint">
                      What&apos;s included
                    </h3>
                    <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-base text-muted">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-muted text-primary">
                            <CheckIcon size={14} strokeWidth={2.4} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>

    <CtaBand
      title="Need a capability you don't see here?"
      description="Our OEM ecosystem and engineering bench go deep — if it connects, computes, or secures, we can likely deliver it."
      primaryLabel="Ask Us Directly"
    />
  </main>
);

export default ServicesPage;
