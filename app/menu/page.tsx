"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingButtons from "@/components/ui/FloatingButtons";

export default function MenuPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <FloatingButtons />
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg-dark)", minHeight: "100vh" }}>
        <Menu />
      </main>
      <Footer />
    </>
  );
}
