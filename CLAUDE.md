@AGENTS.md

# Sugbo Scent House — concept perfume store

A **static** Next.js (App Router, TypeScript) site that shows clients what a local Cebu
perfume shop website could look like. Full brief: `docs/site-brief.md`.

## Facts
- Made-up brand: **Sugbo Scent House**, Cebu City. Sample products and prices only.
- Never use real perfume brand names, bottles or "inspired by" lines. Never use a real shop's name or details.
- No database, no API routes, no server data fetching. All content lives in `src/content/`.
- Cache Components is on (`next.config.ts`): no `dynamicParams` (use `ensureStatic` + `notFound()`),
  no `new Date()`/`Math.random()` in server components, no async fs in image routes
  (use `readFileSync`), avoid `usePathname` in the layout.

## Voice
Plain, simple English. Short sentences, everyday words, one idea per sentence.
Warm and calm. Explain scents like you'd tell a friend. No jargon in visible copy.

## Brand
- Colours: only in `src/styles/tokens.css` (and the hex mirror `src/lib/brand.ts` for share images).
  Product bottle colours are product data in `src/content/products.ts`.
- Fonts: only in `src/lib/fonts.ts` (Cormorant Garamond + Jost) → `--font-heading` / `--font-body`.
- Components use tokens only. No hard-coded colours, font names or px font sizes.

## How to change things
| Want to… | Edit |
|---|---|
| Reorder / remove home sections | `src/config/sections.ts` |
| Add a page to the menus + sitemap | `src/content/navigation.ts` |
| Switch modules (concept bar, mobile bar, noindex…) | `src/config/features.ts` |
| Change theme preset (cream, noir, blush, sea) | `features.theme` + `src/styles/tokens.css` |
| Change copy | `src/content/*.ts` |
| Add the contact form | `src/components/sections/FormEmbed.tsx` |

## Commands
- `npm run dev` · `npm run build` · `npm start` · `npm run lint`
- `npm run todos` — content still to fill in
- `npm run check:assets` — image slots
- `npm run check:links` — link crawl (needs `npm start` running on port 3000)

## Workflow
New work goes on a branch (not `master`). Don't push, merge or deploy without Rodney's OK.
