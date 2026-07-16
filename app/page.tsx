"use client";
import { useEffect } from "react";

// UI Utilities
import Loader        from "@/components/ui/Loader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingButtons from "@/components/ui/FloatingButtons";
import CookieBanner  from "@/components/ui/CookieBanner";

import Navbar        from "@/components/Navbar/Navbar";
import Hero          from "@/components/Hero/Hero";
import ChefsPicks    from "@/components/ChefsPicks/ChefsPicks";
import About         from "@/components/About/About";
import WhyUs         from "@/components/WhyUs/WhyUs";
import Reviews       from "@/components/Reviews/Reviews";
import Gallery       from "@/components/Gallery/Gallery";
import ReserveCTA    from "@/components/ReserveCTA/ReserveCTA";
import Footer        from "@/components/Footer/Footer";

export default function Home() {
  // Global scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Global utilities */}
      <Loader />
      <ScrollProgress />
      <FloatingButtons />
      <CookieBanner />

      {/* Special Offer Banner */}
      <div style={{
        background: "linear-gradient(90deg, #7A1E1E, #9a2e2e, #7A1E1E)",
        textAlign: "center",
        padding: "0.55rem 1rem",
        fontFamily: "var(--font-poppins), sans-serif",
        fontSize: "0.8rem",
        fontWeight: 500,
        letterSpacing: "0.08em",
        color: "#fff",
        position: "relative",
        zIndex: 998,
      }}>
        ✦&nbsp;&nbsp;
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>Grand Opening Special</span>
        {" — Book a table for 4 or more and enjoy a complimentary Sake Set"}
        &nbsp;&nbsp;✦&nbsp;&nbsp;Valid through August 2025&nbsp;&nbsp;✦
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <ChefsPicks />
        <About />
        <WhyUs />
        <Reviews />
        <Gallery />
        <ReserveCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
