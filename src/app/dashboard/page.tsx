"use client";

import { useSimulation } from "@/hooks/useSimulation";
import { cn } from "@/lib/utils";
import { Activity, Shield, AlertTriangle, MapPin, Zap, Lock, Loader2, Gavel } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SEVEGovernance from "@/components/dashboard/SEVEGovernance";
import ESGPerformance from "@/components/dashboard/ESGPerformance";
import NeuralPulse from "@/components/ui/NeuralPulse";


export default function PilotDashboard() {
  const { data, isRunning, setRunning, validationState, validateEvent } = useSimulation();
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="min-h-screen bg-void text-foreground p-8 font-mono matrix-grid relative overflow-hidden">
      <NeuralPulse />
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-bio-green/20 pb-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="text-bio-green h-6 w-6" />
            GUARDDRIVE // SEVE-SYMBEON INTEGRATED STACK
          </h1>
          <p className="text-xs text-muted-foreground tracking-[0.2em]">NODE-BA-SSA-01 // COGNITIVE_FORENSICS_V2.0</p>
        </div>
        <div className="flex items-center gap-4">
           <Link 
             href="/docs"
             className="text-[10px] text-bio-green/60 hover:text-bio-green transition-colors border-b border-bio-green/20"
           >
             [ VIEW KNOWLEDGE BASE ]
           </Link>
             <div className="flex items-center gap-4">
                <button 
                  onClick={validateEvent}
                  disabled={validationState === "AUDITING"}
                  className={cn(
                    "text-[10px] px-4 py-1 border transition-all flex items-center gap-2",
                    validationState === "IDLE" && "border-white/20 text-white/40 hover:border-bio-green hover:text-bio-green",
                    validationState === "AUDITING" && "border-blue-500 text-blue-500 animate-pulse",
                    validationState === "VERIFIED" && "border-bio-green text-bio-green bg-bio-green/5 font-bold",
                    validationState === "NON_COMPLIANT" && "border-red-500 text-red-500 bg-red-500/10 font-bold"
                  )}
                >
                  {validationState === "AUDITING" && <Loader2 className="h-3 w-3 animate-spin" />}
                  {validationState === "IDLE" && "[ VALIDATE FORENSIC CHAIN ]"}
                  {validationState === "AUDITING" && "[ THEMIS_AUDITING... ]"}
                  {validationState === "VERIFIED" && "✓ CHAIN_OF_CUSTODY: VALID"}
                  {validationState === "NON_COMPLIANT" && "!! ERROR: FORENSIC_CONFLICT"}
                </button>

                {validationState === "VERIFIED" && (
                  <button 
                    onClick={() => setShowCertificate(true)}
                    className="text-[10px] px-3 py-1 bg-bio-green text-black font-bold animate-bounce shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                  >
                    DOWNLOAD_CERTIFICATE.PDF
                  </button>
                )}


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
        </div>

          <AnimatePresence>
            {validationState === "AUDITING" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 p-4 bg-blue-500/5 border border-blue-500/20 rounded grid grid-cols-4 gap-4 overflow-hidden"
              >
                <div className="col-span-1 border-r border-blue-500/10">
                  <span className="text-[8px] text-blue-400 block uppercase mb-1">Engine</span>
                  <span className="text-[10px] text-white flex items-center gap-1"><Gavel className="h-3 w-3" /> THEMIS L3</span>
                </div>
                <div className="col-span-1 border-r border-blue-500/10">
                  <span className="text-[8px] text-blue-400 block uppercase mb-1">Target Rule</span>
                  <span className="text-[10px] text-white">IMU_VEC_PROBITY</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[8px] text-blue-400 block uppercase mb-1">Audit Status</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-[2px] bg-blue-500/20 relative">
                       <motion.div 
                         initial={{ width: 0 }} 
                         animate={{ width: "100%" }} 
                         transition={{ duration: 1.8 }}
                         className="h-full bg-blue-500" 
                       />
                    </div>
                    <span className="text-[9px] text-blue-400 animate-pulse">SCAN_ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Real-time Metrics */}
        <div className="col-span-12 md:col-span-4 space-y-6">
           {/* Speed Card */}
           <div className="bg-bio-dark/20 border border-bio-green/30 p-6 rounded-lg relative overflow-hidden group">
             <motion.div 
               className="absolute top-0 left-0 w-full h-1 bg-bio-green shadow-[0_0_15px_rgba(0,255,65,0.5)]"
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
             <div className="flex justify-between items-start mb-4">
               <span className="text-[10px] text-bio-green/50 tracking-widest">VINT_VELOCITY.BIN</span>
               <Activity className="h-4 w-4 text-bio-green/50" />
             </div>
             <div className="text-6xl font-bold text-bio-green flex items-baseline gap-2 tabular-nums">
               <motion.span
                 key={data.speed}
                 initial={{ opacity: 0.5 }}
                 animate={{ opacity: 1 }}
               >
                 {data.speed.toFixed(0)}
               </motion.span>
               <span className="text-xl text-bio-green/50">KM/H</span>
             </div>
           </div>

           {/* G-Force Card */}
           <div className={cn(
             "border p-6 rounded-lg transition-all duration-500 overflow-hidden relative",
             data.gForce > 5 ? "bg-red-500/20 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]" : "bg-synth-deep/10 border-synth-purple/30"
           )}>
             {data.gForce > 5 && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ repeat: Infinity, duration: 0.5 }}
                 className="absolute inset-0 bg-red-500/5 pointer-events-none"
               />
             )}
             <div className="flex justify-between items-start mb-4 relative z-10">
               <span className="text-[10px] text-synth-purple/50 tracking-widest">IMU_G_FORCE.VEC</span>
               {data.gForce > 5 && <AlertTriangle className="h-4 w-4 text-red-500 animate-bounce" />}
             </div>
             <div className="text-4xl font-bold text-white relative z-10 tabular-nums">
               {data.gForce.toFixed(2)} G
             </div>
             <div className="mt-2 text-[10px] text-muted-foreground uppercase relative z-10">
               {data.gForce > 8 ? "CRITICAL IMPACT DETECTED" : "Nominal Navigation"}
             </div>
           </div>

           {/* GPS Status */}
           <div className="bg-card/30 border border-white/5 p-6 rounded-lg backdrop-blur-sm">
             <div className="flex items-center gap-2 mb-4 text-[10px] text-muted-foreground tracking-widest">
               <MapPin className="h-3 w-3" /> GEO_SPATIAL_SYNC
             </div>
             <div className="text-[11px] space-y-2 opacity-80">
               <div className="flex justify-between border-b border-white/5 py-1">
                 <span className="text-white/40">LAT</span><span className="text-bio-green tabular-nums">{data.lat.toFixed(6)}</span>
               </div>
               <div className="flex justify-between border-b border-white/5 py-1">
                 <span className="text-white/40">LNG</span><span className="text-bio-green tabular-nums">{data.lng.toFixed(6)}</span>
               </div>
             </div>
           </div>
        </div>

         {/* Center Column: Cognitive Layer */}
         <div className="col-span-12 md:col-span-4 space-y-6">
            <SEVEGovernance weights={data.seveWeights} />
            <ESGPerformance metrics={data.esgMetrics} />
         </div>

         {/* Evidence Log & Visualizer (Right Column) */}
         <div className="col-span-12 md:col-span-4 flex flex-col h-full bg-void/80 border border-white/5 rounded-lg p-6 backdrop-blur-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
              <Zap className="h-4 w-4 text-bio-green opacity-20 animate-pulse" />
           </div>
           
           <div className="flex justify-between items-center mb-6 relative z-10">
             <h2 className="text-sm font-bold flex items-center gap-2 leading-none">
               <div className="w-1 h-4 bg-bio-green" />
               CRYPTOGRAPHIC EVIDENCE STREAM
             </h2>
             <span className="text-[10px] text-bio-green/60 px-2 py-1 border border-bio-green/20 rounded">VALIDATOR_v1.0_ONLINE</span>
           </div>

           <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void z-20 pointer-events-none" />
              <div className="space-y-2 font-mono text-[10px]">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={data.timestamp}
                      initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-1 border-l-2 border-bio-green pl-4 py-2 bg-bio-green/5 group hover:bg-bio-green/10 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-bio-green/40">[{data.timestamp.split('T')[1].split('.')[0]}]</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[9px] text-bio-green scale-75 origin-right"
                        >
                          // VERIFIED_BY_SYMBEON
                        </motion.span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-white/60">ID: <span className="text-white">{data.signature.split('-')[2]}</span></div>
                        <div className="text-bio-green/60 truncate">HASH: {data.signature}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Static Background Log Noise */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="text-[9px] text-white/5 italic py-1 border-l border-white/5 pl-4 ml-[1px]">
                      PROC_ENTRY_0x{Math.random().toString(16).substring(2,8).toUpperCase()} -- INERTIAL_FRAME_CAPTURED
                    </div>
                  ))}
              </div>
           </div>

           <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
             <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/30 uppercase">Edge Sync</span>
                  <span className="text-[10px] text-bio-green">12ms <span className="text-white/20">/ LOW</span></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/30 uppercase">IP Status</span>
                  <span className="text-[10px] text-bio-green">LOCKDOWN_ON</span>
                </div>
             </div>
             <div className="flex items-center gap-2 group cursor-help">
               <div className="w-2 h-2 rounded-full bg-bio-green animate-ping" />
               <span className="text-[9px] text-bio-green tracking-widest group-hover:opacity-100 opacity-60 transition-opacity">NODE_BA_SSA_SYNC</span>
             </div>
           </div>
        </div>

      </div>

      {/* Forensic Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-void/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-zinc-900 border border-bio-green/30 w-full max-w-2xl overflow-hidden"
            >
              <div className="bg-bio-green p-4 flex justify-between items-center text-black">
                <span className="font-bold flex items-center gap-2 uppercase tracking-tighter">
                  <Shield className="h-4 w-4" /> Forensic Evidence Certificate
                </span>
                <span className="text-[10px] font-mono">UUID: {data.signature.split('-')[2]}</span>
              </div>
              <div className="p-8 font-mono text-xs space-y-6">
                 <div className="grid grid-cols-2 gap-8 text-[10px] border-b border-white/5 pb-6 text-muted-foreground uppercase">
                    <div>
                      <p>Subject: Vehicle Node SSA-01</p>
                      <p>Authority: Symbeon Protocol v1.0</p>
                    </div>
                    <div className="text-right">
                      <p>Issue Date: {new Date().toLocaleDateString()}</p>
                      <p>Legal Standard: MLI-2024 / CPC-BR</p>
                    </div>
                 </div>

                  <div className="space-y-4">
                    <h4 className="text-bio-green font-bold uppercase">Audit Summary</h4>
                    <pre className="p-4 bg-black/40 border border-white/5 rounded leading-relaxed text-[9px] text-white/70">
{`[VERIFICATION_LOG]
> HASH_INTEGRITY: POSITIVE
> TEMPORAL_STAMP: MATCH
> INERTIAL_VECTOR_ANALYSIS: WITHIN_THRESHOLD
> L1_HARDWARE_SIGN_STATUS: GENUINE
> THEMIS_RULESET_COMPLIANCE: 100%

[SEVE_CONTEXT_V2.0]
> DOMAIN: MOBILITY_SSA_01
> ETHICAL_ADAPTATION: ${data.gForce > 5 ? "EMERGENCY_ESCALATION" : "NOMINAL_NAVIGATION"}
> PRIVACY_WEIGHT: ${data.seveWeights.privacy.toFixed(2)}
> SAFETY_WEIGHT: ${data.seveWeights.safety.toFixed(2)}
> FORENSICS_WEIGHT: ${data.seveWeights.forensics.toFixed(2)}

THE EVENT COLLECTED MEETS THE MINIMUM LEGAL REQUIREMENTS FOR FORENSIC ADMISSIBILITY IN BRAZILIAN COURTS.`}
                    </pre>
                  </div>

                 <div className="flex justify-between items-end pt-4">
                    <div className="flex items-center gap-2 opacity-50">
                       <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[8px] italic">SEAL</div>
                       <div className="text-[8px]">SIGNED BY<br/>THEMIS_AI_CORE</div>
                    </div>
                    <div className="flex gap-2">
                       <button onClick={() => setShowCertificate(false)} className="px-4 py-2 border border-white/10 hover:bg-white/5 transition-colors">CLOSE</button>
                       <button className="px-4 py-2 bg-bio-green text-black font-bold hover:bg-bio-green/80 transition-colors">PRINT_OFFICIAL</button>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
