"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Lock, ArrowRight, Gavel, Loader2, Cpu } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#F3F3F3] font-sans selection:bg-[#00FF88] selection:text-black overflow-hidden relative">
      <div className="absolute inset-0 matrix-grid opacity-10 pointer-events-none" />

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-32 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Sovereignty <br />
              <span className="text-white/20">Through Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-mono uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Establishing the high-confidence infrastructure for autonomous and regenerative mobility.
            </p>
          </div>

          <div className="h-px w-24 bg-[#00FF88]/30 mx-auto" />

          <div className="text-left max-w-2xl mx-auto space-y-8 py-12">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground italic">
              "We believe that trust shouldn't be a policy—it should be an unavoidable byproduct of code."
            </p>
            <div className="space-y-4">
              <p className="text-xs md:text-sm leading-relaxed">
                <span className="text-[#00FF88] font-bold">GuardDrive</span> is the sovereign vertical for mobility forensics. 
                Powered by the <span className="text-white font-bold underline decoration-[#00FF88]">Symbeon Protocol</span>, we provide a solid foundation 
                where every kilometer is auditably proven and ethically weighted.
              </p>
            </div>
          </div>

          <div>
            <button 
              onClick={handleStart}
              className="group relative flex items-center justify-center gap-4 bg-[#00FF88] text-black px-12 py-6 font-bold text-sm tracking-[0.2em] rounded-full hover:bg-white transition-all shadow-[0_0_50px_rgba(0,255,136,0.3)]"
            >
              INITIALIZE ACCESS PROTOCOL
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </main>

      {/* Institutional Footer */}
      <footer className="absolute bottom-0 w-full p-12 flex flex-col md:flex-row justify-between items-end gap-8 text-[10px] text-muted-foreground uppercase font-mono tracking-widest">
        <div className="space-y-2">
          <div>Entity: Symbeon Labs // Group: SH1W4</div>
          <div>Project: GuardDrive Pilot V4.0</div>
          <div>Status: IP Lockdown / Stealth Mode</div>
        </div>
        <div className="text-right space-y-2">
          <div className="flex items-center gap-2 justify-end">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
            <span>Master Engine: Stable</span>
          </div>
          <div>Protected by Master Patent INPI-BR</div>
          <div className="opacity-30">© 2026 Sovereign Trust Network. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
