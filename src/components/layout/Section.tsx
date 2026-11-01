import { Container } from "./Container";
import styles from "./Section.module.css";

type Tone = "base" | "surface" | "muted" | "night";

type Props = {
  id?: string;
  /** Small numbered label, e.g. "02 / Collections" */
  label?: string;
  index?: number;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  tone?: Tone;
  align?: "start" | "center";
  /** Heading level for the title (h1 only on inner-page heroes) */
  as?: "h1" | "h2";
  narrow?: boolean;
  /** Extra content next to the header, e.g. a "See all" button */
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

/** Every section on the site uses this wrapper, so spacing,
 *  width and backgrounds stay the same everywhere. */
export function Section({
  id,
  label,
  index,
  title,
  intro,
  tone = "base",
  align = "start",
  as: Heading = "h2",
  narrow,
  aside,
  children,
  className,
}: Props) {
  const headingId = id ? `${id}-title` : undefined;
  const number = index !== undefined ? String(index).padStart(2, "0") : null;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      data-tone={tone === "night" ? "night" : undefined}
      className={[styles.section, styles[tone], className ?? ""].filter(Boolean).join(" ")}
    >
      <Container narrow={narrow}>
        {(label || title || intro) && (
          <header className={[styles.header, align === "center" ? styles.center : "", aside ? styles.withAside : ""].join(" ")}>
            <div className={styles.headText}>
              {label && (
                <p className={`eyebrow ${styles.label} reveal`}>
                  {number && <span aria-hidden="true">{number} / </span>}
                  {label}
                </p>
              )}
              {title && (
                <Heading id={headingId} className={`${styles.title} reveal`}>
                  {title}
                </Heading>
              )}
              {intro && <p className={`lead ${styles.intro} reveal`}>{intro}</p>}
            </div>
            {aside && <div className={`${styles.aside} reveal`}>{aside}</div>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
