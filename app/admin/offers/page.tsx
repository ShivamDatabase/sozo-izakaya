import Link from "next/link";
import AdminLogoutBtn from "../AdminLogoutBtn";
import OfferForm from "./OfferForm";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function OffersDashboard() {
  const offer = await prisma.offer.findFirst();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-dark)", color: "#fff" }}>
      <header style={{
        background: "var(--bg-card)", borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <h1 style={{ fontFamily: "var(--font-playfair)", color: "var(--accent)", fontSize: "1.5rem", margin: 0 }}>
          SOZO <span style={{ color: "#fff", fontStyle: "italic", fontWeight: 300 }}>Admin</span>
        </h1>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link href="/admin" style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "underline" }}>Dashboard</Link>
          <AdminLogoutBtn />
        </div>
      </header>

      <main style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", margin: 0 }}>Special Offer Control</h2>
            <p style={{ color: "var(--text-muted)", margin: "0.5rem 0 0 0" }}>Update the homepage banner offer.</p>
          </div>
        </div>

        <div style={{
          background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "4px", padding: "2rem"
        }}>
          <OfferForm offer={offer} />
        </div>
      </main>
    </div>
  );
}
