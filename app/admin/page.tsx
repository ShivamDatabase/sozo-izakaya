import Link from "next/link";
import { getLocations } from "@/app/actions/locations";
import AdminLogoutBtn from "./AdminLogoutBtn";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const locations = await getLocations();

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
          <Link href="/" target="_blank" style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "underline" }}>View Live Site</Link>
          <AdminLogoutBtn />
        </div>
      </header>

      <main style={{ padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", margin: 0 }}>Manage Locations</h2>
            <p style={{ color: "var(--text-muted)", margin: "0.5rem 0 0 0" }}>{locations.length} Active Outlets</p>
          </div>
          <Link href="/admin/add" style={{
            background: "var(--accent)", color: "var(--primary)", padding: "0.7rem 1.5rem",
            fontFamily: "var(--font-poppins)", fontSize: "0.85rem", fontWeight: 600,
            letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: "2px"
          }}>
            + Add New Location
          </Link>
        </div>

        <div style={{
          background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "4px", overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Name</th>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Area</th>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Zone</th>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((loc: any) => (
                <tr key={loc.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
                  <td style={{ padding: "1rem 1.5rem", fontWeight: 500 }}>{loc.name}</td>
                  <td style={{ padding: "1rem 1.5rem", color: "var(--text-light)" }}>{loc.area}</td>
                  <td style={{ padding: "1rem 1.5rem" }}>
                    <span style={{
                      background: "rgba(212,175,55,0.1)", color: "var(--accent)",
                      padding: "0.3rem 0.6rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 500
                    }}>{loc.zone}</span>
                  </td>
                  <td style={{ padding: "1rem 1.5rem" }}>
                    <Link href={`/admin/edit/${loc.id}`} style={{
                      color: "#fff", textDecoration: "underline", fontSize: "0.85rem", marginRight: "1rem"
                    }}>Edit</Link>
                  </td>
                </tr>
              ))}
              {locations.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
                    No locations found. Add one to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
