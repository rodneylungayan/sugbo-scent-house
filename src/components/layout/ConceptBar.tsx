import { conceptNotice } from "@/content/site";
import styles from "./ConceptBar.module.css";

/** Slim bar at the very top that says this is a sample store. */
export function ConceptBar() {
  return (
    <div className={styles.bar} role="note">
      <p className={styles.text}>{conceptNotice}</p>
    </div>
  );
}
