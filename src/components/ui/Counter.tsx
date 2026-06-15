'use client';

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  /** Display value, e.g. "100K+", "13,000+", "30+", "99.9%" */
  value: string;
  /** Animation duration in seconds */
  duration?: number;
  className?: string;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Count-up stat. Parses the numeric part of `value` and animates 0 → n when
 * scrolled into view; prefix/suffix ("K+", "%", "₹") render statically.
 * Falls back to plain text when the value has no number or the user prefers
 * reduced motion.
 */
export default function Counter({ value, duration = 1.6, className = "" }: CounterProps) {
  const match = value.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? "0" : value);
  const started = useRef(false);

  const prefix = match?.[1] ?? "";
  const numeric = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match?.[2].includes(".") ? (match[2].split(".")[1]?.length ?? 0) : 0;
  const grouped = match?.[2].includes(",") ?? false;

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(match[2]);
      return;
    }

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      return grouped ? Number(fixed).toLocaleString("en-IN") : fixed;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / (duration * 1000), 1);
          setDisplay(format(numeric * easeOut(p)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
