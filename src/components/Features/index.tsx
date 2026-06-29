'use client';

import { useEffect, useRef, useState } from "react";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import NetworkVisual from "@/components/ui/NetworkVisual";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative bg-canvas py-20 md:py-28 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ds-dots absolute inset-0 text-primary/[0.08] dark:text-brand/[0.1]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        />
      </div>
      <div className="container relative z-10">
        {/* Signature network animation, paired with the capability cards */}
        <div className="mb-14 flex justify-center overflow-hidden md:mb-20">
          <NetworkVisual className="w-full min-w-[760px] max-w-[1180px]" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={`ds-reveal${visible ? " ds-visible" : ""}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
