import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "LUSZ STUDIOS | Creative studio, Stockholm", template: "%s | LUSZ STUDIOS" },
  description: site.description,
  openGraph: {
    title: "LUSZ STUDIOS",
    description: site.description,
    url: site.url,
    siteName: "LUSZ STUDIOS",
    images: [{ url: "/images/tcp-wide.jpg", width: 1800, height: 1200 }],
    locale: "en_SE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-lime"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
