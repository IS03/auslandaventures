import { HighlightedTitle } from "./highlighted-title";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Palabra o frase dentro del título que lleva subrayado editorial. */
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  /** id del h2 para aria-labelledby en secciones */
  titleId?: string;
  /** Dibuja el subrayado de `titleHighlight` al entrar en vista (ancestro `.scroll-reveal`). */
  animateUnderline?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = "left",
  light = false,
  titleId,
  animateUnderline = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-2.5 text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-sky-light/90" : "text-sky"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className={`font-display text-[1.75rem] font-semibold leading-[1.12] sm:text-4xl ${
          light ? "text-white" : "text-navy"
        } text-balance`}
      >
        {titleHighlight ? (
          <HighlightedTitle
            text={title}
            highlight={titleHighlight}
            light={light}
            drawUnderline={animateUnderline}
          />
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-[0.95rem] leading-relaxed sm:mt-4 sm:text-lg ${
            light ? "text-white/85" : "text-navy-deep/68"
          }`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
