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
  /** Catálogo en grilla: más chico en celular (2 columnas + proporciones ajustadas). */
  compact?: boolean;
};

function CardShell({
  destination,
  onDarkSection,
  compact = false,
  openFlyer,
}: DestinationCardProps & { openFlyer?: () => void }) {
  const { title, category, type, description, image, hasPhoto, whatsappMessage, slug } =
    destination;
  const planMeta = getDestinationCardMeta(slug);
  const priceFrom = planMeta?.priceFrom ?? destination.priceFrom;
  const canOpenFlyer = Boolean(openFlyer && hasPhoto);

  const imageAlt = hasPhoto ? `Flyer del viaje a ${title}, categoría ${category}` : "";

  const imageAspect = compact
    ? "relative aspect-[5/6] overflow-hidden max-sm:aspect-square sm:aspect-[4/5]"
    : "relative aspect-[5/6] overflow-hidden sm:aspect-[4/5]";

  const imageBlock = (
    <div className={`${imageAspect} ${canOpenFlyer ? "cursor-zoom-in" : ""}`}>
      {hasPhoto ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="lazy"
          sizes={
            compact
              ? "(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 320px"
              : "(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 320px"
          }
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

      <span
        className={`absolute z-10 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-white/95 font-bold uppercase tracking-wide text-navy shadow-sm backdrop-blur-sm ${
          compact
            ? "left-2 top-2 px-2 py-0.5 text-[9px] sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px] md:px-3 md:text-[11px]"
            : "left-3 top-3 px-2.5 py-1 text-[10px] sm:px-3 sm:text-[11px]"
        }`}
      >
        {category}
      </span>

      <div
        className={`absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between gap-1.5 sm:gap-2 ${
          compact ? "p-2 sm:p-3 md:p-4" : "p-3 sm:p-4"
        }`}
      >
        <div className="min-w-0 flex-1">
          <h3
            className={`truncate font-display font-semibold text-white ${
              compact
                ? "text-sm leading-tight sm:text-lg md:text-xl"
                : "text-lg sm:text-xl"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-0.5 truncate font-medium text-white/85 ${
              compact ? "text-[10px] sm:text-xs" : "text-[11px] sm:text-xs"
            }`}
          >
            {type}
          </p>
        </div>
        <PriceBadge
          amount={priceFrom}
          onDark
          className={
            compact
              ? "max-sm:scale-[0.88] max-sm:origin-bottom-right sm:scale-100 max-sm:[&_span:last-child]:text-xs"
              : ""
          }
        />
      </div>
    </div>
  );

  return (
    <article
      className={`group flex h-full min-w-0 flex-col overflow-hidden bg-white shadow-card ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow focus-within:ring-2 focus-within:ring-sky/50 ${
        compact ? "rounded-2xl sm:rounded-3xl" : "rounded-3xl"
      } ${onDarkSection ? "ring-white/15" : "ring-navy/8 hover:ring-sky/25"}`}
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

      <div
        className={
          compact
            ? "flex flex-1 flex-col gap-2 p-2.5 max-sm:gap-1.5 sm:gap-3 sm:p-4 md:gap-4 md:p-5"
            : "flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5"
        }
      >
        {planMeta &&
          (canOpenFlyer ? (
            <button
              type="button"
              onClick={openFlyer}
              className="group/line w-full border-0 bg-transparent p-0 text-left focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              <p
                className={`font-semibold leading-snug text-sky group-hover/line:text-navy ${
                  compact ? "text-[11px] sm:text-xs" : "text-xs"
                }`}
              >
                {planMeta.planLine}
              </p>
              <p
                className={`mt-0.5 font-medium text-navy-deep/45 group-hover/line:text-sky max-sm:leading-snug ${
                  compact
                    ? "text-[10px] max-sm:line-clamp-2 max-sm:hidden sm:text-[11px]"
                    : "text-[11px]"
                }`}
              >
                Tocá para ver el flyer completo
              </p>
            </button>
          ) : (
            <p className={`font-semibold leading-snug text-sky ${compact ? "text-[11px] sm:text-xs" : "text-xs"}`}>
              {planMeta.planLine}
            </p>
          ))}

        <p
          className={`line-clamp-2 leading-relaxed text-navy-deep/75 ${
            compact ? "text-xs max-sm:line-clamp-1 sm:text-sm" : "text-sm"
          }`}
        >
          {description}
        </p>

        {!hasPhoto && (
          <p
            className={`font-medium text-navy-deep/55 ${compact ? "text-[10px] sm:text-xs" : "text-xs"}`}
          >
            Consultá disponibilidad y fechas
          </p>
        )}

        <WhatsAppButton
          message={whatsappMessage}
          variant="card"
          size={compact ? "sm" : "md"}
          className={
            compact
              ? "mt-auto w-full max-sm:px-3 max-sm:py-2 max-sm:text-[11px] sm:text-sm"
              : "mt-auto w-full"
          }
          ariaLabel={`Consultar viaje a ${title} por WhatsApp`}
        >
          <span className={compact ? "max-sm:hidden" : ""}>Consultar por WhatsApp</span>
          {compact ? <span className="sm:hidden">WhatsApp</span> : null}
        </WhatsAppButton>
      </div>
    </article>
  );
}

export function DestinationCard({
  destination,
  onDarkSection = false,
  compact = false,
}: DestinationCardProps) {
  const flyerImages = getFlyerImagesForDestination(
    destination.slug,
    destination.hasPhoto ? destination.image : undefined,
  );

  if (flyerImages.length === 0) {
    return <CardShell destination={destination} onDarkSection={onDarkSection} compact={compact} />;
  }

  return (
    <FlyerLightbox images={flyerImages} title={destination.title}>
      {(openFlyer) => (
        <CardShell
          destination={destination}
          onDarkSection={onDarkSection}
          compact={compact}
          openFlyer={openFlyer}
        />
      )}
    </FlyerLightbox>
  );
}
