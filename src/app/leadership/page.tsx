import Leadership from "@/components/About/Leadership";
import CtaBand from "@/components/CtaBand";
import Badge from "@/components/ui/Badge";
import PageBackdrop from "@/components/ui/PageBackdrop";

export const metadata = {
  title: "Leadership | Citiuscomm",
  description:
    "The team behind Citiuscomm, with decades of leadership experience across telecom, networking, and enterprise technology.",
};

const LeadershipPage = () => (
  <main className="relative bg-canvas">
    {/* One dot grid for the whole page — see PageBackdrop for why it is not fixed. */}
    <PageBackdrop />

    <div className="relative z-10">
      {/* Creative hero */}
      <section className="relative overflow-hidden bg-transparent pb-12 pt-[120px] md:pb-16 md:pt-[150px] xl:pb-20 xl:pt-[170px]">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Badge variant="brand" dot>Leadership</Badge>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-heading sm:text-6xl md:text-7xl">
              The Team That <span className="text-brand">Scales Networks</span>
            </h1>

            <p className="mb-12 text-xl leading-relaxed text-muted">
              30+ years of operator and enterprise leadership. From Ericsson to Reliance, we&apos;ve
              built, managed, and scaled networks that carriers and enterprises run their business on.
            </p>

            {/* Only the two verified figures — the subscriber count that used to
                sit in this grid was never sourced. See Home/ClientMarquee. */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="text-3xl font-bold text-brand">30+</div>
                <div className="mt-2 text-sm text-muted">Years of combined expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">20+</div>
                <div className="mt-2 text-sm text-muted">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Leadership />
      <CtaBand />
    </div>
  </main>
);

export default LeadershipPage;
