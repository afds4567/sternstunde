import { useState } from "react";
import * as places from "@/data/place_data.json";
import Markers from "@/components/Markers";
import Map from "@/components/Map";
import PlaceDescription from "@/components/PlaceDescription";

declare global {
  interface Window {
    google: any;
  }
}

export default function Home() {
  const [map, setMap] = useState(null);
  const placeDatas = places.DATA;
  const [currentPlace, setCurrentPlace] = useState(null);
  console.log(map, "MAPHOME");
  return (
    <>
      <Map setMap={setMap} />
      <Markers
        map={map}
        placeDatas={placeDatas}
        setCurrentPlace={setCurrentPlace}
      />
      <PlaceDescription place={currentPlace} setPlace={setCurrentPlace} />
    </>
  );
}
