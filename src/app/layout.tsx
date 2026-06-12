import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Citiuscomm – Telecom & ICT Infrastructure Solutions",
    template: "%s | Citiuscomm",
  },
  description:
    "Citiuscomm delivers carrier-grade telecom and ICT infrastructure solutions — networking, cloud, cybersecurity, and 5G — across India, SAARC, Singapore, and Dubai.",
  keywords: [
    "telecom infrastructure",
    "ICT solutions",
    "5G",
    "network deployment",
    "cybersecurity",
    "cloud solutions",
    "carrier-grade",
  ],
  metadataBase: new URL("https://www.citiuscomm.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.citiuscomm.com",
    siteName: "Citiuscomm",
    title: "Citiuscomm – Telecom & ICT Infrastructure Solutions",
    description:
      "End-to-end carrier-grade solutions for the communications and networking industry.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
