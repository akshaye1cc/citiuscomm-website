import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import SectionShell from "@/components/ui/SectionShell";

/**
 * UNCONFIRMED VALUES — verify all three against a source of record before
 * launch. The years and node count match copy already on About and /solutions.
 * The partner count is the only figure of its kind on the site; /partners lists
 * 24 named vendors in its ecosystem grid, so 20+ is comfortably supported.
 */
const stats = [
  { value: "30+", label: "Years in telecom" },
  { value: "13,000+", label: "Nodes managed" },
  { value: "20+", label: "Partners" },
];

/**
 * The first dark cut on the page. It sits directly under the hero to break the
 * white run early — the page reads as one flat sheet without it.
 */
export default function NumbersBand() {
  return (
    <SectionShell tone="navy" size="compact" aria-labelledby="numbers-heading">
      <div className="container">
        <h2 id="numbers-heading" className="sr-only">
          Citiuscomm by the numbers
        </h2>

        {/* Stacks below sm rather than going three across at every width:
            "13,000+" is ~139px at text-4xl, and a 375px viewport split three
            ways leaves ~104px per column. Three-up starts at sm (575px), where
            each column is ~160px. */}
        <dl className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-8">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              {/* Reversed column: a <dl> needs the term before the description,
                  but the figure has to read first. */}
              <div className="flex flex-col-reverse text-center">
                <dt className="mt-4 text-sm font-medium text-on-dark-muted">
                  <span aria-hidden className="mx-auto mb-4 block h-px w-8 bg-white/20" />
                  {label}
                </dt>
                <dd>
                  {/* 5xl waits for lg, not md: at md each column is ~224px and
                      "13,000+" is ~187px at 48px — too close to the edge. */}
                  <Counter
                    value={value}
                    className="block text-4xl font-bold leading-none text-white lg:text-5xl"
                  />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </SectionShell>
  );
}
