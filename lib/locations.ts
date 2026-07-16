// ─────────────────────────────────────────────
//  Sozo Izakaya — Locations Data (Constants)
// ─────────────────────────────────────────────

export const ZONES = ["All Areas", "Western Suburbs", "Central Mumbai"] as const;
export type Zone = typeof ZONES[number];

// We define a frontend-friendly Location type that matches what the Server Action returns
export interface Location {
  id: string;
  slug: string;
  name: string;
  area: string;
  zone: string;
  phone: string;
  phoneRaw: string;
  address: string;
  mapUrl: string;
  mapEmbed: string;
  lat: number;
  lng: number;
  hours: { days: string; time: string }[];
  image: string;
  galleryImages: string[];
  specialties: string[];
  features: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
