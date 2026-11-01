import styles from "./Grid.module.css";

type Props = {
  children: React.ReactNode;
  /** Minimum card width before the grid wraps to fewer columns */
  min?: "sm" | "md" | "lg";
  className?: string;
  as?: "div" | "ul";
};

/** Responsive grid: as many columns as fit, stacking on phones. */
export function Grid({ children, min = "md", className, as: Tag = "div" }: Props) {
  return (
    <Tag className={[styles.grid, styles[min], className ?? ""].join(" ")} role={Tag === "ul" ? "list" : undefined}>
      {children}
    </Tag>
  );
}

/** Vertical stack with even spacing. */
export function Stack({ children, gap = "md", className }: { children: React.ReactNode; gap?: "sm" | "md" | "lg"; className?: string }) {
  return <div className={[styles.stack, styles[`gap-${gap}`], className ?? ""].join(" ")}>{children}</div>;
}
