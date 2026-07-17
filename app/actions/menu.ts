"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getMenuItems() {
  return await prisma.menuItem.findMany();
}

export async function getMenuItem(id: string) {
  return await prisma.menuItem.findUnique({ where: { id } });
}

export async function addMenuItem(data: any) {
  const item = await prisma.menuItem.create({ data });
  revalidatePath("/menu");
  revalidatePath("/admin/menu");
  return item;
}

export async function updateMenuItem(id: string, data: any) {
  const item = await prisma.menuItem.update({ where: { id }, data });
  revalidatePath("/menu");
  revalidatePath("/admin/menu");
  return item;
}

export async function deleteMenuItem(id: string) {
  await prisma.menuItem.delete({ where: { id } });
  revalidatePath("/menu");
  revalidatePath("/admin/menu");
}
