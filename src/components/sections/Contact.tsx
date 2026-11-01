import { contactSection } from "@/content/home";
import { site } from "@/content/site";
import { OrderButton } from "../OrderButton";
import { Section } from "../layout/Section";
import { Icon } from "../ui/Icon";
import { FormEmbed } from "./FormEmbed";
import styles from "./Contact.module.css";

/** Contact options + the blank slot for a third-party form. */
export function Contact({ index, id = "contact" }: { index?: number; id?: string }) {
  return (
    <Section id={id} index={index} label={contactSection.label} title={contactSection.title} intro={contactSection.intro} tone="muted">
      <div className={styles.grid}>
        <ul role="list" className={styles.options}>
          <li className="reveal">
            <OrderButton label="Message us on Messenger" full />
          </li>
          <li className={`${styles.option} reveal`}>
            <Icon name="phone" />
            <span>
              <span className={styles.label}>Call or text</span>
              <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>
            </span>
          </li>
          <li className={`${styles.option} reveal`}>
            <Icon name="mail" />
            <span>
              <span className={styles.label}>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
          </li>
          <li className={`${styles.option} reveal`}>
            <Icon name="clock" />
            <span>
              <span className={styles.label}>Opening hours</span>
              {site.hours.map((h) => (
                <span key={h.days} className={styles.hours}>
                  {h.days}: {h.time}
                </span>
              ))}
            </span>
          </li>
        </ul>
        <FormEmbed />
      </div>
    </Section>
  );
}
