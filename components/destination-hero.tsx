import Image from "next/image";
import type { Destination, DestinationCategory } from "@/src/data/destinations";
import { destinationImageFallback } from "@/src/data/destinations";
import type { PlanCurrency } from "@/src/data/plan-types";
import { getFlyerImagesForDestination } from "@/src/data/travel-plans";
import { FlyerLightboxTrigger } from "./flyer-lightbox-trigger";
import { PriceBadge } from "./price-badge";

type DestinationHeroProps = {
  destination: Destination;
  priceFrom: number | null;
  priceCurrency: PlanCurrency;
};

const categoryHeroSurface: Record<DestinationCategory, string> = {
  Nacionales:
    "bg-gradient-to-br from-navy-deep via-navy to-sky/90",
  Internacionales:
    "bg-gradient-to-br from-navy-deep via-[#123a6b] to-turquoise/75",
  "Regionales / Full Day":
    "bg-gradient-to-br from-navy-deep via-navy to-amber/55",
};

export function DestinationHero({
  destination,
  priceFrom,
  priceCurrency,
}: DestinationHeroProps) {
  const { title, category, type, description, hasPhoto, image, slug } = destination;
  const flyerImages = getFlyerImagesForDestination(slug, hasPhoto ? image : undefined);

  return (
    <section
      id="hero"
      className={`relative min-h-[min(48vh,26rem)] overflow-hidden text-white ${categoryHeroSurface[category]}`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-sky-light/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-navy-deep/20"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-[6%] opacity-[0.06]"
        aria-hidden
      >
        <Image
          src={destinationImageFallback}
          alt=""
          width={320}
          height={90}
          className="brightness-0 invert"
        />
      </div>

      <div className="container-page relative flex min-h-[min(48vh,26rem)] flex-col justify-end pb-10 pt-28 sm:pb-14 sm:pt-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-light">
              {category} · {type}
            </p>
            <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
            {flyerImages.length > 0 && (
              <div className="mt-5">
                <FlyerLightboxTrigger images={flyerImages} title={title} />
              </div>
            )}
          </div>

          <PriceBadge
            amount={priceFrom}
            currency={priceCurrency}
            variant="hero"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
