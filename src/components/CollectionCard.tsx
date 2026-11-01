import Link from "next/link";
import type { Collection } from "@/content/collections";
import { productsIn } from "@/content/products";
import { Bottle } from "./Bottle";
import { Icon } from "./ui/Icon";
import card from "./ui/Card.module.css";
import styles from "./CollectionCard.module.css";

type Props = { collection: Collection; delay?: number; large?: boolean };

/** A big clickable tile for one collection (mood or For Him / For Her). */
export function CollectionCard({ collection, delay = 0, large }: Props) {
  const list = productsIn(collection.slug);
  const featured = list.slice(0, 3);

  return (
    <article
      className={`${card.card} ${styles.collection} ${large ? styles.large : ""} reveal`}
      data-tone={collection.tone === "night" ? "night" : undefined}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--grad-a": collection.gradient[0],
          "--grad-b": collection.gradient[1],
        } as React.CSSProperties
      }
    >
      <Link href={`/collections/${collection.slug}`} className={`${card.link} ${styles.link}`}>
        <div className={styles.text}>
          <p className={styles.moods}>{collection.moods.join(" · ")}</p>
          <h3 className={styles.name}>{collection.name}</h3>
          <p className={styles.line}>{collection.line}</p>
          <p className={styles.cta}>
            Shop {list.length} scents <Icon name="arrowRight" className={styles.arrow} />
          </p>
        </div>
        <div className={`${card.mediaInner} ${styles.bottles}`} aria-hidden="true">
          {featured.map((p, i) => (
            <div key={p.slug} className={styles.bottle} data-pos={i}>
              <Bottle uid={`col-${collection.slug}-${p.slug}`} {...p.bottle} />
            </div>
          ))}
        </div>
      </Link>
    </article>
  );
}
