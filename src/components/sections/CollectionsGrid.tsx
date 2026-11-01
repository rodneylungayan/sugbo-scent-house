import { collections } from "@/content/collections";
import { collectionsSection } from "@/content/home";
import { CollectionCard } from "../CollectionCard";
import { Section } from "../layout/Section";
import styles from "./CollectionsGrid.module.css";

/** "Shop by mood": the four mood collections, then For Him / For Her. */
export function CollectionsGrid({ index }: { index?: number }) {
  const moods = collections.filter((c) => c.slug !== "for-him" && c.slug !== "for-her");

  return (
    <Section
      id="collections"
      index={index}
      label={collectionsSection.label}
      title={collectionsSection.title}
      intro={collectionsSection.intro}
    >
      <div className={styles.grid}>
        {moods.map((c, i) => (
          <CollectionCard key={c.slug} collection={c} delay={i * 90} />
        ))}
      </div>
    </Section>
  );
}
