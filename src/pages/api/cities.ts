import type { NextApiRequest, NextApiResponse } from "next";

export interface CityData {
  city: string;
  city_ascii: string;
  lat: number;
  lng: number;
  country: string;
  iso2: string;
  iso3: string;
  admin_name: string;
  capital: string;
  population: number;
  id: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CityData[]>
) {
  const data = (await import("../../data/city_data.json"))["DATA"];

  return res.status(200).json(data);
}
