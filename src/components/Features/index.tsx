'use client';

import { useEffect, useRef, useState } from "react";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

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
    <section ref={sectionRef} id="features" className="relative bg-canvas-subtle py-0 md:py-0 pb-20 md:pb-28 lg:pb-32">
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
        {/* The section reads visually from the cards, but the outline still needs
            a level-2 heading so h1 doesn't jump straight to h3. */}
        <h2 className="sr-only">What we do</h2>

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
