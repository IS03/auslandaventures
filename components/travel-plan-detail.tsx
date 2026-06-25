import type { TravelPlan } from "@/src/data/plan-types";
import { formatDepartures, formatPlanPrice, planPriceLabel } from "@/lib/plan-display";
import { DetailList } from "./detail-list";
import { PriceBadge } from "./price-badge";

type TravelPlanDetailProps = {
  plan: TravelPlan;
  /** Si hay varios planes del mismo destino, mostrar encabezado del plan. */
  showPlanTitle?: boolean;
};

export function TravelPlanDetail({ plan, showPlanTitle = false }: TravelPlanDetailProps) {
  const priceLabel = planPriceLabel(plan);
  const minPrice = plan.priceFrom && plan.priceFrom > 0 ? plan.priceFrom : null;
  const displayPrice =
    minPrice ??
    (plan.accommodationTiers?.length
      ? Math.min(...plan.accommodationTiers.map((t) => t.priceFrom).filter((p) => p > 0))
      : null);

  const metaParts = [
    `${plan.nights} noches`,
    plan.days ? `${plan.days} días` : null,
    plan.transport,
    plan.mealPlan,
    plan.hotel,
  ].filter(Boolean);

  const termsItems = [
    plan.terms.occupancyBasis,
    plan.terms.adminFeeNote,
    ...plan.terms.childPolicy,
    ...plan.terms.otherExclusions,
  ].filter((item): item is string => Boolean(item));

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy/8">
      <div className="border-b border-navy/8 bg-gradient-to-r from-sky/8 via-white to-turquoise/8 px-5 py-5 sm:px-7 sm:py-6">
        {showPlanTitle && (
          <h3 className="font-display text-xl text-navy sm:text-2xl">{plan.title}</h3>
        )}
        {plan.tagline && (
          <p className={`text-sm text-navy-deep/65 ${showPlanTitle ? "mt-1" : ""}`}>
            {plan.tagline}
          </p>
        )}
        <div
          className={`flex flex-wrap items-center gap-3 ${
            showPlanTitle || plan.tagline ? "mt-4" : ""
          }`}
        >
          <span className="rounded-full bg-navy/8 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
            {formatDepartures(plan)}
          </span>
          {displayPrice != null && displayPrice > 0 ? (
            <PriceBadge amount={displayPrice} currency={plan.currency} />
          ) : (
            <PriceBadge amount={null} />
          )}
        </div>
        {priceLabel && plan.accommodationTiers && plan.accommodationTiers.length > 0 && (
          <p className="mt-2 text-xs font-medium text-navy-deep/55">{priceLabel}</p>
        )}
      </div>

      <div className="space-y-8 px-5 py-6 sm:px-7 sm:py-8">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-navy/55">
            Resumen del viaje
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {metaParts.map((part) => (
              <li
                key={part}
                className="rounded-xl bg-sage/80 px-3 py-1.5 text-xs font-semibold text-navy-deep/80 ring-1 ring-navy/6"
              >
                {part}
              </li>
            ))}
          </ul>
        </div>

        <DetailList title="Qué incluye" items={plan.includes} variant="check" />

        {plan.excursions.length > 0 && (
          <DetailList title="Excursiones" items={plan.excursions} variant="bullet" />
        )}

        {plan.accommodationTiers && plan.accommodationTiers.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy/55">
              Opciones de alojamiento
            </h4>
            <ul className="mt-3 divide-y divide-navy/8 overflow-hidden rounded-2xl ring-1 ring-navy/8">
              {plan.accommodationTiers.map((tier) => (
                <li
                  key={tier.id}
                  className="flex flex-wrap items-start justify-between gap-3 bg-white px-4 py-3.5 sm:px-5"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-navy">{tier.name}</p>
                    {tier.features.length > 0 && (
                      <p className="mt-0.5 text-xs text-navy-deep/55">
                        {tier.features.join(" · ")}
                      </p>
                    )}
                  </div>
                  {tier.priceFrom > 0 && (
                    <span className="shrink-0 text-sm font-bold text-navy">
                      {formatPlanPrice(tier.priceFrom, plan.currency)}
                      <span className="font-medium text-navy-deep/50"> / pers.</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {plan.optionalExtras && plan.optionalExtras.length > 0 && (
          <DetailList title="Opcionales" items={plan.optionalExtras} variant="bullet" />
        )}

        {plan.paymentNotes && plan.paymentNotes.length > 0 && (
          <DetailList title="Forma de pago" items={plan.paymentNotes} variant="bullet" />
        )}

        {plan.notes && (
          <p className="rounded-2xl bg-amber/10 px-4 py-3 text-sm leading-relaxed text-navy-deep/80 ring-1 ring-amber/25">
            {plan.notes}
          </p>
        )}

        {termsItems.length > 0 && (
          <DetailList title="Condiciones y no incluye" items={termsItems} variant="warn" />
        )}
      </div>
    </article>
  );
}
