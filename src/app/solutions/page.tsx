'use client';

import Link from "next/link";

const Solutions = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Transform your business with cutting-edge digital solutions and strategies."
    },
    {
      title: "Business Analytics",
      description: "Data-driven insights to optimize your business operations and decision making."
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern enterprises."
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data."
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs."
    },
    {
      title: "AI & Automation",
      description: "Intelligent automation to streamline processes and improve efficiency."
    }
  ];

  const industries = [
    "Finance & Banking",
    "Healthcare",
    "Retail & E-commerce",
    "Manufacturing",
    "Telecommunications",
    "Education",
    "Government",
    "Insurance",
    "Media & Entertainment",
    "Real Estate",
    "Energy & Utilities",
    "Hospitality",
    "Logistics & Transportation",
    "Automotive",
    "Pharmaceuticals"
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-gray-900 px-4 py-20 dark:from-secondary dark:to-gray-900 md:py-28 lg:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Our Solutions
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Comprehensive services designed to drive innovation and transform your business across every industry.
            </p>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute right-0 top-0 z-0 opacity-20">
          <div className="h-96 w-96 rounded-full bg-primary blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 bg-white px-4 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text dark:text-white md:text-4xl">
                Core Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore our comprehensive suite of solutions designed for modern enterprises
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-primary hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
                >
                  <h3 className="mb-3 text-xl font-bold text-text dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  <div className="mt-6 inline-block">
                    <Link
                      href="/solutions/services"
                      className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <Link
                href="/solutions/services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-secondary hover:shadow-lg"
              >
                Explore All Services
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative z-10 bg-light-bg px-4 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text dark:text-white md:text-4xl">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                With 10+ years of experience, we've successfully served clients across diverse sectors
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group flex items-center rounded-lg border border-gray-200 bg-white px-6 py-4 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition-all group-hover:bg-white group-hover:text-primary dark:bg-gray-700 dark:group-hover:bg-primary">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">{industry}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <Link
                href="/solutions/industries"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-secondary hover:shadow-lg"
              >
                Learn More About Industries
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary px-4 py-16 dark:from-primary dark:to-secondary md:py-20 lg:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-lg text-gray-100">
              Connect with our experts to discover how CITIUSCOMM can drive growth and innovation for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-primary transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Start Your Journey
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute left-0 top-1/2 z-0 -translate-y-1/2 opacity-10">
          <div className="h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;