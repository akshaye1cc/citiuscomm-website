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
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={`group/bento row-span-1 flex flex-col overflow-hidden rounded-2xl border border-edge bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${className}`}
    >
      <div className="flex-1 overflow-hidden">{header}</div>
      <div className="p-5 transition-transform duration-200 group-hover/bento:translate-x-1.5">
        <div className="mb-2 flex items-center gap-3">
          {icon}
          <div className="text-lg font-bold text-fg leading-tight">{title}</div>
        </div>
        <div className="text-sm text-muted leading-relaxed">{description}</div>
      </div>
    </div>
  );
}
