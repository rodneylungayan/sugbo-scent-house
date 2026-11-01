import { deliverySection } from "@/content/home";
import { Section } from "../layout/Section";
import { Icon } from "../ui/Icon";
import styles from "./Delivery.module.css";

export function Delivery({ index }: { index?: number }) {
  return (
    <Section
      id="delivery"
      index={index}
      label={deliverySection.label}
      title={deliverySection.title}
      intro={deliverySection.intro}
      tone="surface"
    >
      <ul role="list" className={styles.zones}>
        {deliverySection.zones.map((zone, i) => (
          <li key={zone.title} className={`${styles.zone} reveal`} style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
            <h3 className={styles.title}>{zone.title}</h3>
            <p className={styles.places}>{zone.places}</p>
            <p className={styles.row}>
              <Icon name="truck" /> {zone.time}
            </p>
            <p className={styles.row}>
              <Icon name="wallet" /> {zone.pay}
            </p>
          </li>
        ))}
      </ul>
      <p className={`${styles.pickup} reveal`}>
        <Icon name="store" /> {deliverySection.pickup}
      </p>
      <p className={styles.note}>{deliverySection.note}</p>
    </Section>
  );
}
