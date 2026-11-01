import type { BottleShape, CapStyle } from "@/content/products";
import styles from "./Bottle.module.css";

type Props = {
  shape: BottleShape;
  liquid: string;
  cap: CapStyle;
  /** Unique id prefix for SVG gradients (use the product slug) */
  uid: string;
  label?: string;
  className?: string;
};

type Geometry = {
  body: string;
  top: number;
  bottom: number;
  neck: { x: number; y: number; w: number; h: number };
  cap: { x: number; y: number; w: number; h: number; r: number };
  labelY: number;
  labelW: number;
};

const geometry: Record<BottleShape, Geometry> = {
  tall: {
    body: "M63 100h74a8 8 0 0 1 8 8v164a8 8 0 0 1-8 8H63a8 8 0 0 1-8-8V108a8 8 0 0 1 8-8Z",
    top: 100,
    bottom: 280,
    neck: { x: 88, y: 84, w: 24, h: 18 },
    cap: { x: 72, y: 36, w: 56, h: 50, r: 4 },
    labelY: 176,
    labelW: 62,
  },
  square: {
    body: "M54 122h92a14 14 0 0 1 14 14v130a14 14 0 0 1-14 14H54a14 14 0 0 1-14-14V136a14 14 0 0 1 14-14Z",
    top: 122,
    bottom: 280,
    neck: { x: 86, y: 104, w: 28, h: 20 },
    cap: { x: 66, y: 62, w: 68, h: 44, r: 4 },
    labelY: 188,
    labelW: 80,
  },
  round: {
    body: "M100 124a78 78 0 1 1 0 156a78 78 0 1 1 0-156Z",
    top: 124,
    bottom: 280,
    neck: { x: 88, y: 106, w: 24, h: 22 },
    cap: { x: 72, y: 60, w: 56, h: 48, r: 24 },
    labelY: 192,
    labelW: 76,
  },
  flask: {
    body: "M74 120h52c10 0 17 7 19 17l9 121c1 12-7 22-19 22H65c-12 0-20-10-19-22l9-121c2-10 9-17 19-17Z",
    top: 120,
    bottom: 280,
    neck: { x: 88, y: 102, w: 24, h: 20 },
    cap: { x: 78, y: 50, w: 44, h: 54, r: 4 },
    labelY: 190,
    labelW: 66,
  },
};

/** A drawn perfume bottle. Each scent gets its own shape, liquid colour and cap,
 *  so the concept looks complete without product photos. Swap for real photos later. */
export function Bottle({ shape, liquid, cap, uid, label = "SUGBO", className }: Props) {
  const g = geometry[shape];
  const fillTop = g.top + (g.bottom - g.top) * 0.16;
  const id = (part: string) => `${uid}-${part}`;

  return (
    <svg viewBox="0 0 200 300" className={[styles.bottle, className ?? ""].join(" ")} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={id("clip")}>
          <path d={g.body} />
        </clipPath>
        <linearGradient id={id("cap")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" style={{ stopColor: `var(--bottle-${cap}-a)` }} />
          <stop offset="0.55" style={{ stopColor: `var(--bottle-${cap}-b)` }} />
          <stop offset="1" style={{ stopColor: `var(--bottle-${cap}-a)` }} />
        </linearGradient>
        <linearGradient id={id("shine")} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0.5" />
          <stop offset="0.18" stopColor="white" stopOpacity="0.08" />
          <stop offset="0.7" stopColor="black" stopOpacity="0" />
          <stop offset="1" stopColor="black" stopOpacity="0.22" />
        </linearGradient>
        <radialGradient id={id("shadow")}>
          <stop offset="0" style={{ stopColor: "var(--bottle-shade)" }} />
          <stop offset="1" stopColor="black" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="286" rx="78" ry="9" fill={`url(#${id("shadow")})`} />

      {/* Glass + liquid */}
      <g clipPath={`url(#${id("clip")})`}>
        <rect x="0" y="0" width="200" height="300" style={{ fill: "var(--bottle-glass)" }} />
        <rect x="0" y={fillTop} width="200" height={300 - fillTop} fill={liquid} />
        <rect x="0" y={fillTop} width="200" height="3" fill="white" opacity="0.35" />
        <rect x="0" y="0" width="200" height="300" fill={`url(#${id("shine")})`} />
      </g>
      <path d={g.body} fill="none" strokeWidth="2" style={{ stroke: "var(--bottle-edge)" }} />

      {/* Label */}
      <rect
        x={100 - g.labelW / 2}
        y={g.labelY - 18}
        width={g.labelW}
        height="36"
        rx="2"
        style={{ fill: "var(--bottle-label)" }}
        opacity="0.92"
      />
      <text
        x="100"
        y={g.labelY + 1}
        textAnchor="middle"
        className={styles.labelText}
        fontSize={12}
        style={{ fill: "var(--bottle-label-text)" }}
      >
        {label}
      </text>
      <text
        x="100"
        y={g.labelY + 11}
        textAnchor="middle"
        className={styles.labelSub}
        fontSize={5}
        style={{ fill: "var(--bottle-label-text)" }}
      >
        EAU DE PARFUM
      </text>

      {/* Neck + cap */}
      <rect {...g.neck} style={{ fill: "var(--bottle-edge)" }} />
      <rect x={g.cap.x} y={g.cap.y} width={g.cap.w} height={g.cap.h} rx={g.cap.r} fill={`url(#${id("cap")})`} />
      <rect x={g.cap.x + 6} y={g.cap.y + 4} width="4" height={g.cap.h - 8} rx="2" fill="white" opacity="0.35" />
    </svg>
  );
}
