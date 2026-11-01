import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { collections, getCollection } from "@/content/collections";
import { pages } from "@/content/pages";
import { productsIn } from "@/content/products";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { CollectionChips } from "@/components/CollectionChips";
import { CollectionCard } from "@/components/CollectionCard";
import { ProductCard } from "@/components/ProductCard";
import { Grid } from "@/components/ui/Grid";
import styles from "./collection.module.css";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Not found", robots: { index: false } };
  return buildMetadata({ ...collection.seo, path: `/collections/${collection.slug}` });
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const path = `/collections/${collection.slug}`;
  const list = productsIn(collection.slug);
  const others = collections.filter((c) => c.slug !== collection.slug).slice(0, 3);

  return (
    <PageShell
      seo={{ ...collection.seo, path }}
      h1={collection.name}
      eyebrow={collection.moods.join(" · ")}
      intro={`${collection.keyLine} ${collection.intro}`}
      breadcrumbs={[
        { name: pages.home.breadcrumb, path: "/" },
        { name: pages.shop.breadcrumb, path: "/shop" },
        { name: collection.name, path },
      ]}
      faqs={collection.faqs}
      faqTitle={`About the ${collection.name} scents`}
      schema={[itemListSchema(collection.name, path, list)]}
      tone={collection.tone}
      headerExtra={
        <div className={styles.chips}>
          <CollectionChips current={collection.slug} />
        </div>
      }
    >
      <Section id="scents" title={`${list.length} scents in ${collection.name}`} tone="surface">
        <Grid min="sm" as="ul">
          {list.map((p, i) => (
            <li key={p.slug}>
              <ProductCard product={p} delay={(i % 4) * 70} />
            </li>
          ))}
        </Grid>
      </Section>

      <Section id="more" label="Keep browsing" title="Other moods to try">
        <div className={styles.more}>
          {others.map((c, i) => (
            <CollectionCard key={c.slug} collection={c} delay={i * 90} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
