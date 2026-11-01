"use client";

import { useEffect, useState } from "react";
import { features } from "@/config/features";
import { OrderButton } from "../OrderButton";
import { Icon } from "../ui/Icon";
import styles from "./FloatingActions.module.css";

/** Back-to-top button (appears after one screen of scrolling) and,
 *  on phones, a sticky "Order on Messenger" bar. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <>
      {features.backToTop && (
        <button
          type="button"
          aria-label="Back to top"
          className={`${styles.top} ${showTop ? styles.visible : ""}`}
          onClick={toTop}
          tabIndex={showTop ? 0 : -1}
        >
          <Icon name="arrowUp" />
        </button>
      )}
      {features.mobileCtaBar && (
        <div className={styles.bar}>
          <OrderButton full />
        </div>
      )}
    </>
  );
}
