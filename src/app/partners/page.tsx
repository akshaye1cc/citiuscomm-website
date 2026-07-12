import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import whyPartner from "@/data/whyPartner";
import marqueeClients from "@/data/marqueeClients";
import partnerEcosystem from "@/data/partnerEcosystem";

export const metadata = {
  title: "Partners | Citiuscomm",
  description:
    "Why partner with Citiuscomm — our OSS/BSS, applied AI, and IoT solutions, the clients who trust us, and the ecosystem of brands we build with.",
};

/* duplicated track so the marquee loops seamlessly */
const marqueeTrack = [...marqueeClients, ...marqueeClients];

export default function PartnersPage() {
  return (
    <main className="relative bg-canvas">
      {/* page-wide dotted backdrop — one layer so every section blends seamlessly */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ds-dots absolute inset-0 text-primary/[0.13] dark:text-brand/[0.15]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0, black 12%, black 86%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 12%, black 86%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-3xl dark:bg-brand/[0.07]" />
        <div className="absolute top-[38%] right-[-12%] h-[360px] w-[480px] rounded-full bg-cta/[0.04] blur-3xl dark:bg-cta/[0.05]" />
      </div>

      {/* ─── Section 1 · Why partner with us ───────────────────── */}
      <section className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-24 md:pt-[150px] xl:pt-[170px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="aurora-bg aurora-muted aurora-fade" />
        </div>
        <div className="container">
          <div className="max-w-2xl">
            <div className="mb-5">
              <Badge variant="brand" dot>
                Why Partner With Us
              </Badge>
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-fg sm:text-5xl">
              Solutions worth building on
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              From OSS/BSS and applied AI to connected hardware, we bring proven platforms and
              one accountable team across the full infrastructure lifecycle.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
            {whyPartner.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={(i % 3) * 0.08} className="h-full">
                  <article
                    className={`group relative flex h-full flex-col rounded-2xl border bg-surface p-7 transition-colors duration-200 ${
                      card.featured
                        ? "border-primary/25 hover:border-primary/50"
                        : "border-edge hover:border-primary/40"
                    }`}
                  >
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                        card.featured
                          ? "bg-brand-muted text-primary"
                          : "bg-canvas-subtle text-fg"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-faint">
                      {card.tag}
                    </p>
                    <h3 className="mb-2 text-lg font-bold text-fg">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{card.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 2 · Client marquee (left → right) ─────────── */}
      <section className="relative z-10 py-12 md:py-16">
        <div className="container mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-faint">
            Trusted by carriers, broadcasters, and enterprises
          </p>
        </div>

        <div className="relative">
          {/* edge fades — fade to page background so it merges seamlessly */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent md:w-48" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent md:w-48" />

          <div className="overflow-hidden">
            {/* animationDirection: reverse flips the scroll to left → right */}
            <div className="ds-marquee-track" style={{ animationDirection: "reverse", animationDuration: "42s" }}>
              {marqueeTrack.map((client, i) => (
                <div
                  key={i}
                  aria-label={client.name}
                  className="mx-3 flex h-32 w-64 shrink-0 items-center justify-center rounded-2xl border border-edge bg-surface px-8 py-6"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-auto select-none object-contain opacity-90 max-h-16"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3 · Partner ecosystem (5 × 5 grid) ────────── */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <div className="mb-5">
              <Badge variant="brand" dot>
                The Ecosystem
              </Badge>
            </div>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-fg sm:text-4xl">
              The brands we build with
            </h2>
            <p className="text-base leading-relaxed text-muted">
              A network of technology, service, and solution partners across sectors — together we
              design, build, and operate world-class infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partnerEcosystem.map((partner, i) => (
              <Reveal key={partner.name} delay={(i % 5) * 0.05}>
                <a
                  href={partner.url}
                  target={partner.url !== "#" ? "_blank" : "_self"}
                  rel={partner.url !== "#" ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-5 transition-colors duration-200 hover:border-primary/40"
                >
                  <div className="flex items-center h-16">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 max-h-12"
                    />
                  </div>
                  <div className="mt-4">
                    <Badge variant="subtle">{partner.sector}</Badge>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{partner.description}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
