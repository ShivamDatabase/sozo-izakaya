"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/app/actions/auth";

export default function AdminLogoutBtn() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
        color: "#fff", padding: "0.4rem 1rem", borderRadius: "2px",
        fontFamily: "var(--font-poppins)", fontSize: "0.75rem", cursor: "pointer"
      }}
    >
      Logout
    </button>
  );
}
