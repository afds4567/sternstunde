import { useCallback, useEffect } from "react";

interface MarkerProps {
  map: any;
  placeDatas: any[];
}

interface Place {
  creator: string;
  lat: number;
  lng: number;
}

export default function Markers({ map, placeDatas }: MarkerProps) {
  const loadMarkers = useCallback(() => {
    if (map) {
      placeDatas?.forEach((place: Place) => {
        const OverlayContent = `<div>${place?.["creator"]}</div>`;

        const infowindow = new window.google.maps.InfoWindow({
          content: OverlayContent,
        });

        const markerImage = {
          url: place?.creator ? `/${place?.creator}.png` : `/default.png`,
          size: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(27, 69),
          scaledSize: new window.google.maps.Size(40, 40),
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
          infowindow.open({
            anchor: marker,
            map,
          });
        });

        marker.setMap(map);
      });
    }
  }, [map, placeDatas]);

  useEffect(() => {
    loadMarkers();
  }, [map]);

  return <></>;
}
