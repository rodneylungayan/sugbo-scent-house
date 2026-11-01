/**
 * fonts.ts — the ONLY place fonts are declared.
 * Swap the two imports below to change the whole site's typography.
 * Components use var(--font-heading) and var(--font-body), never a font name.
 */
import { Cormorant_Garamond, Jost } from "next/font/google";

export const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-heading",
});

export const bodyFont = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const fontVariables = `${headingFont.variable} ${bodyFont.variable}`;
