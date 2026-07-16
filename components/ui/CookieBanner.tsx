"use client";
import { useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div className={styles.banner}>
      <p>
        🍪 We use cookies to enhance your dining experience on our website. By continuing to
        browse, you agree to our{" "}
        <a href="#" className={styles.link}>
          Cookie Policy
        </a>
        .
      </p>
      <div className={styles.buttons}>
        <button className={styles.accept} onClick={() => setHidden(true)}>
          Accept
        </button>
        <button className={styles.decline} onClick={() => setHidden(true)}>
          Decline
        </button>
      </div>
    </div>
  );
}
