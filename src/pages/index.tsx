import { useState } from "react";
import Markers from "@/components/Markers";
import Map from "@/components/Map";
import PlaceDescription from "@/components/PlaceDescription";

declare global {
  interface Window {
    google: any;
  }
}

export default function Home({ placeDatas }: any) {
  const [map, setMap] = useState(null);
  const [currentPlace, setCurrentPlace] = useState(null);
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

export async function getServerSideProps() {
  const placeDatas = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/places`
  ).then((res) => res.json());
  return {
    props: {
      placeDatas,
    },
  };
}
