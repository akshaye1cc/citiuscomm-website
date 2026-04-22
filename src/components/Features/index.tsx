'use client';

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="relative py-16 md:py-20 lg:py-28">
        {/* Background Elements */}
        <div className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl"></div>

        <div className="container">
          <SectionTitle
            title="Why Choose Citiuscomm"
            paragraph="Leveraging 30 years of telecommunications expertise, we deliver comprehensive solutions that transform connectivity challenges into competitive advantages."
            center
          />

          {/* Enhanced Grid with Staggered Animation */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}

        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out;
          }
        `}</style>
      </section>
    </>
  );
};

export default Features;