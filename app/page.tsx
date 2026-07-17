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

  return (
    <>
      {/* Global utilities */}
      <Loader />
      <ScrollProgress />
      <FloatingButtons />
      <CookieBanner />
      <HeroBgOverlay />

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
