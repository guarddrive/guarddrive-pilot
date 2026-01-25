"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, EyeOff, Gavel } from "lucide-react";
import { SEVEWeights } from "@/hooks/useSimulation";

interface SEVEGovernanceProps {
  weights: SEVEWeights;
}

export default function SEVEGovernance({ weights }: SEVEGovernanceProps) {
  return (
    <div className="bg-synth-deep/10 border border-synth-purple/20 p-6 rounded-lg backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Cpu className="h-4 w-4 text-synth-purple animate-pulse" />
      </div>
      
      <h3 className="text-xs font-bold text-synth-purple uppercase tracking-widest mb-6 flex items-center gap-2">
        <div className="w-1 h-3 bg-synth-purple" />
        SEVE_ETHICAL_GOVERNANCE
      </h3>

      <div className="space-y-6">
        <WeightBar 
          label="Privacy Integrity" 
          value={weights.privacy} 
          icon={EyeOff} 
          color="bg-blue-500" 
          glow="shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        />
        <WeightBar 
          label="Safety Constraint" 
          value={weights.safety} 
          icon={ShieldCheck} 
          color="bg-red-500" 
          glow="shadow-[0_0_10px_rgba(239,68,68,0.5)]"
        />
        <WeightBar 
          label="Forensic Probity" 
          value={weights.forensics} 
          icon={Gavel} 
          color="bg-bio-green" 
          glow="shadow-[0_0_10px_rgba(0,255,65,0.5)]"
        />
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 text-[8px] text-muted-foreground font-mono uppercase leading-tight italic">
        * Neural weights dynamically adjusted via DAE Algorithm based on inertial telemetry.
      </div>
    </div>
  );
}

function WeightBar({ label, value, icon: Icon, color, glow }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-[9px] uppercase tracking-tighter">
        <div className="flex items-center gap-2 text-white/70">
          <Icon className="h-3 w-3 opacity-50" />
          {label}
        </div>
        <span className="font-bold text-white">{(value * 100).toFixed(0)}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value * 100}%` }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className={`${color} h-full ${glow}`}
        />
      </div>
    </div>
  );
}
