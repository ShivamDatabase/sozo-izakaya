"use server";

import { cookies } from "next/headers";

export async function login(password: string) {
  if (password === process.env.ADMIN_PASSWORD) {
    (await cookies()).set("admin_session", "true", { httpOnly: true, path: "/" });
    return true;
  }
  return false;
}

export async function logout() {
  (await cookies()).delete("admin_session");
}
