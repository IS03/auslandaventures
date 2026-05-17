import Image from "next/image";
import type { Destination } from "@/src/data/destinations";
import { destinationImageFallback } from "@/src/data/destinations";
import { PriceBadge } from "./price-badge";
import { WhatsAppButton } from "./whatsapp-button";

type DestinationCardProps = {
  destination: Destination;
  priority?: boolean;
  /** En sección oscura (destacados) */
  onDarkSection?: boolean;
};

export function DestinationCard({
  destination,
  priority = false,
  onDarkSection = false,
}: DestinationCardProps) {
  const { title, category, type, description, priceFrom, image, hasPhoto, whatsappMessage } =
    destination;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow focus-within:ring-2 focus-within:ring-sky/50 ${
        onDarkSection ? "ring-white/15" : "ring-navy/8 hover:ring-sky/25"
      }`}
    >
      <div className="relative aspect-[5/6] overflow-hidden sm:aspect-[4/5]">
        {hasPhoto ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 320px"
            className="object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.03]"
            priority={priority}
            aria-hidden
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
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                src={destinationImageFallback}
                alt=""
                width={140}
                height={42}
                className="h-auto w-[min(55%,140px)] opacity-25 brightness-0 invert"
                aria-hidden
              />
            </div>
          </>
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-navy-deep/5"
          aria-hidden
        />

        <span className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy shadow-sm backdrop-blur-sm sm:px-3 sm:text-[11px]">
          {category}
        </span>

        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between gap-2 p-3 sm:p-4">
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-display text-lg font-semibold text-white sm:text-xl">
              {title}
            </h3>
            <p className="mt-0.5 truncate text-[11px] font-medium text-white/85 sm:text-xs">
              {type}
            </p>
          </div>
          <PriceBadge amount={priceFrom} onDark />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-5">
        <p className="line-clamp-2 text-sm leading-relaxed text-navy-deep/75">{description}</p>
        {!hasPhoto && (
          <p className="text-xs font-medium text-sky">Consultá disponibilidad y fechas</p>
        )}
        <WhatsAppButton
          message={whatsappMessage}
          variant="card"
          size="md"
          className="mt-auto w-full"
        >
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}
