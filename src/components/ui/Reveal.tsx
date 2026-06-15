'use client';

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

const variantClass = {
  up: "ds-reveal",
  left: "ds-reveal-left",
  right: "ds-reveal-right",
  scale: "ds-reveal-scale",
} as const;

interface RevealProps {
  children: ReactNode;
  /** Animation direction — maps to the ds-reveal-* CSS classes */
  variant?: keyof typeof variantClass;
  /** Stagger delay in seconds */
  delay?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
  style?: CSSProperties;
}

/**
 * Scroll-reveal wrapper. Renders hidden, adds `ds-visible` once the element
 * enters the viewport (one-shot). Animation itself lives in global CSS so
 * `prefers-reduced-motion` is handled in one place.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Rendered via createElement rather than <Tag> JSX: pulling in @react-three/fiber
  // (for the contact-page globe) globally augments JSX.IntrinsicElements, which breaks
  // build-time type inference for polymorphic ElementType children. createElement avoids it.
  return createElement(
    Tag,
    {
      ref,
      className: `${variantClass[variant]}${visible ? " ds-visible" : ""}${className ? ` ${className}` : ""}`,
      style: delay ? { ...style, animationDelay: `${delay}s` } : style,
    },
    children,
  );
}
