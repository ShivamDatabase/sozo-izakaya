import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocations, getLocationBySlug } from "@/app/actions/locations";
import LocationDetail from "./LocationDetail";

// Generate static params for all locations
export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((loc) => ({ slug: loc.slug }));
}

// Dynamic metadata per outlet
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = await getLocationBySlug(slug);
  if (!loc) return {};
  return {
    title: `${loc.name} | Sozo Izakaya`,
    description: `Visit Sozo Izakaya at ${loc.area}. ${loc.address}. Call ${loc.phone} to reserve your table today.`,
    openGraph: {
      title: `${loc.name} | Sozo Izakaya`,
      description: `Authentic Japanese Izakaya dining at ${loc.area}, Mumbai.`,
      images: [{ url: loc.image }],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = await getLocationBySlug(slug);
  if (!loc) notFound();
  return <LocationDetail location={loc} />;
}
