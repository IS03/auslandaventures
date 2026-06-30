import { formatPriceARS, formatPriceUSD } from "@/lib/format";
import type { PlanCurrency } from "@/src/data/plan-types";

type PriceBadgeVariant = "card" | "hero" | "chip";

type PriceBadgeProps = {
  amount: number | null;
  currency?: PlanCurrency | null;
  variant?: PriceBadgeVariant;
  /** @deprecated Usar variant="hero" */
  onDark?: boolean;
  className?: string;
};

function formatAmount(amount: number, currency: PlanCurrency): string {
  return currency === "USD" ? formatPriceUSD(amount) : formatPriceARS(amount);
}

export function PriceBadge({
  amount,
  currency = "ARS",
  variant,
  onDark = false,
  className = "",
}: PriceBadgeProps) {
  const resolvedVariant: PriceBadgeVariant = variant ?? (onDark ? "hero" : "chip");
  const resolvedCurrency: PlanCurrency = currency ?? "ARS";
  const formatted = amount !== null ? formatAmount(amount, resolvedCurrency) : null;

  if (resolvedVariant === "card") {
    if (formatted === null) {
      return (
        <p className={`text-[10px] font-semibold text-sky sm:text-xs ${className}`}>
          Consultá precio
        </p>
      );
    }

    return (
      <p className={`border-l-2 border-sky/50 pl-2.5 sm:pl-3 ${className}`}>
        <span className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
          <span className="text-[9px] font-semibold uppercase leading-none tracking-[0.14em] text-navy-deep/45 sm:text-[11px]">
            Desde
          </span>
          <span className="font-sans text-base font-bold leading-none tabular-nums tracking-tight text-navy sm:text-xl">
            {formatted}
          </span>
        </span>
      </p>
    );
  }

  if (resolvedVariant === "hero") {
    if (formatted === null) {
      return (
        <p className={`text-sm font-semibold text-sky-light sm:text-base ${className}`}>
          Consultá precio
        </p>
      );
    }

    return (
      <div className={`text-left sm:text-right ${className}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-light/90">
          Desde
        </p>
        <p className="mt-0.5 font-sans text-2xl font-bold tabular-nums text-white sm:text-3xl">
          {formatted}
        </p>
      </div>
    );
  }

  if (formatted === null) {
    return (
      <span
        className={`inline-flex shrink-0 items-center rounded-lg bg-navy/[0.06] px-2.5 py-1 text-xs font-semibold text-navy ring-1 ring-navy/10 ${className}`}
      >
        Consultar precio
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 items-baseline gap-1.5 rounded-lg bg-navy/[0.06] px-2.5 py-1 ring-1 ring-navy/10 ${className}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wide text-navy-deep/50">
        Desde
      </span>
      <span className="text-sm font-bold tabular-nums text-navy">{formatted}</span>
    </span>
  );
}
