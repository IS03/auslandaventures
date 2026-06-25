import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DestinationDetailView } from "@/components/destination-detail-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";
import { destinationBySlug, destinations } from "@/src/data/destinations";
import { plansByDestination } from "@/src/data/travel-plans";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinationBySlug(slug);
  if (!destination) {
    return { title: "Destino no encontrado" };
  }

  const title = `Viaje a ${destination.title}`;
  const description = `${destination.description} Consultá fechas, inclusiones y precios con ${site.name}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const plans = plansByDestination(slug);

  return (
    <>
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="outline-none max-lg:pb-4 lg:pb-0">
        <DestinationDetailView destination={destination} plans={plans} />
        <div className="container-page pb-8 pt-2 sm:pb-12">
          <Link
            href="/#viajes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition hover:text-sky"
          >
            <span aria-hidden>←</span> Ver todos los viajes
          </Link>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
