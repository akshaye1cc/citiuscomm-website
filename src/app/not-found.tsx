import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center py-20">
      <div className="container text-center">
        <p className="text-[10rem] font-bold leading-none text-gray-100 dark:text-gray-800 select-none">
          404
        </p>
        <div className="-mt-8 relative z-10">
          <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Page not found
          </h1>
          <p className="mx-auto mb-8 max-w-sm text-body-color">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
