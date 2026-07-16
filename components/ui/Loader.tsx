"use client";
import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1600);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.logo}>SOZO</div>
      <div className={styles.sub}>Izakaya · Mumbai</div>
      <div className={styles.bar} />
    </div>
  );
}
