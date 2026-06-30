import Leadership from "@/components/About/Leadership";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Leadership | Citiuscomm",
  description:
    "The team behind Citiuscomm — decades of leadership experience across telecom, networking, and enterprise technology.",
};

const LeadershipPage = () => (
  <main className="relative bg-canvas">
    {/* Custom creative hero */}
    <section className="relative overflow-hidden bg-canvas pb-20 pt-[120px] md:pb-28 md:pt-[150px] xl:pb-32 xl:pt-[170px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="ds-dots absolute inset-0 text-primary/[0.08] dark:text-brand/[0.1]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content - Left Aligned */}
          <div className="max-w-2xl">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-muted px-4 py-2 text-sm font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Leadership
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-tight text-fg sm:text-6xl md:text-6xl">
              Decades of <span className="text-primary">Operator</span> & <span className="text-primary">Enterprise</span> Expertise
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-muted sm:text-xl">
              Our leadership team brings unparalleled experience from the world's largest telecom operators, OEMs, and enterprise technology leaders. We've scaled networks, launched products, and transformed businesses — now we're building carrier-grade solutions that redefine what's possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 p-1 flex items-center justify-center">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-muted">30+ combined years in telecom and enterprise technology</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 p-1 flex items-center justify-center">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-muted">Scaled networks serving 100M+ subscribers globally</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-primary/20 p-1 flex items-center justify-center">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-muted">Leadership backgrounds from Ericsson, Siemens, Reliance, and more</span>
              </div>
            </div>
          </div>

          {/* Right: Visual element with stats grid */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-md space-y-6">
              {/* Stat cards */}
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-brand-muted/30 to-transparent p-8 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="mt-2 text-sm text-muted">Years of combined expertise</div>
              </div>
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/20 to-transparent p-8 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary">7</div>
                <div className="mt-2 text-sm text-muted">Executive leaders across teams</div>
              </div>
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-brand-muted/30 to-transparent p-8 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary">100M+</div>
                <div className="mt-2 text-sm text-muted">Subscribers managed globally</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Leadership />
    <CtaBand
      title="Want to work with us?"
      description="Whether you're an operator, an enterprise, or a partner — our leadership team is one message away."
      primaryLabel="Get In Touch"
    />
  </main>
);

export default LeadershipPage;
