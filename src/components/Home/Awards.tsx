import Reveal from "@/components/ui/Reveal";
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
    <SectionShell tone="tint" size="compact" aria-labelledby="awards-heading">
      <div className="container">
        <h2
          id="awards-heading"
          className="mb-8 text-xs font-semibold uppercase tracking-widest text-faint"
        >
          Awards &amp; certifications
        </h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <Reveal as="li" key={award.name} delay={Math.min(i, 3) * 0.06} className="h-full">
              <div className="ds-panel flex h-full items-center gap-4 p-4">
                <img
                  src={award.image}
                  alt=""
                  className="h-10 w-10 shrink-0 rounded-lg object-contain"
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
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
