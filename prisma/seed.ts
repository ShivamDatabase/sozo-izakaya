import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const locations = [
  {
    slug: "versova",
    name: "Sozo Izakaya – Versova",
    area: "Versova, Andheri West",
    zone: "Western Suburbs",
    phone: "+91 98679 86481",
    phoneRaw: "9867986481",
    address: "02, JP Rd, Aram Nagar Part 2, Jeet Nagar, Versova, Andheri West, Mumbai, Maharashtra 400061",
    mapUrl: "https://maps.google.com/?q=Sozo+Izakaya+Versova+Andheri+West+Mumbai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1!2d72.8193!3d19.1225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzIxLjAiTiA3MsKwNDknMDkuNSJF!5e0!3m2!1sen!2sin!4v1700000000001",
    lat: 19.1225,
    lng: 72.8193,
    hours: JSON.stringify([
      { days: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
      { days: "Saturday – Sunday", time: "11:00 AM – 11:30 PM" },
    ]),
    image: "/images/dining_ambience.jpg",
    galleryImages: JSON.stringify([
      "/images/sushi_platter.jpg",
      "/images/ramen_bowl.jpg",
      "/images/sake.jpg",
    ]),
    specialties: JSON.stringify(["Dragon Roll Supreme", "Tonkotsu Ramen", "Ebi Tempura"]),
    features: JSON.stringify(["Beachside Vibe", "Private Dining", "Live Sake Bar"]),
  },
  {
    slug: "malad",
    name: "Sozo Izakaya – Malad",
    area: "Malad West",
    zone: "Western Suburbs",
    phone: "+91 88282 70614",
    phoneRaw: "8828270614",
    address: "Shop No. 09, Ground Floor, Shreeji Eternity, New Link Rd, Mith Chowki, Malad West, Mumbai, Maharashtra 400064",
    mapUrl: "https://maps.google.com/?q=Sozo+Izakaya+Malad+West+Mumbai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8!2d72.8413!3d19.1856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDExJzA4LjIiTiA3MsKwNTAnMjguNyJF!5e0!3m2!1sen!2sin!4v1700000000002",
    lat: 19.1856,
    lng: 72.8413,
    hours: JSON.stringify([
      { days: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
      { days: "Saturday – Sunday", time: "11:00 AM – 11:30 PM" },
    ]),
    image: "/images/restaurant_interior.jpg",
    galleryImages: JSON.stringify([
      "/images/yakitori.jpg",
      "/images/sashimi.jpg",
      "/images/mochi.jpg",
    ]),
    specialties: JSON.stringify(["Wagyu Kushiyaki", "Sashimi Moriawase", "Matcha Mochi"]),
    features: JSON.stringify(["Mall Level Dining", "Family Friendly", "Large Seating"]),
  },
  {
    slug: "chembur",
    name: "Sozo Izakaya – Chembur",
    area: "Chembur East",
    zone: "Central Mumbai",
    phone: "+91 98679 86481",
    phoneRaw: "9867986481",
    address: "C-14, Hubtown Seasons C-Wing Comm Taluka, R.C. Ramakrishna Chemburkar Marg, Opp. Jain Temple, Chembur East, Kurla, Mumbai, Maharashtra 400071",
    mapUrl: "https://maps.app.goo.gl/naw9FHpEyHuo2zcTA",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4634780543583!2d72.89791!3d19.059731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d0000001%3A0x5a54b24e8ef07c5d!2sHubtown%20Seasons%2C%20Chembur%20East!5e0!3m2!1sen!2sin!4v1700000000000",
    lat: 19.0597,
    lng: 72.8991,
    hours: JSON.stringify([
      { days: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
      { days: "Saturday – Sunday", time: "11:00 AM – 11:30 PM" },
    ]),
    image: "/images/sushi_platter.jpg",
    galleryImages: JSON.stringify([
      "/images/gyoza.jpg",
      "/images/udon.jpg",
      "/images/tempura.jpg",
    ]),
    specialties: JSON.stringify(["Sushi Omakase Platter", "Yaki Gyoza", "Ebi Tempura Udon"]),
    features: JSON.stringify(["5★ Google Rated", "Premium Sake List", "Event Hosting"]),
  },
  {
    slug: "borivali",
    name: "Sozo Izakaya – Borivali",
    area: "Borivali West",
    zone: "Western Suburbs",
    phone: "+91 88282 70617",
    phoneRaw: "8828270617",
    address: "Shop No. 3, Neon Heights, Kastur Park, Shimpoli, Borivali West, Mumbai, Maharashtra 400092",
    mapUrl: "https://maps.google.com/?q=Sozo+Izakaya+Borivali+West+Mumbai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3!2d72.8567!3d19.2307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzUwLjUiTiA3MsKwNTEnMjQuMiJF!5e0!3m2!1sen!2sin!4v1700000000003",
    lat: 19.2307,
    lng: 72.8567,
    hours: JSON.stringify([
      { days: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
      { days: "Saturday – Sunday", time: "11:00 AM – 11:30 PM" },
    ]),
    image: "/images/yakitori.jpg",
    galleryImages: JSON.stringify([
      "/images/ramen_bowl.jpg",
      "/images/sake.jpg",
      "/images/dining_ambience.jpg",
    ]),
    specialties: JSON.stringify(["Black Truffle Ramen", "Yakitori Omakase", "Premium Sake"]),
    features: JSON.stringify(["Newest Outlet", "Modern Decor", "Takeaway Available"]),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const l of locations) {
    const loc = await prisma.location.upsert({
      where: { slug: l.slug },
      update: l,
      create: l,
    });
    console.log(`Created location with id: ${loc.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
