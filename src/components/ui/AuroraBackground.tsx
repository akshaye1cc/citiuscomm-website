"use client";

import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  /** Fade the aurora out toward the corners with a radial mask (default true). */
  showRadialGradient?: boolean;
}

/**
 * Animated aurora gradient backdrop (Aceternity). The heavy gradient/blend
 * styling lives in `.aurora-bg` in src/styles/index.css so it stays readable
 * and works with this project's `.dark` theming and reduced-motion handling.
 */
export default function AuroraBackground({
  className = "",
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative flex flex-col bg-canvas text-fg transition-colors ${className}`}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`aurora-bg${showRadialGradient ? " aurora-fade" : ""}`} />
      </div>
      {children}
    </div>
  );
}
