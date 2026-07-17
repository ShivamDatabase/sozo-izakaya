"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const [subbed, setSubbed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSub = () => {
    if (email) { setSubbed(true); setEmail(""); setTimeout(() => setSubbed(false), 3000); }
  };

  return (
    <>
      {/* Newsletter */}
      <div className={styles.newsletter}>
        <div className="container">
          <h3 className={styles.nlTitle}>Stay in the Loop</h3>
          <p className={styles.nlSub}>Subscribe for exclusive offers, new menu launches, and curated dining events.</p>
          <div className={styles.nlForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Newsletter email"
              className={styles.nlInput}
            />
            <button onClick={handleSub} className={`${styles.nlBtn} ${subbed ? styles.nlSubbed : ""}`}>
              {subbed ? "✓ Subscribed!" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>

      {/* Instagram strip */}
      <div className={styles.instagram}>
        <div className="container">
          <div className={styles.instaHeader}>
            <p className={styles.tag}>Follow Our Journey</p>
            <h3 className={styles.instaHandle}>@sozo_izakaya</h3>
          </div>
          <div className={styles.instaGrid}>
            {["/images/sushi_platter.jpg","/images/ramen_bowl.jpg","/images/yakitori.jpg",
              "/images/dining_ambience.jpg","/images/sake.jpg","/images/mochi.jpg"].map((src, i) => (
              <div key={i} className={styles.instaItem}>
                <Image src={src} alt="Instagram" fill style={{ objectFit: "cover" }} className={styles.instaImg} />
                <div className={styles.instaOverlay}>📸</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <div className={styles.logoMain}>SOZO</div>
              <div className={styles.logoSub}>Izakaya · Mumbai</div>
              <p className={styles.brandDesc}>A premium Japanese Izakaya experience nestled in the heart of Mumbai. Crafted with tradition, served with love.</p>
              <div className={styles.socials}>
                {[["📸","Instagram"],["📘","Facebook"],["🐦","Twitter"],["🗺️","Google Maps"]].map(([icon, label]) => (
                  <a key={label} href="https://maps.app.goo.gl/naw9FHpEyHuo2zcTA" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={label}>{icon}</a>
                ))}
              </div>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colHead}>Quick Links</h4>
              <ul>
                {[["About Us","#about"],["Our Menu","#menu"],["Gallery","#gallery"],["Reviews","#reviews"],["Events","#events"],["FAQ","#faq"]].map(([label, href]) => (
                  <li key={href}><a href={href} className={styles.colLink}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colHead}>Menu</h4>
              <ul>
                {["Sushi & Sashimi","Ramen & Udon","Yakitori & Grill","Tempura","Desserts","Sake & Drinks"].map((item) => (
                  <li key={item}><a href="#menu" className={styles.colLink}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colHead}>Working Hours</h4>
              <div className={styles.hours}>
                <p><span>Mon – Thu:</span> 12:00 PM – 11:00 PM</p>
                <p><span>Friday:</span> 12:00 PM – 11:30 PM</p>
                <p><span>Saturday:</span> 11:00 AM – 11:30 PM</p>
                <p><span>Sunday:</span> 11:00 AM – 11:00 PM</p>
                <p style={{marginTop:"1rem"}}><span>📞</span> <a href="tel:9029912000" className={styles.tel}>9029912000</a></p>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>© 2025 Sozo Izakaya. All rights reserved. | <a href="#" className={styles.bottomLink}>Privacy Policy</a> | <a href="#" className={styles.bottomLink}>Terms of Service</a></p>
            <p>Crafted with ♥ for extraordinary dining experiences</p>
          </div>
        </div>
      </footer>
    </>
  );
}
