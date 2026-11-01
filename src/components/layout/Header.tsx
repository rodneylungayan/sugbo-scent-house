"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { headerNav } from "@/content/navigation";
import { collections } from "@/content/collections";
import { site } from "@/content/site";
import { Logo } from "../Logo";
import { Icon } from "../ui/Icon";
import { OrderButton } from "../OrderButton";
import styles from "./Header.module.css";

/** Sticky header: menu on the left (desktop), logo in the middle, order button on the right.
 *  On phones the menu button opens a full-screen menu. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const toggle = toggleRef.current;
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);
  const half = Math.ceil(headerNav.length / 2);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
            <span className={styles.toggleText}>{open ? "Close" : "Menu"}</span>
          </button>
          <nav aria-label="Main" className={styles.desktopNav}>
            <ul role="list" className={styles.navList}>
              {headerNav.slice(0, half).map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Logo compact />

        <div className={styles.right}>
          <nav aria-label="More" className={styles.desktopNav}>
            <ul role="list" className={styles.navList}>
              {headerNav.slice(half).map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.order}>
            <OrderButton size="sm" label="Order" />
          </div>
        </div>
      </div>

      <div
        id="site-menu"
        ref={menuRef}
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        hidden={!open}
      >
        <nav aria-label="Menu" className={styles.menuInner}>
          <ul role="list" className={styles.menuList}>
            {headerNav.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className={styles.menuLink} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.menuGroup}>
            <p className="eyebrow">Shop by mood</p>
            <ul role="list" className={styles.menuChips}>
              {collections.map((c) => (
                <li key={c.slug}>
                  <Link href={`/collections/${c.slug}`} className={styles.chip} onClick={close}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.menuContact}>
            <Icon name="pin" /> {site.address.city} · <Icon name="phone" /> {site.phone}
          </p>
        </nav>
      </div>
    </header>
  );
}
