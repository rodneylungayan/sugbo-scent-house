/**
 * photos.ts — every real photo on the site, with its alt text and credit.
 * Feeds: product cards and pages, collection cards, hero, story, About, Visit,
 * and the photo credits list on the About page.
 *
 * All photos are from Unsplash under the free Unsplash License
 * (https://unsplash.com/license): free for commercial use, no permission
 * needed. Credit is not required, but we give it anyway.
 * Rule: only plain, unbranded bottles. No visible brand names, logos or
 * famous designer bottle shapes.
 *
 * Files live in public/images (sizes in public/images/README.md).
 * Alt text: describe what is in the photo, in plain words.
 */
import type { CollectionSlug } from "./collections";

export type Credit = { name: string; handle: string; page: string; location?: string };
export type Photo = { src: string; alt: string; credit: Credit };

const u = (handle: string, name: string, page: string, location?: string): Credit => ({
  name,
  handle,
  page: `https://unsplash.com/photos/${page}`,
  location,
});

/** One photo per scent, keyed by product slug. */
export const productPhotos: Record<string, Photo> = {
  "mactan-tide": {
    src: "/images/products/mactan-tide.webp",
    alt: "Clear square perfume bottle with a black cap on white marble outdoors",
    credit: u("scentspiracy", "Fulvio Ciccolo", "clear-glass-bottle-on-white-table-iDDGJt3veps"),
  },
  "lahug-morning": {
    src: "/images/products/lahug-morning.webp",
    alt: "Golden perfume in a square glass bottle with a black cap",
    credit: u("fotonium", "Akhilesh Sharma", "a-bottle-of-perfume-sitting-on-top-of-a-table-vf6DtLlwjTk"),
  },
  "tops-breeze": {
    src: "/images/products/tops-breeze.webp",
    alt: "Clear flat perfume bottle with a silver spray top on a grey background",
    credit: u("msulyman", "Muhammad Sulyman", "a-clear-glass-bottle-with-a-silver-top-MDMrNFnyFQk"),
  },
  "bantayan-linen": {
    src: "/images/products/bantayan-linen.webp",
    alt: "Small clear perfume bottle with a black cap on soft white fur",
    credit: u("kierinsightarchives", "Kier in Sight Archives", "a-clear-glass-perfume-bottle-with-black-cap-j1vg92xdoX4"),
  },
  "colon-street-oud": {
    src: "/images/products/colon-street-oud.webp",
    alt: "Dark glass perfume bottle among dried leaves and red berries",
    credit: u("sixteenmilesout", "Sixteen Miles Out", "a-bottle-of-perfume-sitting-on-top-of-a-table-P6bk4mOt9F0"),
  },
  "sinulog-ember": {
    src: "/images/products/sinulog-ember.webp",
    alt: "Tall slim perfume bottle glowing orange against a warm red light",
    credit: u("raewallis", "Rae Wallis", "clear-glass-bottle-with-orange-liquid-6uNdAlvwf98"),
  },
  "parian-rose": {
    src: "/images/products/parian-rose.webp",
    alt: "Red glass perfume bottle with a red cap on a deep red background",
    credit: u("msulyman", "Muhammad Sulyman", "a-red-glass-bottle-with-a-red-cap-S6QxcHThViw"),
  },
  "fuente-noir": {
    src: "/images/products/fuente-noir.webp",
    alt: "Small dark amber bottle on a shiny surface with city lights behind it at night",
    credit: u("jacob17pad", "Jacob Padilla", "a-dark-bottle-stands-on-a-reflective-surface-at-night-P4k8XxAAbKk"),
  },
  "osmena-peak-rush": {
    src: "/images/products/osmena-peak-rush.webp",
    alt: "Black perfume bottle with a blank white label on a dark round stand",
    credit: u("thehalaldesign", "Ubaid E. Alyafizi", "a-bottle-of-perfume-sitting-on-top-of-a-stand-_3i9GiOc6i0"),
  },
  "kawasan-splash": {
    src: "/images/products/kawasan-splash.webp",
    alt: "Clear glass perfume bottle lying on its side in green and yellow light",
    credit: u("davitmarg", "Davit Margaryan", "a-glass-bottle-sitting-on-top-of-a-table-xVwlv5Fo2ac"),
  },
  "moalboal-blue": {
    src: "/images/products/moalboal-blue.webp",
    alt: "Perfume bottle with a blank label lying next to a large grey stone",
    credit: u("contentpixie", "Content Pixie", "a-bottle-of-cologne-next-to-rocks-and-a-rock--ZaKKlJUoHE"),
  },
  "busay-green": {
    src: "/images/products/busay-green.webp",
    alt: "Yellow square perfume bottle under a branch covered in yellow lichen",
    credit: u("luandmario", "Maria Lupan", "a-bottle-of-perfume-sitting-on-top-of-a-tree-branch-OXG0OSKWIcQ"),
  },
  "it-park-after-dark": {
    src: "/images/products/it-park-after-dark.webp",
    alt: "A hand spraying a small dark perfume bottle against a dark background",
    credit: u("apothecary87", "Apothecary 87", "hand-spraying-dark-liquid-from-bottle-against-dark-background-idgwGzm_ApU"),
  },
  "cebu-skyline": {
    src: "/images/products/cebu-skyline.webp",
    alt: "Black square perfume bottle standing in an open white gift box",
    credit: u("wattersonboi", "Benjamin Watterson", "a-bottle-of-perfume-sitting-on-top-of-a-mirror-oSdSM-jZzJU"),
  },
  "malapascua-moon": {
    src: "/images/products/malapascua-moon.webp",
    alt: "Two small perfume bottles resting on soft white fabric",
    credit: u("kaisniffin", "Kailey Sniffin", "two-bottles-on-white-textile-UPjXnyeGXuA"),
  },
  "sugbo-gold": {
    src: "/images/products/sugbo-gold.webp",
    alt: "Golden perfume bottle with water drops lying on a warm beige surface",
    credit: u("simplymersah", "Simply Mersah", "a-bottle-of-cologne-sitting-on-top-of-a-table-MLV5zTSzj98"),
  },
};

/** One photo per collection: mood photos for the four moods,
 *  a product photo for For Him / For Her. */
export const collectionPhotos: Record<CollectionSlug, Photo> = {
  "for-him": productPhotos["osmena-peak-rush"],
  "for-her": productPhotos["parian-rose"],
  "daily-fresh": {
    src: "/images/collections/daily-fresh.webp",
    alt: "Aerial view of palm trees and clear turquoise water on a beach in Tabuelan, Cebu",
    credit: u("jooot", "Josh Roland", "green-palm-trees-near-body-of-water-during-daytime-7yDrqDp5Ws4", "Tabuelan, Cebu"),
  },
  seductive: {
    src: "/images/collections/seductive.webp",
    alt: "Curled cinnamon sticks on a dark background",
    credit: u("picoftasty", "Mae Mu", "a-pile-of-cinnamon-sticks-sitting-on-top-of-a-white-plate-YGqEdxISaZM"),
  },
  "gym-and-sport": {
    src: "/images/collections/gym-and-sport.webp",
    alt: "A man running along the beach at sunset",
    credit: u("ssarasframes", "Sara Ruffoni", "silhouette-of-a-man-running-on-a-beach-at-sunset-iiYbGXWqJY0"),
  },
  "night-out": {
    src: "/images/collections/night-out.webp",
    alt: "A lit-up bridge and city lights over dark water at night in Cebu City",
    credit: u("kensuarez", "Ken Suarez", "illuminated-bridge-over-dark-water-at-night-with-city-lights-oQ9vWHDbNHU", "Cebu City"),
  },
};

export const scenePhotos = {
  hero: {
    src: "/images/hero/hero.webp",
    alt: "Golden perfume bottle with water drops lying on a warm beige surface",
    credit: productPhotos["sugbo-gold"].credit,
  },
  story: {
    src: "/images/scenes/story.webp",
    alt: "Golden perfume oil being dropped into small glass bottles",
    credit: u("scentspiracy", "Fulvio Ciccolo", "clear-glass-bottle-with-yellow-liquid-Al6U8EdTG58"),
  },
  cebuCity: {
    src: "/images/scenes/cebu-city-view.webp",
    alt: "People at a hilltop viewing deck looking over Cebu City and the sea",
    credit: u("brynlld", "BRYNLLD", "panoramic-city-and-ocean-view-from-a-busy-observation-deck-JEaLEPhEi90", "Cebu City"),
  },
  cebuLookout: {
    src: "/images/scenes/cebu-lookout.webp",
    alt: "A winding viewing deck in the hills above Cebu City",
    credit: u("brynlld", "BRYNLLD", "expansive-city-view-from-a-mountain-observation-deck-ZXstxJnP6k4", "Cebu City"),
  },
} satisfies Record<string, Photo>;

/** Every credit once, for the About page list and the README. */
export function allCredits(): { credit: Credit; used: string }[] {
  const rows: { credit: Credit; used: string }[] = [];
  const seen = new Set<string>();
  const add = (photo: Photo, used: string) => {
    if (seen.has(photo.credit.page)) return;
    seen.add(photo.credit.page);
    rows.push({ credit: photo.credit, used });
  };
  Object.entries(productPhotos).forEach(([slug, p]) => add(p, slug));
  Object.entries(collectionPhotos).forEach(([slug, p]) => add(p, `${slug} collection`));
  add(scenePhotos.story, "Our story");
  add(scenePhotos.cebuCity, "About page");
  add(scenePhotos.cebuLookout, "Visit page");
  return rows;
}
