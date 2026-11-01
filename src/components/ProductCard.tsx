import Link from "next/link";
import { genderLabel, type Product } from "@/content/products";
import { formatPrice, notesLine } from "@/lib/format";
import { ProductImage } from "./ProductImage";
import { Badge } from "./ui/Badge";
import card from "./ui/Card.module.css";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
  /** Heading level inside the card (h3 under a section h2) */
  headingLevel?: "h2" | "h3";
  delay?: number;
};

export function ProductCard({ product, headingLevel: Heading = "h3", delay = 0 }: Props) {
  return (
    <article
      className={`${card.card} ${styles.product} reveal`}
      style={{ "--reveal-delay": `${delay}ms`, "--tint": product.bottle.tint } as React.CSSProperties}
    >
      <Link href={`/products/${product.slug}`} className={card.link}>
        <div className={`${card.media} ${styles.media}`}>
          <ProductImage
            product={product}
            uid={`card-${product.slug}`}
            sizes="(max-width: 767px) 50vw, (max-width: 1099px) 33vw, 300px"
            className={card.mediaInner}
          />
          {product.bestseller && (
            <Badge variant="solid" className={styles.flag}>
              Best seller
            </Badge>
          )}
        </div>
        <div className={styles.body}>
          <p className={styles.meta}>{genderLabel[product.gender]}</p>
          <Heading className={styles.name}>{product.name}</Heading>
          <p className={styles.notes}>{notesLine(product)}</p>
          <p className={styles.price}>
            {formatPrice(product.price)} <span className={styles.size}>· {product.sizeMl} ml</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
