'use client';

import Link from "next/link";

const Industries = () => {
  const industriesData = [
    {
      icon: "🏦",
      title: "Finance & Banking",
      description: "Digital transformation, cybersecurity, and regulatory compliance solutions",
      solutions: ["Digital Banking", "Fraud Detection", "Compliance Management", "Data Security"]
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description: "Patient management systems, telemedicine, and health data analytics",
      solutions: ["EHR Systems", "Patient Portals", "Health Analytics", "HIPAA Compliance"]
    },
    {
      icon: "🛍️",
      title: "Retail & E-commerce",
      description: "Omnichannel solutions, inventory management, and customer experience optimization",
      solutions: ["E-commerce Platforms", "Inventory Systems", "POS Solutions", "CRM Integration"]
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      description: "IoT solutions, supply chain optimization, and production analytics",
      solutions: ["IoT Monitoring", "Supply Chain", "Production Planning", "Quality Control"]
    },
    {
      icon: "📱",
      title: "Telecommunications",
      description: "5G infrastructure, customer analytics, and network optimization",
      solutions: ["Network Management", "Customer Analytics", "Billing Systems", "5G Solutions"]
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Learning management systems, student analytics, and digital campus solutions",
      solutions: ["LMS Platforms", "Student Analytics", "Virtual Classrooms", "Campus Management"]
    },
    {
      icon: "🏛️",
      title: "Government",
      description: "Citizen services, data governance, and secure infrastructure solutions",
      solutions: ["e-Governance", "Data Management", "Citizen Portals", "Security Solutions"]
    },
    {
      icon: "🛡️",
      title: "Insurance",
      description: "Claims management, underwriting automation, and customer analytics",
      solutions: ["Claims Processing", "Underwriting Tools", "Customer Analytics", "Fraud Prevention"]
    },
    {
      icon: "🎬",
      title: "Media & Entertainment",
      description: "Streaming platforms, content management, and audience analytics",
      solutions: ["Streaming Platforms", "Content Management", "Analytics", "Monetization"]
    },
    {
      icon: "🏠",
      title: "Real Estate",
      description: "Property management, virtual tours, and real estate analytics",
      solutions: ["Property Management", "Virtual Tours", "CRM Systems", "Analytics"]
    },
    {
      icon: "⚡",
      title: "Energy & Utilities",
      description: "Smart grid solutions, consumption analytics, and IoT monitoring",
      solutions: ["Smart Grid", "IoT Sensors", "Analytics", "Billing Systems"]
    },
    {
      icon: "🏨",
      title: "Hospitality",
      description: "Booking systems, guest experience, and operations management",
      solutions: ["Booking Engines", "PMS Systems", "Guest Analytics", "Operations"]
    },
    {
      icon: "🚚",
      title: "Logistics & Transportation",
      description: "Fleet management, route optimization, and real-time tracking",
      solutions: ["Fleet Management", "Route Optimization", "Tracking", "Logistics Analytics"]
    },
    {
      icon: "🚗",
      title: "Automotive",
      description: "Connected vehicles, dealership management, and manufacturing optimization",
      solutions: ["Connected Vehicles", "Dealership Systems", "Manufacturing", "Analytics"]
    },
    {
      icon: "💊",
      title: "Pharmaceuticals",
      description: "R&D support, supply chain, and regulatory compliance",
      solutions: ["R&D Management", "Supply Chain", "Regulatory Compliance", "Clinical Trials"]
    }
  ];

  return (
    <main>

      {/* Hero Section */}
<section className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-gray-50 pb-16 pt-[120px] dark:from-secondary dark:to-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">

  {/* Animated Background Blobs */}

  <div className="absolute right-0 top-0 z-0 opacity-40 lg:opacity-60">
    <div className="h-[450px] w-[450px] rounded-full bg-gradient-to-r from-primary/40 to-secondary/30 blur-3xl"></div>
  </div>

  <div className="absolute -left-20 bottom-0 z-0 opacity-30 lg:opacity-50">
    <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-secondary/40 to-primary/30 blur-3xl"></div>
  </div>

  <div className="absolute right-1/4 top-1/3 z-0 h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/10 blur-3xl opacity-50 dark:opacity-30"></div>

  <div className="container relative z-10">
    <div className="mx-auto max-w-3xl text-center">

      <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl">
      <span className="text-primary">Industries We Serve</span>
      </h1>

      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl">
        With 10+ years of experience across 15+ industries, we understand the unique challenges and opportunities in your sector

      </p>

    </div>
  </div>

</section>

      {/* Industries Grid */}
      <section className="relative z-10 bg-white px-4 py-16 dark:bg-gray-800 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industriesData.map((industry, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:border-primary hover:shadow-2xl dark:border-gray-700 dark:from-gray-900 dark:to-gray-800"
                >
                  {/* Icon */}
                  <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
                    {industry.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-text dark:text-white">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    {industry.description}
                  </p>

                  {/* Solutions */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, sIndex) => (
                        <li
                          key={sIndex}
                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      Get a consultation
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Success Stories Section */}
      <section className="relative z-10 bg-light-bg px-4 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text dark:text-white md:text-4xl">
                Success Across Industries
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Learn how CITIUSCOMM has helped organizations like yours achieve their goals
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-8 text-center dark:bg-gray-800">
                <div className="mb-3 text-4xl font-bold text-primary">500+</div>
                <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
              <div className="rounded-xl bg-white p-8 text-center dark:bg-gray-800">
                <div className="mb-3 text-4xl font-bold text-primary">15+</div>
                <p className="text-gray-600 dark:text-gray-400">Industries Served</p>
              </div>
              <div className="rounded-xl bg-white p-8 text-center dark:bg-gray-800">
                <div className="mb-3 text-4xl font-bold text-primary">10+</div>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary px-4 py-16 dark:from-primary dark:to-secondary md:py-20 lg:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Let's Drive Innovation in Your Industry
            </h2>
            <p className="mb-8 text-lg text-gray-100">
              Connect with our industry experts to discover how we can transform your organization
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-primary transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                Start Your Journey
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/solutions/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-primary"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 z-0 -translate-y-1/2 opacity-10">
          <div className="h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>
      </section>
    </main>
  );
};

export default Industries;