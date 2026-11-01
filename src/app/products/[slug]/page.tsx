import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCollection } from "@/content/collections";
import { deliverySection } from "@/content/home";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { collectionsFor, genderLabel, getProduct, products, productsIn, type Product } from "@/content/products";
import { formatPrice } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";
import { productSchema } from "@/lib/schema";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { ProductImage } from "@/components/ProductImage";
import { OrderButton } from "@/components/OrderButton";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { Grid } from "@/components/ui/Grid";
import { Icon } from "@/components/ui/Icon";
import styles from "./product.module.css";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

function seoFor(product: Product) {
  return {
    path: `/products/${product.slug}`,
    title: `${product.name} Eau de Parfum`,
    description: `${product.name}: ${product.short} ${genderLabel[product.gender]}. ${product.sizeMl} ml eau de parfum, made in Cebu. Order on Messenger.`,
    keyphrase: `${product.name} eau de parfum`,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found", robots: { index: false } };
  return buildMetadata(seoFor(product));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const seo = seoFor(product);
  const mood = getCollection(product.mood);
  const tags = collectionsFor(product).map(getCollection).filter((c) => c !== undefined);
  const related = productsIn(product.mood)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);
  const metro = deliverySection.zones[0];
  const noteRows = [
    { label: "Top notes", hint: "What you smell first", items: product.notes.top },
    { label: "Heart notes", hint: "What comes through after a few minutes", items: product.notes.heart },
    { label: "Base notes", hint: "What stays on the skin for hours", items: product.notes.base },
  ];

  return (
    <PageShell
      seo={seo}
      h1={product.name}
      eyebrow={`${genderLabel[product.gender]} · Eau de parfum`}
      breadcrumbs={[
        { name: pages.home.breadcrumb, path: "/" },
        ...(mood ? [{ name: mood.name, path: `/collections/${mood.slug}` }] : []),
        { name: product.name, path: seo.path },
      ]}
      schema={[productSchema(product)]}
      visual={
        <div className={styles.visual} style={{ "--tint": product.bottle.tint } as React.CSSProperties}>
          <ProductImage product={product} uid={`pdp-${product.slug}`} sizes="(max-width: 899px) 100vw, 480px" priority />
        </div>
      }
      headerExtra={
        <div className={styles.buy}>
          <p className={styles.story}>{product.story}</p>
          <p className={styles.moods}>
            {product.moods.map((m) => (
              <Badge key={m} variant="outline">
                {m}
              </Badge>
            ))}
          </p>
          <p className={styles.price}>
            {formatPrice(product.price)}
            <span className={styles.size}>
              {product.sizeMl} ml eau de parfum · <em>sample price</em>
            </span>
          </p>
          <div className={styles.cta}>
            <OrderButton product={product} size="lg" />
          </div>
          <ul role="list" className={styles.perks}>
            <li>
              <Icon name="truck" /> Same day in {metro.places.replaceAll(" · ", ", ")} (order before 3 PM)
            </li>
            <li>
              <Icon name="cash" /> Cash on delivery, GCash or Maya
            </li>
            <li>
              <Icon name="store" /> Free store pickup in {site.address.city}
            </li>
          </ul>
        </div>
      }
    >
      <Section id="notes" label="Scent notes" title="How it smells" tone="surface">
        <div className={styles.notesGrid}>
          <dl className={styles.notes}>
            {noteRows.map((row) => (
              <div key={row.label} className={`${styles.noteRow} reveal`}>
                <dt>
                  <span className={styles.noteLabel}>{row.label}</span>
                  <span className={styles.noteHint}>{row.hint}</span>
                </dt>
                <dd className={styles.noteItems}>{row.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
          <div className={`${styles.wear} reveal`}>
            <p className="eyebrow">Wear it for</p>
            <p className={styles.wearText}>{product.wearIt}</p>
            <p className="eyebrow">Find it in</p>
            <ul role="list" className={styles.tags}>
              {tags.map((c) => (
                <li key={c.slug}>
                  <Link href={`/collections/${c.slug}`} className={styles.tag}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {related.length > 0 && mood && (
        <Section
          id="related"
          label="You may also like"
          title={`More from ${mood.name}`}
        >
          <Grid min="sm" as="ul">
            {related.map((p, i) => (
              <li key={p.slug}>
                <ProductCard product={p} delay={i * 70} />
              </li>
            ))}
          </Grid>
        </Section>
      )}
    </PageShell>
  );
}
