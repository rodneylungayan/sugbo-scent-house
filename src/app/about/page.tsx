import Image from "next/image";
import { aboutFaqs } from "@/content/faqs";
import { pages } from "@/content/pages";
import { allCredits, scenePhotos } from "@/content/photos";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
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

/** "mactan-tide" → "Mactan Tide"; collection/page labels pass through. */
function usedLabel(used: string) {
  return getProduct(used)?.name ?? used.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

export default function AboutPage() {
  const photo = scenePhotos.cebuCity;

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
        <figure className={styles.figure}>
          <div className={styles.visual}>
            <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 899px) 100vw, 416px" className={styles.photo} />
          </div>
          <figcaption className={styles.caption}>Cebu City from the hills above it.</figcaption>
        </figure>
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

      <Section
        id="photo-credits"
        label="Photo credits"
        title="Thank you, photographers"
        intro="The photos on this concept site come from Unsplash and are free to use. The bottles in them are plain sample bottles, not Sugbo products."
        narrow
      >
        <ul role="list" className={styles.credits}>
          {allCredits().map(({ credit, used }) => (
            <li key={credit.page}>
              <span className={styles.used}>{usedLabel(used)}</span>
              <span>
                Photo by{" "}
                <a href={`https://unsplash.com/@${credit.handle}`} target="_blank" rel="noopener noreferrer nofollow">
                  {credit.name}
                </a>{" "}
                on{" "}
                <a href={credit.page} target="_blank" rel="noopener noreferrer nofollow">
                  Unsplash
                </a>
                {credit.location ? ` · ${credit.location}` : ""}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
