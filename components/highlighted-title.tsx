import type { ElementType } from "react";

type HighlightedTitleProps = {
  text: string;
  /** Fragmento exacto dentro de `text` que lleva el subrayado editorial. */
  highlight: string;
  as?: ElementType;
  className?: string;
  /** Variante clara sobre fondos oscuros (hero). */
  light?: boolean;
  /** Subrayado que se dibuja al scroll (requiere ancestro `.scroll-reveal.is-visible`). */
  drawUnderline?: boolean;
};

export function HighlightedTitle({
  text,
  highlight,
  as: Tag = "span",
  className = "",
  light = false,
  drawUnderline = false,
}: HighlightedTitleProps) {
  const idx = text.indexOf(highlight);

  if (idx === -1) {
    return <Tag className={className}>{text}</Tag>;
  }

  const before = text.slice(0, idx);
  const after = text.slice(idx + highlight.length);
  const underlineClass = [
    light ? "heading-underline heading-underline--light" : "heading-underline",
    drawUnderline ? "heading-underline--draw" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={className}>
      {before}
      <span className={underlineClass}>{highlight}</span>
      {after}
    </Tag>
  );
}
