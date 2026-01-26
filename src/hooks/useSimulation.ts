"use client";

import { useState, useEffect, useCallback } from "react";

export interface SEVEWeights {
  privacy: number;
  safety: number;
  forensics: number;
}

export interface ESGMetrics {
  gstBalance: number;
  carbonOffset: number;
  safeDrivingBonus: number;
}

export interface TelemetryData {
  speed: number;
  gForce: number;
  lat: number;
  lng: number;
  jammerStatus: "CLEAN" | "DETECTED";
  timestamp: string;
  signature: string;
  seveWeights: SEVEWeights;
  esgMetrics: ESGMetrics;
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
    seveWeights: { privacy: 0.9, safety: 0.7, forensics: 0.5 },
    esgMetrics: { gstBalance: 120.5, carbonOffset: 2.5, safeDrivingBonus: 0.15 },
  });

  const [isRunning, setIsRunning] = useState(true);
  const [validationState, setValidationState] = useState<"IDLE" | "AUDITING" | "VERIFIED" | "NON_COMPLIANT">("IDLE");

  const generateData = useCallback(() => {
    setData((prev) => {
      const newSpeed = Math.max(0, Math.min(120, prev.speed + (Math.random() * 10 - 5)));
      const crashRisk = Math.random() > 0.98;
      const gForce = crashRisk ? 8.5 : Math.random() * 0.5 + 0.1;
      
      // Dynamic SEVE adjustment
      const isEmergency = gForce > 5.0;
      const newWeights = isEmergency 
        ? { privacy: 0.5, safety: 1.0, forensics: 0.9 }
        : { privacy: 0.9, safety: 0.7, forensics: 0.5 };

      // Update ESG metrics simulation
      const newEsg = {
        gstBalance: prev.esgMetrics.gstBalance + (isRunning ? 0.01 : 0),
        carbonOffset: prev.esgMetrics.carbonOffset + (isRunning ? 0.001 : 0),
        safeDrivingBonus: newSpeed < 80 ? 0.20 : 0.10,
      };

      // Reset validation on movement if verified
      if (validationState !== "IDLE" && !isEmergency) setValidationState("IDLE");

      return {
        speed: parseFloat(newSpeed.toFixed(2)),
        gForce: parseFloat(gForce.toFixed(2)),
        lat: prev.lat + (Math.random() * 0.0001 - 0.00005),
        lng: prev.lng + (Math.random() * 0.0001 - 0.00005),
        jammerStatus: Math.random() > 0.95 ? "DETECTED" : "CLEAN",
        timestamp: new Date().toISOString(),
        signature: `CORE-L1-SIG-${Math.random().toString(36).substring(7).toUpperCase()}`,
        seveWeights: newWeights,
        esgMetrics: newEsg,
      };
    });
  }, [validationState, isRunning]);

  const validateEvent = async () => {
    setValidationState("AUDITING");
    // Conexão com Validador de Camada 1/3 (Latência Simulada)
    setTimeout(() => {
      const isCompliant = data.gForce < 8.0; 
      setValidationState(isCompliant ? "VERIFIED" : "NON_COMPLIANT");
    }, 2000);
  };

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(generateData, 1000);
    return () => clearInterval(interval);
  }, [isRunning, generateData]);

  return { data, setRunning: setIsRunning, isRunning, validationState, validateEvent };
}
