type DetailListProps = {
  title: string;
  items: string[];
  variant?: "check" | "bullet" | "warn";
  className?: string;
};

const markerClass = {
  check: "text-turquoise",
  bullet: "text-sky",
  warn: "text-amber",
};

export function DetailList({
  title,
  items,
  variant = "check",
  className = "",
}: DetailListProps) {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      <h4 className="text-xs font-bold uppercase tracking-widest text-navy/55">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-navy-deep/85">
            <span
              className={`mt-0.5 shrink-0 font-bold ${markerClass[variant]}`}
              aria-hidden
            >
              {variant === "check" ? "✓" : variant === "warn" ? "!" : "·"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
