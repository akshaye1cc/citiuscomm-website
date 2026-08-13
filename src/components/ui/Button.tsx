import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-secondary",
  /* ACCESSIBILITY EXCEPTION — white on #FF7A00 is 2.61:1. That is below the
     4.5:1 WCAG AA floor for normal text and below the 3:1 large-text floor too,
     so every CTA on the site fails AA on contrast. This was specified and
     accepted deliberately; do not "fix" it back to navy without asking.
     Navy (#0a2540) was the previous value at 5.94:1. The only way to keep white
     text and pass AA is to darken the orange to roughly #b85700, which is a
     visibly different colour from the brand orange. */
  cta:     "bg-cta text-white hover:bg-cta-hover",
  /* Outlined counterpart to `cta`, for pairing a secondary action beside a solid
     one without dropping a size. Orange-on-navy is 5.93:1, so the resting state
     passes AA comfortably — better than the solid variant it sits next to. The
     hover state fills to solid orange and inherits that variant's known 2.61:1
     white-on-orange exception; it is a transient state of an already-accepted
     colour, not a new one. Intended for dark bands. */
  "cta-outline": "border border-cta bg-transparent text-cta hover:bg-cta hover:text-white",
  ghost:   "border border-edge bg-transparent text-fg hover:border-primary hover:text-brand",
  outline: "border border-primary bg-transparent text-brand hover:bg-primary hover:text-white",
  /* for use on dark navy sections regardless of theme */
  inverse: "border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm rounded-md gap-1.5",
  md: "px-6 py-3 text-sm rounded-lg gap-2",
  lg: "px-8 py-4 text-base rounded-lg gap-2",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  loading?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center font-semibold transition-colors duration-150 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50";

const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  loading,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {loading && <Spinner />}
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} disabled={loading || disabled} {...props}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}
