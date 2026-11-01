import Link from "next/link";
import { himHerSection } from "@/content/home";
import { getProduct, productsIn } from "@/content/products";
import { Bottle } from "../Bottle";
import { Section } from "../layout/Section";
import { Icon } from "../ui/Icon";
import card from "../ui/Card.module.css";
import styles from "./HimHer.module.css";

export function HimHer({ index }: { index?: number }) {
  const tiles = [
    { ...himHerSection.him, count: productsIn("for-him").length },
    { ...himHerSection.her, count: productsIn("for-her").length },
  ];

  return (
    <Section id="him-her" index={index} label={himHerSection.label} title={himHerSection.title} tone="muted">
      <div className={styles.grid}>
        {tiles.map((tile, i) => {
          const product = getProduct(tile.bottle);
          return (
            <article
              key={tile.href}
              className={`${card.card} ${styles.tile} reveal`}
              style={{ "--reveal-delay": `${i * 100}ms`, "--tint": product?.bottle.tint } as React.CSSProperties}
            >
              <Link href={tile.href} className={`${card.link} ${styles.link}`}>
                <div className={styles.text}>
                  <h3 className={styles.title}>{tile.title}</h3>
                  <p className={styles.copy}>{tile.text}</p>
                  <p className={styles.cta}>
                    Shop {tile.count} scents <Icon name="arrowRight" />
                  </p>
                </div>
                {product && (
                  <div className={`${card.mediaInner} ${styles.bottle}`} aria-hidden="true">
                    <Bottle uid={`himher-${product.slug}`} {...product.bottle} />
                  </div>
                )}
              </Link>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
