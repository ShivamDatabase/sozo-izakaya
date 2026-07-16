"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Menu",       href: "/menu" },
  { label: "Locations",  href: "/locations" },
  { label: "Gallery",    href: "/#gallery" },
  { label: "Reviews",    href: "/#reviews" },
  { label: "Events",     href: "/#events" },
  { label: "Contact",    href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>
          <span className={styles.logoMain}>SOZO</span>
          <span className={styles.logoSub}>Izakaya · Mumbai</span>
        </div>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="/locations" className={`${styles.link} ${styles.cta}`}>Reserve Table</a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className={styles.drawerLink} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#reservation" className={`${styles.drawerLink} ${styles.drawerCta}`} onClick={close}>
          Reserve Table
        </a>
      </div>
    </>
  );
}
