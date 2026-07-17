"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import type { MenuItem } from "@/lib/data";
import styles from "./Menu.module.css";

const FILTERS = ["all", "small plates", "sushi", "desserts", "coffee", "bottles & cans"] as const;
type Filter = typeof FILTERS[number];

export default function Menu({ initialItems }: { initialItems: MenuItem[] }) {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all"
    ? initialItems
    : initialItems.filter((m) => m.category === active);

  return (
    <section id="menu" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Our Offerings"
          title={<>Signature <em className={styles.gold}>Dishes</em></>}
          description="Each dish is a harmonious blend of premium ingredients and culinary artistry, bringing authentic Japanese flavors to your table."
        />

        {/* Filter */}
        <div className={`${styles.filter} reveal`}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${active === f ? styles.filterActive : ""}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <DishCard key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>
        
        {/* The Spirit of SOZO Section */}
        <div style={{ marginTop: "4rem", textAlign: "center" }} className="reveal">
          <p style={{ fontFamily: "var(--font-heading)", color: "var(--accent)", fontSize: "1.5rem", fontStyle: "italic", maxWidth: "800px", margin: "0 auto" }}>
            "Dining at Sozo is described as an experience blending innovation, comfort, and tradition, emphasizing quality, care, and passion in every dish."
          </p>
        </div>
      </div>
    </section>
  );
}

function DishCard({ item, delay }: { item: MenuItem; delay: number }) {
  return (
    <div
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.imgWrap}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width:640px) 90vw, 30vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
          className={styles.img}
        />
        {item.badge && <span className={styles.badge}>{item.badge}</span>}
        <div className={styles.overlay}>
          <a href="/locations" className={styles.overlayBtn}>Reserve &amp; Order</a>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.desc}>{item.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{item.price}</span>
          <div className={styles.plus}>+</div>
        </div>
      </div>
    </div>
  );
}
