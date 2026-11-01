import Image from "next/image";
import type { Product } from "@/content/products";
import { productPhotos } from "@/content/photos";
import { Bottle } from "./Bottle";
import styles from "./ProductImage.module.css";

type Props = {
  product: Product;
  /** Unique id prefix for the drawn-bottle fallback */
  uid: string;
  /** Responsive sizes hint for next/image */
  sizes: string;
  priority?: boolean;
  /** Extra class on the photo (e.g. the card hover zoom) */
  className?: string;
};

/** Shows the product's real photo, filling its parent (parent needs a size and
 *  position: relative). Falls back to the drawn bottle when there's no photo. */
export function ProductImage({ product, uid, sizes, priority, className }: Props) {
  const photo = productPhotos[product.slug];

  if (!photo) {
    return (
      <div className={`${styles.fallback} ${className ?? ""}`}>
        <div className={styles.bottle}>
          <Bottle uid={uid} {...product.bottle} />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`${styles.photo} ${className ?? ""}`}
    />
  );
}
