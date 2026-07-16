"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/data";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Questions?"
          title={<>Frequently Asked <em className={styles.gold}>Questions</em></>}
        />
        <div className={`${styles.list} reveal`}>
          {faqs.map((faq) => (
            <div key={faq.id} className={`${styles.item} ${open === faq.id ? styles.open : ""}`}>
              <button className={styles.question} onClick={() => toggle(faq.id)}>
                {faq.question}
                <span className={styles.icon}>{open === faq.id ? "×" : "+"}</span>
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
