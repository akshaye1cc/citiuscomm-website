import Reveal from "@/components/ui/Reveal";
import SectionAccent from "@/components/ui/SectionAccent";
import SectionShell from "@/components/ui/SectionShell";
import { awards } from "@/data/awards";

/**
 * Awards and certifications, deliberately quiet: small tiles, no headline
 * treatment, no counters. This is the credibility footnote before the CTA, not
 * a claim the page is built around — anything louder would compete with the
 * numbers band at the top.
 */
export default function Awards() {
  return (
    <SectionShell aria-labelledby="awards-heading">
      <div className="container">
        {/* Quiet still, but quiet by type scale — not by shrinking the whole
            band. The section keeps the same padding as every other one. */}
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionAccent className="mb-6" />
          <h2
            id="awards-heading"
            className="text-xs font-semibold uppercase tracking-widest text-faint"
          >
            Awards &amp; certifications
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <Reveal as="li" key={award.name} delay={Math.min(i, 3) * 0.06} className="h-full">
              {/* The one white card section on the page, so it takes a brand
                  hairline instead of the neutral one — enough to tie it to the
                  filled cards above without becoming a fifth fill. */}
              <div className="ds-tile flex h-full flex-col p-5 ring-1 ring-brand/25">
                <SectionAccent className="mb-4" />
                <div className="flex items-center gap-4">
                  <img
                    src={award.image}
                    alt=""
                    className="h-10 w-10 shrink-0 object-contain"
                    draggable={false}
                  />
                  {/* Wraps rather than truncates: an award is worth two lines,
                      and a clipped issuing body is worse than a taller tile. */}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-fg">{award.name}</p>
                    <p className="mt-0.5 text-xs leading-snug text-muted">
                      {award.issuingBody} · {award.year}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
