// UI Utilities
import Loader        from "@/components/ui/Loader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingButtons from "@/components/ui/FloatingButtons";
import CookieBanner  from "@/components/ui/CookieBanner";
import prisma from "@/lib/prisma";

import Navbar        from "@/components/Navbar/Navbar";
import Hero          from "@/components/Hero/Hero";
import ChefsPicks    from "@/components/ChefsPicks/ChefsPicks";
import About         from "@/components/About/About";
import WhyUs         from "@/components/WhyUs/WhyUs";
import Reviews       from "@/components/Reviews/Reviews";
import Gallery       from "@/components/Gallery/Gallery";
import ReserveCTA    from "@/components/ReserveCTA/ReserveCTA";
import Footer        from "@/components/Footer/Footer";

export const dynamic = "force-dynamic";

export default async function Home() {
  const activeOffer = await prisma.offer.findFirst({ where: { isActive: true } });

  return (
    <>
      {/* Global utilities */}
      <Loader />
      <ScrollProgress />
      <FloatingButtons />

      {activeOffer && (
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
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>Special Offer</span>
          {` — ${activeOffer.text}`}
          &nbsp;&nbsp;✦
        </div>
      )}

      <CookieBanner />

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
