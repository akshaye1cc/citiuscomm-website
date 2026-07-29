"use client";
import React from "react";

export function BentoGrid({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function BentoGridItem({
  className = "",
  id,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  /** Anchor target, so deep links can address a single practice. */
  id?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={`ds-card group/bento row-span-1 flex scroll-mt-28 flex-col overflow-hidden ${className}`}
    >
      <div className="flex-1 overflow-hidden">{header}</div>
      <div className="p-5 transition-transform duration-200 group-hover/bento:translate-x-1.5">
        <div className="mb-2 flex items-center gap-3">
          {icon}
          <h3 className="text-lg font-bold text-fg leading-tight">{title}</h3>
        </div>
        <div className="text-sm text-muted leading-relaxed">{description}</div>
      </div>
    </div>
  );
}
