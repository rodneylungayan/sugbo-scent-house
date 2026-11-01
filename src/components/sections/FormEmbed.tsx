import styles from "./FormEmbed.module.css";

/**
 * FormEmbed — the ONE place to paste a third-party form (Tally, Typeform,
 * Google Forms, etc.). Left empty on purpose.
 * TODO: paste the embed code inside the div below.
 */
export function FormEmbed() {
  return (
    <div id="form-embed" data-todo="third-party form goes here" className={styles.slot}>
      {process.env.NODE_ENV === "development" && (
        <p className={styles.todo}>TODO: paste the contact form embed here (src/components/sections/FormEmbed.tsx).</p>
      )}
    </div>
  );
}
