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
      
      {/* Cinematic 3D Moving Grid Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0E0E10]/50 to-[#0E0E10] z-10" />
        
        {/* The Grid Component */}
        <motion.div 
          initial={{ rotateX: 60, y: "-20%" }}
          className="absolute inset-0 w-[200%] left-[-50%] h-[200%] origin-center"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
          }}
          animate={{
            backgroundPositionY: ["0px", "40px"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Technical Horizon Line */}
        <div className="absolute top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF88]/20 to-transparent" />
      </div>

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
              Soberania <br />
              <span className="text-white/20">por meio da Inteligência</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-mono uppercase tracking-[0.3em] max-w-3xl mx-auto leading-relaxed">
              Estabelecendo a infraestrutura de alta confiança <br className="hidden md:block" /> 
              para mobilidade autônoma e regenerativa.
            </p>
          </div>

          <div className="h-px w-24 bg-[#00FF88]/30 mx-auto" />

          <div className="text-left max-w-2xl mx-auto space-y-8 py-12 bg-[#0E0E10]/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground italic">
              "Acreditamos que a confiança não deve ser uma política — deve ser um subproduto inevitável do código."
            </p>
            <div className="space-y-4">
              <p className="text-xs md:text-sm leading-relaxed uppercase tracking-widest font-mono text-white/60">
                <span className="text-[#00FF88] font-bold">GuardDrive</span> é o vertical soberano para perícia em mobilidade. 
                Sob o <span className="text-white font-bold underline decoration-[#00FF88]">Protocolo de Camada 1</span>, consolidamos uma base sólida 
                onde cada quilômetro é auditavelmente provado e eticamente ponderado.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <button 
              onClick={handleStart}
              className="group relative flex items-center justify-center gap-4 bg-[#00FF88] text-black px-12 py-6 font-bold text-[10px] tracking-[0.3em] rounded-full hover:bg-white transition-all shadow-[0_0_50px_rgba(0,255,136,0.3)] hover:scale-105 active:scale-95 uppercase"
            >
              INICIAR PROTOCOLO DE ACESSO
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </main>

      {/* Institutional Footer */}
      <footer className="absolute bottom-0 w-full p-12 flex flex-col md:flex-row justify-between items-end gap-8 text-[10px] text-muted-foreground uppercase font-mono tracking-widest">
        <div className="space-y-2">
          <div>Laboratório de Engenharia Proprietária // Group: SH1W4</div>
          <div>Project: GuardDrive Pilot V4.2</div>
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
