import styles from "./Container.module.css";

type Props = {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
};

/** Centres content and keeps the side gutters the same everywhere. */
export function Container({ children, narrow, className }: Props) {
  const cls = [styles.container, narrow ? styles.narrow : "", className ?? ""].filter(Boolean).join(" ");
  return <div className={cls}>{children}</div>;
}
