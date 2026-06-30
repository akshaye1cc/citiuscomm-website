import Leadership from "@/components/About/Leadership";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Leadership | Citiuscomm",
  description:
    "The team behind Citiuscomm — decades of leadership experience across telecom, networking, and enterprise technology.",
};

const LeadershipPage = () => (
  <main className="relative bg-canvas">
    {/* Page-wide dotted backdrop */}
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div
        className="ds-dots absolute inset-0 text-primary/[0.08] dark:text-brand/[0.1]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 10%, black 90%, transparent 100%)",
        }}
      />
    </div>

    <div className="relative z-10">
      {/* Creative hero */}
      <section className="relative overflow-hidden bg-canvas pb-0 pt-[120px] md:pt-[150px] xl:pt-[170px]">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Leadership
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-fg sm:text-6xl md:text-7xl">
              The Team That <span className="text-primary">Scales Networks</span>
            </h1>

            <p className="mb-12 text-xl leading-relaxed text-muted">
              30+ years of operator and enterprise leadership. From Ericsson to Reliance, we've built, managed, and scaled networks that serve 100M+ subscribers worldwide.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="mt-2 text-sm text-muted">Years combined</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">7</div>
                <div className="mt-2 text-sm text-muted">Executive leaders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100M+</div>
                <div className="mt-2 text-sm text-muted">Subscribers managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Leadership />
    </div>
  </main>
);

export default LeadershipPage;
