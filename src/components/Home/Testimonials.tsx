import Reveal from "@/components/ui/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { testimonials } from "@/data/testimonials";

/**
 * The second dark band. Quotes are the one piece of copy that benefits from
 * being lifted off the page entirely, and putting it on navy also splits the
 * two light card sections either side of it.
 *
 * Card fills are white at low alpha rather than a token surface: on navy a
 * surface token would read as a white box punched into the band.
 */
export default function Testimonials() {
  return (
    <SectionShell tone="navy" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-on-dark-muted">
            In Their Words
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold leading-tight text-white sm:text-4xl"
          >
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.company} delay={Math.min(i, 3) * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-white/[0.06] p-7 ring-1 ring-white/10">
                <span aria-hidden className="block text-6xl font-bold leading-[0.6] text-brand">
                  &ldquo;
                </span>

                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-white">
                  {testimonial.review}
                </blockquote>

                <figcaption className="mt-7 border-t border-white/10 pt-6">
                  {/* brightness-0 then invert knocks any mark, colour or line art,
                      to flat white — the only treatment that holds on navy. */}
                  <img
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    className="mb-5 h-7 w-auto max-w-[140px] object-contain opacity-70 brightness-0 invert"
                    draggable={false}
                  />
                  <p className="text-sm font-semibold text-on-dark-muted">
                    {testimonial.personName}
                  </p>
                  <p className="mt-1 text-sm text-on-dark-muted/80">{testimonial.personTitle}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
