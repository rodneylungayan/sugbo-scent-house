import Link from "next/link";
import { hero } from "@/content/home";
import { getProduct, type Product } from "@/content/products";
import { formatPrice } from "@/lib/format";
import { Bottle } from "../Bottle";
import { OrderButton } from "../OrderButton";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import styles from "./Hero.module.css";

export function Hero() {
  const featured = hero.featured.map(getProduct).filter((p): p is Product => Boolean(p));
  const signature = featured[0];

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title" className={styles.title}>
              {hero.titleStart} <em className="accent-italic">{hero.titleAccent}</em> {hero.titleEnd}
            </h1>
            <p className="lead">
              {hero.text}
            </p>
            <div className={styles.actions}>
              <Button href={hero.primary.href} size="lg" icon="arrowRight">
                {hero.primary.label}
              </Button>
              <OrderButton variant="outline" size="lg" label={hero.secondaryLabel} />
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.arch} aria-hidden="true">
              {featured.map((p, i) => (
                <div key={p.slug} className={styles.bottle} data-pos={i}>
                  <Bottle uid={`hero-${p.slug}`} {...p.bottle} />
                </div>
              ))}
            </div>
            {signature && (
              <Link href={`/products/${signature.slug}`} className={styles.tag}>
                <span className={styles.tagLabel}>House signature</span>
                <span className={styles.tagName}>{signature.name}</span>
                <span className={styles.tagPrice}>
                  {formatPrice(signature.price)} · {signature.sizeMl} ml
                </span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
