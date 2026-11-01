import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { features } from "@/config/features";
import { site } from "@/content/site";
import { brand } from "@/lib/brand";
import { fontVariables } from "@/lib/fonts";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import { ConceptBar } from "@/components/layout/ConceptBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd } from "@/components/JsonLd";
import { RevealObserver, motionScript } from "@/components/motion/RevealObserver";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  robots: features.indexable ? { index: true, follow: true } : { index: false, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: brand.cream,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.lang} data-theme={features.theme} className={fontVariables} suppressHydrationWarning>
      <head>
        {features.motion !== "off" && <script dangerouslySetInnerHTML={{ __html: motionScript }} />}
      </head>
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        {features.conceptMode && features.announcementBar && <ConceptBar />}
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingActions />
        {features.motion !== "off" && <RevealObserver />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
