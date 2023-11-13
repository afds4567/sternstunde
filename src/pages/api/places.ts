import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  id: number;
  creator: string | null;
  name: string | null;
  address?: string | null;
  lat: string | null;
  lng: string | null;
  category?: string | null;
  description?: string | null;
  imgURL?: string | null;
}

interface Error {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | Error>
) {
  try {
    const prisma = new PrismaClient();
    const places = await prisma.place.findMany();
    return res.status(200).json(places);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
}
