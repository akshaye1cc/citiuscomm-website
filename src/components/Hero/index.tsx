"use client";

import { useCallback, useState } from "react";
import Counter from "@/components/ui/Counter";
import TypingText from "@/components/ui/TypingText";

const stats = [
  { num: "100K+", label: "Network Sites" },
  { num: "13K+",  label: "Nodes Managed" },
  { num: "100M+", label: "Subscribers" },
  { num: "30+",   label: "Years Experience" },
];

/* Module scope keeps the reference stable across Hero re-renders, so toggling
   the pause control can't restart the typing effect. */
const headlinePhrases = [
  "Connecting You, Every Step of the Way.",
  "Building Infrastructure, Creating Impact.",
  "Powering Networks, Enabling Growth.",
];

const PauseIcon = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor" aria-hidden>
    <rect x="2" y="1.5" width="3" height="9" rx="1" />
    <rect x="7" y="1.5" width="3" height="9" rx="1" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor" aria-hidden>
    <path d="M3 1.8v8.4a.6.6 0 0 0 .92.5l6.5-4.2a.6.6 0 0 0 0-1L3.92 1.3A.6.6 0 0 0 3 1.8Z" />
  </svg>
);

const Hero = () => {
  const [paused, setPaused] = useState(false);
  const [settled, setSettled] = useState(false);
  const handleSettled = useCallback(() => setSettled(true), []);

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden bg-canvas text-fg pb-0 pt-[120px] md:pt-[150px] xl:pt-[170px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ds-dots absolute inset-0 text-edge-2/90"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-[820px] text-center">

          <h1 className="mb-3 text-5xl font-bold leading-tight text-fg sm:text-6xl md:text-7xl">
            <TypingText
              phrases={headlinePhrases}
              speed={80}
              delayBetweenPhrases={2500}
              paused={paused}
              onSettled={handleSettled}
            />
          </h1>

          {/* Fixed height so the layout stays still once the control retires. */}
          <div className="mb-4 flex h-8 items-center justify-center">
            <button
              type="button"
              onClick={() => setPaused((prev) => !prev)}
              aria-label={paused ? "Resume the animated headline" : "Pause the animated headline"}
              aria-hidden={settled}
              tabIndex={settled ? -1 : 0}
              className={`inline-flex items-center gap-1.5 rounded-full border border-edge/70 px-3 py-1.5 text-xs font-medium text-faint transition-all duration-300 hover:border-primary/50 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                settled ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              {paused ? <PlayIcon /> : <PauseIcon />}
              {paused ? "Play" : "Pause"}
            </button>
          </div>

          <p className="mx-auto mb-4 max-w-[620px] text-lg leading-relaxed text-muted sm:text-xl">
            Delivering cutting-edge, carrier-grade solutions that fuel the rapid evolution
            of Communications and Networking Infrastructure.
          </p>

          <p className="mb-14 text-sm font-medium text-brand/80">
            Data Center · ICT Infrastructure · Cybersecurity · 5G Networks · Cloud Engineering
          </p>
        </div>

        {/* Panelled so the figures read as one proof block instead of four
            numbers floating on the bare background. */}
        <div className="mx-auto mt-16 max-w-[820px] pb-20 md:mt-24 md:pb-28 lg:pb-32">
          <dl className="ds-panel grid grid-cols-2 divide-edge px-2 py-6 sm:grid-cols-4 sm:divide-x sm:px-4">
            {stats.map(({ num, label }) => (
              <div key={label} className="px-4 py-3 text-center sm:py-0">
                <dt className="text-2xl font-bold text-fg sm:text-3xl">
                  <Counter value={num} />
                </dt>
                <dd className="mt-1 text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
