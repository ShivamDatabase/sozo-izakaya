import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocationBySlug } from "@/app/actions/locations";
import prisma from "@/lib/prisma";
import LocationForm from "../../LocationForm";

export default async function EditLocationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const loc = await prisma.location.findUnique({ where: { id } });
  
  if (!loc) notFound();

  const formattedLoc = {
    ...loc,
    hours: JSON.parse(loc.hours),
    galleryImages: JSON.parse(loc.galleryImages),
    specialties: JSON.parse(loc.specialties),
    features: JSON.parse(loc.features),
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-dark)", color: "#fff" }}>
      <header style={{
        background: "var(--bg-card)", borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "1.2rem 2rem"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link href="/admin" style={{ color: "var(--text-muted)" }}>← Back</Link>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", margin: 0 }}>Edit Location</h1>
        </div>
      </header>

      <main style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <LocationForm initialData={formattedLoc} />
      </main>
    </div>
  );
}
