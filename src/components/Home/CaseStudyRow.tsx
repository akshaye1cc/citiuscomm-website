import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { CheckIcon } from "@/components/ui/icons";
import { caseStudies } from "@/data/caseStudies";

/** Reaches full navy at the bottom, not 90%, so the photo meets the card's navy
 *  body on an invisible seam instead of a faint step. Used on the mobile/
 *  top-of-card image only — the lg image sits beside the body, not above it,
 *  so it does not need to resolve into anything. */
const SCRIM = "bg-gradient-to-t from-navy via-navy/40 to-transparent";

/**
 * Unfinished studies never render. The filter is here rather than in the data
 * file so a half-written entry can sit in caseStudies.ts being worked on
 * without its TODO strings going live on the homepage.
 */
const published = caseStudies.filter((study) => !study.placeholder);

/**
 * Full-width cards, two per row at lg. `results` is rendered per study, but
 * only the lines that are actually written — both published studies still
 * carry TODO placeholders in that field pending numbers from the account
 * team, and those must not reach the page. A study with nothing left after
 * that filter simply skips the Results block rather than showing an empty one.
 */
function finishedResults(results: string[]) {
  return results.filter((line) => !/^todo\b/i.test(line.trim()));
}

/**
 * Case studies as full-width cards, not a scroll row. A horizontal scroller
 * made sense when studies were only ever going to be teasers a few lines long;
 * elaborating the content the way this section now does needs the room a
 * two-column grid gives it, and at two published studies neither wants for
 * space with the full container width to work with.
 *
 * These cards are the case study — there is no detail page behind them, so
 * they are <article>, not links. The /insights/[slug] route these used to
 * point at was never built, so nothing is lost by dropping the link, and the
 * `slug` field is now only an identity key. Because the whole card is the
 * content, every field in the study is rendered here rather than teased.
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
          accent
          width="640px"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {published.map((study, i) => {
            const results = finishedResults(study.results);

            return (
              <Reveal key={study.slug} delay={Math.min(i, 3) * 0.08} className="h-full">
                <article className="ds-tile-dark flex h-full flex-col overflow-hidden lg:flex-row">
                  <div className="relative aspect-[16/9] shrink-0 overflow-hidden lg:aspect-auto lg:w-[42%]">
                    <Image
                      src={study.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 992px) 42vw, 100vw"
                      className="object-cover"
                    />
                    <div aria-hidden className={`absolute inset-0 ${SCRIM}`} />
                    <p className="absolute inset-x-0 bottom-0 p-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-on-dark-muted">
                      {study.industry}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8 lg:p-10">
                    {/* Both flags have to hold: `logo` is the asset, `logoUsable`
                        is the customer's permission to show it. Decorative —
                        the customer name is right underneath it in the h3. */}
                    {study.logoUsable && study.logo && (
                      // Natural colours, not knocked to white. Both assets are
                      // rasters embedded in SVG with dark artwork, so on the
                      // navy card they need a light chip behind them to be
                      // visible at all — the chip is what makes keeping the
                      // original colours possible here.
                      <span className="mb-5 inline-flex w-fit items-center rounded-lg bg-white px-3 py-2">
                        <img
                          src={study.logo}
                          alt=""
                          className="h-7 w-auto max-w-[130px] object-contain object-left"
                          draggable={false}
                        />
                      </span>
                    )}
                    <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                      {study.customer}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-on-dark-muted">
                      {study.delivered}
                    </p>

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-on-dark-muted/70">
                          The Challenge
                        </p>
                        <p className="text-sm leading-relaxed text-on-dark-muted">
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-on-dark-muted/70">
                          Our Approach
                        </p>
                        <p className="text-sm leading-relaxed text-on-dark-muted">
                          {study.whatWeDid}
                        </p>
                      </div>

                      {results.length > 0 && (
                        <div>
                          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-on-dark-muted/70">
                            Results
                          </p>
                          <ul className="space-y-1.5">
                            {results.map((line) => (
                              <li key={line} className="flex items-start gap-2 text-sm text-white">
                                <span className="mt-0.5 text-brand">
                                  <CheckIcon size={14} strokeWidth={2.4} />
                                </span>
                                {line}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
