import styles from "./Badge.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "soft";
  className?: string;
};

export function Badge({ children, variant = "soft", className }: Props) {
  return <span className={[styles.badge, styles[variant], className ?? ""].join(" ")}>{children}</span>;
}
