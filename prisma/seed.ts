import { PrismaClient } from "@prisma/client";
import * as data from "../src/data/place_data.json";

const prisma = new PrismaClient();

async function seedData() {
  data?.["DATA"]?.forEach(async (place) => {
    await prisma.place.create({
      data: {
        creator: place.creator,
        name: place.name,
        lat: place.lat,
        lng: place.lng,
        category: place.category,
        description: place.description,
        imgURL: place.imgURL,
      },
    });
  });
}

async function main() {
  await seedData();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
