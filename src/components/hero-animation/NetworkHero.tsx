'use client';

import { type ReactNode } from 'react';
import Button from '@/components/ui/Button';
import NodeMesh from './NodeMesh';

/**
 * NetworkHero
 *
 * Two columns from lg up: copy left-aligned on the left, a breathing node mesh
 * on the right. Below lg the two stack, copy first, with the mesh reduced to a
 * band underneath. Below sm the mesh is dropped rather than shrunk — at that
 * width the 36px lattice compresses into speckle and stops reading as a mesh
 * at all, so it earns nothing and still costs a raf loop.
 *
 * The fibre-convergence animation that used to sit behind this copy now lives
 * in FibreConvergence.tsx, unrendered but intact.
 */

export interface NetworkHeroProps {
  eyebrow?: string;
  headlineLead?: string;
  headlineMain?: string;
  subhead?: ReactNode;
  credibility?: string;
  proof?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Change to reshape the whole mesh. */
  seed?: number;
}

const DEFAULTS = {
  eyebrow: 'Enterprise infrastructure · Networks · Cloud · Security',
  headlineLead: 'Complex infrastructure',
  headlineMain: 'One accountable partner',
  subhead:
    'We design, deploy and operate network, data centre, cloud and security infrastructure for telecom carriers, banks and government bodies.',
  credibility: 'Built to execute mission-critical infrastructure at national scale.',
  proof: ['30+ years of combined leadership', '100M+ subscribers managed'],
  primaryCta: { label: 'Start a conversation', href: '/contact' },
  secondaryCta: { label: 'See what we deliver', href: '/solutions/services' },
};

export function NetworkHero({
  eyebrow = DEFAULTS.eyebrow,
  headlineLead = DEFAULTS.headlineLead,
  headlineMain = DEFAULTS.headlineMain,
  subhead = DEFAULTS.subhead,
  credibility = DEFAULTS.credibility,
  proof = DEFAULTS.proof,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta = DEFAULTS.secondaryCta,
  seed = 20260804,
}: NetworkHeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent pb-20 pt-[120px] md:pb-28 md:pt-[150px] xl:pt-[170px]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 xl:px-16">
        {/* Not a 50/50 split: at lg an even split starves the copy column and
            wraps the two CTAs onto separate lines. Copy takes the larger share
            until xl, where there is room for both to breathe. */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-10 xl:grid-cols-[1.1fr_1fr] xl:gap-16">
          {/* ---- Copy ---- */}
          <div className="max-w-[620px] text-left">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
              <span aria-hidden className="h-px w-8 shrink-0 bg-cta" />
              {eyebrow}
            </p>

            <h1 className="mb-5 text-4xl leading-[1.07] tracking-tight sm:text-5xl xl:text-[3.25rem]">
              <span className="block font-semibold text-muted">{headlineLead}</span>
              <span className="block text-heading">{headlineMain}</span>
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-muted">{subhead}</p>
            <p className="mb-9 text-base leading-relaxed text-faint">{credibility}</p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              <Button variant="cta" size="lg" href={primaryCta.href}>
                {primaryCta.label}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              {/* Both hero CTAs are the same size. The lg/md hierarchy pattern
                  used in CtaBand is deliberately not applied here — side by side
                  at the top of the page these read as a matched pair. */}
              <Button variant="cta" size="lg" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            </div>

            {/* Proof as one quiet line, not a panel of counters. */}
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-faint">
              {/* Separator trails its own item rather than leading the next, so
                  a wrap leaves the rule at the end of a line instead of
                  orphaning it at the start of the one below. */}
              {proof.map((item, index) => (
                <li key={item} className="flex items-center gap-4">
                  <span>{item}</span>
                  {index < proof.length - 1 && (
                    <span aria-hidden className="h-3 w-px bg-edge-2" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Mesh ----
              The page-wide dot grid runs at a 26px step and the mesh sits on a
              36px lattice; two regular point fields that close together can
              moiré. The scrim knocks the grid back behind the mesh only, so the
              texture still reads across the rest of the page. */}
          <div className="relative hidden sm:block">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 bg-canvas/70 [mask-image:radial-gradient(ellipse_72%_66%_at_50%_50%,black_35%,transparent_100%)]"
            />
            <NodeMesh
              seed={seed}
              className="relative h-[260px] w-full md:h-[320px] lg:aspect-[9/7] lg:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetworkHero;
