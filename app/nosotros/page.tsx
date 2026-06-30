import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutIntro } from "@/components/about-intro";
import { AboutProposal } from "@/components/about-proposal";
import { AboutValues } from "@/components/about-values";
import { JsonLd } from "@/components/json-ld";
import { HighlightedTitle } from "@/components/highlighted-title";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { absoluteUrl, breadcrumbJsonLd, defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";
import { hrefForCategoryPage, destinationCategories } from "@/src/data/destinations";

const title = "Sobre nosotros";
const description =
  "Conocé Ausland Aventuras: agencia de viajes en Córdoba, Argentina. Nacionales, internacionales y salidas regionales con atención personalizada por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/nosotros") },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: absoluteUrl("/nosotros"),
    siteName: site.name,
    title: `${title} | ${site.name}`,
    description,
    images: [{ url: defaultOgImage, alt: `${site.name} — agencia de viajes en Córdoba` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${site.name}`,
    description,
    images: [defaultOgImage],
  },
};

const categoryLabels: Record<(typeof destinationCategories)[number], string> = {
  Nacionales: "Viajes nacionales",
  Internacionales: "Viajes internacionales",
  "Regionales / Full Day": "Full day y regionales",
};

export default function AboutPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: title, path: "/nosotros" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: `${site.name} — ${title}`,
      description,
      url: absoluteUrl("/nosotros"),
      mainEntity: {
        "@type": "TravelAgency",
        name: site.name,
        description: site.description,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Córdoba",
          addressRegion: "Córdoba",
          addressCountry: "AR",
        },
      },
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="outline-none max-lg:pb-4 lg:pb-0">
        <section
          id="hero"
          className="relative min-h-[min(48vh,26rem)] overflow-hidden bg-navy-deep text-white"
        >
          <Image
            src="/hero/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-navy-deep/70"
            aria-hidden
          />
          <div className="container-page relative flex min-h-[min(48vh,26rem)] flex-col justify-end pb-10 pt-28 sm:pb-12 sm:pt-32">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-light">Quiénes somos</p>
            <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              <HighlightedTitle
                as="span"
                text="Agencia de viajes en Córdoba"
                highlight="Córdoba"
                light
              />
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {site.tagline}. Organizamos viajes nacionales, internacionales y salidas regionales con
              un trato directo y simple.
            </p>
          </div>
        </section>

        <section className="section-padding section-surface-warm">
          <AboutIntro />
        </section>

        <section className="section-padding section-surface-a">
          <AboutProposal />
        </section>

        <section className="section-padding section-surface-warm">
          <AboutValues />
        </section>

        <section className="section-padding section-surface-c">
          <div className="container-page">
            <SectionHeading
              eyebrow="Catálogo"
              title="Explorá nuestros viajes"
              subtitle="Elegí la categoría que te interesa o volvé al explorador completo."
              align="center"
            />
            <ul className="mt-10 flex list-none flex-wrap justify-center gap-3">
              {destinationCategories.map((category) => (
                <li key={category}>
                  <Link
                    href={hrefForCategoryPage(category)}
                    className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy shadow-card ring-1 ring-navy/10 transition hover:ring-sky/40 hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    {categoryLabels[category]}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link
                href="/#viajes"
                className="text-sm font-semibold text-navy transition hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              >
                Ver todos los destinos →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
