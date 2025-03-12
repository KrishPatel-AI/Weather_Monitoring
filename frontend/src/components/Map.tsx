"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const districts = {
  Mehsana: [
    [23.6, 72.3],
    [23.7, 72.5],
    [23.5, 72.6],
    [23.4, 72.3],
  ],
  Patan: [
    [23.9, 72.1],
    [24.0, 72.3],
    [23.8, 72.4],
    [23.7, 72.1],
  ],
  Ahmedabad: [
    [23.0, 72.5],
    [23.2, 72.7],
    [22.8, 72.8],
    [22.7, 72.5],
  ],
  Gandhinagar: [
    [23.2, 72.6],
    [23.4, 72.8],
    [23.1, 72.9],
    [23.0, 72.6],
  ],
};

interface MapProps {
  onDistrictClick: (districtName: string) => void;
}

export default function Map({ onDistrictClick }: MapProps) {
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    setMapKey((prev) => prev + 1);
  }, []);

  return (
    <MapContainer
      key={mapKey} 
      center={[23.5, 72.5]}
      zoom={8}
      className="h-[500px] w-full rounded-lg z-0"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {Object.entries(districts).map(([name, coords], index) => (
        <Polygon
          key={index}
          pathOptions={{ color: "blue" }}
          positions={coords}
          eventHandlers={{ click: () => onDistrictClick(name) }}
        />
      ))}
    </MapContainer>
  );
}
