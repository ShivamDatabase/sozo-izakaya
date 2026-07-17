import Link from "next/link";
import AdminLogoutBtn from "../AdminLogoutBtn";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminMenuDashboard() {
  const items = await prisma.menuItem.findMany();

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

      <main style={{ padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", margin: 0 }}>Menu Control</h2>
            <p style={{ color: "var(--text-muted)", margin: "0.5rem 0 0 0" }}>{items.length} Menu Items</p>
          </div>
        </div>

        <div style={{
          background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "4px", overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Name</th>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Category</th>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Price</th>
                <th style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any) => (
                <tr key={item.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
                  <td style={{ padding: "1rem 1.5rem", fontWeight: 500 }}>{item.name}</td>
                  <td style={{ padding: "1rem 1.5rem", color: "var(--text-light)", textTransform: "capitalize" }}>{item.category}</td>
                  <td style={{ padding: "1rem 1.5rem" }}>{item.price}</td>
                  <td style={{ padding: "1rem 1.5rem" }}>
                    <Link href={`/admin/menu/edit/${item.id}`} style={{
                      color: "#fff", textDecoration: "underline", fontSize: "0.85rem", marginRight: "1rem"
                    }}>Edit</Link>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
                    No menu items found. Run the seed script to import them.
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
