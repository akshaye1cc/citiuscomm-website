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
  <section className="relative py-16 md:py-20 lg:py-28 bg-canvas-subtle">
    <div className="container">

      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          Delivering at Scale
        </p>
        <h2 className="mb-4 text-3xl font-bold text-fg md:text-4xl">
          Trusted by carriers and enterprises worldwide
        </h2>
        <p className="text-lg text-muted">
          Numbers that reflect decades of execution in the world's most demanding
          telecom environments.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {metrics.map(({ number, label, context }) => (
          <div
            key={label}
            className="rounded-2xl border border-edge bg-surface p-8 text-center"
          >
            <div className="mb-2 text-4xl font-bold tabular-nums text-primary">{number}</div>
            <div className="mb-1 text-sm font-semibold text-fg">{label}</div>
            <div className="text-xs text-muted">{context}</div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-faint">
          A selection of our clients
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
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
