# Site brief — Sugbo Scent House (concept)

Confirmed answers from the build wizard (2026-11-01). Later sessions: don't ask these again.

## Purpose
A **concept perfume store** for Rodney's portfolio, so prospective clients can picture their own
perfume shop online. Not a real business, and not based on any real shop's name or details.

## Brand
- **Name:** Sugbo Scent House ("Sugbo" = the old name of Cebu)
- **Logo:** text wordmark for now (SUGBO / SCENT HOUSE)
- **Look:** clean luxury perfume store, cream + black, one dark gold "night" band.
  Designed from scratch — the reference Shopify demo (borcen-store-newdemo) was password-locked.
- **Fonts:** Cormorant Garamond (headings), Jost (text)
- **Motion:** subtle (fade-ups, hover zoom, slow notes strip), respects reduced motion

## Products
- 16 made-up scents with Cebu place names, grouped by mood: Daily Fresh, Seductive,
  Gym & Sport, Night Out — plus For Him / For Her.
- Peso prices labelled "sample". **No real brand names, bottles or "inspired by" lines.**
- Real photos from Unsplash (free licence): plain unbranded bottles for each scent, Cebu
  scenery for collections/About/Visit. Drawn SVG bottles remain as a fallback. Credits on the About page.

## Pages
Home · Shop All · 6 collection pages · 16 product pages · About · Visit Us · 404

## Ordering & local focus
- "Order on Messenger" on every product. In concept mode it shows a pop-up preview of the
  message instead of opening Messenger (`features.conceptMode`).
- Same-day delivery in Metro Cebu (Cebu City, Mandaue, Lapu-Lapu, Talisay), nationwide shipping.
- Store pickup, cash on delivery, GCash / Maya.

## Contact details
Safe placeholders (0917 000 0000, hello@example.com, "Cebu City"). A "Concept preview" bar sits at the top.

## SEO
Full SEO, Open Graph, schema and sitemap are built in, but every page is **noindex**
(`features.indexable = false`) so the made-up shop doesn't appear on Google.

## Contact form
Section left blank for a third-party embed (`src/components/sections/FormEmbed.tsx`).
