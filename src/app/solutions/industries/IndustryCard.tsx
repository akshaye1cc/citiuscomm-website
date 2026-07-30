"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface IndustryCardProps {
  title: string;
  description: string;
  solutions: string[];
  icon: ReactNode;
}

/**
 * Premium industry card: blurred brand-gradient blob (animated, 12s loop),
 * top-center icon tile with gradient/inset-border/glow, thin orange accent
 * line that sweeps in on hover, and a 6px lift with a brand-tinted shadow.
 */
export default function IndustryCard({ title, description, solutions, icon }: IndustryCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-edge bg-surface px-7 pb-7 pt-8 text-center shadow-e1 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_24px_48px_-18px_rgba(10,37,64,0.24),0_10px_22px_-10px_rgba(21,110,176,0.22)]"
    >
      {/* Top accent line — sweeps in on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-cta via-cta to-brand transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      {/* Blurred brand-gradient blob, top-left, alive but subtle */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 z-0 h-56 w-56 rounded-full opacity-70 blur-3xl transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(21,110,176,0.16) 0%, rgba(255,122,0,0.12) 45%, transparent 72%)",
        }}
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 16, -8, 0], y: [0, 10, -10, 0], scale: [1, 1.12, 0.95, 1] }
        }
        transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex w-full flex-1 flex-col items-center">
        {/* Icon tile */}
        <div className="relative mb-5 flex h-20 w-20 shrink-0 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105">
          <span
            aria-hidden
            className="absolute -inset-2 rounded-2xl opacity-35 blur-md transition-opacity duration-300 ease-out group-hover:opacity-65"
            style={{ background: "linear-gradient(135deg, rgba(21,110,176,0.4), rgba(255,122,0,0.32))" }}
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(21,110,176,0.14), rgba(255,122,0,0.10))",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.7), inset 0 0 0 1px rgba(21,110,176,0.16), 0 10px 22px -10px rgba(21,110,176,0.32)",
            }}
          />
          <span className="relative text-brand">{icon}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-fg">{title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{description}</p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {solutions.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-canvas-subtle px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted transition-colors duration-200 group-hover:border-primary/25"
            >
              <span className="h-1 w-1 rounded-full bg-primary/60" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
