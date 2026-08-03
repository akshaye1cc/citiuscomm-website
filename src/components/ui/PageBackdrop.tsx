interface PageBackdropProps {
  /** Add soft radial brand glows behind the content — same blobs as SectionPattern */
  glow?: boolean;
  className?: string;
}

/**
 * One dot-grid layer for a whole page.
 *
 * Deliberately `absolute`, not `fixed`: a fixed layer scrolls at a different
 * rate than any absolute layer beneath it, which puts the grids out of phase.
 * Anchoring the single layer to `<main>` means the 26px .ds-dots step is
 * measured from one origin, so the grid stays phase-continuous across every
 * section boundary on the page.
 *
 * There is no vertical mask by default — stacked masks were what banded the
 * background before. Usage: `<main className="relative">` renders this once,
 * then wraps its sections in `relative z-10` and keeps them transparent (or
 * translucent) so the one grid reads through the entire page.
 */
export default function PageBackdrop({ glow = false, className = "" }: PageBackdropProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="ds-dots absolute inset-0 text-edge-2/90" />
      {glow && (
        <>
          <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
          <div className="absolute -bottom-40 right-[-10%] h-[360px] w-[480px] rounded-full bg-cta/[0.04] blur-3xl" />
        </>
      )}
    </div>
  );
}
