import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-canvas py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="ds-dots ds-dots-fade absolute inset-0 text-edge-2/90" />
      </div>

      <div className="container relative z-10 text-center">
        {/* Decorative watermark — the heading below carries the actual message. */}
        <p aria-hidden className="select-none text-[7rem] font-bold leading-none text-canvas-muted sm:text-[9rem]">
          404
        </p>
        <div className="relative z-10 -mt-8">
          <h1 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">Page not found</h1>
          <p className="mx-auto mb-8 max-w-sm text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="cta" size="lg" href="/">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Button>
            <Button variant="cta" size="md" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
