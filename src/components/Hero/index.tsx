import Link from "next/link";

const stats = [
  { num: "100K+", label: "Network Sites" },
  { num: "13K+",  label: "Nodes Managed" },
  { num: "100M+", label: "Subscribers" },
  { num: "30+",   label: "Years Experience" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-16 pt-[120px] dark:bg-secondary md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]"
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-[820px] text-center">

          {/* Eyebrow */}
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            ICT Infrastructure & Telecom Solutions
          </p>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-black dark:text-white sm:text-6xl md:text-7xl">
            Connecting You,{" "}
            <br className="hidden sm:block" />
            Every Step of the Way.
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-4 max-w-[620px] text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            Delivering cutting-edge, carrier-grade solutions that fuel the rapid evolution
            of Communications and Networking Infrastructure.
          </p>

          {/* Service tags */}
          <p className="mb-10 text-sm font-medium text-primary/80 dark:text-primary/70">
            Data Center · ICT Infrastructure · Cybersecurity · 5G Networks · Cloud Engineering
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-secondary"
            >
              Explore Solutions
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-transparent px-8 py-4 text-base font-semibold text-gray-700 transition-colors duration-200 hover:border-primary hover:text-primary dark:border-white/20 dark:text-gray-200 dark:hover:border-primary dark:hover:text-primary"
            >
              Get In Touch
            </Link>
          </div>

          {/* Stat strip */}
          <div className="mx-auto mt-16 border-t border-gray-200 pt-10 dark:border-white/10">
            <dl className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {stats.map(({ num, label }) => (
                <div key={label} className="text-center">
                  <dt className="text-2xl font-bold text-black dark:text-white sm:text-3xl">{num}</dt>
                  <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
