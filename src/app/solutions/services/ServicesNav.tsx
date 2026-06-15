'use client';

import { useEffect, useState } from "react";

interface NavItem {
  slug: string;
  title: string;
}

/**
 * Sticky scrollspy navigation for the services page. Highlights the section
 * currently in view via IntersectionObserver.
 */
export default function ServicesNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(top.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    items.forEach(({ slug }) => {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Services" className="space-y-0.5">
      <p className="mb-3 pl-4 text-xs font-semibold uppercase tracking-widest text-faint">
        On this page
      </p>
      {items.map(({ slug, title }) => (
        <a
          key={slug}
          href={`#${slug}`}
          className={`block border-l-2 py-2 pl-4 text-sm font-medium transition-colors duration-150 ${
            active === slug
              ? "border-primary text-primary"
              : "border-edge text-muted hover:border-edge-2 hover:text-fg"
          }`}
        >
          {title}
        </a>
      ))}
    </nav>
  );
}
