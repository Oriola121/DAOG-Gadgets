// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    description: "Self-Development Tool",
    name: "Laptop",
    price: 25000,
    imageUrl: "/uploads/laptop-4.png",
  },
  {
    description: "Personal Growth App",
    name: "Laptop",
    price: 350000,
    imageUrl: "/uploads/laptop-4.png",
  },
  {
    description: "Digital Wellness Tracker",
    name: "Laptop",
    price: 300000,
    imageUrl: "/uploads/laptop-4.png",
  },
  {
    description: "Meditation Assistant",
    name: "Laptop",
    price: 20,
    imageUrl: "/uploads/laptop-4.png",
  },
  {
    description: "Productivity Suite",
    name: "Laptop",
    price: 450000,
    imageUrl: "/uploads/laptop-4.png",
  },
  {
    description: "Learning Platform",
    name: "Laptop",
    price: 500000,
    imageUrl: "/uploads/laptop-4.png",
  },
  {
    description: "Focus Timer",
    name: "Laptop",
    price: 150000,
    imageUrl: "/uploads/laptop-4.png",
  },
  {
    description: "Goal Tracker",
    name: "Laptop",
    price: 280000,
    imageUrl: "/uploads/laptop-4.png",
  },
  // Add more diverse products...
];

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
