"use client";

import { useSimulation } from "@/hooks/useSimulation";
import { cn } from "@/lib/utils";
import { Activity, Shield, AlertTriangle, MapPin, Zap, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PilotDashboard() {
  const { data, isRunning, setRunning } = useSimulation();

  return (
    <div className="min-h-screen bg-void text-foreground p-8 font-mono matrix-grid">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-bio-green/20 pb-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="text-bio-green h-6 w-6" />
            GUARDDRIVE / FORENSIC VIEW
          </h1>
          <p className="text-xs text-muted-foreground tracking-[0.2em]">NODE-BA-SSA-01 // SYMBEON PROTOCOL</p>
        </div>
        <div className="flex items-center gap-4">
           <Link 
             href="/docs"
             className="text-[10px] text-bio-green/60 hover:text-bio-green transition-colors border-b border-bio-green/20"
           >
             [ VIEW KNOWLEDGE BASE ]
           </Link>
           <div className={cn(
             "px-4 py-1 rounded-full border text-[10px] animate-pulse",
             data.jammerStatus === "CLEAN" ? "border-bio-green text-bio-green" : "border-red-500 text-red-500 bg-red-500/10"
           )}>
             {data.jammerStatus === "CLEAN" ? "SIG-STEALTH: HIGH" : "JAMMER DETECTED"}
           </div>
           <button 
             onClick={() => setRunning(!isRunning)}
             className="bg-bio-green/10 border border-bio-green/30 px-4 py-1 text-xs hover:bg-bio-green/20 transition-colors"
           >
             {isRunning ? "[ STOP SIMULATION ]" : "[ START SIMULATION ]"}
           </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Real-time Metrics */}
        <div className="col-span-12 md:col-span-4 space-y-6">
           {/* Speed Card */}
           <div className="bg-bio-dark/20 border border-bio-green/30 p-6 rounded-lg relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bio-green to-transparent opacity-50" />
             <div className="flex justify-between items-start mb-4">
               <span className="text-[10px] text-bio-green/50">VINT (VELOCITY)</span>
               <Activity className="h-4 w-4 text-bio-green/50" />
             </div>
             <div className="text-6xl font-bold text-bio-green flex items-baseline gap-2">
               {data.speed.toFixed(0)}
               <span className="text-xl text-bio-green/50">KM/H</span>
             </div>
           </div>

           {/* G-Force Card */}
           <div className={cn(
             "border p-6 rounded-lg transition-all duration-300",
             data.gForce > 5 ? "bg-red-500/20 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]" : "bg-synth-deep/20 border-synth-purple/30"
           )}>
             <div className="flex justify-between items-start mb-4">
               <span className="text-[10px] text-synth-purple/50">G-FORCE INERTIAL</span>
               {data.gForce > 5 && <AlertTriangle className="h-4 w-4 text-red-500 animate-bounce" />}
             </div>
             <div className="text-4xl font-bold text-white">
               {data.gForce.toFixed(2)} G
             </div>
             <div className="mt-2 text-[10px] text-muted-foreground uppercase">
               Impact Threshold: 8.0G
             </div>
           </div>

           {/* GPS Status */}
           <div className="bg-card border border-border p-6 rounded-lg">
             <div className="flex items-center gap-2 mb-4 text-[10px] text-muted-foreground">
               <MapPin className="h-3 w-3" /> COORDINATES
             </div>
             <div className="text-xs space-y-1">
               <div className="flex justify-between border-b border-border py-1">
                 <span>LAT</span><span className="text-bio-green">{data.lat.toFixed(6)}</span>
               </div>
               <div className="flex justify-between border-b border-border py-1">
                 <span>LNG</span><span className="text-bio-green">{data.lng.toFixed(6)}</span>
               </div>
             </div>
           </div>
        </div>

        {/* Evidence Log & Visualizer */}
        <div className="col-span-12 md:col-span-8 flex flex-col h-full bg-void/50 border border-bio-green/20 rounded-lg p-6">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-sm font-bold flex items-center gap-2">
               <Lock className="h-3 w-3" /> CRYPTOGRAPHIC EVIDENCE STREAM
             </h2>
             <span className="text-[10px] text-bio-green">AES-256 / UNBREAKABLE</span>
           </div>

           <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void z-10 pointer-events-none" />
              <div className="space-y-3 font-mono text-[11px]">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={data.timestamp}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="grid grid-cols-6 gap-2 border-l-2 border-bio-green pl-4 py-2 bg-bio-green/5"
                    >
                      <div className="col-span-1 text-bio-green/50">[{data.timestamp.split('T')[1].split('.')[0]}]</div>
                      <div className="col-span-2 text-white">EVENT_ID: {data.signature.split('-')[2]}</div>
                      <div className="col-span-3 text-bio-green truncate">SIGNATURE: {data.signature}</div>
                    </motion.div>
                    {/* Simulated historical items could go here */}
                  </AnimatePresence>
                  {/* Fill empty space with tech text */}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="text-[9px] text-muted-foreground/20 italic">
                      SYSTEM_PROC_REF_0x{Math.random().toString(16).substring(2,6).toUpperCase()} // DATA_VERIFIED_BY_SYMBEON
                    </div>
                  ))}
              </div>
           </div>

           <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
             <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-bio-green" />
                  <span className="text-[9px] text-muted-foreground uppercase">Edge Sync: 12ms</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 text-bio-green" />
                  <span className="text-[9px] text-muted-foreground uppercase">NFT Verified</span>
                </div>
             </div>
             <div className="text-[10px] text-bio-green bg-bio-green/10 px-2 py-1 rounded">
               SOVEREIGN_MODE: ACTIVE
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
