import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryHeroHeading } from "@/components/category-hero-heading";
import { DestinationGrid } from "@/components/destination-grid";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import {
  absoluteUrl,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { site } from "@/lib/site";
import {
  categoryPageBySlug,
  categoryPageSlugs,
  categoryPages,
} from "@/src/data/category-pages";
import {
  categoryPlaceholderImage,
  destinationsInCategory,
  hrefForCategoryPage,
  type DestinationCategory,
} from "@/src/data/destinations";

type PageProps = {
  params: Promise<{ categoria: string }>;
};

export function generateStaticParams() {
  return categoryPageSlugs.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria } = await params;
  const page = categoryPageBySlug(categoria);
  if (!page) {
    return { title: "Categoría no encontrada" };
  }

  const url = absoluteUrl(hrefForCategoryPage(page.category));

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: `${page.title} | ${site.name}`,
      description: page.metaDescription,
      images: [
        {
          url: categoryPlaceholderImage[page.category],
          alt: `${page.heading} — ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${site.name}`,
      description: page.metaDescription,
      images: [categoryPlaceholderImage[page.category]],
    },
  };
}

function categoryLabel(category: DestinationCategory): string {
  const labels: Record<DestinationCategory, string> = {
    Nacionales: "Nacionales",
    Internacionales: "Internacionales",
    "Regionales / Full Day": "Regionales",
  };
  return labels[category];
}

export default async function CategoryPage({ params }: PageProps) {
  const { categoria } = await params;
  const page = categoryPageBySlug(categoria);

  if (!page) {
    notFound();
  }

  const list = destinationsInCategory(page.category);
  const heroImage = categoryPlaceholderImage[page.category];

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: categoryLabel(page.category), path: hrefForCategoryPage(page.category) },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.heading,
      description: page.metaDescription,
      url: absoluteUrl(hrefForCategoryPage(page.category)),
      isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
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
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/40"
            aria-hidden
          />
          <div className="container-page relative flex min-h-[min(48vh,26rem)] flex-col justify-end pb-10 pt-28 sm:pb-12 sm:pt-32">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-light">
              {categoryLabel(page.category)}
            </p>
            <CategoryHeroHeading heading={page.heading} />
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {page.intro}
            </p>
          </div>
        </section>

        <section className="section-padding section-surface-c">
          <div className="container-page">
            <p className="mb-8 text-sm text-navy-deep/65">
              {list.length} destino{list.length === 1 ? "" : "s"} en esta categoría. Los precios son
              orientativos; confirmá fechas y tarifas al consultar.
            </p>
            <DestinationGrid destinations={list} />
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
              <Link
                href="/#viajes"
                className="text-navy transition hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              >
                ← Explorar todos los viajes
              </Link>
              {categoryPages
                .filter((p) => p.slug !== page.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={hrefForCategoryPage(other.category)}
                    className="text-navy/70 transition hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    {categoryLabel(other.category)}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
