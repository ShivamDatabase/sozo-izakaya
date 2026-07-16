// ─────────────────────────────────────────────
//  Sozo Izakaya — Centralized Data Layer
// ─────────────────────────────────────────────

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "desserts" | "coffee" | "bottles & cans" | "small plates" | "sushi";
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "all" | "food" | "interior" | "drinks";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  description: string;
  time: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export interface ChefPick {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

// ── Menu Items ──────────────────────────────
export const menuItems: MenuItem[] = [
  // Desserts
  {
    id: "cookiato",
    name: "Cookiato",
    description: "A love child between a brookie, vanilla ice cream, and espresso shot",
    price: "₹290",
    image: "/images/mochi.jpg",
    category: "desserts",
  },
  {
    id: "japanese-mochi",
    name: "Japanese Mochi",
    description: "Chewy on the outside, creamy on the inside; custard-filled mochi (ask for flavors)",
    price: "₹199",
    image: "/images/mochi.jpg",
    category: "desserts",
  },
  {
    id: "sozo-tres-leches",
    name: "Sozo’s Tres Leches",
    description: "Crispy shokupan toast, hot cocoa milk, crème anglaise, cashew nougat",
    price: "₹199",
    image: "/images/mochi.jpg",
    category: "desserts",
  },
  {
    id: "crispy-honey-noodles",
    name: "Crispy Honey Noodles",
    description: "Caramel, litchi jelly, vanilla ice cream, chocolate sauce",
    price: "₹199",
    image: "/images/mochi.jpg",
    category: "desserts",
  },

  // Coffee
  {
    id: "espresso",
    name: "Espresso",
    description: "",
    price: "Hot: ₹135",
    image: "/images/sake.jpg",
    category: "coffee",
  },
  {
    id: "double-espresso",
    name: "Double Espresso",
    description: "",
    price: "Hot: ₹160",
    image: "/images/sake.jpg",
    category: "coffee",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "",
    price: "Hot: ₹190 | Cold: ₹210",
    image: "/images/sake.jpg",
    category: "coffee",
  },
  {
    id: "latte",
    name: "Latte",
    description: "",
    price: "Hot: ₹190 | Cold: ₹219",
    image: "/images/sake.jpg",
    category: "coffee",
  },
  {
    id: "americano",
    name: "Americano",
    description: "",
    price: "Hot: ₹190 | Cold: ₹210",
    image: "/images/sake.jpg",
    category: "coffee",
  },
  {
    id: "mocha",
    name: "Mocha",
    description: "",
    price: "Hot: ₹210 | Cold: ₹245",
    image: "/images/sake.jpg",
    category: "coffee",
  },
  {
    id: "affogato",
    name: "Affogato",
    description: "",
    price: "Cold: ₹210",
    image: "/images/sake.jpg",
    category: "coffee",
  },

  // Bottles & Cans
  {
    id: "kombucha",
    name: "Kombucha",
    description: "Ask for flavors",
    price: "₹215",
    image: "/images/sake.jpg",
    category: "bottles & cans",
    badge: "Vegan Available",
  },
  {
    id: "aerated-drinks",
    name: "Aerated Drinks",
    description: "",
    price: "₹99",
    image: "/images/sake.jpg",
    category: "bottles & cans",
  },
  {
    id: "packaged-water",
    name: "Packaged Drinking Water",
    description: "",
    price: "₹40",
    image: "/images/sake.jpg",
    category: "bottles & cans",
  },

  // Small Plates
  {
    id: "wasabi-cones",
    name: "Wasabi Cones (6 pcs)",
    description: "Crispy cones, avocado guacamole, cream cheese, salsa, wasabi mayo",
    price: "Ask Server",
    image: "/images/tempura.jpg",
    category: "small plates",
  },
  {
    id: "broccoli-bombs",
    name: "Broccoli Bombs",
    description: "Mashed broccoli cakes, honey sriracha, garlic cream, parmesan shaving",
    price: "Ask Server",
    image: "/images/tempura.jpg",
    category: "small plates",
  },
  {
    id: "crispy-daikon-cake",
    name: "Crispy Daikon Cake",
    description: "Radish cake, crispy garlic chili, citrus wasabi mayo",
    price: "Ask Server",
    image: "/images/tempura.jpg",
    category: "small plates",
  },
  {
    id: "aona-fritters",
    name: "Aona Fritters",
    description: "Crispy fried baby spinach tossed in homemade sweet & spicy sauce",
    price: "Ask Server",
    image: "/images/tempura.jpg",
    category: "small plates",
  },
  {
    id: "corn-dynamite",
    name: "Corn Dynamite",
    description: "Crispy tempura-fried corn with sweet & spicy mayo",
    price: "Ask Server",
    image: "/images/tempura.jpg",
    category: "small plates",
  },
  {
    id: "fuji-chicken-tenders",
    name: "Crispy Fuji Chicken Tenders (4 pcs)",
    description: "Sizzling supremes tossed in Sozo spice served with in-house spicy sauce",
    price: "Ask Server",
    image: "/images/tempura.jpg",
    category: "small plates",
    badge: "Spicy",
  },
  {
    id: "chicken-nanban",
    name: "Chicken Nanban",
    description: "Crispy fried chicken, purple cabbage slaw, garlic mayo",
    price: "Ask Server",
    image: "/images/gyoza.jpg",
    category: "small plates",
  },
  {
    id: "ebi-furai",
    name: "Ebi Furai (4 pcs)",
    description: "Panko-crumbled crispy shrimp with honey sriracha sauce",
    price: "Ask Server",
    image: "/images/tempura.jpg",
    category: "small plates",
  },

  // Sushi
  {
    id: "avocado-maki",
    name: "Avocado Maki",
    description: "Avocado, wasabi mayo, tempura crisps",
    price: "Ask Server",
    image: "/images/sushi_platter.jpg",
    category: "sushi",
  },
  {
    id: "crab-avocado",
    name: "Crab Avocado",
    description: "Crab stick, avocado, wasabi mayo, tempura crisps",
    price: "Ask Server",
    image: "/images/sushi_platter.jpg",
    category: "sushi",
  },
  {
    id: "veg-dynamite",
    name: "Veg Dynamite",
    description: "Avocado, cucumber, cream cheese, rock corn, sriracha mayo",
    price: "Ask Server",
    image: "/images/sushi_platter.jpg",
    category: "sushi",
  },
  {
    id: "shrimp-dynamite",
    name: "Shrimp Dynamite",
    description: "Shrimp, avocado, cucumber, cream cheese, spicy mayo",
    price: "Ask Server",
    image: "/images/sushi_platter.jpg",
    category: "sushi",
  },
];

// ── Chef's Picks ─────────────────────────────
export const chefPicks: ChefPick[] = [
  {
    id: "dragon-roll",
    name: "Dragon Roll Supreme",
    description: "Tempura shrimp inside, avocado & tobiko on top with eel sauce drizzle",
    price: "₹1,100",
    image: "/images/sushi_platter.jpg",
  },
  {
    id: "truffle-ramen",
    name: "Black Truffle Ramen",
    description: "Signature shoyu broth infused with black truffle oil and wagyu chashu",
    price: "₹1,350",
    image: "/images/ramen_bowl.jpg",
  },
  {
    id: "wagyu-kushiyaki",
    name: "A5 Wagyu Kushiyaki",
    description: "Premium wagyu beef skewers, lightly seasoned with yuzu kosho",
    price: "₹2,200",
    image: "/images/yakitori.jpg",
  },
];

// ── Reviews ──────────────────────────────────
export const reviews: Review[] = [
  {
    id: "r1",
    name: "Riya Sharma",
    initials: "RS",
    rating: 5,
    text: "Absolutely divine experience! The sushi omakase was a revelation — each piece perfectly crafted. The ambience transported me straight to Tokyo. Sozo is now my favourite restaurant in Mumbai.",
    date: "2 weeks ago",
  },
  {
    id: "r2",
    name: "Arjun Mehta",
    initials: "AM",
    rating: 5,
    text: "The tonkotsu ramen was absolutely incredible — rich, creamy, perfectly balanced. The yakitori was charred to perfection. A must-visit for any Japanese food lover in Mumbai!",
    date: "1 month ago",
  },
  {
    id: "r3",
    name: "Priya Kulkarni",
    initials: "PK",
    rating: 5,
    text: "We came for our anniversary dinner and were blown away. The staff was incredibly warm, the food was exquisite, and the sake selection is outstanding. Five stars doesn't do it justice!",
    date: "3 weeks ago",
  },
  {
    id: "r4",
    name: "Vikram Nair",
    initials: "VN",
    rating: 5,
    text: "Best izakaya experience I've had outside of Japan. The chef's recommendations were spot on. The Dragon Roll and Wagyu Kushiyaki are must-orders. Highly recommend!",
    date: "5 days ago",
  },
  {
    id: "r5",
    name: "Sneha Reddy",
    initials: "SR",
    rating: 5,
    text: "The interiors are gorgeous — moody, intimate, and authentically Japanese. Food quality is top notch. The mochi dessert is to die for! Will be back with family very soon.",
    date: "2 months ago",
  },
];

// ── Gallery ──────────────────────────────────
export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/sushi_platter.jpg", alt: "Sushi Platter", category: "food" },
  { id: "g2", src: "/images/dining_ambience.jpg", alt: "Dining Ambience", category: "interior" },
  { id: "g3", src: "/images/ramen_bowl.jpg", alt: "Ramen Bowl", category: "food" },
  { id: "g4", src: "/images/yakitori.jpg", alt: "Yakitori Grill", category: "food" },
  { id: "g5", src: "/images/restaurant_interior.jpg", alt: "Restaurant Interior", category: "interior" },
  { id: "g6", src: "/images/sashimi.jpg", alt: "Sashimi Platter", category: "food" },
  { id: "g7", src: "/images/sake.jpg", alt: "Sake Collection", category: "drinks" },
  { id: "g8", src: "/images/tempura.jpg", alt: "Tempura Dish", category: "food" },
  { id: "g9", src: "/images/mochi.jpg", alt: "Mochi Dessert", category: "food" },
];

// ── FAQ ──────────────────────────────────────
export const faqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Do I need a reservation?",
    answer: "While walk-ins are welcome, we highly recommend making a reservation, especially on weekends and holidays. You can reserve online via our website or call us at 9029912000.",
  },
  {
    id: "faq2",
    question: "Is parking available?",
    answer: "Yes, Hubtown Seasons has dedicated parking available for guests. Valet parking is available on weekends. The building is also well-connected by auto-rickshaw and metro from Chembur station.",
  },
  {
    id: "faq3",
    question: "Do you have vegetarian and vegan options?",
    answer: "Absolutely! We have an extensive vegetarian menu featuring vegetable tempura, kappa maki, tofu skewers, edamame, agedashi tofu, and much more. Please inform us of any dietary requirements in advance.",
  },
  {
    id: "faq4",
    question: "Do you offer takeaway and delivery?",
    answer: "Yes! We offer takeaway orders. You can call us directly at 9029912000 to place a takeaway order. We are also available on Swiggy and Zomato for delivery within select areas of Mumbai.",
  },
  {
    id: "faq5",
    question: "Can you host private events and corporate dinners?",
    answer: "Yes, we have a private dining room available for exclusive events, corporate dinners, birthdays, and celebrations. Please contact us at 9029912000 to discuss your requirements and get a customized package.",
  },
  {
    id: "faq6",
    question: "What is your cancellation policy?",
    answer: "We request at least 2 hours' notice for cancellations. For group bookings (6+), 24 hours' notice is required. Late cancellations for private dining may incur a small fee. Please call us and we'll do our best to accommodate.",
  },
];

// ── Events ───────────────────────────────────
export const events: EventItem[] = [
  {
    id: "ev1",
    day: "20",
    month: "Jul",
    title: "Sake Pairing Dinner",
    description: "An exclusive 5-course dinner paired with premium Japanese sake selections guided by our sommelier.",
    time: "🕖 7:00 PM – 10:00 PM · ₹3,500 per person",
  },
  {
    id: "ev2",
    day: "27",
    month: "Jul",
    title: "Sushi Masterclass",
    description: "Learn the art of sushi-making from our executive chef in an intimate hands-on workshop.",
    time: "🕒 3:00 PM – 6:00 PM · ₹2,800 per person",
  },
  {
    id: "ev3",
    day: "05",
    month: "Aug",
    title: "Tokyo Street Food Night",
    description: "Experience Tokyo's izakaya street food culture with live cooking stations and yakitori specials.",
    time: "🕗 7:30 PM – 11:00 PM · ₹1,800 per person",
  },
  {
    id: "ev4",
    day: "15",
    month: "Aug",
    title: "Private Dining & Corporate Events",
    description: "Book our private dining room for exclusive events, corporate lunches, or intimate celebrations.",
    time: "📞 Call 9029912000 for bookings",
  },
];

// ── Features ─────────────────────────────────
export const features: Feature[] = [
  { id: "f1", icon: "🍱", title: "Authentic Japanese Cuisine", description: "Time-honored recipes from the heart of Japan, prepared with traditional techniques." },
  { id: "f2", icon: "🌿", title: "Fresh Ingredients", description: "Premium ingredients sourced daily — fish, produce, and spices of the highest quality." },
  { id: "f3", icon: "⭐", title: "Premium Quality", description: "Michelin-inspired standards in every dish, every time — consistency is our promise." },
  { id: "f4", icon: "🏮", title: "Cozy Ambience", description: "An intimate, warmly lit space inspired by traditional Tokyo izakayas." },
  { id: "f5", icon: "🤝", title: "Friendly Staff", description: "Warm, attentive hospitality that makes every guest feel like family (omotenashi)." },
  { id: "f6", icon: "⚡", title: "Swift Service", description: "Efficient service ensuring your dishes arrive hot, fresh, and beautifully presented." },
  { id: "f7", icon: "✨", title: "Hygienic Kitchen", description: "Impeccable kitchen hygiene with FSSAI-certified food safety standards." },
  { id: "f8", icon: "👨‍👩‍👧", title: "Family Friendly", description: "A welcoming environment for families, couples, and corporate gatherings alike." },
];

// ── Blog Posts ───────────────────────────────
export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    tag: "Culinary Art",
    title: "The Art of Omakase: Trusting the Chef's Vision",
    excerpt: "Omakase is not just a meal — it's a philosophy. Discover how our head chef curates a personalized tasting journey for each guest.",
    date: "July 5, 2025",
    readTime: "4 min read",
    image: "/images/sushi_platter.jpg",
  },
  {
    id: "b2",
    tag: "Sake & Spirits",
    title: "Sake Pairing 101: Elevating Your Japanese Dining Experience",
    excerpt: "From junmai to daiginjo, learn how to pair different sake varieties with sushi, ramen, and yakitori.",
    date: "June 20, 2025",
    readTime: "5 min read",
    image: "/images/sake.jpg",
  },
  {
    id: "b3",
    tag: "Culture",
    title: "Ramen: Japan's Humble Soul Food That Conquered the World",
    excerpt: "Explore the rich history of ramen — from humble street stalls to Michelin-starred bowls — and what makes Sozo's tonkotsu so special.",
    date: "June 10, 2025",
    readTime: "6 min read",
    image: "/images/ramen_bowl.jpg",
  },
];

// ── Stats ─────────────────────────────────────
export const stats = [
  { target: 53, label: "5-Star Reviews" },
  { target: 80, label: "Signature Dishes" },
  { target: 5,  label: "Years of Excellence" },
  { target: 10, label: "Master Chefs" },
];
