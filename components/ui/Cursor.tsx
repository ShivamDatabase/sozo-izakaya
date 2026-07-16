"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const pathname = usePathname();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname?.startsWith("/admin")) {
      document.body.style.cursor = "auto";
      return;
    } else {
      document.body.style.cursor = "none";
    }
    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .dish-card, .gallery-item, .review-card, .blog-card, input, textarea, select, .feature")) {
        ringRef.current?.classList.add(styles.hovered);
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .dish-card, .gallery-item, .review-card, .blog-card, input, textarea, select, .feature")) {
        ringRef.current?.classList.remove(styles.hovered);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
