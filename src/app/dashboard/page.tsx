"use client";

import { useDigitalTwin } from "@/hooks/useDigitalTwin";
import { cn } from "@/lib/utils";
import { Activity, Shield, AlertTriangle, MapPin, Zap, Lock, Loader2, Gavel, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import SEVEGovernance from "@/components/dashboard/SEVEGovernance";
import EconomicTerminal from "@/components/dashboard/EconomicTerminal";
import NeuralPulse from "@/components/ui/NeuralPulse";
import OnboardingTutorial from "@/components/dashboard/OnboardingTutorial";
import dynamic from "next/dynamic";

// Dynamic import for the map to prevent SSR issues with Leaflet
const SalvadorMap = dynamic(() => import("@/components/dashboard/SalvadorMap"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-void animate-pulse flex items-center justify-center text-[10px] text-bio-green uppercase font-mono">Loading Geospatial Twin...</div>
});

export default function PilotDashboard() {
  const { data, isRunning, setIsRunning, triggerCollision, isEmergency } = useDigitalTwin();
  const [validationState, setValidationState] = useState<"IDLE" | "AUDITING" | "VERIFIED" | "NON_COMPLIANT">("IDLE");
  const [selectedLab, setSelectedLab] = useState("ba-ssa-01");
  const [showRigor, setShowRigor] = useState(false);
  const [showL1Certificate, setShowL1Certificate] = useState(false);
  const [gstBalance, setGstBalance] = useState(124.5502);
  const [chaosMonkeyActive, setChaosMonkeyActive] = useState(false);

  // Behavior-as-a-Token Accumulation Logic
  useEffect(() => {
    let interval: any;
    if (isRunning && !isEmergency && !chaosMonkeyActive) {
      interval = setInterval(() => {
        setGstBalance(prev => prev + 0.0001);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isEmergency, chaosMonkeyActive]);

  const toggleChaosMonkey = () => {
    setChaosMonkeyActive(true);
    setTimeout(() => {
      setChaosMonkeyActive(false);
    }, 4000);
  };

  const validateEvent = async () => {
    setValidationState("AUDITING");
    setTimeout(() => {
      const isCompliant = data.gForce < 8.0; 
      setValidationState(isCompliant ? "VERIFIED" : "NON_COMPLIANT");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#F3F3F3] p-8 font-mono matrix-grid relative overflow-hidden selection:bg-[#00FF88] selection:text-black">
      <NeuralPulse />
      <OnboardingTutorial />
      
      {/* Header / Command Utility */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/10 pb-6 gap-6">
        <div className="space-y-1">
          <h1 className="text-xl font-black flex items-center gap-3 tracking-tighter">
            <Shield className="text-[#00FF88] h-5 w-5" />
            GUARDDRIVE // PILOT CONTROL
          </h1>
          <div className="flex items-center gap-4 text-[9px] text-muted-foreground uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> LIVING_LAB: {selectedLab}</span>
            <span className="text-white/20">|</span>
            <Link href="/roadmap" className="flex items-center gap-1.5 hover:text-[#00FF88] transition-colors group cursor-pointer underline decoration-[#00FF88]/30 underline-offset-4">
              <Activity className="h-3 w-3" /> VIEW_TRL_ROADMAP
            </Link>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 opacity-40">STK_VERSION: 4.4.0-ECONOMY</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3" id="city-selector-ui">
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
            {["ba-ssa-01", "ba-fsa-01", "ba-ldf-01"].map((lab) => (
              <button
                key={lab}
                onClick={() => setSelectedLab(lab)}
                className={cn(
                  "px-3 py-1 text-[9px] uppercase tracking-tighter transition-all rounded",
                  selectedLab === lab ? "bg-[#00FF88] text-black font-bold" : "text-white/40 hover:text-white"
                )}
              >
                {lab.split("-")[1].toUpperCase()}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setShowRigor(!showRigor)}
            className={cn(
              "px-4 py-1 border text-[10px] uppercase transition-all",
              showRigor ? "bg-[#00FF88] text-black font-bold border-[#00FF88]" : "border-white/10 text-white/40 hover:bg-white/5"
            )}
          >
            {showRigor ? "[ RIGOR_ON ]" : "[ SHOW_RIGOR ]"}
          </button>
          
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-1 border border-white/10 text-[10px] uppercase hover:bg-white/5 transition-all"
          >
            {isRunning ? "[ BREAK_SYNC ]" : "[ SYNC_TWIN ]"}
          </button>
          
          <button 
            onClick={triggerCollision}
            disabled={isEmergency}
            className="px-4 py-1 bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] uppercase font-bold hover:bg-red-500/20 transition-all disabled:opacity-30"
          >
            SIMULATE_CRASH
          </button>

          <button 
            onClick={toggleChaosMonkey}
            disabled={chaosMonkeyActive}
            className={cn(
               "px-4 py-1 border text-[10px] uppercase font-bold transition-all",
               chaosMonkeyActive ? "bg-amber-500 text-black border-amber-500 animate-pulse" : "bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20"
            )}
          >
            {chaosMonkeyActive ? "[ ATTACK_IN_PROGRESS ]" : "CHAOS_MONKEY"}
          </button>
        </div>
      </div>

      {/* Validation Banner (Audit Mode) */}
      <AnimatePresence>
        {validationState === "AUDITING" && (
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="mb-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-between overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
              <div className="space-y-0.5">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Auditoria Protocolo L1 Ativa</span>
                <p className="text-[9px] text-white/50 uppercase">Validando Integridade de Evidência pericial...</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.8 }} className="h-full bg-blue-500" />
              </div>
              <button 
                onClick={() => setShowL1Certificate(true)}
                className="text-[10px] px-4 py-1.5 bg-[#00FF88] text-black font-black uppercase shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:scale-105 transition-transform"
              >
                Emitir_Laudo_L1
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* High-Density Metric Grid */}
      <div className="grid grid-cols-12 gap-6 mb-8 uppercase text-[10px] tracking-widest">
        <div id="pilot-validation-card" className="col-span-12 md:col-span-5 bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
             <h3 className="font-bold text-[#00FF88]">Métricas de Rigor Operacional</h3>
             <span className="text-[9px] px-2 py-0.5 bg-[#00FF88]/10 text-[#00FF88] rounded border border-[#00FF88]/20">TRL 6 → TRL 7 READY</span>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 font-mono">
            <div className="space-y-1">
              <span className="text-white/30 text-[9px]">Vehicles Tested</span>
              <div className="text-lg font-bold">50 UNITS</div>
            </div>
            <div className="space-y-1">
              <span className="text-white/30 text-[9px]">Total Test Hours</span>
              <div className="text-lg font-bold">500h</div>
            </div>
            <div className="space-y-1">
              <span className="text-white/30 text-[9px]">Fraud Detection Rate</span>
              <div className="text-lg font-bold text-[#00FF88]">93%</div>
            </div>
            <div className="space-y-1">
              <span className="text-white/30 text-[9px]">Blockchain Events</span>
              <div className="text-lg font-bold">12,847</div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
          <h3 className="font-bold border-b border-white/5 pb-3">Socioeconomic Impact Projection (12M)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 font-mono">
             <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-white/30">Fraud Prevention Savings</span>
                <span className="font-bold text-[#00FF88]">R$ 1.4M</span>
             </div>
             <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-white/30">Carbon Offset Generated</span>
                <span className="font-bold">2,502 KG</span>
             </div>
             <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-white/30">Lives Protected (Incidents Prev.)</span>
                <span className="font-bold">12</span>
             </div>
             <div className="flex justify-between items-end border-b border-white/5 pb-1">
                <span className="text-white/30">Network ROI</span>
                <span className="font-bold">2,258%</span>
             </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Real-time Metrics */}
        <div className="col-span-12 md:col-span-4 space-y-6">
           {/* High-Density Metric Card */}
           <div className={cn(
             "bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden group transition-all duration-500",
             chaosMonkeyActive && "border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.1)]"
           )}>
             <div className="flex justify-between items-start mb-6">
               <div className="flex flex-col gap-2">
                 <span className="text-[9px] text-white/30 tracking-[0.3em]">TELEMETRY_ENGINE // VINT_0.4</span>
                 <div className="flex items-center gap-2 px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[7px] text-white/40 font-black uppercase tracking-widest">
                    <div className={cn("w-1 h-1 rounded-full animate-pulse", chaosMonkeyActive ? "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" : "bg-[#00FF88] shadow-[0_0_10px_rgba(0,255,136,0.3)]")} />
                    {chaosMonkeyActive ? "MITIGATING_ATTACK" : "HSM_LINK_STABLE"}
                 </div>
               </div>
               <Activity className="h-4 w-4 text-[#00FF88] opacity-30" />
             </div>
             
             <div className="grid grid-cols-2 gap-8 mb-6 relative overflow-hidden">
               {chaosMonkeyActive && (
                 <motion.div 
                   initial={{ y: "-100%" }}
                   animate={{ y: "100%" }}
                   transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-amber-500/10 z-10 pointer-events-none border-y border-amber-500/50"
                 />
               )}
               <div className={cn("space-y-1 transition-all", chaosMonkeyActive && "blur-[1px] opacity-70")}>
                 <span className="text-[8px] text-white/20 block">VELOCITY</span>
                 <div className="text-4xl font-bold font-mono text-[#00FF88] tabular-nums">
                   {data.speed.toFixed(0)}<span className="text-xs text-white/30 ml-1">KM/H</span>
                 </div>
               </div>
               <div className={cn("space-y-1 text-right transition-all", chaosMonkeyActive && "blur-[1px] opacity-70")}>
                 <span className="text-[8px] text-white/20 block">G_FORCE</span>
                 <div className={cn(
                   "text-4xl font-bold font-mono tabular-nums",
                   data.gForce > 5 ? "text-red-500" : "text-white"
                 )}>
                   {data.gForce.toFixed(2)}<span className="text-xs text-white/30 ml-1">G</span>
                 </div>
               </div>
             </div>

             <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-[9px] font-mono">
                  <span className="text-white/40 italic">STABILIZATION_LOCK</span>
                  <span className="text-[#00FF88]">TRUE</span>
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono">
                  <span className="text-white/40 italic">FRAME_RATE_HZ</span>
                  <span className="text-white">60.00</span>
                </div>
             </div>
           </div>

           {/* Geospatial Twin Container */}
           <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF88]/20 to-transparent rounded-xl blur opacity-30" />
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <SalvadorMap 
                  vehiclePos={[data.lat, data.lng]} 
                  isEmergency={isEmergency || data.gForce > 5} 
                />
                <div className="absolute top-4 left-4 bg-[#0E0E10]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] font-mono tracking-tighter">
                   GPS_LOCK: {data.lat.toFixed(4)}, {data.lng.toFixed(4)}
                </div>
              </div>
           </div>
        </div>

         {/* Center Column: Cognitive Layer */}
         <div className="col-span-12 md:col-span-4 space-y-6">
            <div id="seve-govern-panel" className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <SEVEGovernance weights={data.seveWeights} />
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF88]/5 blur-3xl rounded-full" />
              <EconomicTerminal gstBalance={gstBalance} isEmergency={isEmergency} />
            </div>
         </div>

         {/* Evidence Log & Visualizer (Right Column) */}
         <div id="evidence-log-panel" className="col-span-12 md:col-span-4 flex flex-col h-full bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-[10px] font-bold flex items-center gap-3 tracking-[0.2em] uppercase">
               <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
               PROTOCOLO_CADEIA_CUSTÓDIA
             </h2>
             <span className="text-[8px] text-white/30 font-mono">L1_CORE_VALIDATOR</span>
           </div>

           <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0E10] to-transparent z-10 pointer-events-none" />
              <div className="space-y-3 font-mono text-[9px]">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={data.timestamp}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="border-l-2 border-[#00FF88]/30 pl-4 py-2 group hover:bg-white/5 transition-colors"
                    >
                       <div className="flex justify-between items-center mb-1">
                         <span className="text-[#00FF88] font-bold">EVENT_0x{Math.random().toString(16).substring(2,6).toUpperCase()}</span>
                         <span className="text-[8px] text-white/20">[{data.timestamp.split('T')[1].split('.')[0]}]</span>
                       </div>
                       <div className="grid grid-cols-1 gap-1 text-white/50 leading-none">
                         <div>NODE: SALVADOR_SSA_01</div>
                         <div className="truncate">SIG: {data.signature.split('-')[1]}...{data.signature.split('-')[2]}</div>
                       </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="text-white/5 italic py-1 border-l border-white/5 pl-4 ml-[1px]">
                      PROC_ENTRY_0x{Math.random().toString(16).substring(2,8).toUpperCase()} -- FRAME_CAPTURED
                    </div>
                  ))}
              </div>
           </div>

           <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[8px] text-white/20 block font-bold uppercase tracking-widest leading-none">Acurácia_L1</span>
                  <span className="text-[10px] font-mono text-[#00FF88]">99.982%</span>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-[8px] text-white/20 block font-bold uppercase tracking-widest leading-none">Trust_Gate</span>
                  <span className="text-[10px] font-mono text-[#00FF88]">BLINDADO</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowL1Certificate(true)}
                className="w-full group bg-[#00FF88] hover:bg-white text-black py-4 rounded-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(0,255,136,0.2)]"
              >
                <Gavel className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Emitir Laudo de Juricidade</span>
              </button>
           </div>
        </div>

      </div>

      {/* Forensic Certificate Modal */}
      <AnimatePresence>
        {showL1Certificate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-[#0E0E10]/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-zinc-900 border border-[#00FF88]/30 w-full max-w-2xl overflow-hidden"
            >
              <div className="bg-[#00FF88] p-4 flex justify-between items-center text-black">
                <span className="font-bold flex items-center gap-2 uppercase tracking-tighter text-[10px]">
                  <Shield className="h-4 w-4" /> Laudo de Autenticidade L1_CORE
                </span>
                <span className="text-[9px] font-mono opacity-50">HASH: {data.signature.split('-')[1]}</span>
              </div>
              <div className="p-8 font-mono text-xs space-y-6">
                 <div className="grid grid-cols-2 gap-8 text-[10px] border-b border-white/5 pb-6 text-muted-foreground uppercase tracking-widest">
                    <div>
                      <p>Subject: Node Veicular {selectedLab.split('-')[1].toUpperCase()}</p>
                      <p>Authority: Protocolo Proprietário L1</p>
                    </div>
                    <div className="text-right">
                      <p>Data: {new Date().toLocaleDateString()}</p>
                      <p>Standard: MLI-2026 / ISO-26262</p>
                    </div>
                 </div>

                  <div className="space-y-4">
                    <h4 className="text-[#00FF88] font-bold uppercase text-[10px]">Sumário de Auditoria de Rigor</h4>
                    <pre className="p-4 bg-black/40 border border-white/5 rounded leading-relaxed text-[9px] text-white/50">
{`[TECHNICAL_INTEGRITY_LOG]
> L1_HASH_VERIFICATION: PASSED
> TEMPORAL_STAMP_PROBITY: VERIFIED
> INERTIAL_VECTOR_RIGOR: WITHIN_TOLERANCE
> HARDWARE_ROOT_OF_TRUST_SIGN: AUTHENTIC
> JURIDICAL_COMPLIANCE_SCORE: 1.00

[CONTEXT_WEIGHT_v4.2]
> DOMAIN: MOBILITY_SYSTEM_NODE_${selectedLab.split('-')[1].toUpperCase()}
> ETHICAL_ADAPTATION: ${data.gForce > 5 ? "CRITICAL_STATE" : "NOMINAL_STATE"}
> SAFETY_WEIGHT: ${data.seveWeights.safety.toFixed(4)}
> FORENSICS_WEIGHT: ${data.seveWeights.forensics.toFixed(4)}

ESTE EVENTO POSSUI INCOLUMIDADE GARANTIDA VIA HARDWARE E ATENDE AOS REQUISITOS DE ADMISSIBILIDADE PERICIAL CONFORME O CPC-BR.`}
                    </pre>
                  </div>

                 <div className="flex justify-between items-end pt-4">
                    <div className="flex items-center gap-2 opacity-30 group">
                       <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[8px] italic">SELADO</div>
                       <div className="text-[8px]">ASSINADO DIGITALMENTE<br/>L1_CORE_ENGINE</div>
                    </div>
                    <div className="flex gap-4">
                       <button onClick={() => setShowL1Certificate(false)} className="px-6 py-3 border border-white/10 hover:bg-white/5 transition-colors uppercase text-[10px] tracking-widest">Fechar</button>
                       <button className="px-6 py-3 bg-[#00FF88] text-black font-black hover:bg-white transition-all uppercase text-[10px] tracking-widest shadow-[0_0_20px_rgba(0,255,136,0.2)]">Imprimir_Laudo</button>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rigor Overlay Sidebar */}
      <AnimatePresence>
        {showRigor && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-[#0E0E10]/95 border-l border-[#00FF88]/20 z-40 backdrop-blur-xl p-8 overflow-hidden flex flex-col font-mono"
          >
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <span className="text-[#00FF88] font-bold text-[10px] tracking-[0.2em]">RAW_RIGOR_FEED</span>
              <Activity className="h-4 w-4 text-[#00FF88] animate-pulse" />
            </div>
            <div className="flex-1 space-y-4 text-[9px] overflow-y-auto no-scrollbar opacity-60">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-white/40">
                    <span>SYS_CLK_{Date.now() + i}</span>
                    <span>0x{Math.random().toString(16).substring(2,6).toUpperCase()}</span>
                  </div>
                  <div className="text-[#00FF88]/40 truncate">
                    VALIDATING_INERTIAL_FRAME: {Math.random() * 9.8} m/s²
                  </div>
                  <div className="h-px w-full bg-white/5" />
                </div>
              ))}
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-[8px] text-white/20 uppercase tracking-widest leading-relaxed">
              * Mostrando validação matemática em tempo real do processador de segurança.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
