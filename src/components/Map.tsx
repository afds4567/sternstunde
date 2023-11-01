import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
}

export default function Map({ setMap }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  const loadMap = () => {
    if (!window.google || !window.google.maps) return;
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.397, lng: 127.644 },
      zoom: 8,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
    setMap(map);
  };

  useEffect(() => {
    loadMap();
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full"
      style={{ height: "calc(100vh - 64px)" }}
    ></div>
  );
}
