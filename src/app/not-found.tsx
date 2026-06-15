import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-canvas py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="ds-dots ds-dots-fade absolute inset-0 text-primary/[0.1] dark:text-brand/[0.12]" />
      </div>

      <div className="container relative z-10 text-center">
        <p className="select-none text-[10rem] font-bold leading-none text-canvas-muted">
          404
        </p>
        <div className="relative z-10 -mt-8">
          <h1 className="mb-4 text-3xl font-bold text-fg sm:text-4xl">Page not found</h1>
          <p className="mx-auto mb-8 max-w-sm text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="md" href="/">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Button>
            <Button variant="ghost" size="md" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
