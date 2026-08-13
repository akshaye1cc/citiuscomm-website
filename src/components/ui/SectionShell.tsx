import type { ReactNode } from "react";

/**
 * The bands a page is allowed to alternate between.
 *
 *  light — no fill at all. The page-level PageBackdrop shows through, which is
 *          what keeps its 26px grid phase-continuous across section boundaries.
 *  tint  — translucent cool wash. At 70% the page dots still read through it,
 *          so the band reads as a shade of the same page rather than a patch
 *          laid on top of it.
 *  navy  — opaque. Cuts the page: the backdrop cannot show through, so the band
 *          carries its own inverted grid to keep the texture unbroken.
 *  navy-flat — the same navy, no gradient, and no dot grid. For bands that bring
 *          their own texture; see DOTTED below.
 *  brand — opaque, same deal.
 *
 * Orange is never a band. It is the CTA colour and nothing else.
 */
type Tone = "light" | "tint" | "navy" | "navy-flat" | "brand";

const tones: Record<Tone, string> = {
  light: "bg-transparent",
  tint: "bg-canvas-tint/70",
  navy: "bg-gradient-to-b from-navy to-navy-2",
  "navy-flat": "bg-navy",
  brand: "bg-brand",
};

/**
 * Tones that hide PageBackdrop and so supply their own dot layer.
 *
 * navy-flat is opaque but deliberately absent from this list: it exists for
 * sections that carry their own texture instead, and the dot grid would fight
 * it rather than fill in for the backdrop. The CTA band's node mesh is the case
 * this was added for — a 26px dot grid under a 36px mesh lattice moirés, the
 * same clash NetworkHero puts a scrim behind its mesh to avoid.
 */
const DOTTED: Tone[] = ["navy", "brand"];

/**
 * Top padding only — sections do not carry their own bottom padding.
 *
 * A section that pads both edges doubles the gap at every boundary: the
 * previous section's bottom padding plus this one's top padding stack into a
 * visibly larger gap than either was designed to be. Since the page stacks
 * sections directly against one another with no divider or tone change to
 * absorb the difference, that doubled gap read as a stray empty band between
 * every pair of sections. One edge of padding per boundary is enough — the
 * section below supplies it, and the section above ends where its content
 * ends. The final section before the footer relies on the footer's own
 * top border and padding for closing space, which is already independent of
 * this component.
 */
const sizes = {
  default: "pt-20 md:pt-24 lg:pt-28",
  compact: "pt-12 md:pt-16",
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
  /**
   * Hairline across the top of the band. For the one place two light sections
   * sit next to each other: they need separating, and a tone change is the
   * expensive way to do it — it costs a stripe in the page's vertical rhythm.
   * A rule plus the shared padding does the same job for nothing.
   */
  divider?: boolean;
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
  divider = false,
  ...rest
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative ${sizes[size]} ${tones[tone]}${divider ? " border-t border-edge" : ""} ${className}`}
      {...rest}
    >
      {DOTTED.includes(tone) && (
        <div aria-hidden className="ds-dots pointer-events-none absolute inset-0 text-dots-inverted" />
      )}
      {decoration}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
