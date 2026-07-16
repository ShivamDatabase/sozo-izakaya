"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingButtons from "@/components/ui/FloatingButtons";
import type { Location } from "@/lib/locations";
import styles from "./LocationDetail.module.css";

const TIMES = [
  "12:00 PM","12:30 PM","01:00 PM","07:00 PM",
  "07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM",
];

export default function LocationDetail({ location: loc }: { location: Location }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); (e.target as HTMLFormElement).reset(); }, 4000);
  };

  return (
    <>
      <ScrollProgress />
      <FloatingButtons />
      <Navbar />

      {/* Hero */}
      <div className={styles.hero}>
        <Image src={loc.image} alt={loc.name} fill priority quality={90} style={{ objectFit: "cover" }} sizes="100vw" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/locations" className={styles.backLink}>← All Locations</Link>
          <p className={styles.heroZone}>{loc.zone}</p>
          <h1 className={styles.heroTitle}>{loc.name}</h1>
          <p className={styles.heroAddr}>📍 {loc.area}</p>
          <div className={styles.heroBtns}>
            <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className={`${styles.heroBtn} ${styles.heroBtnMap}`}>🗺️ View on Map</a>
            <a href={`tel:${loc.phoneRaw}`} className={`${styles.heroBtn} ${styles.heroBtnCall}`}>📞 Call Now</a>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className="container">

          {/* Details + Form Grid */}
          <div className={styles.topGrid}>

            {/* Info */}
            <div className={`${styles.info} reveal-left`}>
              <h2 className={styles.infoTitle}>Outlet <em className={styles.gold}>Details</em></h2>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <h4>Address</h4>
                  <p>{loc.address}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${loc.phoneRaw}`}>{loc.phone}</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🕐</div>
                <div>
                  <h4>Business Hours</h4>
                  {loc.hours.map((h) => (
                    <p key={h.days}><strong>{h.days}:</strong> {h.time}</p>
                  ))}
                </div>
              </div>

              <h4 className={styles.subHead}>Our Specialties at This Outlet</h4>
              <div className={styles.tags}>
                {loc.specialties.map((s) => <span key={s} className={styles.specTag}>{s}</span>)}
              </div>

              <h4 className={styles.subHead}>Features</h4>
              <div className={styles.features}>
                {loc.features.map((f) => (
                  <div key={f} className={styles.feature}>
                    <span className={styles.featureDot}>✦</span> {f}
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <h4 className={styles.subHead}>Outlet Gallery</h4>
              <div className={styles.gallery}>
                {loc.galleryImages.map((src, i) => (
                  <div key={i} className={styles.galleryItem}>
                    <Image src={src} alt={`${loc.name} gallery ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="33vw" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Reservation Form */}
            <div className="reveal-right">
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Reserve at <span className={styles.gold}>{loc.area}</span></h3>
                <p className={styles.formSub}>We&apos;ll confirm your table within 2 hours.</p>
                <form onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label className={styles.label} htmlFor={`name-${loc.slug}`}>Full Name</label>
                      <input id={`name-${loc.slug}`} type="text" required placeholder="Your name" className={styles.input} />
                    </div>
                    <div className={styles.group}>
                      <label className={styles.label} htmlFor={`phone-${loc.slug}`}>Phone</label>
                      <input id={`phone-${loc.slug}`} type="tel" required placeholder="+91 XXXXXXXXXX" className={styles.input} />
                    </div>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor={`email-${loc.slug}`}>Email</label>
                    <input id={`email-${loc.slug}`} type="email" placeholder="your@email.com" className={styles.input} />
                  </div>
                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label className={styles.label} htmlFor={`date-${loc.slug}`}>Date</label>
                      <input id={`date-${loc.slug}`} type="date" min={today} required className={styles.input} />
                    </div>
                    <div className={styles.group}>
                      <label className={styles.label} htmlFor={`time-${loc.slug}`}>Time</label>
                      <select id={`time-${loc.slug}`} required className={styles.input}>
                        <option value="">Select time</option>
                        {TIMES.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor={`guests-${loc.slug}`}>Guests</label>
                    <select id={`guests-${loc.slug}`} required className={styles.input}>
                      <option value="">Select</option>
                      {["1","2","3","4","5","6","7–10","10+ (Group)"].map((g) => (
                        <option key={g}>{g} {parseInt(g) === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.group}>
                    <label className={styles.label} htmlFor={`notes-${loc.slug}`}>Special Requests</label>
                    <textarea id={`notes-${loc.slug}`} placeholder="Allergies, occasions, preferences…" className={styles.textarea} />
                  </div>
                  <div className={styles.hidden}>
                    <input name="outlet" value={loc.name} readOnly />
                  </div>
                  <button type="submit" className={`${styles.submit} ${submitted ? styles.done : ""}`}>
                    {submitted ? "✓ Reservation Confirmed!" : "Reserve Now"}
                  </button>
                </form>
                <div className={styles.whatsappLink}>
                  <a
                    href={`https://wa.me/${loc.phoneRaw}?text=Hi%20Sozo%20Izakaya%20${encodeURIComponent(loc.area)}!%20I%27d%20like%20to%20make%20a%20reservation.`}
                    target="_blank" rel="noopener noreferrer"
                  >
                    💬 Or reserve via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`${styles.mapSection} reveal`}>
            <h3 className={styles.mapTitle}>📍 Find Us on the Map</h3>
            <div className={styles.mapWrap}>
              <iframe
                src={loc.mapEmbed}
                width="100%"
                height="420"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${loc.name} Map`}
                style={{ border: 0, filter: "grayscale(15%) contrast(1.1)" }}
              />
            </div>
          </div>

          {/* Other Locations */}
          <div className={`${styles.otherSection} reveal`}>
            <h3 className={styles.otherTitle}>Our Other <em className={styles.gold}>Locations</em></h3>
            <p className={styles.otherDesc}>Explore Sozo Izakaya across Mumbai</p>
            <div className={styles.otherGrid}>
              {/* Imported inline to avoid circular imports */}
            </div>
            <div className={styles.otherBtnWrap}>
              <Link href="/locations" className={styles.otherBtn}>View All Locations →</Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
