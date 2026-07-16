"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./Reservation.module.css";

const TIMES = [
  "12:00 PM","12:30 PM","01:00 PM","01:30 PM",
  "07:00 PM","07:30 PM","08:00 PM","08:30 PM",
  "09:00 PM","09:30 PM","10:00 PM",
];

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="reservation" className={styles.section}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          tag="Book a Table"
          title={<>Reserve Your <em className={styles.maroon}>Table</em></>}
          theme="dark"
          description="We'd love to host you. Make a reservation and let us create an unforgettable evening for you."
        />
        <div className={styles.grid}>
          {/* Info */}
          <div className={`${styles.info} reveal-left`}>
            {[
              { icon: "📍", title: "Address", body: "C-14, Hubtown Seasons C-Wing,\nOpp. Jain Temple, Chembur East,\nKurla, Mumbai 400071" },
              { icon: "📞", title: "Phone", body: "+91 9029912000", href: "tel:9029912000" },
              { icon: "🕐", title: "Opening Hours", body: "Mon–Fri: 12:00 PM – 11:00 PM\nSat–Sun: 11:00 AM – 11:30 PM" },
              { icon: "🎂", title: "Special Occasions", body: "Birthday celebrations, anniversaries, corporate events — let us make it memorable." },
            ].map((d) => (
              <div key={d.title} className={styles.detail}>
                <div className={styles.detailIcon}>{d.icon}</div>
                <div>
                  <h4 className={styles.detailTitle}>{d.title}</h4>
                  {d.href
                    ? <a href={d.href} className={styles.detailBody}>{d.body}</a>
                    : <p className={styles.detailBody}>{d.body}</p>
                  }
                </div>
              </div>
            ))}
            <div className={styles.imgWrap}>
              <Image src="/images/restaurant_interior.jpg" alt="Restaurant" fill style={{ objectFit: "cover" }} sizes="40vw" loading="lazy" />
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Make a Reservation</h3>
              <p className={styles.formSub}>Fill in your details and we&apos;ll confirm your table within 2 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="res-name">Full Name</label>
                    <input id="res-name" type="text" placeholder="Your name" required className={styles.input} />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="res-phone">Phone Number</label>
                    <input id="res-phone" type="tel" placeholder="+91 XXXXXXXXXX" required className={styles.input} />
                  </div>
                </div>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="res-email">Email Address</label>
                  <input id="res-email" type="email" placeholder="your@email.com" className={styles.input} />
                </div>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="res-date">Date</label>
                    <input id="res-date" type="date" min={today} required className={styles.input} />
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor="res-time">Time</label>
                    <select id="res-time" required className={styles.input}>
                      <option value="">Select time</option>
                      {TIMES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="res-guests">Number of Guests</label>
                  <select id="res-guests" required className={styles.input}>
                    <option value="">Select guests</option>
                    {["1 Guest","2 Guests","3 Guests","4 Guests","5 Guests","6 Guests","7–10 Guests","10+ Guests (Group)"].map((g) => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div className={styles.group}>
                  <label className={styles.label} htmlFor="res-notes">Special Requests</label>
                  <textarea id="res-notes" placeholder="Allergies, special occasions, seating preferences..." className={styles.textarea} />
                </div>
                <button type="submit" className={`${styles.submit} ${submitted ? styles.submitted : ""}`}>
                  {submitted ? "✓ Reservation Confirmed!" : "Reserve Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
