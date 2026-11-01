import { genderLabel, getProduct, products } from "@/content/products";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "A perfume from Sugbo Scent House";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug) ?? products[0];
  return renderOgImage({
    eyebrow: `${genderLabel[product.gender]} · Eau de parfum`,
    title: product.name,
    subtitle: product.short,
    bottles: [product.bottle.liquid],
    dark: product.mood === "seductive" || product.mood === "night-out",
  });
}
