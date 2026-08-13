import Reveal from "@/components/ui/Reveal";
import {
  CpuIcon,
  GlobeIcon,
  LightbulbIcon,
  RouteIcon,
  UsersIcon,
  type IconProps,
} from "@/components/ui/icons";
import type { ComponentType } from "react";

type WhoWeAreCard = {
  /** Small label above the title, same role as WhyPartnerCard.tag. */
  tag: string;
  title: string;
  /** Rendered as a paragraph, or as a list when `points` is set instead. */
  description?: string;
  points?: string[];
  icon: ComponentType<IconProps>;
  /** Brand fill rather than navy — the cards that lead the block. */
  featured?: boolean;
};

/**
 * Copy is unchanged from the previous version of this section — only the
 * presentation moved. Icons for Vision and Mission are new: those cards
 * previously used a checkmark and a right arrow, which said nothing about
 * either idea.
 */
const cards: WhoWeAreCard[] = [
  {
    tag: "Direction",
    title: "Our Vision",
    points: [
      "We aim to be a globally trusted technology partner delivering meaningful, long-term impact.",
      "We bridge cutting-edge innovation with real-world reliability across ICT, 5G, and cybersecurity.",
      "We are building an ecosystem that enables sustainable growth in a connected future.",
    ],
    icon: GlobeIcon,
    featured: true,
  },
  {
    tag: "Direction",
    title: "Our Mission",
    points: [
      "We deliver cost-effective, high-quality end-to-end solutions across global markets.",
      "We invest in talent, partnerships, and technology to stay ahead of industry demands.",
      "We create impact by building reliable, scalable, and future-ready digital systems.",
    ],
    icon: RouteIcon,
    featured: true,
  },
  {
    tag: "Strength",
    title: "Our Expertise",
    description:
      "We design and deliver end-to-end solutions across Data Centers, ICT Infrastructure, Telecom OSS/BSS, Cybersecurity, and 5G, backed by strong execution in NOC operations and project management.",
    icon: CpuIcon,
    featured: true,
  },
  {
    tag: "Strength",
    title: "Innovation",
    description:
      "We constantly adopt new technologies and smarter methodologies to create solutions that are not just advanced, but practical, scalable, and impactful.",
    icon: LightbulbIcon,
  },
  {
    tag: "Strength",
    title: "Customer Focus",
    description:
      "We prioritize long-term partnerships over short-term wins. By combining our experience, strategic alliances, and execution strength, we deliver seamless deployments and integrations that truly move our clients forward.",
    icon: UsersIcon,
  },
];

/**
 * Same card treatment as "Why partner with us" on /partners: dark filled panels
 * on the light page, brand fill for the cards that lead the block and navy for
 * the rest, an oversized index watermark cropped by the card corner, and the
 * icon in a brand-muted well.
 *
 * Body copy is deliberately NOT on-dark-muted on the featured cards: that token
 * is measured against navy (8.7:1) and falls to 3.09:1 on brand blue, under the
 * AA floor. on-dark is 4.9:1 on brand and passes. Do not unify these two back
 * into one class — the same note is on the /partners implementation.
 *
 * There are five cards here, not six: this section has five pieces of content
 * and a sixth would have had to be invented. The last row therefore runs two
 * wide at lg rather than three.
 *
 * Transparent by design: the page-level PageBackdrop supplies the dot grid, and
 * any opaque fill here would re-introduce the horizontal seam under the hero.
 */
const WhoWeAre = () => (
  <section id="about" className="relative bg-transparent py-20 md:py-28 lg:py-32">
    <div className="container relative z-10">
      {/* Level-2 anchor for the page outline — the cards below are all h3. */}
      <h2 className="sr-only">Vision, mission, and how we work</h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => {
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

                  {card.description && (
                    <p
                      className={`text-sm leading-relaxed ${
                        card.featured ? "text-on-dark" : "text-on-dark-muted"
                      }`}
                    >
                      {card.description}
                    </p>
                  )}

                  {card.points && (
                    <ul
                      className={`space-y-2.5 text-sm leading-relaxed ${
                        card.featured ? "text-on-dark" : "text-on-dark-muted"
                      }`}
                    >
                      {card.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          {/* A rule rather than a bullet glyph: the dot-and-gap
                              of a list marker reads as clutter at this size on
                              a filled card. */}
                          <span
                            aria-hidden
                            className="mt-2 h-px w-3 shrink-0 bg-current opacity-50"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhoWeAre;
