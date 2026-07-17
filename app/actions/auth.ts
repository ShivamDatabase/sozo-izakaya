"use server";

import { cookies } from "next/headers";

export async function login(password: string) {
  const correctPassword = process.env.ADMIN_PASSWORD || "sozoadmin2025";
  if (password === correctPassword) {
    (await cookies()).set("admin_session", "true", { httpOnly: true, path: "/" });
    return true;
  }
  return false;
}

export async function logout() {
  (await cookies()).delete("admin_session");
}
