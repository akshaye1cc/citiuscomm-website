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
    <section ref={sectionRef} id="features" className="relative py-16 md:py-24">
      <div className="container">
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
