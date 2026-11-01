# Image slots

Real photos from **Unsplash** (free [Unsplash License](https://unsplash.com/license)).
Every photo, its photographer and its source page are listed in `src/content/photos.ts`
and shown on the About page under "Photo credits".

Rules for this concept: **plain, unbranded bottles only**: no brand names, logos or
famous designer bottle shapes. The bottles are sample props, not Sugbo products.

| Folder | File names | Size | Ratio | Format |
|---|---|---|---|---|
| `logo/` | `logo.svg` (required) | any | — | SVG |
| `hero/` | `hero.webp` | 1120×1400 | 4:5 | WebP, under 400 KB |
| `products/` | `<product-slug>.webp` (e.g. `mactan-tide.webp`) | 880×1100 | 4:5 | WebP, under 400 KB |
| `collections/` | `<collection-slug>.webp` (four mood collections) | 880×1100 | 4:5 | WebP, under 400 KB |
| `scenes/` | `story.webp` (4:5), `cebu-city-view.webp`, `cebu-lookout.webp` (4:3) | up to 1400 wide | varies | WebP, under 400 KB |
| `og-default/` | `og-default.png` (optional, overrides the generated share image) | 1200×630 | 1.91:1 | PNG/JPG, under 5 MB |

To swap a photo for a real client: drop the new file in with the **same name**,
then update its `alt` text and credit in `src/content/photos.ts`.
A product with no photo falls back to the drawn bottle automatically.
Run `npm run check:assets` after changing images.
