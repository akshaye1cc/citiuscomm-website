"use client";
import { useEffect, useRef } from "react";

const traits = [
  {
    title: "Domain curiosity",
    desc: "You want to understand the \"why\" behind healthcare — not just write code, but make it matter.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    title: "Collaborative spirit",
    desc: "You lift teammates up, share context freely, and believe the best ideas come from working together.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Bias for impact",
    desc: "You ship thoughtfully, take ownership of outcomes, and care deeply about quality over speed.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Continuous learner",
    desc: "You embrace change, pick up new technologies quickly, and never stop growing your craft.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Clear communicator",
    desc: "You ask the right questions, document your thinking, and make complex ideas easy to understand.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
  },
  {
    title: "Integrity first",
    desc: "You're honest, dependable, and understand that in healthcare, trust isn't optional — it's everything.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"/>
      </svg>
    ),
  },
];

const reviews = [
  {
    quote: "CitiusTech provides tremendous opportunities for learning, skill enhancement, and exposure to advanced healthcare technologies. The leadership is supportive and focused on employee growth.",
    author: "Senior engineer",
    location: "US",
    stars: 5,
  },
  {
    quote: "Great place to work. Employee-oriented company. They give you the chance to work on the latest tech stack — you never feel stagnant here.",
    author: "Sr. software developer, team lead",
    location: "5+ years",
    stars: 5,
  },
  {
    quote: "Good work-life balance, great work culture, higher visibility to upper management. Friendly people all around — you genuinely enjoy coming to work.",
    author: "Current employee",
    location: "US",
    stars: 4,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-3 h-3 ${i < count ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

const WorkWithUs = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work-with-us" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Join the team</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">Work with us</h2>
          <p className="text-base text-body-color">
            We're building the future of healthcare technology — and we're looking for people who bring curiosity, craft, and purpose to everything they do.
          </p>
        </div>

       {/* What we look for */}
<p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-8">What we look for</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mb-16">
  {[
    { title: "Domain curiosity", desc: "You want to understand the \"why\" behind healthcare — not just write code, but make it matter." },
    { title: "Continuous learner", desc: "You embrace change, pick up new technologies quickly, and never stop growing your craft." },
    { title: "Collaborative spirit", desc: "You lift teammates up, share context freely, and believe the best ideas come from working together." },
    { title: "Clear communicator", desc: "You ask the right questions, document your thinking, and make complex ideas easy to understand." },
    { title: "Bias for impact", desc: "You ship thoughtfully, take ownership of outcomes, and care deeply about quality over speed." },
    { title: "Integrity first", desc: "You're honest, dependable, and understand that in healthcare, trust isn't optional — it's everything." },
  ].map((trait, i) => (
    <div key={i} className="flex gap-3 py-4 border-b border-gray-100 dark:border-white/10 last:border-none">
      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2" />
      <div>
        <h3 className="text-sm font-semibold text-black dark:text-white mb-1">{trait.title}</h3>
        <p className="text-sm text-body-color leading-relaxed">{trait.desc}</p>
      </div>
    </div>
  ))}
</div>

        {/* Glassdoor Reviews Marquee */}
        <p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-6">What our people say</p>
        <div className="overflow-hidden mb-12">
          <div
            ref={trackRef}
            className="flex gap-4 w-max"
            style={{ animation: "marquee 28s linear infinite" }}
            onMouseEnter={() => trackRef.current && (trackRef.current.style.animationPlayState = "paused")}
            onMouseLeave={() => trackRef.current && (trackRef.current.style.animationPlayState = "running")}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-72 flex-shrink-0 p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400">Glassdoor review</span>
                </div>
                <Stars count={r.stars} />
                <blockquote className="text-sm text-body-color italic leading-relaxed mb-3">"{r.quote}"</blockquote>
                <p className="text-xs text-gray-400"><span className="font-medium text-gray-500 dark:text-gray-300">{r.author}</span> · {r.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium transition">
            Get in touch
          </a>
        </div>
      </div>

      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
};

export default WorkWithUs;