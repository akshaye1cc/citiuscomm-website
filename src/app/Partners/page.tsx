'use client';

import partnersData from './PartnersData';

const Partners = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white dark:bg-gray-900">
      
      {/* Soft gradient background with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-gray-900 dark:via-secondary/20 dark:to-gray-800"></div>
      
      {/* Decorative elements with brand colors */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-11 mb-14 text-center max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Our Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-white mb-4 py-2">
            Built with best-in-class partners
          </h2>
          <p className="text-base md:text-lg text-body-color dark:text-body-color-dark">
            We collaborate with technology, services, and solutions partners across the globe.
          </p>
        </div>

        {/* Grid with cards */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            
            {partnersData.partnersData.map((partner, index) => (
              <a
              
                key={partner.name + index}
                href={partner.url}
                target={partner.url !== '#' ? '_blank' : '_self'}
                rel={partner.url !== '#' ? 'noopener noreferrer' : ''}
                className="group flex items-center justify-center h-36 md:h-40 rounded-3xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-stroke-stroke dark:border-stroke-dark p-8 transition-all duration-300 hover:shadow-two hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary dark:hover:border-primary"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 md:max-h-24 w-auto object-contain transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
              </a>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
};

export default Partners;