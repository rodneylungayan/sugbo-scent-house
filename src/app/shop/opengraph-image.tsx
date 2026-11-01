import { pages } from "@/content/pages";
import { products } from "@/content/products";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

const page = pages.shop;

export const alt = page.h1;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const bottles = products.filter((p) => p.bestseller).slice(0, 3).map((p) => p.bottle.liquid);
  return renderOgImage({ eyebrow: page.breadcrumb, title: page.h1, subtitle: page.intro, bottles });
}
