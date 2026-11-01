import Link from "next/link";
import { collections, type CollectionSlug } from "@/content/collections";
import styles from "./CollectionChips.module.css";

/** Row of links to every collection. The current one is highlighted. */
export function CollectionChips({ current }: { current?: CollectionSlug }) {
  return (
    <nav aria-label="Collections">
      <ul role="list" className={styles.chips}>
        <li>
          <Link href="/shop" className={styles.chip}>
            All scents
          </Link>
        </li>
        {collections.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/collections/${c.slug}`}
              className={styles.chip}
              aria-current={c.slug === current ? "page" : undefined}
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
