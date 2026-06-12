import { ReactNode } from "react";

const variants = {
  brand:  "border border-primary/20 bg-brand-muted text-primary",
  subtle: "border border-edge bg-canvas-subtle text-muted",
  white:  "border border-white/20 bg-white/10 text-white",
} as const;

type BadgeVariant = keyof typeof variants;

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

export default function Badge({ children, variant = "brand", dot, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${variants[variant]} ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70 shrink-0" />}
      {children}
    </span>
  );
}
