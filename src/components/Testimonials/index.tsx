import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

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
  <section className="relative bg-canvas-subtle py-16 md:py-20 lg:py-28">
    <div className="container">

      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          Delivering at Scale
        </p>
        <h2 className="mb-4 text-3xl font-bold text-fg md:text-4xl">
          Trusted by carriers and enterprises worldwide
        </h2>
        <p className="text-lg text-muted">
          Numbers that reflect decades of execution in the world&apos;s most demanding
          telecom environments.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {metrics.map(({ number, label, context }, i) => (
          <Reveal key={label} delay={i * 0.08}>
            <div className="ds-sheen relative h-full overflow-hidden rounded-2xl border border-edge bg-surface p-8 text-center transition-colors duration-200 hover:border-primary/40">
              <div className="mb-2 text-4xl font-bold text-primary">
                <Counter value={number} />
              </div>
              <div className="mb-1 text-sm font-semibold text-fg">{label}</div>
              <div className="text-xs text-muted">{context}</div>
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;
