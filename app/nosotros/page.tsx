import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { absoluteUrl, breadcrumbJsonLd, defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";
import { contact, defaultWhatsappMessage } from "@/src/data/contact";
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

const values = [
  {
    title: "Cercanía",
    text: "Te respondemos por WhatsApp con fechas, precios y opciones concretas. Sin formularios eternos ni call centers.",
  },
  {
    title: "Coordinación en ruta",
    text: "Acompañamiento antes y durante el viaje para que disfrutes la experiencia sin resolver todo solo.",
  },
  {
    title: "Variedad de destinos",
    text: "Nacionales, internacionales y salidas regionales pensadas para viajar desde Córdoba.",
  },
  {
    title: "Información clara",
    text: "Publicamos inclusiones, fechas y tarifas orientativas para que sepas qué estás consultando.",
  },
];

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
              Agencia de viajes en Córdoba
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {site.tagline}. Organizamos viajes nacionales, internacionales y salidas regionales con
              un trato directo y simple.
            </p>
          </div>
        </section>

        <section className="section-padding section-surface-a">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Nuestra propuesta"
                title="Viajes con confianza, desde Córdoba"
                subtitle="Ausland Aventuras nació para que descubrir un nuevo destino sea fácil: mirás el catálogo, elegís tu viaje y consultás directo con nosotros."
              />
              <p className="mt-6 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                Somos una agencia de viajes con base en {contact.location}. Trabajamos con salidas en
                bus y aéreo, planes con fechas publicadas y coordinación en ruta. Muchos de nuestros
                programas incluyen asistencia al viajero — consultá el detalle de cada destino antes
                de reservar.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                En esta web encontrás destinos, precios orientativos e inclusiones. Para confirmar
                cupos, fechas y tarifas finales, escribinos por WhatsApp con la cantidad de personas y
                el viaje que te interesa.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy/8 sm:p-8">
              <h2 className="font-display text-xl text-navy sm:text-2xl">Contacto directo</h2>
              <ul className="mt-5 space-y-3 text-sm text-navy-deep/80">
                <li>
                  <span className="font-semibold text-navy">WhatsApp:</span>{" "}
                  {contact.whatsapp.primary.display}
                </li>
                <li>
                  <span className="font-semibold text-navy">Email:</span> {contact.email}
                </li>
                <li>
                  <span className="font-semibold text-navy">Instagram:</span> @
                  {contact.instagram.handle}
                </li>
                <li>
                  <span className="font-semibold text-navy">Ubicación:</span> {contact.location}
                </li>
              </ul>
              <WhatsAppButton
                message={defaultWhatsappMessage}
                variant="primary"
                size="lg"
                className="mt-6 inline-flex w-full justify-center sm:w-auto"
              >
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="section-padding section-surface-warm">
          <div className="container-page">
            <SectionHeading
              eyebrow="Valores"
              title="Por qué viajar con nosotros"
              align="center"
            />
            <ul className="mt-10 grid list-none gap-5 sm:grid-cols-2 sm:gap-6">
              {values.map((item) => (
                <li key={item.title}>
                  <article className="h-full rounded-3xl bg-white p-6 ring-1 ring-navy/8 sm:p-8">
                    <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-deep/70">{item.text}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
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
