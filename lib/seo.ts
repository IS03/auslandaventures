import type { Metadata } from "next";
import type { Destination } from "@/src/data/destinations";
import {
  categoryPlaceholderImage,
  destinationImageFallback,
} from "@/src/data/destinations";
import type { TravelPlan } from "@/src/data/plan-types";
import { contact, whatsappUrl } from "@/src/data/contact";
import { site } from "@/lib/site";

/** URL absoluta para metadata, sitemap y JSON-LD. */
export function absoluteUrl(path = ""): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Imagen OG por destino: flyer, categoría o marca. */
export function ogImageForDestination(destination: Destination): string {
  if (destination.hasPhoto) return destination.image;
  return categoryPlaceholderImage[destination.category];
}

export function destinationIsIndexable(destination: Destination): boolean {
  return destination.hasTravelPlan || destination.hasPhoto;
}

export function buildDestinationMetadata(destination: Destination): Metadata {
  const title = `Viaje a ${destination.title}`;
  const description = `${destination.description} Consultá fechas, inclusiones y precios con ${site.name}.`;
  const url = absoluteUrl(`/destinos/${destination.slug}`);
  const ogImage = ogImageForDestination(destination);
  const indexable = destinationIsIndexable(destination);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      images: [
        {
          url: ogImage,
          alt: `Viaje a ${destination.title} desde Córdoba — ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage],
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export function travelAgencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    description: site.description,
    url: site.url,
    logo: absoluteUrl("/brand/logo-cuadrado.png"),
    image: absoluteUrl("/hero/hero.jpg"),
    telephone: contact.whatsapp.primary.display,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    areaServed: {
      "@type": "City",
      name: "Córdoba",
      containedInPlace: { "@type": "Country", name: "Argentina" },
    },
    sameAs: [contact.instagram.url],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: contact.whatsapp.primary.display,
      availableLanguage: ["Spanish"],
      url: whatsappUrl(""),
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@type": "TravelAgency", name: site.name },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function destinationTripJsonLd(
  destination: Destination,
  plans: TravelPlan[],
  priceFrom: number | null,
  priceCurrency: string,
) {
  const url = absoluteUrl(`/destinos/${destination.slug}`);
  const image = absoluteUrl(ogImageForDestination(destination));

  const trip: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `Viaje a ${destination.title}`,
    description: destination.description,
    url,
    image,
    touristType: destination.category,
    provider: {
      "@type": "TravelAgency",
      name: site.name,
      url: site.url,
    },
  };

  if (priceFrom != null && priceFrom > 0) {
    trip.offers = {
      "@type": "Offer",
      price: priceFrom,
      priceCurrency,
      availability: "https://schema.org/InStock",
      url,
      seller: { "@type": "TravelAgency", name: site.name },
    };
  }

  if (plans.length > 0) {
    const plan = plans[0];
    trip.itinerary = {
      "@type": "ItemList",
      numberOfItems: plans.length,
      name: plan.title,
    };
    if (plan.nights) {
      trip.tripOrigin = { "@type": "City", name: "Córdoba" };
    }
  }

  return trip;
}

export const defaultOgImage = "/hero/hero.jpg";
export const fallbackOgImage = destinationImageFallback;
