type SplitEditorialHeadingProps = {
  eyebrow?: string;
  /** Primera línea — serif, color principal. */
  line1: string;
  /** Segunda línea — serif, color acento (intencional, no decorativa). */
  line2: string;
  subtitle?: string;
  align?: "left" | "center";
  /** md = secciones home; lg reservado para futuros heroes editoriales. */
  size?: "md" | "lg";
  accent?: "sky" | "amber";
  light?: boolean;
  titleId?: string;
  className?: string;
};

const sizeClasses = {
  md: "text-[1.625rem] leading-[1.16] sm:text-[2.125rem] sm:leading-[1.13] lg:text-[2.5rem] lg:leading-[1.08] xl:text-[2.65rem] xl:leading-[1.06]",
  lg: "text-[1.875rem] leading-[1.14] sm:text-[2.35rem] sm:leading-[1.1] lg:text-[3rem] lg:leading-[1.08]",
};

const widthClasses = {
  center: "max-w-[min(100%,20rem)] sm:max-w-xl lg:max-w-2xl",
  left: "max-w-[min(100%,22rem)] sm:max-w-2xl lg:max-w-[26rem]",
};

const accentClasses = {
  sky: "text-sky",
  amber: "text-amber",
};

export function SplitEditorialHeading({
  eyebrow,
  line1,
  line2,
  subtitle,
  align = "center",
  size = "md",
  accent = "sky",
  light = false,
  titleId,
  className = "",
}: SplitEditorialHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const widthClass = align === "center" ? widthClasses.center : widthClasses.left;

  return (
    <header className={`${widthClass} ${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <p
          className={`mb-2.5 font-sans text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-sky-light/90" : "text-sky"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={titleId}
        className={`font-display font-semibold tracking-[-0.015em] ${sizeClasses[size]} ${
          light ? "text-white" : ""
        } text-balance`}
      >
        <span className={`block ${light ? "text-white" : "text-navy"}`}>{line1}</span>
        <span
          className={`mt-0.5 block sm:mt-1 ${
            light ? "text-amber" : accentClasses[accent]
          }`}
        >
          {line2}
        </span>
      </h2>

      {subtitle ? (
        <p
          className={`mt-3 font-sans text-[0.95rem] leading-relaxed sm:mt-4 sm:text-lg ${
            light ? "text-white/85" : "text-navy-deep/68"
          } ${align === "center" ? "mx-auto max-w-md" : "max-w-lg"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
