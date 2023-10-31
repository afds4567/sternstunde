import Script from "next/script";
import { useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function Home() {
  const mapRef = useRef<HTMLDivElement>(null);

  const loadGoogleMap = () => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
  };

  return (
    <>
      <Script
        id="google-maps"
        strategy="afterInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_CLIENT}&callback=console.debug`}
        onReady={loadGoogleMap}
      />
      <div ref={mapRef} className="w-full h-[calc(100vh-64px)]"></div>
    </>
  );
}
