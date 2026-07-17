"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createLocation, updateLocation, deleteLocation } from "@/app/actions/locations";
import { Location } from "@/lib/locations";

type LocationFormProps = {
  initialData?: Location;
};

export default function LocationForm({ initialData }: LocationFormProps) {
  const router = useRouter();
  const isEdit = !!initialData;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    slug: initialData?.slug || "",
    area: initialData?.area || "",
    zone: initialData?.zone || "Western Suburbs",
    phone: initialData?.phone || "",
    phoneRaw: initialData?.phoneRaw || "",
    address: initialData?.address || "",
    mapUrl: initialData?.mapUrl || "",
    mapEmbed: initialData?.mapEmbed || "",
    lat: initialData?.lat?.toString() || "",
    lng: initialData?.lng?.toString() || "",
    image: initialData?.image || "/images/restaurant_interior.jpg",
  });

  // Simplified array fields using comma separated text for quick demo
  const [hoursText, setHoursText] = useState(
    initialData ? initialData.hours.map((h) => `${h.days}|${h.time}`).join("\n") : "Monday – Friday|12:00 PM – 11:00 PM\nSaturday – Sunday|11:00 AM – 11:30 PM"
  );
  const [specialtiesText, setSpecialtiesText] = useState(initialData?.specialties?.join(", ") || "");
  const [featuresText, setFeaturesText] = useState(initialData?.features?.join(", ") || "");
  const [galleryText, setGalleryText] = useState(initialData?.galleryImages?.join("\n") || "/images/sushi_platter.jpg\n/images/ramen_bowl.jpg\n/images/sake.jpg");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      ...formData,
      lat: parseFloat(formData.lat) || 0,
      lng: parseFloat(formData.lng) || 0,
      hours: hoursText.split("\n").filter(Boolean).map((line: string) => {
        const [days, time] = line.split("|");
        return { days: days?.trim() || "", time: time?.trim() || "" };
      }),
      specialties: specialtiesText.split(",").map((s: string) => s.trim()).filter(Boolean),
      features: featuresText.split(",").map((f: string) => f.trim()).filter(Boolean),
      galleryImages: galleryText.split("\n").map((g: string) => g.trim()).filter(Boolean),
    };

    const res = isEdit && initialData
      ? await updateLocation(initialData.id, payload)
      : await createLocation(payload);

    if (res.success) {
      router.push("/admin");
    } else {
      setError(res.error || "An error occurred");
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData) return;
    if (!confirm("Are you sure you want to delete this location?")) return;
    setLoading(true);
    const res = await deleteLocation(initialData.id);
    if (res.success) {
      router.push("/admin");
    } else {
      setError(res.error || "Failed to delete");
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.8rem", background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px",
    color: "#fff", fontFamily: "var(--font-body)", marginBottom: "1rem"
  };

  const labelStyle = {
    display: "block", fontSize: "0.75rem", textTransform: "uppercase" as const,
    letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.5rem"
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "var(--bg-card)", padding: "2rem", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.05)" }}>
      {error && <p style={{ color: "#e57373", marginBottom: "1rem" }}>{error}</p>}
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Sozo Izakaya – Bandra" />
        </div>
        <div>
          <label style={labelStyle}>Slug</label>
          <input name="slug" value={formData.slug} onChange={handleChange} required style={inputStyle} placeholder="bandra" />
        </div>
        <div>
          <label style={labelStyle}>Area</label>
          <input name="area" value={formData.area} onChange={handleChange} required style={inputStyle} placeholder="Bandra West" />
        </div>
        <div>
          <label style={labelStyle}>Zone</label>
          <select name="zone" value={formData.zone} onChange={handleChange} style={inputStyle}>
            <option style={{ background: "var(--primary)" }}>Western Suburbs</option>
            <option style={{ background: "var(--primary)" }}>Central Mumbai</option>
            <option style={{ background: "var(--primary)" }}>South Mumbai</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Display Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} placeholder="+91 98765 43210" />
        </div>
        <div>
          <label style={labelStyle}>Raw Phone (for links)</label>
          <input name="phoneRaw" value={formData.phoneRaw} onChange={handleChange} required style={inputStyle} placeholder="9876543210" />
        </div>
      </div>

      <label style={labelStyle}>Full Address</label>
      <textarea name="address" value={formData.address} onChange={handleChange} required style={{ ...inputStyle, minHeight: "80px" }} />

      <label style={labelStyle}>Google Maps URL (for button)</label>
      <input name="mapUrl" value={formData.mapUrl} onChange={handleChange} required style={inputStyle} />

      <label style={labelStyle}>Google Maps Embed URL (for iframe src)</label>
      <input name="mapEmbed" value={formData.mapEmbed} onChange={handleChange} required style={inputStyle} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle}>Latitude</label>
          <input type="number" step="any" name="lat" value={formData.lat} onChange={handleChange} required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Longitude</label>
          <input type="number" step="any" name="lng" value={formData.lng} onChange={handleChange} required style={inputStyle} />
        </div>
      </div>

      <label style={labelStyle}>Cover Image Path</label>
      <input name="image" value={formData.image} onChange={handleChange} required style={inputStyle} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle}>Hours (Format: Days|Time per line)</label>
          <textarea value={hoursText} onChange={(e) => setHoursText(e.target.value)} required style={{ ...inputStyle, minHeight: "100px" }} />
        </div>
        <div>
          <label style={labelStyle}>Gallery Image Paths (One per line)</label>
          <textarea value={galleryText} onChange={(e) => setGalleryText(e.target.value)} required style={{ ...inputStyle, minHeight: "100px" }} />
        </div>
      </div>

      <label style={labelStyle}>Specialties (Comma separated)</label>
      <input value={specialtiesText} onChange={(e) => setSpecialtiesText(e.target.value)} required style={inputStyle} />

      <label style={labelStyle}>Features (Comma separated)</label>
      <input value={featuresText} onChange={(e) => setFeaturesText(e.target.value)} required style={inputStyle} />

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button type="submit" disabled={loading} style={{
          background: "var(--accent)", color: "var(--primary)", padding: "1rem 2rem",
          border: "none", borderRadius: "2px", fontWeight: 700, cursor: "pointer",
          fontFamily: "var(--font-poppins)", letterSpacing: "0.1em", textTransform: "uppercase"
        }}>
          {loading ? "Saving..." : isEdit ? "Update Location" : "Add Location"}
        </button>

        {isEdit && (
          <button type="button" onClick={handleDelete} disabled={loading} style={{
            background: "transparent", color: "#e57373", padding: "1rem 2rem",
            border: "1px solid #e57373", borderRadius: "2px", fontWeight: 700, cursor: "pointer",
            fontFamily: "var(--font-poppins)", letterSpacing: "0.1em", textTransform: "uppercase"
          }}>
            {loading ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </form>
  );
}
