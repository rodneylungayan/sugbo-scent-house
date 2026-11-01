import type { Faq } from "@/content/faqs";
import styles from "./Accordion.module.css";

/** FAQ list built on <details>, so it works without JavaScript and with a keyboard. */
export function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details key={item.q} className={`${styles.item} reveal`}>
          <summary className={styles.summary}>
            <span>{item.q}</span>
            <span className={styles.marker} aria-hidden="true" />
          </summary>
          <p className={styles.answer}>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
