/**
 * og.tsx — shared renderer for every share image (Open Graph + X).
 * 1200×630, text kept inside the centre safe area.
 */
import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { brand } from "./brand";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgOptions = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Bottle liquid colours to draw on the right (1–3) */
  bottles?: string[];
  dark?: boolean;
};

/* Read once, synchronously: an async file read would stop Next from
 * building these images ahead of time (Cache Components rule). */
const fontDir = join(process.cwd(), "src/assets/og-fonts");
const fonts = [
  { name: "Cormorant", data: readFileSync(join(fontDir, "cormorant-600.woff")), weight: 600 as const, style: "normal" as const },
  { name: "Jost", data: readFileSync(join(fontDir, "jost-400.woff")), weight: 400 as const, style: "normal" as const },
  { name: "Jost", data: readFileSync(join(fontDir, "jost-500.woff")), weight: 500 as const, style: "normal" as const },
];

function Bottle({ liquid, height, cap }: { liquid: string; height: number; cap: string }) {
  const width = Math.round(height * 0.52);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: width * 0.42, height: height * 0.16, background: cap, borderRadius: 6 }} />
      <div style={{ width: width * 0.24, height: height * 0.06, background: "rgba(255,255,255,0.55)" }} />
      <div
        style={{
          width,
          height: height * 0.78,
          borderRadius: 14,
          background: liquid,
          border: "3px solid rgba(255,255,255,0.65)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 30px 50px -20px rgba(0,0,0,0.45)",
        }}
      >
        <div
          style={{
            width: width * 0.62,
            height: height * 0.2,
            background: "rgba(255,253,248,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Jost",
            fontSize: Math.round(height * 0.045),
            letterSpacing: 4,
            color: brand.ink,
          }}
        >
          SUGBO
        </div>
      </div>
    </div>
  );
}

export async function renderOgImage({ eyebrow, title, subtitle, bottles = [brand.goldSoft], dark }: OgOptions) {
  const bg = dark ? brand.night : brand.cream;
  const text = dark ? brand.nightText : brand.ink;
  const accent = dark ? brand.nightGold : brand.gold;
  const archBg = dark ? brand.nightSurface2 : brand.surface2;
  const capColor = dark ? brand.nightGold : brand.ink;
  const host = new URL(site.url).host;
  const heights = [300, 380, 300];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: bg,
          color: text,
          padding: "64px 72px",
          fontFamily: "Jost",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 32 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Cormorant", fontSize: 34, letterSpacing: 10 }}>SUGBO</div>
            <div style={{ fontSize: 13, letterSpacing: 7, marginTop: 2, color: accent }}>SCENT HOUSE · CEBU</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, letterSpacing: 6, color: accent, fontWeight: 500, textTransform: "uppercase" }}>
              {eyebrow}
            </div>
            <div style={{ fontFamily: "Cormorant", fontSize: title.length > 34 ? 60 : 72, lineHeight: 1.04, marginTop: 14 }}>
              {title}
            </div>
            {subtitle ? (
              <div style={{ fontSize: 24, lineHeight: 1.4, marginTop: 18, opacity: 0.8, maxWidth: 560 }}>{subtitle}</div>
            ) : null}
          </div>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 2, opacity: 0.75 }}>{host}</div>
        </div>
        <div
          style={{
            width: 400,
            height: 502,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 18,
            paddingBottom: 46,
            background: archBg,
            borderRadius: "200px 200px 18px 18px",
          }}
        >
          {bottles.slice(0, 3).map((liquid, i) => (
            <Bottle
              key={i}
              liquid={liquid}
              cap={capColor}
              height={bottles.length === 1 ? 380 : heights[i] ?? 300}
            />
          ))}
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  );
}
