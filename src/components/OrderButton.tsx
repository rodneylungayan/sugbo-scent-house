"use client";

import { useRef, useState } from "react";
import { features } from "@/config/features";
import { site } from "@/content/site";
import type { Product } from "@/content/products";
import { messengerUrl, orderMessage } from "@/lib/format";
import { Button, buttonClass } from "./ui/Button";
import { Icon } from "./ui/Icon";
import styles from "./OrderButton.module.css";

type Props = {
  product?: Product;
  label?: string;
  variant?: "primary" | "outline" | "light";
  size?: "sm" | "md" | "lg";
  full?: boolean;
};

/**
 * "Order on Messenger".
 * - Live shop: opens Messenger with the order message ready to send.
 * - Concept mode: shows a pop-up preview of that message instead,
 *   so a client can see how ordering works without leaving the page.
 */
export function OrderButton({ product, label = "Order on Messenger", variant = "primary", size = "md", full }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const url = messengerUrl(product);
  const message = orderMessage(product);

  if (!features.conceptMode) {
    if (url) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={buttonClass({ variant, size, full })}>
          <Icon name="chat" />
          <span>{label}</span>
        </a>
      );
    }
    return (
      <Button href={site.quotePath} variant={variant} size={size} full={full} icon="chat" iconStart>
        {label}
      </Button>
    );
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        className={buttonClass({ variant, size, full })}
        aria-haspopup="dialog"
        onClick={() => {
          setCopied(false);
          dialogRef.current?.showModal();
        }}
      >
        <Icon name="chat" />
        <span>{label}</span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={`order-title-${product?.slug ?? "general"}`}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className={styles.panel}>
          <button type="button" className={styles.close} onClick={() => dialogRef.current?.close()} aria-label="Close">
            <Icon name="close" />
          </button>
          <p className="eyebrow">Concept preview</p>
          <h2 id={`order-title-${product?.slug ?? "general"}`} className={styles.title}>
            This opens Messenger
          </h2>
          <p className={styles.text}>
            On a live shop, this button opens a Messenger chat with this message already typed. The shopper only
            has to press send.
          </p>
          <div className={styles.chat}>
            <span className={styles.chatName}>{site.name}</span>
            <p className={styles.bubble}>{message}</p>
          </div>
          <div className={styles.actions}>
            <button type="button" className={buttonClass({ variant: "outline", size: "sm" })} onClick={copy}>
              <span>{copied ? "Copied" : "Copy message"}</span>
            </button>
            <button
              type="button"
              className={buttonClass({ variant: "primary", size: "sm" })}
              onClick={() => dialogRef.current?.close()}
            >
              <span>Got it</span>
            </button>
          </div>
          <p className={styles.status} role="status" aria-live="polite">
            {copied ? "Message copied." : ""}
          </p>
        </div>
      </dialog>
    </>
  );
}
