/** Small line icons drawn inline (no icon font to download). */
const paths = {
  truck: "M3 6h11v9H3zM14 9h4l3 3v3h-7M7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  cash: "M3 7h18v10H3zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 10v4M18 10v4",
  wallet: "M4 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1zM4 7l11-3v3M16 13h1",
  store: "M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUp: "M12 19V5M6 11l6-6 6 6",
  menu: "M4 8h16M4 16h16",
  close: "M6 6l12 12M18 6 6 18",
  chat: "M12 3c5 0 9 3.6 9 8.1 0 4.5-4 8.1-9 8.1-.9 0-1.8-.1-2.6-.3L5 21l.9-3.6C4.1 16 3 13.7 3 11.1 3 6.6 7 3 12 3ZM7.5 13.5l3-3.2 2.2 2.2 3.8-3.5",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z",
  drop: "M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z",
} as const;

export type IconName = keyof typeof paths;

type Props = { name: IconName; className?: string; label?: string };

export function Icon({ name, className, label }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      style={{ width: "var(--icon)", height: "var(--icon)", flexShrink: 0 }}
    >
      <path d={paths[name]} />
    </svg>
  );
}
