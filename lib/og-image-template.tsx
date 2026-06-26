import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

const colors = {
  navyDeep: "#0f2558",
  navy: "#1A3C8A",
  sky: "#33A7D2",
  skyLight: "#7ec8e8",
  amber: "#F4B41A",
  white: "#ffffff",
  whiteMuted: "rgba(255,255,255,0.82)",
};

export async function loadPublicImageDataUrl(relativePath: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), "public", relativePath.replace(/^\//, ""));
    const file = await readFile(filePath);
    const ext = relativePath.split(".").pop()?.toLowerCase();
    const mime =
      ext === "png"
        ? "image/png"
        : ext === "webp"
          ? "image/webp"
          : ext === "jpg" || ext === "jpeg"
            ? "image/jpeg"
            : "image/png";
    return `data:${mime};base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

type OgCardOptions = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundSrc?: string | null;
};

export function renderOgImage(options: OgCardOptions) {
  const { eyebrow, title, subtitle, badge, backgroundSrc } = options;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          background: `linear-gradient(135deg, ${colors.navyDeep} 0%, ${colors.navy} 55%, ${colors.sky} 100%)`,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {backgroundSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={backgroundSrc}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 22%",
            }}
          />
        ) : null}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(15,37,88,0.95) 0%, rgba(15,37,88,0.55) 45%, rgba(15,37,88,0.25) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "56px 64px",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: colors.amber,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: colors.skyLight,
              }}
            >
              {eyebrow}
            </p>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              color: colors.white,
              maxWidth: 980,
            }}
          >
            {title}
          </p>

          {subtitle ? (
            <p
              style={{
                margin: 0,
                fontSize: 28,
                lineHeight: 1.35,
                color: colors.whiteMuted,
                maxWidth: 900,
              }}
            >
              {subtitle}
            </p>
          ) : null}

          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 8 }}>
            <p
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 700,
                color: colors.white,
              }}
            >
              Ausland Aventuras
            </p>
            {badge ? (
              <div
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.14)",
                  border: "2px solid rgba(126,200,232,0.45)",
                  color: colors.white,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {badge}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
