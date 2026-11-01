import { collections, getCollection } from "@/content/collections";
import { productsIn } from "@/content/products";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "A scent collection from Sugbo Scent House";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug) ?? collections[0];
  const bottles = productsIn(collection.slug).slice(0, 3).map((p) => p.bottle.liquid);
  return renderOgImage({
    eyebrow: collection.moods.join(" · "),
    title: `${collection.name} collection`,
    subtitle: collection.line,
    bottles,
    dark: collection.tone === "night",
  });
}
