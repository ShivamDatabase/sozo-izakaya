"use client";

import { useState } from "react";
import { updateMenuItem } from "@/app/actions/menu";
import { useRouter } from "next/navigation";

export default function MenuForm({ initialData }: { initialData: any }) {
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await updateMenuItem(formData.id, formData);
    setLoading(false);
    router.push("/admin/menu");
  };

  return (
    <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-light)" }}>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%", padding: "0.8rem", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
            color: "#fff", fontFamily: "var(--font-body)"
          }}
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-light)" }}>Price</label>
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={{
            width: "100%", padding: "0.8rem", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
            color: "#fff", fontFamily: "var(--font-body)"
          }}
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-light)" }}>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{
            width: "100%", padding: "0.8rem", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
            color: "#fff", fontFamily: "var(--font-body)"
          }}
        >
          <option value="desserts">Desserts</option>
          <option value="coffee">Coffee</option>
          <option value="bottles & cans">Bottles & Cans</option>
          <option value="small plates">Small Plates</option>
          <option value="sushi">Sushi</option>
        </select>
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-light)" }}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          style={{
            width: "100%", padding: "0.8rem", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
            color: "#fff", fontFamily: "var(--font-body)"
          }}
        />
      </div>
      
      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-light)" }}>Badge (Optional, e.g. "Spicy")</label>
        <input
          name="badge"
          value={formData.badge || ""}
          onChange={handleChange}
          style={{
            width: "100%", padding: "0.8rem", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
            color: "#fff", fontFamily: "var(--font-body)"
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "1rem", background: "var(--accent)", color: "var(--primary)",
          border: "none", borderRadius: "2px", fontFamily: "var(--font-poppins)",
          fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
          cursor: "pointer", marginTop: "1rem"
        }}
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
