"use client";
import { useState, useEffect, useCallback } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { reviews } from "@/lib/data";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % reviews.length), []);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="What Guests Say"
          title={<>Guest <em className={styles.gold}>Reviews</em></>}
        />
        <div className={`${styles.ratingBlock} reveal`}>
          <div className={styles.bigNum}>5.0</div>
          <div className={styles.stars}>★★★★★</div>
          <div className={styles.count}>Based on 53 Google Reviews</div>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          <div className={styles.track} style={{ transform: `translateX(-${idx * 100}%)` }}>
            {reviews.map((r) => (
              <div key={r.id} className={styles.card}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
                <div className={styles.reviewer}>
                  <div className={styles.avatar}>{r.initials}</div>
                  <div>
                    <div className={styles.name}>{r.name}</div>
                    <div className={styles.date}>Google Review · {r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className={`${styles.nav} reveal`}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">←</button>
          <button className={styles.navBtn} onClick={next} aria-label="Next">→</button>
        </div>
        <div className={`${styles.dots} reveal`}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === idx ? styles.dotActive : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
