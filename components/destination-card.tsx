"use client";

import Image from "next/image";
import type { Destination } from "@/src/data/destinations";
import { destinationImageFallback } from "@/src/data/destinations";
import { getDestinationCardMeta, getFlyerImagesForDestination } from "@/src/data/travel-plans";
import { FlyerLightbox } from "./flyer-lightbox";
import { PriceBadge } from "./price-badge";
import { WhatsAppButton } from "./whatsapp-button";

type DestinationCardProps = {
  destination: Destination;
  onDarkSection?: boolean;
};

function CardShell({
  destination,
  onDarkSection,
  openFlyer,
}: DestinationCardProps & { openFlyer?: () => void }) {
  const { title, category, type, description, image, hasPhoto, whatsappMessage, slug } =
    destination;
  const planMeta = getDestinationCardMeta(slug);
  const priceFrom = planMeta?.priceFrom ?? destination.priceFrom;
  const canOpenFlyer = Boolean(openFlyer && hasPhoto);

  const imageAlt = hasPhoto ? `Flyer del viaje a ${title}, categoría ${category}` : "";

  const imageBlock = (
    <div
      className={`relative aspect-[5/6] overflow-hidden sm:aspect-[4/5] ${
        canOpenFlyer ? "cursor-zoom-in" : ""
      }`}
    >
      {hasPhoto ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 320px"
          className="object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-br from-navy via-navy-deep to-sky/50"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center p-8" aria-hidden>
            <Image
              src={destinationImageFallback}
              alt=""
              width={140}
              height={42}
              loading="lazy"
              className="h-auto w-[min(55%,140px)] opacity-25 brightness-0 invert"
            />
          </div>
        </>
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-navy-deep/5"
        aria-hidden
      />

      {canOpenFlyer && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-navy opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          Ver flyer
        </span>
      )}

      <span className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy shadow-sm backdrop-blur-sm sm:px-3 sm:text-[11px]">
        {category}
      </span>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between gap-2 p-3 sm:p-4">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg font-semibold text-white sm:text-xl">
            {title}
          </h3>
          <p className="mt-0.5 truncate text-[11px] font-medium text-white/85 sm:text-xs">{type}</p>
        </div>
        <PriceBadge amount={priceFrom} onDark />
      </div>
    </div>
  );

  return (
    <article
      className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow focus-within:ring-2 focus-within:ring-sky/50 ${
        onDarkSection ? "ring-white/15" : "ring-navy/8 hover:ring-sky/25"
      }`}
    >
      {canOpenFlyer ? (
        <button
          type="button"
          onClick={openFlyer}
          className="relative block w-full border-0 bg-transparent p-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          aria-label={`Ver flyer completo de ${title}`}
        >
          {imageBlock}
        </button>
      ) : (
        imageBlock
      )}

      <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5">
        {planMeta &&
          (canOpenFlyer ? (
            <button
              type="button"
              onClick={openFlyer}
              className="group/line w-full border-0 bg-transparent p-0 text-left focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              <p className="text-xs font-semibold leading-snug text-sky group-hover/line:text-navy">
                {planMeta.planLine}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-navy-deep/45 group-hover/line:text-sky">
                Tocá para ver el flyer completo
              </p>
            </button>
          ) : (
            <p className="text-xs font-semibold leading-snug text-sky">{planMeta.planLine}</p>
          ))}

        <p className="line-clamp-2 text-sm leading-relaxed text-navy-deep/75">{description}</p>

        {!hasPhoto && (
          <p className="text-xs font-medium text-navy-deep/55">Consultá disponibilidad y fechas</p>
        )}

        <WhatsAppButton
          message={whatsappMessage}
          variant="card"
          size="md"
          className="mt-auto w-full"
          ariaLabel={`Consultar viaje a ${title} por WhatsApp`}
        >
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}

export function DestinationCard({ destination, onDarkSection = false }: DestinationCardProps) {
  const flyerImages = getFlyerImagesForDestination(
    destination.slug,
    destination.hasPhoto ? destination.image : undefined,
  );

  if (flyerImages.length === 0) {
    return <CardShell destination={destination} onDarkSection={onDarkSection} />;
  }

  return (
    <FlyerLightbox images={flyerImages} title={destination.title}>
      {(openFlyer) => (
        <CardShell
          destination={destination}
          onDarkSection={onDarkSection}
          openFlyer={openFlyer}
        />
      )}
    </FlyerLightbox>
  );
}
