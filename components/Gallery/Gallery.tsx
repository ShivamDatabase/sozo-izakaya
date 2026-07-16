"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { galleryImages } from "@/lib/data";
import type { GalleryImage } from "@/lib/data";
import styles from "./Gallery.module.css";

const CATS = ["all", "food", "interior", "drinks"] as const;
type GalCat = typeof CATS[number];

export default function Gallery() {
  const [active, setActive]   = useState<GalCat>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = active === "all"
    ? galleryImages
    : galleryImages.filter((g) => g.category === active);

  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Visual Journey"
          title={<>Our <em className={styles.gold}>Gallery</em></>}
          description="Step inside the world of Sozo Izakaya — where every corner tells a story of Japanese elegance."
        />

        {/* Filter */}
        <div className={`${styles.filter} reveal`}>
          {CATS.map((c) => (
            <button
              key={c}
              className={`${styles.filterBtn} ${active === c ? styles.active : ""}`}
              onClick={() => setActive(c)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className={`${styles.masonry} reveal`}>
          {filtered.map((img) => (
            <div
              key={img.id}
              className={styles.item}
              onClick={() => setLightbox(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
                className={styles.img}
              />
              <div className={styles.overlay}><span>⊕</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.close} onClick={() => setLightbox(null)}>✕</button>
          <div className={styles.lbImgWrap} onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 4 }}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
