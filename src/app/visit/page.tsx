import { visitFaqs } from "@/content/faqs";
import { deliverySection } from "@/content/home";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { storeSchema } from "@/lib/schema";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Contact } from "@/components/sections/Contact";
import { Icon } from "@/components/ui/Icon";
import styles from "./visit.module.css";

const page = pages.visit;
export const metadata = buildMetadata(page);

export default function VisitPage() {
  return (
    <PageShell
      seo={page}
      h1={page.h1}
      eyebrow="Visit us"
      intro={page.intro}
      breadcrumbs={[
        { name: pages.home.breadcrumb, path: "/" },
        { name: page.breadcrumb, path: page.path },
      ]}
      faqs={visitFaqs}
      schema={[storeSchema()]}
    >
      <Section id="shop-info" label="The shop" title="Come and try a scent" tone="surface">
        <div className={styles.cards}>
          <div className={`${styles.card} reveal`}>
            <Icon name="pin" />
            <h3 className={styles.cardTitle}>Where</h3>
            <p>
              {site.address.street || "Street address coming soon"}
              <br />
              {site.address.city}, {site.address.region}
            </p>
          </div>
          <div className={`${styles.card} reveal`}>
            <Icon name="clock" />
            <h3 className={styles.cardTitle}>Opening hours</h3>
            {site.hours.map((h) => (
              <p key={h.days}>
                <strong>{h.days}</strong>
                <br />
                {h.time}
              </p>
            ))}
          </div>
          <div className={`${styles.card} reveal`}>
            <Icon name="sparkle" />
            <h3 className={styles.cardTitle}>In the shop</h3>
            <p>Try any scent on a paper strip or on your skin. Ask us to help you find your match.</p>
          </div>
        </div>
      </Section>

      <Section id="delivery" label="Delivery" title="We deliver too">
        <ul role="list" className={styles.zones}>
          {deliverySection.zones.map((z) => (
            <li key={z.title} className={`${styles.zone} reveal`}>
              <h3 className={styles.cardTitle}>{z.title}</h3>
              <p className="muted">{z.places}</p>
              <p>{z.time}</p>
            </li>
          ))}
        </ul>
        <p className={styles.note}>{deliverySection.note}</p>
      </Section>

      <Contact />
    </PageShell>
  );
}
