"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/actions/auth";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const success = await login(password);
    if (success) {
      router.push("/admin");
    } else {
      setError("Invalid password");
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "url('/images/restaurant_interior.jpg') center/cover no-repeat"
    }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.8)" }} />
      
      <div style={{
        position: "relative", zIndex: 10, background: "var(--bg-card)",
        padding: "3rem", borderRadius: "6px", width: "100%", maxWidth: "400px",
        border: "1px solid var(--border-gold)", textAlign: "center"
      }}>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", color: "var(--accent)", marginBottom: "0.5rem" }}>
          SOZO Admin
        </h1>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          Enter password to access dashboard
        </p>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin Password"
            required
            style={{
              padding: "0.8rem", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px",
              color: "#fff", fontFamily: "var(--font-body)"
            }}
          />
          {error && <p style={{ color: "#e57373", fontSize: "0.8rem", margin: 0 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "0.9rem", background: "var(--accent)", color: "var(--primary)",
              border: "none", borderRadius: "2px", fontFamily: "var(--font-poppins)",
              fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              cursor: "pointer", marginTop: "1rem"
            }}
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
