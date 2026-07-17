"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getActiveOffer() {
  return await prisma.offer.findFirst({ where: { isActive: true } });
}

export async function getOffer() {
  // Assuming there's only one offer banner record
  return await prisma.offer.findFirst();
}

export async function updateOffer(text: string, isActive: boolean) {
  const offer = await prisma.offer.findFirst();
  if (offer) {
    await prisma.offer.update({
      where: { id: offer.id },
      data: { text, isActive },
    });
  } else {
    await prisma.offer.create({
      data: { text, isActive },
    });
  }
  revalidatePath("/");
  revalidatePath("/admin/offers");
}
