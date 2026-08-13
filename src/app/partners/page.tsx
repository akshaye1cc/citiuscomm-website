import CtaBand from "@/components/CtaBand";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionAccent from "@/components/ui/SectionAccent";
import citiusProducts from "@/data/citiusProducts";
import whyPartner from "@/data/whyPartner";
import partnerEcosystem from "@/data/partnerEcosystem";

export const metadata = {
  title: "Partners | Citiuscomm",
  description:
    "Why partner with Citiuscomm: our OSS/BSS, applied AI, and IoT solutions, our own product ventures, and the ecosystem of brands we build with.",
};

/**
 * An entry whose destination has not been confirmed. Those render as plain
 * tiles — a link to "#" is a link that lies about being one.
 */
const isLinked = (url: string) => url !== "#";

export default function PartnersPage() {
  return (
    <main className="relative bg-canvas">
      {/* page-wide dotted backdrop — one layer so every section blends seamlessly */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ds-dots absolute inset-0 text-edge-2/90"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0, black 12%, black 86%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 12%, black 86%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute top-[38%] right-[-12%] h-[360px] w-[480px] rounded-full bg-cta/[0.04] blur-3xl" />
      </div>

      {/* ─── Section 1 · Why partner with us ───────────────────── */}
      <section className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-24 md:pt-[150px] xl:pt-[170px]">
        <div className="container">
          <div className="max-w-2xl">
            <div className="mb-5">
              <Badge variant="brand" dot>
                Why Partner With Us
              </Badge>
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-heading sm:text-5xl">
              Solutions worth building on
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              From OSS/BSS and applied AI to connected hardware, we bring proven platforms and
              one accountable team across the full infrastructure lifecycle.
            </p>
          </div>

          {/* Level-2 anchor for the page outline — the cards below are all h3. */}
          <h2 className="sr-only">Why partner with us</h2>

          {/* Dark panels on a light page. The three featured cards take the full
              brand fill and the rest take navy, so the solutions lead the block
              without needing a size difference to say so.

              Body copy is deliberately NOT on-dark-muted on the featured cards:
              that token is measured against navy (8.7:1) and falls to 3.09:1 on
              brand blue, under the AA floor. on-dark is 4.9:1 on brand and
              passes. Do not unify these two back into one class. */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
            {whyPartner.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={(i % 3) * 0.08} className="h-full">
                  <article
                    className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-7 ${
                      card.featured ? "bg-brand" : "bg-navy"
                    }`}
                  >
                    {/* Oversized index as a watermark. Sits under the content and
                        runs off the corner, cropped by the card's overflow. */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[7.5rem] font-bold leading-none tracking-tight text-white/[0.06]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex flex-col">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-muted text-brand">
                        <Icon size={32} />
                      </div>
                      <p
                        className={`mb-2 text-[11px] font-semibold uppercase tracking-widest ${
                          card.featured ? "text-on-dark" : "text-on-dark-muted"
                        }`}
                      >
                        {card.tag}
                      </p>
                      <h3 className="mb-2 text-lg font-bold text-white">{card.title}</h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          card.featured ? "text-on-dark" : "text-on-dark-muted"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 2 · Our products ──────────────────────────── */}
      {/* Bottom padding only: the section above owns the gap, so adjacent
          sections never stack their padding into a dead band. */}
      <section className="relative z-10 pb-16 md:pb-24">
        <div className="container">
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
            <SectionAccent className="mb-6" />
            <div className="mb-5">
              <Badge variant="brand" dot>
                Our Products
              </Badge>
            </div>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-heading sm:text-4xl">
              The ventures we build ourselves
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Alongside the platforms we deploy for customers, we build and own products of our
              own — the same engineering, pointed at our own roadmap.
            </p>
          </div>

          {/* Larger than the OEM tiles below on every axis that reads as weight:
              padding, logo well, type scale, and a brand accent rail across the
              top that the ecosystem tiles do not get. Three across at lg, and
              never more — these are meant to be scanned, not swept. */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {citiusProducts.map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.08} className="h-full">
                <article className="ds-tile relative flex h-full flex-col items-center overflow-hidden p-8 text-center md:p-10">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand" />

                  <div className="mb-6 flex h-24 w-full items-center justify-center">
                    <img
                      src={product.logo}
                      alt={product.name}
                      style={{ maxHeight: `${3 * (product.logoScale ?? 1)}rem` }}
                      className="w-auto object-contain"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-heading">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">{product.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3 · Partner ecosystem (flat grid) ─────────── */}
      <section className="relative z-10 pb-16 md:pb-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <div className="mb-5">
              <Badge variant="brand" dot>
                The Ecosystem
              </Badge>
            </div>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-heading sm:text-4xl">
              The brands we build with
            </h2>
            <p className="text-base leading-relaxed text-muted">
              A network of technology, service, and solution partners. Together we design, build,
              and operate world-class infrastructure.
            </p>
          </div>

          {/* One flat grid, no sector headings. The groups were eight rows of
              two or three tiles apiece, which read as eight small fragments
              rather than one ecosystem — the sector data is still on each entry
              if it is ever needed again.

              Tinted card, white well: the well is what keeps logos that ship on
              a white background from floating on a coloured field, and the tint
              is what stops the card disappearing into the page. */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partnerEcosystem.map((partner, i) => {
              const tile = (
                <>
                  <div className="flex h-16 items-center justify-center rounded-xl bg-white px-4 py-3">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      style={{ maxHeight: `${2.5 * (partner.logoScale ?? 1)}rem` }}
                      className="w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-widest text-faint">
                    {partner.name}
                  </p>
                </>
              );

              // h-full on both branches plus items-stretch from the grid keeps
              // every tile the same height whether or not it is a link.
              return (
                <Reveal key={partner.name} delay={(i % 5) * 0.05} className="h-full">
                  {isLinked(partner.url) ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-2xl border border-edge bg-canvas-subtle p-5 transition-colors duration-200 hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {tile}
                    </a>
                  ) : (
                    <div className="group flex h-full flex-col rounded-2xl border border-edge bg-canvas-subtle p-5">
                      {tile}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
