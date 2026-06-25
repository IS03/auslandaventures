import type { PlanCurrency, TravelPlan } from "@/src/data/plan-types";
import { formatPriceARS, formatPriceUSD } from "./format";

export function formatPlanPrice(amount: number, currency: PlanCurrency): string {
  return currency === "USD" ? formatPriceUSD(amount) : formatPriceARS(amount);
}

export function minPlanPrice(plan: TravelPlan): number | null {
  const prices = [
    plan.priceFrom,
    ...(plan.accommodationTiers?.map((t) => t.priceFrom) ?? []),
  ].filter((p): p is number => p != null && p > 0);
  if (prices.length === 0) return null;
  return Math.min(...prices);
}

export function planPriceLabel(plan: TravelPlan): string | null {
  const min = minPlanPrice(plan);
  if (min == null) return null;
  const suffix = plan.terms.perPerson ? " por persona" : "";
  return `Desde ${formatPlanPrice(min, plan.currency)}${suffix}`;
}

export function formatDepartures(plan: TravelPlan): string {
  if (plan.season) return plan.season.label;
  return plan.departures.map((d) => d.label).join(" · ");
}
