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
    <>
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .feature-card {
          opacity: 0;
        }
        .feature-card.visible {
          animation: fadeUp 0.5s ease-out both;
        }
      `}</style>

      <section ref={sectionRef} id="features" className="relative py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Why Choose Citiuscomm"
            paragraph="Leveraging years of telecommunications expertise, we deliver comprehensive solutions that transform connectivity challenges into competitive advantages."
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                className={`feature-card${visible ? " visible" : ""}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
