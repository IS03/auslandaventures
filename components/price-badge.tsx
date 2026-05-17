import { formatPriceARS } from "@/lib/format";

type PriceBadgeProps = {
  amount: number | null;
  onDark?: boolean;
  className?: string;
};

export function PriceBadge({ amount, onDark = false, className = "" }: PriceBadgeProps) {
  if (amount === null) {
    return (
      <span
        className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
          onDark
            ? "bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-sm"
            : "bg-navy/10 text-navy"
        } ${className}`}
      >
        Consultar precio
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 flex-col rounded-2xl px-3 py-1.5 shadow-sm ${
        onDark ? "bg-amber text-navy-deep" : "bg-amber text-navy-deep"
      } ${className}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Desde</span>
      <span className="text-sm font-bold leading-none sm:text-base">{formatPriceARS(amount)}</span>
    </span>
  );
}
