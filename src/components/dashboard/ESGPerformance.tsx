"use client";

import { motion } from "framer-motion";
import { Leaf, Award, TrendingUp, Wallet } from "lucide-react";
import { ESGMetrics } from "@/hooks/useSimulation";

interface ESGPerformanceProps {
  metrics: ESGMetrics;
}

export default function ESGPerformance({ metrics }: ESGPerformanceProps) {
  return (
    <div className="bg-bio-green/5 border border-bio-green/20 p-6 rounded-lg backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Leaf className="h-4 w-4 text-bio-green" />
      </div>

      <h3 className="text-xs font-bold text-bio-green uppercase tracking-widest mb-6 flex items-center gap-2">
        <div className="w-1 h-3 bg-bio-green" />
        ESG_PERFORMANCE_METRICS
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <MetricCard 
          label="GST Token Balance" 
          value={metrics.gstBalance.toFixed(2)} 
          suffix="GST" 
          icon={Wallet} 
        />
        <MetricCard 
          label="Carbon Offset" 
          value={metrics.carbonOffset.toFixed(3)} 
          suffix="KG" 
          icon={Leaf} 
        />
        <MetricCard 
          label="Driving Bonus" 
          value={(metrics.safeDrivingBonus * 100).toFixed(0)} 
          suffix="%" 
          icon={Award} 
        />
        <MetricCard 
          label="Efficiency Index" 
          value="0.94" 
          suffix="" 
          icon={TrendingUp} 
        />
      </div>

      <div className="mt-6 pt-4 border-t border-bio-green/10 flex justify-between items-center text-[9px] uppercase tracking-tighter">
        <span className="text-bio-green/60">Sustainability Status: EXEMPLARY</span>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-bio-green/20 px-2 py-0.5 rounded border border-bio-green/30 text-bio-green"
        >
          TIER_GOLD
        </motion.div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, suffix, icon: Icon }: any) {
  return (
    <div className="bg-black/20 border border-white/5 p-3 rounded group hover:border-bio-green/30 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-3 w-3 text-bio-green/50" />
        <span className="text-[8px] text-muted-foreground uppercase">{label}</span>
      </div>
      <div className="text-lg font-bold text-white tabular-nums flex items-baseline gap-1">
        {value}
        <span className="text-[10px] text-bio-green font-normal">{suffix}</span>
      </div>
    </div>
  );
}
