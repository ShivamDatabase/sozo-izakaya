"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 25; i++) {
      const p = document.createElement("div");
      p.className = styles.particle;
      p.style.left = `${Math.random() * 100}%`;
      p.style.width = `${Math.random() * 3 + 1}px`;
      p.style.height = `${Math.random() * 3 + 1}px`;
      p.style.animationDuration = `${Math.random() * 15 + 10}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <div className={styles.bg}>
        <Image
          src="/images/hero_bg.jpg"
          alt="Sozo Izakaya premium Japanese dining"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.particles} ref={particlesRef} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>4 Locations Across Mumbai</div>
        <h1 className={styles.title}>
          Authentic Japanese<br />
          <em className={styles.gold}>Dining Across</em><br />
          Mumbai
        </h1>
        <p className={styles.sub}>
          Experience handcrafted sushi, ramen, and signature Japanese cuisine at Sozo Izakaya.<br />
          Visit us in Versova, Malad, Chembur, or Borivali for an unforgettable dining experience.
        </p>
        <div className={styles.buttons}>
          <Link href="/locations" className={styles.btnPrimary}>Find a Location</Link>
          <Link href="/menu" className={styles.btnOutline}>View Menu</Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
