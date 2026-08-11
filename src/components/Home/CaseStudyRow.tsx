import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { ArrowRightIcon } from "@/components/ui/icons";
import { caseStudies } from "@/data/caseStudies";

/** Same scrim treatment as /solutions/industries. */
const SCRIM = "bg-gradient-to-t from-navy/90 via-navy/30 to-transparent";

/**
 * Unfinished studies never render. The filter is here rather than in the data
 * file so a half-written entry can sit in caseStudies.ts being worked on
 * without its TODO strings going live on the homepage.
 */
const published = caseStudies.filter((study) => !study.placeholder);

/**
 * Case studies as a horizontal scroll row rather than a grid: three studies do
 * not fill a three-column grid convincingly, and the row keeps its shape as the
 * list grows. Cards are a fixed width so the next one is always part-visible —
 * that overhang is what tells you the row scrolls.
 *
 * Links point at /insights/[slug], which is NOT BUILT YET — these 404 until it
 * is. Left live rather than inert so the missing route stays visible in testing.
 */
export default function CaseStudyRow() {
  return (
    <SectionShell>
      <div className="container">
        <SectionTitle
          eyebrow="Case Studies"
          title="Work we have delivered"
          paragraph="Rollouts, refreshes, and migrations run against live infrastructure, where the network could not go down while we worked on it."
          center
          width="640px"
        />
      </div>

      {/* The scroller bleeds one container-padding past the content box and
          re-applies that padding inside itself: the first card still lines up
          with the heading, and cards travel all the way to the viewport edge
          instead of stopping short of it. */}
      <div className="container">
        {/* pt-2/pb-6 is headroom, not decoration: overflow-x makes the y axis
            scrollable too, so the card's 2px hover lift and the reveal's 18px
            travel both need somewhere to go or they flash a vertical scrollbar. */}
        <div className="-mx-4 overflow-x-auto px-4 pt-2 pb-6 [scrollbar-width:thin]">
          {/* Centred when the cards fit, scrollable when they do not.
              `min-w-max` is what makes that safe: it holds the track at content
              width, so `mx-auto` only has free space to centre with when there
              genuinely is some, and the scroller overflows instead of the track.
              Centring via `justify-center` alone is the trap — once the cards
              exceed the viewport it pushes the first one past the scroll
              container's start edge, where it cannot be scrolled back to.
              Verified at 2 cards (centred at every width above 375px) and at 3
              (centred at lg, scrolls below it). */}
          <ul className="mx-auto flex min-w-max snap-x snap-mandatory justify-center gap-6">
            {published.map((study, i) => (
              <Reveal
                as="li"
                key={study.slug}
                delay={Math.min(i, 3) * 0.08}
                className="w-[280px] shrink-0 snap-start sm:w-[340px]"
              >
                <Link
                  href={`/insights/${study.slug}`}
                  className="ds-card group flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={study.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 575px) 340px, 280px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <div aria-hidden className={`absolute inset-0 ${SCRIM}`} />
                    <p className="absolute inset-x-0 bottom-0 p-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-on-dark-muted">
                      {study.industry}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    {/* Both flags have to hold: `logo` is the asset, `logoUsable`
                        is the customer's permission to show it. Decorative —
                        the customer name is right underneath it in the h3. */}
                    {study.logoUsable && study.logo && (
                      <img
                        src={study.logo}
                        alt=""
                        className="mb-4 h-7 w-auto max-w-[130px] self-start object-contain object-left"
                        draggable={false}
                      />
                    )}
                    <h3 className="text-lg font-bold leading-snug text-heading">
                      {study.customer}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-faint">
                      {study.delivered}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {study.problem}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      Read the case study
                      <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                        <ArrowRightIcon size={16} />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
