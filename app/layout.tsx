import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Poppins } from "next/font/google";
import Cursor from "@/components/ui/Cursor";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sozooizakaya.com"),
  title: {
    default: "Sozo Izakaya | Premium Japanese Restaurant | Mumbai",
    template: "%s | Sozo Izakaya",
  },
  description:
    "Sozo Izakaya – Premium Japanese restaurant in Mumbai offering authentic Izakaya dining. Experience the art of Japanese cuisine with sushi, ramen, yakitori & more. Reserve your table today.",
  keywords: [
    "Sozo Izakaya",
    "Japanese restaurant Mumbai",
    "Izakaya Mumbai",
    "sushi Mumbai",
    "ramen",
    "yakitori",
    "Chembur restaurant",
    "fine dining Mumbai",
  ],
  authors: [{ name: "Sozo Izakaya" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sozo Izakaya | Premium Japanese Restaurant Mumbai",
    description:
      "Authentic Izakaya dining in the heart of Mumbai. Fresh sushi, ramen, yakitori and more. Reserve your table now.",
    url: "https://sozooizakaya.com",
    siteName: "Sozo Izakaya",
    images: [{ url: "/images/hero_bg.jpg", width: 1200, height: 630, alt: "Sozo Izakaya" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sozo Izakaya | Premium Japanese Restaurant Mumbai",
    description: "Authentic Izakaya dining in the heart of Mumbai.",
    images: ["/images/hero_bg.jpg"],
  },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Sozo Izakaya",
  image: "https://sozooizakaya.com/images/hero_bg.jpg",
  description: "Premium Japanese Izakaya restaurant in Mumbai offering authentic cuisine.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "C-14, Hubtown Seasons C-Wing Comm Taluka, R.C. Ramakrishna Chemburkar Marg, Opp. Jain Temple",
    addressLocality: "Chembur East, Kurla",
    addressRegion: "Maharashtra",
    postalCode: "400071",
    addressCountry: "IN",
  },
  telephone: "+919029912000",
  servesCuisine: "Japanese",
  priceRange: "₹₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "53",
  },
  openingHours: ["Mo-Su 12:00-23:00"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
