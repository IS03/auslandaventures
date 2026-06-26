import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image-template";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name} — Viajes desde Córdoba`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Córdoba, Argentina",
    title: site.tagline,
    subtitle: "Viajes nacionales, internacionales y salidas regionales.",
    badge: "Consultá por WhatsApp",
  });
}
