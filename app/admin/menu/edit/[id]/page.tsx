import Link from "next/link";
import AdminLogoutBtn from "../../../AdminLogoutBtn";
import MenuForm from "../../MenuForm";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function EditMenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await prisma.menuItem.findUnique({ where: { id } });

  if (!item) {
    notFound();
  }

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
          <Link href="/admin/menu" style={{ fontSize: "0.8rem", color: "var(--text-muted)", textDecoration: "underline" }}>Back to Menu List</Link>
          <AdminLogoutBtn />
        </div>
      </header>

      <main style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "2rem" }}>Edit Menu Item</h2>
        
        <div style={{
          background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "4px", padding: "2rem"
        }}>
          <MenuForm initialData={item} />
        </div>
      </main>
    </div>
  );
}
