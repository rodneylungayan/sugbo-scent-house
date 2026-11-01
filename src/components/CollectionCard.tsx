import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/content/collections";
import { collectionPhotos } from "@/content/photos";
import { productsIn } from "@/content/products";
import { Icon } from "./ui/Icon";
import card from "./ui/Card.module.css";
import styles from "./CollectionCard.module.css";

type Props = { collection: Collection; delay?: number; large?: boolean };

/** A big clickable photo tile for one collection (mood or For Him / For Her).
 *  Text sits on a dark fade at the bottom, so it always uses the night colours. */
export function CollectionCard({ collection, delay = 0, large }: Props) {
  const count = productsIn(collection.slug).length;
  const photo = collectionPhotos[collection.slug];

  return (
    <article
      className={`${card.card} ${styles.collection} ${large ? styles.large : ""} reveal`}
      data-tone="night"
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--grad-a": collection.gradient[0],
          "--grad-b": collection.gradient[1],
        } as React.CSSProperties
      }
    >
      <Link href={`/collections/${collection.slug}`} className={`${card.link} ${styles.link}`}>
        <Image
          src={photo.src}
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1099px) 50vw, 320px"
          className={`${card.mediaInner} ${styles.photo}`}
        />
        <span className={styles.shade} aria-hidden="true" />
        <div className={styles.text}>
          <p className={styles.moods}>{collection.moods.join(" · ")}</p>
          <h3 className={styles.name}>{collection.name}</h3>
          <p className={styles.line}>{collection.line}</p>
          <p className={styles.cta}>
            Shop {count} scents <Icon name="arrowRight" className={styles.arrow} />
          </p>
        </div>
      </Link>
    </article>
  );
}
