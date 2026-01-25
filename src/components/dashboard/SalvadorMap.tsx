"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Fix static marker icon issue in Leaflet + Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface SalvadorMapProps {
  vehiclePos: [number, number];
  isEmergency: boolean;
}

export default function SalvadorMap({ vehiclePos, isEmergency }: SalvadorMapProps) {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) return <div className="w-full h-full bg-void animate-pulse" />;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border border-white/10 relative">
      <MapContainer
        center={[-12.9714, -38.5014]}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-full bg-void grayscale invert hue-rotate-180 brightness-50"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={vehiclePos} icon={customIcon}>
          <Popup>
            <div className="font-mono text-[10px] uppercase">
              <p className="font-bold text-bio-green">Vehicle Node: SSA-01</p>
              <p>Status: {isEmergency ? "EMERGENCY" : "NOMINAL"}</p>
            </div>
          </Popup>
        </Marker>

        <MapUpdater center={vehiclePos} />
      </MapContainer>

      {/* Map Overlay: Living Lab Identity */}
      <div className="absolute top-4 left-4 z-[1000] bg-void/80 border border-bio-green/30 px-3 py-1 rounded backdrop-blur-md">
        <span className="text-[10px] text-bio-green font-mono font-bold tracking-widest uppercase flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-bio-green rounded-full animate-ping" />
          Living Lab: Salvador, BA (Virtual Twin)
        </span>
      </div>
    </div>
  );
}

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom(), { animate: true });
  }, [center, map]);
  return null;
}
