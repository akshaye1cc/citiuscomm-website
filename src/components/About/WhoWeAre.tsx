import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import SectionAccent from "@/components/ui/SectionAccent";
import {
  CpuIcon,
  GlobeIcon,
  LightbulbIcon,
  RouteIcon,
  UsersIcon,
  type IconProps,
} from "@/components/ui/icons";
import type { ComponentType } from "react";

/**
 * ⚠ EXPANDED COPY — needs a read before it ships.
 *
 * The lead paragraphs and the detail under each bullet are new. They are built
 * out of language already on the site (the /about intro, the six practices in
 * solutions.tsx, the "why partner with us" cards on /partners) rather than
 * invented from nothing, but they are longer and more specific than what they
 * replaced, and nobody has signed them off yet.
 */

type Direction = {
  tag: string;
  title: string;
  lead: string;
  points: { label: string; detail: string }[];
  icon: ComponentType<IconProps>;
  image: string;
  /** Describes the photograph, not the idea. */
  alt: string;
};

const directions: Direction[] = [
  {
    tag: "Vision",
    title: "Our Vision",
    lead: "To be the technology partner that carriers, enterprises, and governments turn to when the infrastructure has to work — and has to keep working long after handover.",
    points: [
      {
        label: "Globally trusted, built for long-term impact",
        detail:
          "We measure ourselves on the networks still running years after we hand them over, not on the size of the deployment that got them there.",
      },
      {
        label: "Innovation grounded in real-world reliability",
        detail:
          "We bring emerging technology across ICT, 5G, cloud, and cybersecurity into production environments where downtime is not an option.",
      },
      {
        label: "An ecosystem that compounds",
        detail:
          "Strategic OEM alliances, in-house engineering, and customer relationships that build on each other rather than resetting with every project.",
      },
    ],
    icon: GlobeIcon,
    image: "/images/about/visimage.jpg",
    alt: "Fibre optic strands lit end-on, fanning out against a dark background.",
  },
  {
    tag: "Mission",
    title: "Our Mission",
    lead: "To deliver secure, scalable, future-ready digital infrastructure end to end — design, sourcing, deployment, integration, and operations under one accountable team.",
    points: [
      {
        label: "Cost-effective delivery, without trading quality",
        detail:
          "End-to-end solutions across global markets, engineered to the standard the network actually requires and scoped to the budget it actually has.",
      },
      {
        label: "Continuous investment in talent and partnerships",
        detail:
          "Specialist teams and OEM relationships kept current with where the industry is heading, not where it has already been.",
      },
      {
        label: "Systems built to outlast the project",
        detail:
          "Reliable, scalable, future-ready platforms that carry the customer's business forward instead of constraining what it can do next.",
      },
    ],
    icon: RouteIcon,
    image: "/images/about/missionimg.jpg",
    alt: "Engineers working at a lit equipment rack inside a network facility.",
  },
];

type Pillar = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  image: string;
  alt: string;
};

const pillars: Pillar[] = [
  {
    title: "Our Expertise",
    description:
      "We design and deliver end-to-end solutions across data centers, ICT infrastructure, telecom OSS/BSS, cybersecurity, cloud, and 5G. Every practice is backed by execution in NOC operations and project management — so the design decisions are made by the same people who have to run the result.",
    icon: CpuIcon,
    image: "/images/about/expertise.jpg",
    alt: "Structured cabling terminated into a patch panel in a data centre rack.",
  },
  {
    title: "Innovation",
    description:
      "We adopt new technologies and smarter methodologies continuously, but only where they earn their place in a live network. The result is work that is advanced and practical at the same time: scalable in production, supportable in the field, and measurable for the business depending on it.",
    icon: LightbulbIcon,
    image: "/images/about/innovation.jpg",
    alt: "Circuit board detail with illuminated traces running between components.",
  },
  {
    title: "Customer Focus",
    description:
      "We prioritise long-term partnerships over short-term wins. By combining deep operational experience, strategic alliances, and execution strength, we deliver deployments and integrations that land cleanly — and we stay accountable for them well past the handover date.",
    icon: UsersIcon,
    image: "/images/about/customer-focus.jpg",
    alt: "Two colleagues reviewing plans together across a meeting table.",
  },
];

/** Softens the seam where a photograph meets the card's solid fill. */
const SCRIM_TO_BOTTOM = "bg-gradient-to-t from-black/45 to-transparent";

/**
 * Two sections, same card language as "Why partner with us" on /partners:
 * dark filled panels on the light page, an oversized index watermark cropped by
 * the corner, and the icon in a brand-muted well. Photography is carried inside
 * the cards rather than dropped — it is half of what each card is saying.
 *
 * Every card on this page is navy. Vision previously took the brand fill to
 * lead the pair, which meant its body copy needed its own text token: the
 * on-dark-muted used everywhere else is measured against navy (8.7:1) and falls
 * to 3.09:1 on brand blue, under the AA floor. One fill means one text colour
 * and no exception to remember. If a brand-filled card is ever reintroduced
 * here, its body copy has to move to on-dark (4.9:1 on brand) — see the
 * /partners implementation, which still carries that split.
 *
 * Transparent sections by design: the page-level PageBackdrop supplies the dot
 * grid, and any opaque fill here would re-introduce the seam under the hero.
 */
const WhoWeAre = () => (
  <>
    {/* ─── Vision & Mission ─────────────────────────────────── */}
    <section id="about" className="relative bg-transparent py-20 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-14">
          <SectionAccent className="mb-6" />
          <div className="mb-5">
            <Badge variant="brand" dot>
              Vision &amp; Mission
            </Badge>
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-heading sm:text-4xl">
            Defining our future. Delivering our purpose.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Our vision sets our long-term direction. Our mission guides the actions and principles
            that move us forward.
          </p>
        </div>

        <div className="space-y-6">
          {directions.map((item, i) => {
            const Icon = item.icon;
            // The second card mirrors the first: photograph on the right,
            // copy on the left. Source order stays copy-first either way, so
            // the reading order does not flip along with the layout.
            const mirrored = i % 2 === 1;

            return (
              <Reveal key={item.title} variant={mirrored ? "right" : "left"}>
                <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy">
                  <div className="grid md:grid-cols-2">
                    <div
                      className={`relative min-h-[260px] md:min-h-[380px] ${
                        mirrored ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div aria-hidden className={`absolute inset-0 ${SCRIM_TO_BOTTOM}`} />
                    </div>

                    <div className="relative p-8 md:p-10 lg:p-12">
                      {/* Oversized index as a watermark, cropped by the corner. */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[7.5rem] font-bold leading-none tracking-tight text-white/[0.06]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="relative z-10">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-muted text-brand">
                          <Icon size={32} />
                        </div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-on-dark-muted">
                          {item.tag}
                        </p>
                        <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
                        <p className="mb-6 text-base leading-relaxed text-on-dark-muted">
                          {item.lead}
                        </p>

                        <ul className="space-y-4 border-t border-white/15 pt-6">
                          {item.points.map((point) => (
                            <li key={point.label}>
                              <p className="text-sm font-semibold text-white">{point.label}</p>
                              <p className="mt-1 text-sm leading-relaxed text-on-dark-muted">
                                {point.detail}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ─── Operating pillars ────────────────────────────────── */}
    <section className="relative bg-transparent pb-20 md:pb-24 lg:pb-28">
      <div className="container relative z-10">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-14">
          <SectionAccent className="mb-6" />
          <div className="mb-5">
            <Badge variant="brand" dot>
              Our Approach
            </Badge>
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-heading sm:text-4xl">
            Our Operating Pillars
          </h2>
          {/* Subheading sits between the h2 and the body copy: heavier and
              darker than the paragraph, lighter than the heading. */}
          <p className="mb-4 text-lg font-semibold leading-snug text-heading">
            The principles that guide how we work.
          </p>
          <p className="text-base leading-relaxed text-muted">
            These pillars shape our approach across every practice, sector, and deployment. They
            provide a consistent foundation for how we create value and deliver outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 0.08} className="h-full">
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy">
                  <div className="relative aspect-[16/10] shrink-0">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    {/* Resolves to the card's own navy so the photograph meets
                        the body on an invisible seam rather than a hard step. */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent"
                    />
                  </div>

                  <div className="relative flex flex-1 flex-col p-7 md:p-8">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[7.5rem] font-bold leading-none tracking-tight text-white/[0.06]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      {/* Pulled up over the photograph so the icon reads as
                          belonging to the card rather than starting the body. */}
                      <div className="-mt-16 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-muted text-brand shadow-e2">
                        <Icon size={32} />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-on-dark-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default WhoWeAre;
