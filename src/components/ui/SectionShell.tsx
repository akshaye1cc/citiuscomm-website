import type { ReactNode } from "react";

/**
 * The four bands a page is allowed to alternate between.
 *
 *  light — no fill at all. The page-level PageBackdrop shows through, which is
 *          what keeps its 26px grid phase-continuous across section boundaries.
 *  tint  — translucent cool wash. At 70% the page dots still read through it,
 *          so the band reads as a shade of the same page rather than a patch
 *          laid on top of it.
 *  navy  — opaque. Cuts the page: the backdrop cannot show through, so the band
 *          carries its own inverted grid to keep the texture unbroken.
 *  brand — opaque, same deal. Reserved for the closing CTA.
 *
 * Orange is never a band. It is the CTA colour and nothing else.
 */
type Tone = "light" | "tint" | "navy" | "brand";

const tones: Record<Tone, string> = {
  light: "bg-transparent",
  tint: "bg-canvas-tint/70",
  navy: "bg-gradient-to-b from-navy to-navy-2",
  brand: "bg-brand",
};

/** Opaque tones hide PageBackdrop, so they supply their own dot layer. */
const OPAQUE: Tone[] = ["navy", "brand"];

const sizes = {
  default: "py-20 md:py-24 lg:py-28",
  compact: "py-12 md:py-16",
} as const;

interface SectionShellProps {
  children: ReactNode;
  tone?: Tone;
  size?: keyof typeof sizes;
  id?: string;
  /** Extra classes for the <section>. Avoid padding utilities — use `size`. */
  className?: string;
  /**
   * Decorative layers painted over the tone fill and the dot grid, under the
   * content. A slot rather than something the caller renders inside `children`:
   * children sit inside the section's vertical padding, so an `inset-0` layer
   * in there stops short of the band's top and bottom edges. Layers passed here
   * are positioned against the section itself. Mark them `aria-hidden`, and
   * pair with `className="overflow-hidden"` if any of them can overflow.
   */
  decoration?: ReactNode;
  "aria-labelledby"?: string;
}

/**
 * One vertical band of a page: tone, padding, and (on dark tones) its own dot
 * grid. Children are wrapped in `relative z-10` so nothing has to fight the
 * background layer; each section still brings its own `container`, since the
 * scroll rows and marquees here are deliberately full-bleed.
 */
export default function SectionShell({
  children,
  tone = "light",
  size = "default",
  id,
  className = "",
  decoration,
  ...rest
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative ${sizes[size]} ${tones[tone]} ${className}`}
      {...rest}
    >
      {OPAQUE.includes(tone) && (
        <div aria-hidden className="ds-dots pointer-events-none absolute inset-0 text-dots-inverted" />
      )}
      {decoration}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
