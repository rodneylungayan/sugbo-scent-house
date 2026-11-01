import { nightSection } from "@/content/home";
import { getProduct, type Product } from "@/content/products";
import { ProductCard } from "../ProductCard";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Grid } from "../ui/Grid";

/** The one dark section on the home page, for evening and seductive scents. */
export function NightBand({ index }: { index?: number }) {
  const picks = nightSection.picks.map(getProduct).filter((p): p is Product => Boolean(p));

  return (
    <Section
      id="after-dark"
      index={index}
      label={nightSection.label}
      title={nightSection.title}
      intro={nightSection.intro}
      tone="night"
      aside={
        <Button href={nightSection.cta.href} variant="primary" icon="arrowRight">
          {nightSection.cta.label}
        </Button>
      }
    >
      <Grid min="sm">
        {picks.map((p, i) => (
          <ProductCard key={p.slug} product={p} delay={i * 80} />
        ))}
      </Grid>
    </Section>
  );
}
