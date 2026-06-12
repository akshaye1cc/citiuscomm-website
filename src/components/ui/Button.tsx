import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-primary text-white hover:bg-secondary",
  cta:     "bg-accent text-white hover:bg-[#e66f00]",
  ghost:   "border border-edge bg-transparent text-fg hover:border-primary hover:text-primary",
  outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
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
