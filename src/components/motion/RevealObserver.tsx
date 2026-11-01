"use client";

import { useEffect } from "react";

/**
 * Adds .is-visible to every .reveal element as it scrolls into view.
 * Watches the page for new elements too (after navigating between pages),
 * so it never needs to know the current route.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "true";
    if (!root.classList.contains("motion")) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };
    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

/** Inline head script: turn motion on unless the visitor prefers less motion.
 *  Safety: if the observer above hasn't started within 4 seconds (slow or
 *  failed JavaScript), remove .motion so nothing can stay hidden. */
export const motionScript = `(function(){try{var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){d.classList.add('motion');setTimeout(function(){if(!d.dataset.revealReady){d.classList.remove('motion')}},4000)}}catch(e){}})();`;
