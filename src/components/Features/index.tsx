'use client';

import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
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
    <section ref={sectionRef} id="features" className="relative py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="Why Citiuscomm"
          title="Built for Carrier-Grade Demands"
          paragraph="Leveraging decades of telecommunications expertise, we deliver comprehensive solutions that transform connectivity challenges into competitive advantages."
          center
          width="660px"
        />

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
