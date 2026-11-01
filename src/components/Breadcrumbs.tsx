import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail. The matching BreadcrumbList schema is added by PageShell. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className={styles.item}>
              {last ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link href={item.path}>{item.name}</Link>
                  <span className={styles.sep} aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
