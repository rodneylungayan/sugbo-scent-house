import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={styles.wrap} aria-labelledby="nf-title">
      <Container narrow>
        <p className="eyebrow">Error 404</p>
        <h1 id="nf-title" className={styles.title}>
          This scent has <em className="accent-italic">faded</em>
        </h1>
        <p className="lead">The page you&apos;re looking for isn&apos;t here. It may have moved, or the link has a typo.</p>
        <div className={styles.actions}>
          <Button href="/" icon="arrowRight">
            Go to the homepage
          </Button>
          <Button href="/shop" variant="outline">
            Shop all scents
          </Button>
          <Button href="/visit#contact" variant="text">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
