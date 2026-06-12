import clients from "@/data/clients";

const metrics = [
  {
    number: "100K+",
    label: "Network Sites Deployed",
    context: "Across India, SAARC, and Southeast Asia",
  },
  {
    number: "100M+",
    label: "Subscribers Supported",
    context: "On carrier-grade infrastructure we delivered",
  },
  {
    number: "500+",
    label: "Clients Served",
    context: "Spanning 15+ industries worldwide",
  },
  {
    number: "30+",
    label: "Years of Expertise",
    context: "In telecom and ICT infrastructure delivery",
  },
];

const Testimonials = () => (
  <section className="relative py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
    <div className="container">

      <div className="mb-14 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl mb-4">
          Delivering at Scale
        </h2>
        <p className="text-body-color text-lg">
          Numbers that reflect decades of execution in the world's most demanding
          telecom environments.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mb-16">
        {metrics.map(({ number, label, context }) => (
          <div
            key={label}
            className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 text-center"
          >
            <div className="text-4xl font-bold text-primary mb-2">{number}</div>
            <div className="font-semibold text-black dark:text-white mb-1 text-sm">{label}</div>
            <div className="text-xs text-body-color">{context}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-8">
          A selection of our clients
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.logo}
              alt={client.title}
              className="h-8 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
            />
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Testimonials;
