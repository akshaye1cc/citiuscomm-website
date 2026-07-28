"use client";
import React from "react";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CheckIcon, DataCenterIcon, NetworkIcon, ShieldIcon, AntennaIcon, CloudIcon, OpsIcon } from "@/components/ui/icons";
import { pillars } from "@/data/solutions";

/* ─── Skeleton: Data Center ─── */
const SkeletonDataCenter = () => (
  <motion.div
    initial="initial"
    whileHover="hover"
    className="relative flex h-full min-h-[10rem] w-full items-center justify-center gap-3 overflow-hidden bg-canvas-muted p-5"
  >
    {[0, 1, 2].map((col) =>
      [0, 1, 2, 3].map((row) => (
        <motion.div
          key={`${col}-${row}`}
          className="flex h-5 w-24 items-center gap-1.5 rounded border border-edge bg-surface px-2"
          style={{ gridColumn: col + 1, gridRow: row + 1 }}
        >
          <motion.span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: "#2b8fd0" }}
            animate={{ opacity: [1, 0.1, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: (col * 4 + row) * 0.25 }}
          />
          <motion.span
            className="h-1 rounded-full bg-primary/25"
            style={{ width: `${45 + ((col * 4 + row) * 11) % 38}%` }}
            variants={{
              initial: { width: `${45 + ((col * 4 + row) * 11) % 38}%` },
              hover: { width: `${65 + ((col * 4 + row) * 7) % 25}%`, transition: { duration: 0.5 } },
            }}
          />
          <span className="ml-auto h-1 w-3 rounded-full bg-canvas-muted" />
        </motion.div>
      ))
    )}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-canvas-muted to-transparent" />
  </motion.div>
);

/* ─── Skeleton: ICT Infrastructure ─── */
const nodes = [
  { cx: 50, cy: 18 },
  { cx: 18, cy: 55 },
  { cx: 82, cy: 55 },
  { cx: 32, cy: 82 },
  { cx: 68, cy: 82 },
];
const edges: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2]];

const SkeletonICT = () => (
  <div className="flex h-full min-h-[10rem] w-full items-center justify-center bg-canvas-muted p-4">
    <svg viewBox="0 0 100 100" className="h-auto w-full max-w-[130px]">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#156eb0"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        />
      ))}
      {nodes.map(({ cx, cy }, i) => (
        <React.Fragment key={i}>
          <motion.circle
            cx={cx} cy={cy}
            r={i === 0 ? 5 : 3.5}
            fill="#156eb0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: i === 0 ? 0.9 : 0.65 }}
            transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
          />
          {i === 0 && (
            <motion.circle
              cx={cx} cy={cy} r={5}
              fill="none" stroke="#156eb0" strokeWidth="0.5"
              animate={{ r: [5, 16], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          )}
        </React.Fragment>
      ))}
      {/* Traveling packet */}
      <motion.circle r={1.8} fill="#ff7a00"
        animate={{
          cx: [nodes[0].cx, nodes[1].cx, nodes[3].cx, nodes[4].cx, nodes[2].cx, nodes[0].cx],
          cy: [nodes[0].cy, nodes[1].cy, nodes[3].cy, nodes[4].cy, nodes[2].cy, nodes[0].cy],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

/* ─── Skeleton: Cybersecurity ─── */
const SkeletonCyber = () => (
  <div className="relative flex h-full min-h-[10rem] w-full items-center justify-center overflow-hidden bg-canvas-muted">
    {[56, 96, 136].map((size, i) => (
      <motion.div
        key={size}
        className="absolute rounded-full border border-primary/40"
        style={{ width: size, height: size }}
        animate={{ opacity: [0.6, 0.08, 0.6], scale: [1, 1.07, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
      />
    ))}
    <motion.div
      className="absolute h-32 w-32 rounded-full border border-dashed border-primary/15"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    />
    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-brand-muted">
      <ShieldIcon size={28} className="text-brand" />
    </div>
  </div>
);

/* ─── Skeleton: 5G / Telecom ─── */
const SkeletonTelecom = () => (
  <motion.div
    initial="initial"
    whileHover="hover"
    className="flex h-full min-h-[10rem] w-full items-center justify-center overflow-hidden bg-canvas-muted"
  >
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 120 90" className="h-auto w-44">
        {/* Tower mast */}
        <line x1="60" y1="80" x2="60" y2="32" stroke="#156eb0" strokeWidth="2" strokeLinecap="round" />
        <line x1="52" y1="80" x2="68" y2="80" stroke="#156eb0" strokeWidth="2" strokeLinecap="round" />
        {/* Signal arcs */}
        {[18, 32, 48].map((r, i) => (
          <motion.path
            key={r}
            d={`M ${60 - r},32 A ${r},${r} 0 0,1 ${60 + r},32`}
            fill="none" stroke="#156eb0" strokeWidth="1.5" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.85, 0.2] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.45, repeatDelay: 0.4 }}
          />
        ))}
      </svg>
      <div className="flex gap-2">
        {["2G", "3G", "4G", "5G"].map((gen) => (
          <motion.span
            key={gen}
            className={`rounded border px-1.5 py-0.5 text-[10px] font-bold ${
              gen === "5G"
                ? "border-primary/50 bg-brand-muted text-brand"
                : "border-edge text-faint"
            }`}
            animate={gen === "5G" ? { opacity: [0.6, 1, 0.6] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {gen}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ─── Skeleton: Cloud Engineering ─── */
const SkeletonCloud = () => (
  <div className="relative flex h-full min-h-[10rem] w-full flex-col items-center justify-center gap-3 overflow-hidden bg-canvas-muted p-4">
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 100 65" className="h-auto w-28">
        <motion.path
          d="M 15,52 A 15,15 0 0,1 15,22 A 12,12 0 0,1 40,14 A 16,16 0 0,1 72,22 A 12,12 0 0,1 85,34 A 15,15 0 0,1 68,52 Z"
          fill="none" stroke="#156eb0" strokeWidth="1.5" strokeLinejoin="round"
          animate={{ strokeOpacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-primary"
          style={{ left: `${12 + i * 22}%` }}
          animate={{ y: [0, -50], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
    <div className="flex gap-2">
      {["Private", "Hybrid", "Public"].map((t) => (
        <span key={t} className="rounded-full border border-edge px-2 py-0.5 text-[10px] text-muted">
          {t}
        </span>
      ))}
    </div>
  </div>
);

/* ─── Skeleton: NOC Operations ─── */
const nocPath = "M 0,35 L 12,35 L 20,12 L 28,52 L 36,35 L 50,35 L 62,22 L 72,46 L 82,35 L 100,35";

const SkeletonNOC = () => (
  <motion.div
    initial="initial"
    whileHover="hover"
    className="relative flex h-full min-h-[10rem] w-full flex-col items-center justify-center gap-3 overflow-hidden bg-canvas-muted p-5"
  >
    {/* Node status bar */}
    <div className="flex w-full max-w-xs items-center gap-1.5">
      <span className="w-12 shrink-0 text-[9px] font-medium text-faint">NODES</span>
      <div className="flex flex-1 gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-3 flex-1 rounded-sm"
            style={{ backgroundColor: i < 8 ? "#22c55e" : "#f59e0b" }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.14 }}
          />
        ))}
      </div>
    </div>
    {/* ECG graph */}
    <svg viewBox="0 0 100 60" className="h-10 w-full max-w-xs">
      <motion.path
        d={nocPath}
        fill="none" stroke="#156eb0" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.8 }}
      />
    </svg>
    {/* Active badge */}
    <div className="flex items-center gap-2">
      <motion.div
        className="h-2 w-2 rounded-full bg-green-500"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
        24×7 Active · 13,000+ Nodes
      </span>
    </div>
  </motion.div>
);

/* ─── Layout config ─── */
const skeletons = [
  SkeletonDataCenter,
  SkeletonICT,
  SkeletonCyber,
  SkeletonTelecom,
  SkeletonCloud,
  SkeletonNOC,
];

const icons = [DataCenterIcon, NetworkIcon, ShieldIcon, AntennaIcon, CloudIcon, OpsIcon];

const colSpans = [
  "md:col-span-2", // Data Center
  "md:col-span-1", // ICT
  "md:col-span-1", // Cybersecurity
  "md:col-span-2", // 5G Telecom
  "md:col-span-1", // Cloud
  "md:col-span-2", // NOC
];

/* ─── Main export ─── */
export default function ServicesBentoGrid() {
  return (
    <BentoGrid>
      {pillars.map((pillar, i) => {
        const Skeleton = skeletons[i];
        const Icon = icons[i];
        return (
          <BentoGridItem
            key={pillar.slug}
            id={pillar.slug}
            className={colSpans[i]}
            header={<Skeleton />}
            icon={<Icon size={20} className="text-brand shrink-0" />}
            title={pillar.title}
            description={
              <span className="block space-y-3">
                <span className="block">{pillar.tagline}</span>
                <span className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {pillar.points.slice(0, colSpans[i] === "md:col-span-2" ? 4 : 3).map((pt) => (
                    <span key={pt} className="flex items-start gap-1.5 text-xs text-muted">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-brand-muted text-brand">
                        <CheckIcon size={10} strokeWidth={2.5} />
                      </span>
                      {pt}
                    </span>
                  ))}
                </span>
              </span>
            }
          />
        );
      })}
    </BentoGrid>
  );
}
