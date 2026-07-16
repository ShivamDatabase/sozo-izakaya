"use client";
import { useEffect, useRef } from "react";
import styles from "./Stats.module.css";
import { stats } from "@/lib/data";

function StatItem({ target, label }: { target: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let count = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            el.textContent = String(target) + "+";
            clearInterval(timer);
          } else {
            el.textContent = String(Math.floor(count));
          }
        }, 25);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className={`${styles.item} reveal`}>
      <div ref={ref} className={styles.num}>0</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className={styles.bar}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <StatItem key={i} target={s.target} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
