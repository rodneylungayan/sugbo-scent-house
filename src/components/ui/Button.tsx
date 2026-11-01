import Link from "next/link";
import { Icon, type IconName } from "./Icon";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "light" | "text";
type Size = "sm" | "md" | "lg";

type Common = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  /** Put the icon before the text instead of after */
  iconStart?: boolean;
  full?: boolean;
  className?: string;
};

type AsLink = Common & { href: string; external?: boolean; onClick?: never; type?: never };
type AsButton = Common & { href?: undefined; onClick?: () => void; type?: "button" | "submit" };

export function buttonClass({ variant = "primary", size = "md", full, className }: Partial<Common>) {
  return [styles.btn, styles[variant], styles[size], full ? styles.full : "", className ?? ""]
    .filter(Boolean)
    .join(" ");
}

/** The one button style for the whole site. Hover/press effects live in Button.module.css. */
export function Button(props: AsLink | AsButton) {
  const { children, icon, iconStart } = props;
  const cls = buttonClass(props);
  const inner = (
    <>
      {icon && iconStart && <Icon name={icon} className={styles.iconStart} />}
      <span>{children}</span>
      {icon && !iconStart && <Icon name={icon} className={styles.icon} />}
    </>
  );

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a href={props.href} className={cls} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={props.href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={cls}>
      {inner}
    </button>
  );
}
