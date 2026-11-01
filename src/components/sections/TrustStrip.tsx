import { trustItems } from "@/content/home";
import { Container } from "../layout/Container";
import { Icon } from "../ui/Icon";
import styles from "./TrustStrip.module.css";

/** Quick local promises: delivery, cash on delivery, e-wallets, pickup. */
export function TrustStrip() {
  return (
    <section className={styles.strip} aria-label="Delivery and payment">
      <Container>
        <ul role="list" className={styles.list}>
          {trustItems.map((item, i) => (
            <li key={item.title} className={`${styles.item} reveal`} style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
              <span className={styles.icon}>
                <Icon name={item.icon} />
              </span>
              <span>
                <strong className={styles.title}>{item.title}</strong>
                <span className={styles.text}>{item.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
