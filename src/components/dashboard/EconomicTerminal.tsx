"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, Calculator, Info } from "lucide-react";

interface EconomicTerminalProps {
  gstBalance: number;
  isEmergency: boolean;
}

export default function EconomicTerminal({ gstBalance, isEmergency }: EconomicTerminalProps) {
  const [roiFleetSize, setRoiFleetSize] = useState(100);
  const [projectedSavings, setProjectedSavings] = useState(0);

  useEffect(() => {
    // Simulated ROI calculation: base savings per vehicle = $250/mo in fraud/admin reduction
    const baseSavings = 250;
    const rigorMultiplier = isEmergency ? 1.5 : 1.0;
    setProjectedSavings(roiFleetSize * baseSavings * rigorMultiplier);
  }, [roiFleetSize, isEmergency]);

  return (
    <div className="space-y-6">
      {/* GST Ledger / Token Growth */}
      <div className="bg-black/40 border border-white/5 rounded-2xl p-6 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-1">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#00FF88] flex items-center gap-2">
              <TrendingUp className="h-3 w-3" /> Ledger Econômico (L1)
            </h3>
            <p className="text-[10px] text-white/30 uppercase font-mono">Emissão de Ativos BaaT em Tempo Real</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-white">{gstBalance.toFixed(4)} <span className="text-[10px] text-[#00FF88]">GST</span></span>
          </div>
        </div>

        {/* Visual Token Graph (Simulated with CSS) */}
        <div className="h-32 flex items-end gap-1 px-2 mb-4 overflow-hidden">
           {Array.from({ length: 40 }).map((_, i) => (
             <motion.div
               key={i}
               initial={{ height: 0 }}
               animate={{ height: `${Math.random() * 60 + 20}%` }}
               transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
               className={`w-full rounded-t-sm ${isEmergency ? 'bg-red-500/40' : 'bg-[#00FF88]/20'}`}
             />
           ))}
        </div>
        <div className="flex justify-between text-[8px] text-white/20 uppercase font-mono tracking-widest px-1">
           <span>00:00h</span>
           <span>Conformidade Nominal</span>
           <span>Live_Sync</span>
        </div>
      </div>

      {/* ROI Simulator for Insurers */}
      <div className="bg-[#00FF88]/5 border border-[#00FF88]/20 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-4 w-4 text-[#00FF88]" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Simulador de ROI (InsurTech)</h3>
        </div>

        <div className="space-y-6">
           <div className="space-y-3">
             <div className="flex justify-between text-[10px] uppercase font-bold text-white/40 tracking-widest">
                <span>Tamanho da Frota</span>
                <span className="text-white">{roiFleetSize} Veículos</span>
             </div>
             <input 
               type="range" 
               min="10" 
               max="1000" 
               step="10"
               value={roiFleetSize}
               onChange={(e) => setRoiFleetSize(parseInt(e.target.value))}
               className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00FF88]"
             />
           </div>

           <div className="p-4 bg-black/40 rounded-xl border border-white/5 space-y-2">
              <span className="text-[9px] uppercase font-bold text-[#00FF88] tracking-[0.2em]">Economia Mensal Projetada</span>
              <div className="text-3xl font-black text-white">
                US$ {projectedSavings.toLocaleString()}
                <span className="text-[10px] text-white/30 ml-2 italic">/ mês</span>
              </div>
              <p className="text-[8px] text-white/20 leading-relaxed uppercase">
                *Cálculo baseado na redução de 90% em auditorias manuais e eliminação de 25% de fraudes inerciais via Protocolo L1.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
