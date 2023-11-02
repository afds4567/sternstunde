import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  creator: string;
  name: string;
  lat: number;
  lng: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = (await import("../../data/place_data.json"))["DATA"];

  return res.status(200).json(data);
}
