import { useState } from "react";
import * as places from "@/data/place_data.json";
import Markers from "@/component/Markers";
import Map from "@/component/Map";

declare global {
  interface Window {
    google: any;
  }
}

export default function Home() {
  const [map, setMap] = useState(null);
  const placeDatas = places?.["DATA"];

  return (
    <>
      <Map setMap={setMap} />
      <Markers map={map} placeDatas={placeDatas} />
    </>
  );
}
