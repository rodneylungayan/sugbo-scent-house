import { shopFaqs } from "@/content/faqs";
import { pages } from "@/content/pages";
import { products } from "@/content/products";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { CollectionChips } from "@/components/CollectionChips";
import { ProductCard } from "@/components/ProductCard";
import { Grid } from "@/components/ui/Grid";

const page = pages.shop;
export const metadata = buildMetadata(page);

export default function ShopPage() {
  return (
    <PageShell
      seo={page}
      h1={page.h1}
      eyebrow={`${products.length} scents · sample prices`}
      intro={page.intro}
      breadcrumbs={[
        { name: pages.home.breadcrumb, path: "/" },
        { name: page.breadcrumb, path: page.path },
      ]}
      faqs={shopFaqs}
      schema={[itemListSchema("All scents", page.path, products)]}
      headerExtra={<CollectionChips />}
    >
      <Section id="all-scents" title="All scents" tone="surface">
        <Grid min="sm" as="ul">
          {products.map((p, i) => (
            <li key={p.slug}>
              <ProductCard product={p} delay={(i % 4) * 70} />
            </li>
          ))}
        </Grid>
      </Section>
    </PageShell>
  );
}
