import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

interface MarkerProps {
  map: any;
  placeDatas: any[];
  setCurrentPlace: Dispatch<SetStateAction<any>>;
}

interface Place {
  creator: string;
  lat: number;
  lng: number;
}

export default function Markers({
  map,
  placeDatas,
  setCurrentPlace,
}: MarkerProps) {
  const loadMarkers = useCallback(() => {
    if (map) {
      placeDatas?.forEach((place: Place) => {
        const OverlayContent = `<div>${place?.["creator"]}</div>`;

        const infowindow = new window.google.maps.InfoWindow({
          content: OverlayContent,
        });

        const markerImage = {
          url: place?.creator ? `/${place?.creator}.png` : `/default.png`,
          size: new window.google.maps.Size(30, 30),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(0, 0),
          scaledSize: new window.google.maps.Size(30, 30),
          title: place?.creator,
        };

        const markerPosition = new window.google.maps.LatLng(
          place?.["lat"],
          place?.["lng"]
        );
        const marker = new window.google.maps.Marker({
          position: markerPosition,
          icon: markerImage,
        });

        marker.addListener("click", () => {
          setCurrentPlace(place);
        });

        marker.setMap(map);
      });
    }
  }, [map, placeDatas, setCurrentPlace]);

  useEffect(() => {
    loadMarkers();
  }, [map]);

  return <></>;
}
