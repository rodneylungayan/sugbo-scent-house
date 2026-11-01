import { aboutFaqs } from "@/content/faqs";
import { pages } from "@/content/pages";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Bottle } from "@/components/Bottle";
import { Button } from "@/components/ui/Button";
import styles from "./about.module.css";

const page = pages.about;
export const metadata = buildMetadata(page);

const values = [
  {
    title: "Made for the heat",
    text: "We test every scent in real Cebu weather. If it fades by lunch, we change the blend or drop it.",
  },
  {
    title: "Our own scents",
    text: "Every scent has its own name and its own blend. We don't copy any brand's name, bottle or perfume.",
  },
  {
    title: "Easy to buy",
    text: "Order with a quick message. Pay cash, GCash or Maya. Get it the same day in Metro Cebu.",
  },
];

export default function AboutPage() {
  const signature = getProduct("sugbo-gold");

  return (
    <PageShell
      seo={page}
      h1={page.h1}
      eyebrow="Our story"
      intro={page.intro}
      breadcrumbs={[
        { name: pages.home.breadcrumb, path: "/" },
        { name: page.breadcrumb, path: page.path },
      ]}
      faqs={aboutFaqs}
      visual={
        signature && (
          <div className={styles.visual}>
            <div className={styles.bottle}>
              <Bottle uid="about-signature" {...signature.bottle} />
            </div>
          </div>
        )
      }
    >
      <Section id="name" label="The name" title="Why “Sugbo”?" narrow>
        <div className={styles.prose}>
          <p className="reveal">{site.foundingNote}</p>
          <p className="reveal">
            We picked it because our scents belong here. They are named after streets, beaches, hills and nights
            that people in Cebu know well, from Colon Street to Malapascua.
          </p>
          <p className="reveal">
            Our house signature, Sugbo Gold, uses sampaguita, the national flower, with ripe mango. It smells like a
            happy day on the island.
          </p>
        </div>
      </Section>

      <Section id="values" label="What we care about" title="Three simple promises" tone="surface">
        <ul role="list" className={styles.values}>
          {values.map((v, i) => (
            <li key={v.title} className={`${styles.value} reveal`} style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className="muted">{v.text}</p>
            </li>
          ))}
        </ul>
        <div className={styles.cta}>
          <Button href="/shop" icon="arrowRight">
            Shop the scents
          </Button>
          <Button href="/visit" variant="outline">
            Visit the shop
          </Button>
        </div>
      </Section>
    </PageShell>
  );
}
