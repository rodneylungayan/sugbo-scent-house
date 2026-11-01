import styles from "./Marquee.module.css";

/** A slow scrolling strip of words. The list is shown twice so the loop is seamless;
 *  the copy is hidden from screen readers. Stops for reduced motion. */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul className={styles.row} role="list" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
          <span className={styles.dot} aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.marquee} aria-label={label} role="region">
      <div className={styles.track}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
