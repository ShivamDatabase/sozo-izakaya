"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Location } from "@/lib/locations";

export type LocationInput = Omit<Location, "id" | "createdAt" | "updatedAt">;

// --------------------------------------------------------
// Locations Actions
// --------------------------------------------------------

export async function getLocations(): Promise<Location[]> {
  try {
    const locations = await prisma.location.findMany({
      orderBy: { createdAt: "asc" },
    });
    
    // Parse the JSON string fields back to their appropriate structures
    return locations.map(loc => ({
      ...loc,
      hours: JSON.parse(loc.hours) as { days: string; time: string }[],
      galleryImages: JSON.parse(loc.galleryImages) as string[],
      specialties: JSON.parse(loc.specialties) as string[],
      features: JSON.parse(loc.features) as string[],
    }));
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  try {
    const loc = await prisma.location.findUnique({
      where: { slug },
    });
    if (!loc) return null;
    
    return {
      ...loc,
      hours: JSON.parse(loc.hours) as { days: string; time: string }[],
      galleryImages: JSON.parse(loc.galleryImages) as string[],
      specialties: JSON.parse(loc.specialties) as string[],
      features: JSON.parse(loc.features) as string[],
    };
  } catch (error) {
    console.error(`Error fetching location ${slug}:`, error);
    return null;
  }
}

export async function createLocation(data: LocationInput) {
  try {
    const loc = await prisma.location.create({
      data: {
        ...data,
        hours: JSON.stringify(data.hours),
        galleryImages: JSON.stringify(data.galleryImages),
        specialties: JSON.stringify(data.specialties),
        features: JSON.stringify(data.features),
      }
    });
    
    revalidatePath("/locations");
    revalidatePath("/admin");
    return { success: true, location: loc };
  } catch (error) {
    console.error("Error creating location:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}

export async function updateLocation(id: string, data: LocationInput) {
  try {
    const loc = await prisma.location.update({
      where: { id },
      data: {
        ...data,
        hours: JSON.stringify(data.hours),
        galleryImages: JSON.stringify(data.galleryImages),
        specialties: JSON.stringify(data.specialties),
        features: JSON.stringify(data.features),
      }
    });
    
    revalidatePath("/locations");
    revalidatePath(`/locations/${loc.slug}`);
    revalidatePath("/admin");
    return { success: true, location: loc };
  } catch (error) {
    console.error("Error updating location:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}

export async function deleteLocation(id: string) {
  try {
    await prisma.location.delete({
      where: { id },
    });
    
    revalidatePath("/locations");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting location:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}

