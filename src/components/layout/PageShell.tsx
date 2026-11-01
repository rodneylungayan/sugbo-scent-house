import type { Faq } from "@/content/faqs";
import type { SeoInput } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { Breadcrumbs, type Crumb } from "../Breadcrumbs";
import { JsonLd } from "../JsonLd";
import { Accordion } from "../ui/Accordion";
import { Container } from "./Container";
import { Section } from "./Section";
import styles from "./PageShell.module.css";

type Props = {
  /** The same SEO record the page passes to buildMetadata() — required,
   *  so a page can't be made without its title, description and keyphrase. */
  seo: SeoInput;
  h1: string;
  eyebrow?: string;
  intro?: string;
  breadcrumbs: Crumb[];
  faqs?: Faq[];
  faqTitle?: string;
  /** Extra JSON-LD nodes (Product, CollectionPage…) */
  schema?: Record<string, unknown>[];
  /** Optional visual on the right of the page heading */
  visual?: React.ReactNode;
  /** Extra content under the intro (buttons, chips) */
  headerExtra?: React.ReactNode;
  tone?: "light" | "night";
  children: React.ReactNode;
};

/** Wrapper for every inner page: breadcrumbs, one H1, intro, page FAQ and structured data. */
export function PageShell({
  seo,
  h1,
  eyebrow,
  intro,
  breadcrumbs,
  faqs,
  faqTitle = "Questions, answered",
  schema = [],
  visual,
  headerExtra,
  tone = "light",
  children,
}: Props) {
  if (process.env.NODE_ENV === "development") {
    const words = seo.keyphrase.toLowerCase().split(/\s+/);
    const haystack = `${h1} ${intro ?? ""}`.toLowerCase();
    const missing = words.filter((w) => w.length > 3 && !haystack.includes(w.replace(/'s$/, "")));
    if (missing.length > words.length / 2) {
      console.warn(`[seo] ${seo.path}: the H1/intro barely mention the keyphrase "${seo.keyphrase}".`);
    }
  }

  const nodes = [breadcrumbSchema(breadcrumbs), ...schema];
  if (faqs?.length) nodes.push(faqSchema(faqs));

  return (
    <>
      <JsonLd data={graph(...nodes)} />
      <div className={styles.hero} data-tone={tone === "night" ? "night" : undefined}>
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className={`${styles.heroGrid} ${visual ? styles.withVisual : ""}`}>
            <div className={styles.heroText}>
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              <h1 className={styles.h1}>{h1}</h1>
              {intro && <p className="lead">{intro}</p>}
              {headerExtra}
            </div>
            {visual && <div className={styles.visual}>{visual}</div>}
          </div>
        </Container>
      </div>

      {children}

      {faqs?.length ? (
        <Section id="faq" label="FAQ" title={faqTitle} tone="surface" narrow>
          <Accordion items={faqs} />
        </Section>
      ) : null}
    </>
  );
}
