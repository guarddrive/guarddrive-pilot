"use client";

import { useState, useEffect, useCallback } from "react";

export interface TelemetryData {
  speed: number;
  gForce: number;
  lat: number;
  lng: number;
  jammerStatus: "CLEAN" | "DETECTED";
  timestamp: string;
  signature: string;
}

export function useSimulation() {
  const [data, setData] = useState<TelemetryData>({
    speed: 0,
    gForce: 0.1,
    lat: -12.9714,
    lng: -38.5014,
    jammerStatus: "CLEAN",
    timestamp: new Date().toISOString(),
    signature: "INITIALIZING...",
  });

  const [isRunning, setIsRunning] = useState(true);

  const generateData = useCallback(() => {
    setData((prev) => {
      const newSpeed = Math.max(0, Math.min(120, prev.speed + (Math.random() * 10 - 5)));
      const crashRisk = Math.random() > 0.98;
      const gForce = crashRisk ? 8.5 : Math.random() * 0.5 + 0.1;
      
      return {
        speed: parseFloat(newSpeed.toFixed(2)),
        gForce: parseFloat(gForce.toFixed(2)),
        lat: prev.lat + (Math.random() * 0.0001 - 0.00005),
        lng: prev.lng + (Math.random() * 0.0001 - 0.00005),
        jammerStatus: Math.random() > 0.95 ? "DETECTED" : "CLEAN",
        timestamp: new Date().toISOString(),
        signature: `TRINITY-SIG-${Math.random().toString(36).substring(7).toUpperCase()}`,
      };
    });
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(generateData, 1000);
    return () => clearInterval(interval);
  }, [isRunning, generateData]);

  return { data, setRunning: setIsRunning, isRunning };
}
