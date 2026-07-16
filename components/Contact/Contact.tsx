"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); (e.target as HTMLFormElement).reset(); }, 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <SectionHeader tag="Get in Touch" title={<>Contact <em className={styles.gold}>Us</em></>} />
        <div className={styles.grid}>
          <div className={`${styles.info} reveal-left`}>
            {[
              { icon: "📍", title: "Location", body: "C-14, Hubtown Seasons, Chembur East,\nKurla, Mumbai 400071" },
              { icon: "📞", title: "Phone",    body: "+91 9029912000", href: "tel:9029912000" },
              { icon: "✉️", title: "Email",    body: "hello@sozooizakaya.com", href: "mailto:hello@sozooizakaya.com" },
              { icon: "🕐", title: "Hours",    body: "Mon–Fri: 12:00 PM – 11:00 PM\nSat–Sun: 11:00 AM – 11:30 PM" },
            ].map((d) => (
              <div key={d.title} className={styles.card}>
                <div className={styles.icon}>{d.icon}</div>
                <div>
                  <h4 className={styles.cardTitle}>{d.title}</h4>
                  {d.href
                    ? <a href={d.href} className={styles.cardBody}>{d.body}</a>
                    : <p className={styles.cardBody}>{d.body}</p>
                  }
                </div>
              </div>
            ))}
          </div>
          <div className="reveal-right">
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="c-name">Name</label>
                  <input id="c-name" type="text" placeholder="Your name" required className={styles.input} />
                </div>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="c-phone">Phone</label>
                    <input id="c-phone" type="tel" placeholder="+91 XXXXXXXXXX" className={styles.input} />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="c-email">Email</label>
                    <input id="c-email" type="email" placeholder="your@email.com" className={styles.input} />
                  </div>
                </div>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="c-msg">Message</label>
                  <textarea id="c-msg" placeholder="Tell us how we can help..." className={styles.textarea} />
                </div>
                <button type="submit" className={`${styles.submit} ${sent ? styles.sent : ""}`}>
                  {sent ? "✓ Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
