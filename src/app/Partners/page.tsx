'use client';

import partnersData from './PartnersData';

const Partners = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-light-bg to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Header */}
      <div className="container mx-auto px-4 py-11 mb-14 text-center max-w-2xl">
        <p className="text-xl font-semibold tracking-widest text-primary uppercase mb-2">
          Our ecosystem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-white mb-3 py-6">
          Built with best-in-class partners
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We collaborate with technology, services, and solutions partners across the globe.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {partnersData.partnersData.map((partner, index) => (
            <a
              key={partner.name + index}
              href={partner.url}
              target={partner.url !== '#' ? '_blank' : '_self'}
              rel={partner.url !== '#' ? 'noopener noreferrer' : ''}
              className="group flex items-center justify-center h-52 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="rounded-full h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-lg font-semibold"
                  style={{
                    background: partner.avatarBg,
                    color: partner.avatarText,
                  }}
                >
                  {partner.initials}
                </div>
              )}
            </a>
          ))}

        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
        {[
          { value: '120+', label: 'Global Partners' },
          { value: '40+', label: 'Countries' },
          { value: '3', label: 'Partner Tiers' },
          { value: '8yr', label: 'Avg. Relationship' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Partners;