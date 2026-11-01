import Link from "next/link";
import styles from "./Logo.module.css";

/** Text wordmark: SUGBO over SCENT HOUSE. Uses the heading font, so it follows the theme.
 *  TODO: replace with the client's real logo file when there is one. */
export function Logo({ compact }: { compact?: boolean }) {
  return (
    <Link href="/" className={`${styles.logo} ${compact ? styles.compact : ""}`}>
      <span className={styles.main}>Sugbo</span>{" "}
      <span className={styles.sub}>Scent House</span>
    </Link>
  );
}
