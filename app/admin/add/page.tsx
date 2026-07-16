import Link from "next/link";
import LocationForm from "../LocationForm";

export default function AddLocationPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-dark)", color: "#fff" }}>
      <header style={{
        background: "var(--bg-card)", borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "1.2rem 2rem"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link href="/admin" style={{ color: "var(--text-muted)" }}>← Back</Link>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", margin: 0 }}>Add New Location</h1>
        </div>
      </header>

      <main style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <LocationForm />
      </main>
    </div>
  );
}
