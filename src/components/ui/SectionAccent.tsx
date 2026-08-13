interface SectionAccentProps {
  /** True on navy and brand bands, where brand blue has too little contrast. */
  onDark?: boolean;
  className?: string;
}

/**
 * The site's only decorative device: a 2px brand bar above a section heading.
 *
 * It replaced a per-section menagerie — a rule above the numbers labels, a rule
 * under the services icons, a 60px quote glyph, a diagonal dot-density wedge in
 * the CTA. Each was individually defensible and collectively they made eight
 * sections look like eight different designers. The point of this one is that
 * it repeats: same size, same position, every section, no exceptions. If a
 * section seems to need its own device, it does not.
 *
 * Colour is the one thing that varies, and only because it has to: brand blue
 * on navy is 2.9:1 and on the brand band it is invisible.
 */
/* Carries no margin of its own. A default `mb-*` here could not be overridden
   reliably — Tailwind resolves same-family conflicts by stylesheet order, not
   by the order classes appear in the string — so spacing belongs to the caller.
   Every call site uses mb-6. */
export default function SectionAccent({ onDark = false, className = "" }: SectionAccentProps) {
  return (
    <span
      aria-hidden
      className={`block h-0.5 w-8 ${onDark ? "bg-white/70" : "bg-brand"} ${className}`}
    />
  );
}
