import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { collections } from "@/content/collections";
import { site } from "@/content/site";
import { Logo } from "../Logo";
import { Icon } from "../ui/Icon";
import { Container } from "./Container";
import styles from "./Footer.module.css";

export function Footer() {
  const year = site.copyrightYear;

  return (
    <footer className={styles.footer} data-tone="night">
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>{site.tagline}.</p>
            <p className={styles.small}>{site.foundingNote}</p>
          </div>

          <div>
            <h2 className={styles.heading}>Shop</h2>
            <ul role="list" className={styles.links}>
              {collections.map((c) => (
                <li key={c.slug}>
                  <Link href={`/collections/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.heading}>Quick links</h2>
            <ul role="list" className={styles.links}>
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.heading}>Contact</h2>
            <ul role="list" className={styles.contact}>
              <li>
                <Icon name="pin" />
                <span>{site.address.city}, {site.address.region}</span>
              </li>
              <li>
                <Icon name="phone" />
                <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.hours.map((h) => (
                <li key={h.days}>
                  <Icon name="clock" />
                  <span>
                    {h.days}: {h.time}
                  </span>
                </li>
              ))}
            </ul>
            {site.socials.length > 0 && (
              <ul role="list" className={styles.socials}>
                {site.socials.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. A concept store design. Sample products and prices.
          </p>
          <p>
            Designed and built by{" "}
            <a href={site.builtBy.url} target="_blank" rel="noopener noreferrer" className={styles.credit}>
              {site.builtBy.name}
            </a>
          </p>
          <a href="#top" className={styles.toTop}>
            Back to top <Icon name="arrowUp" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
