import { bestsellersSection } from "@/content/home";
import { products } from "@/content/products";
import { ProductCard } from "../ProductCard";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Grid } from "../ui/Grid";

export function BestSellers({ index }: { index?: number }) {
  const list = products.filter((p) => p.bestseller).slice(0, 8);

  return (
    <Section
      id="best-sellers"
      index={index}
      label={bestsellersSection.label}
      title={bestsellersSection.title}
      intro={bestsellersSection.intro}
      tone="surface"
      aside={
        <Button href={bestsellersSection.cta.href} variant="outline" icon="arrowRight">
          {bestsellersSection.cta.label}
        </Button>
      }
    >
      <Grid min="sm">
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} delay={(i % 4) * 80} />
        ))}
      </Grid>
    </Section>
  );
}
