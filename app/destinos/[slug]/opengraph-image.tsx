import { notFound } from "next/navigation";
import {
  loadPublicImageDataUrl,
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/lib/og-image-template";
import { formatPriceARS, formatPriceUSD } from "@/lib/format";
import {
  destinationBySlug,
  destinations,
} from "@/src/data/destinations";
import { ogImageForDestination } from "@/lib/seo";
import {
  currencyForDestination,
  minPriceForDestination,
} from "@/src/data/travel-plans";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateImageMetadata({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinationBySlug(slug);
  if (!destination) return [];

  return [
    {
      alt: `Viaje a ${destination.title} desde Córdoba — Ausland Aventuras`,
      size: ogSize,
      contentType: ogContentType,
    },
  ];
}

export default async function Image({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const imagePath = ogImageForDestination(destination);
  const backgroundSrc = await loadPublicImageDataUrl(imagePath);

  const priceFrom = minPriceForDestination(slug) ?? destination.priceFrom;
  const currency = currencyForDestination(slug) ?? destination.priceCurrency ?? "ARS";
  let badge: string | undefined;
  if (priceFrom != null && priceFrom > 0) {
    badge =
      currency === "USD"
        ? `Desde ${formatPriceUSD(priceFrom)}`
        : `Desde ${formatPriceARS(priceFrom)}`;
  } else {
    badge = "Consultá precio";
  }

  return renderOgImage({
    eyebrow: destination.category,
    title: `Viaje a ${destination.title}`,
    subtitle: destination.description.slice(0, 120),
    badge,
    backgroundSrc,
  });
}
