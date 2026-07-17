"use client";

import { useState } from "react";
import { updateOffer } from "@/app/actions/offers";
import { useRouter } from "next/navigation";

export default function OfferForm({ offer }: { offer: any }) {
  const [text, setText] = useState(offer?.text || "Grand Opening Special — Book a table for 4 or more and enjoy a complimentary Sake Set");
  const [isActive, setIsActive] = useState(offer?.isActive || false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await updateOffer(text, isActive);
    setLoading(false);
    router.refresh();
  };

  return (
    <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <label style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-light)" }}>Offer Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={3}
          style={{
            width: "100%", padding: "0.8rem", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
            color: "#fff", fontFamily: "var(--font-body)"
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ color: "var(--text-light)" }}>Display on Homepage?</label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
          style={{ transform: "scale(1.5)" }}
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
        {loading ? "Saving..." : "Save Offer Settings"}
      </button>
    </form>
  );
}
