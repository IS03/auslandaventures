import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { DM_Serif_Display, Nunito } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SkipToContent } from "@/components/skip-to-content";
import { travelAgencyJsonLd, webSiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const title = `${site.name} | Viajes desde Córdoba`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "viajes Córdoba",
    "agencia de viajes",
    "viajes nacionales",
    "viajes internacionales",
    "full day Córdoba",
    "Ausland Aventuras",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/brand/logo-cuadrado.png", type: "image/png" }],
    apple: [{ url: "/brand/logo-cuadrado.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2558",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <JsonLd data={[travelAgencyJsonLd(), webSiteJsonLd()]} />
        <SkipToContent />
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        ) : null}
      </body>
    </html>
  );
}
