import { howToOrder } from "@/content/home";
import { OrderButton } from "../OrderButton";
import { Section } from "../layout/Section";
import styles from "./HowToOrder.module.css";

export function HowToOrder({ index }: { index?: number }) {
  return (
    <Section id="order" index={index} label={howToOrder.label} title={howToOrder.title} intro={howToOrder.intro} align="center">
      <ol className={styles.steps}>
        {howToOrder.steps.map((step, i) => (
          <li key={step.title} className={`${styles.step} reveal`} style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
            <span className={styles.num} aria-hidden="true">
              {i + 1}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
      <div className={`${styles.cta} reveal`}>
        <OrderButton size="lg" />
      </div>
    </Section>
  );
}
