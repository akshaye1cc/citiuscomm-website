'use client';

import Link from "next/link";

const Services = () => {
  const servicesDetail = [
    {
      id: 1,
      title: "Digital Transformation",
      shortDesc: "Transform your business with cutting-edge digital solutions",
      fullDesc: "Our digital transformation services help organizations modernize operations, improve customer experiences, and unlock new revenue streams. We provide end-to-end solutions from strategy to implementation, ensuring smooth transitions and measurable results.",
      benefits: [
        "Process optimization and automation",
        "Enhanced customer engagement",
        "Improved operational efficiency",
        "Cost reduction and ROI improvement",
        "Scalable technology infrastructure"
      ]
    },
    {
      id: 2,
      title: "Business Analytics",
      shortDesc: "Data-driven insights for smarter decisions",
      fullDesc: "Transform raw data into actionable insights with our advanced analytics solutions. We help businesses understand trends, predict outcomes, and make informed decisions that drive growth and competitive advantage.",
      benefits: [
        "Real-time data visualization",
        "Predictive analytics and forecasting",
        "Custom dashboard development",
        "Data quality and governance",
        "Business intelligence strategy"
      ]
    },
    {
      id: 3,
      title: "Cloud Solutions",
      shortDesc: "Scalable infrastructure for modern enterprises",
      fullDesc: "Migrate, deploy, and manage your applications on secure, scalable cloud platforms. We provide comprehensive cloud services including infrastructure design, migration, optimization, and ongoing management.",
      benefits: [
        "Multi-cloud strategy and management",
        "Application migration services",
        "Cloud security and compliance",
        "Cost optimization",
        "24/7 monitoring and support"
      ]
    },
    {
      id: 4,
      title: "Cybersecurity",
      shortDesc: "Protect your digital assets from threats",
      fullDesc: "Comprehensive cybersecurity solutions to protect your organization from evolving threats. From security assessments to incident response, we ensure your data and systems remain secure and compliant.",
      benefits: [
        "Vulnerability assessments",
        "Security architecture design",
        "Compliance management",
        "Incident response planning",
        "Security awareness training"
      ]
    },
    {
      id: 5,
      title: "Software Development",
      shortDesc: "Custom solutions built for your needs",
      fullDesc: "Our experienced development team builds robust, scalable, and innovative software solutions. Whether you need web, mobile, or enterprise applications, we deliver quality software that drives business value.",
      benefits: [
        "Full-stack web development",
        "Mobile app development",
        "Enterprise software solutions",
        "API development and integration",
        "Legacy system modernization"
      ]
    },
    {
      id: 6,
      title: "AI & Automation",
      shortDesc: "Intelligent solutions for efficiency",
      fullDesc: "Leverage artificial intelligence and automation to optimize operations, enhance customer experiences, and unlock new insights. Our AI solutions are tailored to your specific business challenges.",
      benefits: [
        "Machine learning model development",
        "Process automation",
        "Natural language processing",
        "Computer vision solutions",
        "RPA implementation"
      ]
    }
  ];

  return (
    <main>
  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4 py-20 md:py-28 lg:py-32">
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 md:text-xl">
          Comprehensive solutions tailored to meet your business challenges and drive sustainable growth
        </p>
      </div>
    </div>

    {/* Glow Effect */}
    <div className="absolute right-0 top-0 z-0 opacity-30">
      <div className="h-96 w-96 rounded-full bg-primary blur-3xl"></div>
    </div>

    <div className="absolute left-0 bottom-0 z-0 opacity-20">
      <div className="h-80 w-80 rounded-full bg-blue-500 blur-3xl"></div>
    </div>
  </section>

      {/* Services Detail Section */}
      <section className="relative z-10 bg-white px-4 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-16">
              {servicesDetail.map((service, index) => (
                <div
                  key={service.id}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900 md:p-12"
                >
                  {/* Header */}
                  <div className="flex items-start gap-0 md:gap-0">
                    <div className="flex-shrink-0 text-5xl md:text-6xl"></div>
                    <div className="flex-1">
                      <h2 className="mb-2 text-3xl font-bold text-text dark:text-white md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-8 space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      {service.fullDesc}
                    </p>

                    {/* Benefits */}
                    <div>
                      <h3 className="mb-4 text-xl font-bold text-text dark:text-white">
                        Key Benefits
                      </h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        {service.benefits.map((benefit, bIndex) => (
                          <div
                            key={bIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="flex-shrink-0 pt-1">
                              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 py-12 text-center dark:from-primary dark:to-secondary md:px-12">
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Need a Custom Solution?
              </h3>
              <p className="mb-8 text-gray-100">
                Our team can design a tailored service package that matches your unique requirements
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-primary transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                Contact Our Experts
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="relative z-10 bg-light-bg px-4 py-16 dark:bg-gray-900 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-text dark:text-white md:text-4xl">
              Explore More
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/solutions/industries"
                className="rounded-xl border-2 border-primary p-8 transition-all hover:bg-primary hover:text-white"
              >
                <h3 className="mb-2 text-2xl font-bold">Industries We Serve</h3>
                <p className="mb-4">
                  Discover how we've helped businesses across 15+ industries achieve their goals
                </p>
                <span className="inline-flex items-center gap-2 text-primary transition-colors group-hover:text-white">
                  Learn more →
                </span>
              </Link>

              <Link
                href="/about"
                className="rounded-xl border-2 border-primary p-8 transition-all hover:bg-primary hover:text-white"
              >
                <h3 className="mb-2 text-2xl font-bold">About CITIUSCOMM</h3>
                <p className="mb-4">
                  Meet our team and learn about our 10+ years of experience and success
                </p>
                <span className="inline-flex items-center gap-2 text-primary transition-colors group-hover:text-white">
                  Learn more →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;