import Image from "next/image";
import type { Industry } from "@/data/industries";

/**
 * Navy scrim, not black: --ds-navy keeps the cards inside the brand palette and
 * stops the photographs going muddy. A gradient rather than a flat fill, so the
 * top of the frame stays a photograph and only the text end is opaque enough to
 * carry type.
 */
const SCRIM =
  "linear-gradient(to top, rgba(10,37,64,0.94) 0%, rgba(10,37,64,0.80) 28%, rgba(10,37,64,0.10) 62%, rgba(10,37,64,0) 100%)";

/**
 * Card widths in the 1200px container: 274px at xl (4 up), 304px at lg (3 up),
 * half the viewport at sm (2 up), full width below that.
 */
const SIZES =
  "(min-width: 1200px) 274px, (min-width: 992px) 304px, (min-width: 575px) 50vw, 100vw";

/**
 * Light-on-navy text. The design system's fg/muted/faint tokens are tuned for
 * dark-on-canvas and are unreadable here, and there is no dark-surface token set
 * since dark mode was removed — hence the literal values.
 */
const TAG = "#8fb9de";
const TITLE = "#f4f8fc";
const LINE = "#b6cade";

export default function IndustryCard({ slug, tag, title, description, alt, proof }: Industry) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
      <Image
        src={`/images/industries/${slug}-1200.avif`}
        alt={alt}
        fill
        sizes={SIZES}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      <div aria-hidden className="absolute inset-0" style={{ background: SCRIM }} />
      {/* Second pass of the same gradient, faded in on hover, so the scrim
          deepens slightly without the base ever exceeding full opacity. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-40"
        style={{ background: SCRIM }}
      />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span aria-hidden className="mb-3 block h-[2px] w-7 bg-cta" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: TAG }}>
          {tag}
        </p>
        <h3 className="mt-1 text-[17px] font-medium leading-snug" style={{ color: TITLE }}>
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.5]" style={{ color: LINE }}>
          {description}
        </p>
        {proof && <p className="mt-2 text-[13px] font-semibold text-cta">{proof}</p>}
      </div>
    </article>
  );
}
