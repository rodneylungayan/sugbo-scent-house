import { pages } from "@/content/pages";
import { getProduct } from "@/content/products";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Sugbo Scent House, a concept perfume shop in Cebu City";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const bottles = ["mactan-tide", "sugbo-gold", "colon-street-oud"]
    .map((s) => getProduct(s)?.bottle.liquid)
    .filter((c): c is string => Boolean(c));
  return renderOgImage({ eyebrow: "Perfume shop · Cebu City", title: pages.home.h1, bottles });
}
