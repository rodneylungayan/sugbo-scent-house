import { collections } from "@/content/collections";
import { storySection } from "@/content/home";
import { products } from "@/content/products";
import { site } from "@/content/site";
import Image from "next/image";
import { scenePhotos } from "@/content/photos";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import styles from "./Story.module.css";

/** Same-day cities = every area served except the nationwide entry. */
const SAME_DAY_CITIES = site.areasServed.filter((a) => a !== "Philippines").length;

export function Story({ index }: { index?: number }) {
  const stats = [
    { value: products.length, label: storySection.statLabels.scents },
    { value: collections.length, label: storySection.statLabels.collections },
    { value: SAME_DAY_CITIES, label: storySection.statLabels.sameDay },
  ];

  return (
    <Section id="story" index={index}>
      <div className={styles.grid}>
        <div className={`${styles.visual} reveal`}>
          <Image
            src={scenePhotos.story.src}
            alt={scenePhotos.story.alt}
            fill
            sizes="(max-width: 899px) 100vw, 448px"
            className={styles.photo}
          />
        </div>
        <div className={styles.text}>
          <p className="eyebrow reveal">
            {index !== undefined && <span aria-hidden="true">{String(index).padStart(2, "0")} / </span>}
            {storySection.label}
          </p>
          <h2 id="story-title" className={`${styles.title} reveal`}>
            {storySection.title}
          </h2>
          {storySection.paragraphs.map((p) => (
            <p key={p} className={`${styles.copy} reveal`}>
              {p}
            </p>
          ))}
          <dl className={`${styles.stats} reveal`}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statLabel}>{s.label}</dt>
                <dd className={styles.statValue}>{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="reveal">
            <Button href={storySection.cta.href} variant="outline" icon="arrowRight">
              {storySection.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
