interface SectionPatternProps {
  /** Add soft radial brand glows behind the content */
  glow?: boolean;
  /** Fade the dot grid out toward the edges */
  fade?: boolean;
  className?: string;
}

/**
 * Decorative section background: brand dot-grid + optional radial glows.
 * Parent must be `relative`; content above it needs `relative z-10`.
 */
export default function SectionPattern({ glow = true, fade = true, className = "" }: SectionPatternProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`ds-dots absolute inset-0 text-edge-2/90${fade ? " ds-dots-fade" : ""}`}
      />
      {glow && (
        <>
          <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
          <div className="absolute -bottom-40 right-[-10%] h-[360px] w-[480px] rounded-full bg-cta/[0.04] blur-3xl" />
        </>
      )}
    </div>
  );
}
