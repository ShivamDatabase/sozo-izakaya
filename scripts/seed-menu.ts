import { PrismaClient } from "@prisma/client";
import { menuItems } from "../lib/data";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding menu items...");
  
  // Clear existing items
  await prisma.menuItem.deleteMany();
  
  // Insert new items
  for (const item of menuItems) {
    await prisma.menuItem.create({
      data: {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
        category: item.category,
        badge: item.badge || null,
      },
    });
  }
  
  console.log(`Successfully seeded ${menuItems.length} menu items!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
