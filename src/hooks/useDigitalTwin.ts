"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TelemetryData, SEVEWeights, ESGMetrics } from "./useSimulation";

// Base coordinates for Salvador, BA (Living Lab)
const SALVADOR_CENTER = { lat: -12.9714, lng: -38.5014 };

export interface DigitalTwinState extends TelemetryData {
  velocity_vector: { x: number; y: number };
  acceleration: number;
}

export function useDigitalTwin() {
  const [data, setData] = useState<DigitalTwinState>({
    speed: 0,
    gForce: 0.1,
    lat: SALVADOR_CENTER.lat,
    lng: SALVADOR_CENTER.lng,
    jammerStatus: "CLEAN",
    timestamp: new Date().toISOString(),
    signature: "TWIN_SYNC_ACTIVE",
    seveWeights: { privacy: 0.9, safety: 0.7, forensics: 0.5 },
    esgMetrics: { gstBalance: 120.5, carbonOffset: 2.5, safeDrivingBonus: 0.15 },
    velocity_vector: { x: 0.00001, y: 0 },
    acceleration: 0,
  });

  const [isRunning, setIsRunning] = useState(true);
  const [isEmergency, setIsEmergency] = useState(false);
  const frameRef = useRef<number>(0);

  const physicsStep = useCallback(() => {
    setData((prev) => {
      // 1. Calculate Acceleration & Speed
      let targetAccel = isEmergency ? (Math.random() * 5 + 5) : (Math.random() * 0.5 - 0.25);
      const newSpeed = Math.max(0, Math.min(110, prev.speed + targetAccel));
      
      // 2. Geospatial Movement (Degrees per step)
      // Moving along a simplified orbital path around Salvador center for visual flow
      const angle = (frameRef.current * 0.01) % (2 * Math.PI);
      const radius = 0.005; // ~500m radius
      
      const newLat = SALVADOR_CENTER.lat + Math.cos(angle) * radius;
      const newLng = SALVADOR_CENTER.lng + Math.sin(angle) * radius;

      // 3. Inertial Force Modeling (G-Force)
      // G = sqrt(ax^2 + ay^2) / 9.81
      const gForce = isEmergency ? 8.42 : (Math.abs(targetAccel) / 2) + 0.1 + (Math.random() * 0.1);

      // 4. SEVE Dynamic Weighting (The Engine)
      const newWeights: SEVEWeights = isEmergency 
        ? { privacy: 0.3, safety: 1.0, forensics: 0.95 }
        : { privacy: 0.9, safety: 0.6, forensics: 0.4 };

      // 5. ESG Accumulation
      const newEsg: ESGMetrics = {
        gstBalance: prev.esgMetrics.gstBalance + (newSpeed > 0 ? 0.001 : 0),
        carbonOffset: prev.esgMetrics.carbonOffset + (newSpeed < 60 ? 0.0001 : 0),
        safeDrivingBonus: newSpeed < 80 ? 0.25 : 0.10,
      };

      frameRef.current += 1;

      return {
        ...prev,
        speed: newSpeed,
        gForce: parseFloat(gForce.toFixed(2)),
        lat: newLat,
        lng: newLng,
        timestamp: new Date().toISOString(),
        signature: `SYMBEON-TWIN-${Math.random().toString(36).substring(7).toUpperCase()}`,
        seveWeights: newWeights,
        esgMetrics: newEsg,
        velocity_vector: { x: targetAccel, y: 0 },
        acceleration: targetAccel
      };
    });

    if (isEmergency) {
      setTimeout(() => setIsEmergency(false), 2000); // Reset emergency after 2s
    }
  }, [isEmergency]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(physicsStep, 500); // 2Hz updates for smoother map motion
    return () => clearInterval(interval);
  }, [isRunning, physicsStep]);

  const triggerCollision = () => {
    setIsEmergency(true);
  };

  return { 
    data, 
    isRunning, 
    setIsRunning, 
    triggerCollision,
    isEmergency 
  };
}
