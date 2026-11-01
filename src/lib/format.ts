import { features } from "@/config/features";
import { site } from "@/content/site";
import type { Product } from "@/content/products";

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

export function formatPrice(value: number) {
  return peso.format(value);
}

export function notesLine(product: Product, count = 3) {
  return [...product.notes.top, ...product.notes.heart, ...product.notes.base].slice(0, count).join(" · ");
}

/** The message a shopper sends on Messenger. */
export function orderMessage(product?: Product) {
  if (!product) return `Hi ${site.shortName}! I'd like to ask about your perfumes.`;
  return `Hi ${site.shortName}! I'd like to order ${product.name} (${product.sizeMl} ml). Is it available?`;
}

/** Messenger link with the order message ready to send.
 *  Returns null while there is no Messenger username or the site is a concept. */
export function messengerUrl(product?: Product) {
  if (features.conceptMode || !site.messengerUsername) return null;
  return `https://m.me/${site.messengerUsername}?text=${encodeURIComponent(orderMessage(product))}`;
}
