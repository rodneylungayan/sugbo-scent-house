# Image slots

The concept uses drawn bottles (see `src/components/Bottle.tsx`), so no photos are needed.
For a real client, drop photos into these folders using these names and sizes.
Run `npm run check:assets` to check them.

| Folder | File names | Size | Ratio | Format |
|---|---|---|---|---|
| `logo/` | `logo.svg` (required) | any | — | SVG |
| `hero/` | `hero.webp` | 1920×1080 | 16:9 | WebP, under 400 KB |
| `products/` | `<product-slug>.webp` (e.g. `mactan-tide.webp`) | 1200×1500 | 4:5 | WebP on a plain background, under 400 KB |
| `collections/` | `<collection-slug>.webp` (e.g. `daily-fresh.webp`) | 1200×1500 | 4:5 | WebP, under 400 KB |
| `og-default/` | `og-default.png` (optional, overrides the generated share image) | 1200×630 | 1.91:1 | PNG/JPG, under 5 MB |

Share images are generated automatically by `src/lib/og.tsx` for every page,
so `og-default/` is only needed if you want a hand-made image.
