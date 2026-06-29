"use client";

import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/src/data/destinations";
import {
  categoryPlaceholderImage,
  categoryShortLabel,
  destinationImageFallback,
  hrefForDestination,
} from "@/src/data/destinations";
import { getDestinationCardMeta } from "@/src/data/travel-plans";
import { PriceBadge } from "./price-badge";
import { WhatsAppButton } from "./whatsapp-button";

type DestinationCardProps = {
  destination: Destination;
  onDarkSection?: boolean;
  /** Catálogo en grilla: más chico en celular (2 columnas + proporciones ajustadas). */
  compact?: boolean;
};

export function DestinationCard({
  destination,
  onDarkSection = false,
  compact = false,
}: DestinationCardProps) {
  const { title, category, type, description, image, hasPhoto, hasTravelPlan, whatsappMessage, slug } =
    destination;
  const planMeta = getDestinationCardMeta(slug);
  const priceFrom = planMeta?.priceFrom ?? destination.priceFrom;
  const priceCurrency = planMeta?.currency ?? destination.priceCurrency ?? "ARS";
  const detailHref = hrefForDestination(slug);

  const imageAlt = hasPhoto ? `Flyer del viaje a ${title}, categoría ${category}` : "";

  /** Móvil con foto: flyer a altura natural. Sin foto: marco 4:5 (más bajo que 9:16). Desktop: crop 4:5. */
  const imageFrameClass = hasPhoto
    ? compact
      ? "relative w-full max-sm:leading-[0] sm:aspect-[4/5]"
      : "relative w-full max-sm:leading-[0] sm:aspect-[4/5]"
    : compact
      ? "relative w-full max-sm:aspect-[4/5] max-sm:overflow-hidden sm:aspect-[4/5]"
      : "relative w-full max-sm:aspect-[4/5] max-sm:overflow-hidden sm:aspect-[4/5]";

  const placeholderSrc = categoryPlaceholderImage[category];

  const imageBlock = (
    <div className={imageFrameClass}>
      {hasPhoto ? (
        <Image
          src={image}
          alt={imageAlt}
          width={1080}
          height={1920}
          loading="lazy"
          sizes={
            compact
              ? "(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 320px"
              : "(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 320px"
          }
          className="block h-auto w-full sm:absolute sm:inset-0 sm:h-full sm:w-full sm:object-cover sm:object-[center_22%] sm:transition-transform sm:duration-500 sm:group-hover/image:scale-[1.03]"
        />
      ) : (
        <>
          <Image
            src={placeholderSrc}
            alt=""
            fill
            loading="lazy"
            sizes={compact ? "(max-width: 640px) 46vw, 320px" : "(max-width: 640px) 88vw, 320px"}
            className="object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-navy-deep/15"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center p-6" aria-hidden>
            <Image
              src={destinationImageFallback}
              alt=""
              width={120}
              height={36}
              loading="lazy"
              className="h-auto w-[min(50%,120px)] opacity-35 brightness-0 invert"
            />
          </div>
        </>
      )}

    </div>
  );

  const metaMinH = compact ? "min-h-[2.35rem] sm:min-h-[2.5rem]" : "min-h-[2.35rem] sm:min-h-[2.75rem]";
  const descMinH = compact ? "min-h-[2.35rem] sm:min-h-[2.5rem]" : "min-h-[2.35rem] sm:min-h-[2.75rem]";

  return (
    <article
      className={`group flex h-full min-w-0 flex-col overflow-hidden bg-white shadow-card ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow focus-within:ring-2 focus-within:ring-sky/50 ${
        compact ? "rounded-2xl sm:rounded-3xl" : "rounded-3xl"
      } ${onDarkSection ? "ring-white/15" : "ring-navy/8 hover:ring-sky/25"}`}
    >
      <Link
        href={detailHref}
        className="group/image relative block w-full shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        aria-label={`Ver detalle del viaje a ${title}`}
      >
        {imageBlock}
      </Link>

      <div
        className={
          compact
            ? "flex min-h-0 flex-1 flex-col p-2.5 max-sm:gap-0 sm:gap-3 sm:p-4 md:gap-4 md:p-5"
            : "flex min-h-0 flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5"
        }
      >
        <div className="max-sm:min-h-[3.5rem] sm:min-h-[4rem]">
          <span className="inline-block rounded-md bg-sky/12 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-navy sm:px-2 sm:py-1 sm:text-[10px]">
            {categoryShortLabel[category]}
          </span>
          <h3 className="mt-1.5 line-clamp-2 font-display text-sm font-semibold leading-snug text-navy sm:mt-2 sm:text-lg md:text-xl">
            <Link
              href={detailHref}
              className="hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              {title}
            </Link>
          </h3>
          <p className="mt-1 truncate text-[10px] font-medium text-navy-deep/60 sm:mt-1.5 sm:text-xs">
            {type}
          </p>
        </div>

        <div className="mt-1.5 sm:mt-2">
          <PriceBadge
            amount={priceFrom ?? null}
            currency={priceCurrency}
            variant="card"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2 max-sm:pt-2 sm:gap-3 sm:pt-2">
          {planMeta && (
            <p
              className={`line-clamp-2 font-semibold leading-snug text-sky ${metaMinH} ${
                compact ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm"
              }`}
            >
              {planMeta.planLine}
            </p>
          )}

          <p
            className={`line-clamp-2 leading-relaxed text-navy-deep/75 ${descMinH} ${
              compact ? "text-xs sm:text-sm" : "text-sm"
            }`}
          >
            {description}
          </p>

          {!hasPhoto && !hasTravelPlan && (
            <p
              className={`font-medium text-navy-deep/55 ${compact ? "text-[10px] sm:text-xs" : "text-xs"}`}
            >
              Consultá disponibilidad y fechas
            </p>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-1 max-sm:pt-2">
          <div
            className={
              compact
                ? "flex min-h-[34px] items-center sm:min-h-[38px]"
                : hasTravelPlan
                  ? ""
                  : "hidden"
            }
            aria-hidden={!hasTravelPlan ? true : undefined}
          >
            {hasTravelPlan ? (
              <Link
                href={detailHref}
                className={`inline-flex w-full items-center justify-center rounded-xl border-2 border-navy/12 bg-white font-bold text-navy transition hover:border-sky/40 hover:bg-sky/5 hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
                  compact
                    ? "h-[34px] px-3 text-[11px] sm:h-auto sm:py-2 sm:text-xs"
                    : "px-4 py-2.5 text-sm"
                }`}
              >
                Ver qué incluye
              </Link>
            ) : null}
          </div>

          <WhatsAppButton
            message={whatsappMessage}
            variant="card"
            size={compact ? "sm" : "md"}
            className={
              compact
                ? "w-full max-sm:h-[34px] max-sm:px-3 max-sm:py-2 max-sm:text-[11px] sm:text-sm"
                : "w-full"
            }
            ariaLabel={`Consultar viaje a ${title} por WhatsApp`}
            analyticsLocation="card"
            destination={slug}
          >
            <span className={compact ? "max-sm:hidden" : ""}>Consultar por WhatsApp</span>
            {compact ? <span className="sm:hidden">WhatsApp</span> : null}
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
