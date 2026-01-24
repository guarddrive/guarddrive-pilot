import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Lock, ArrowRight, Gavel, Loader2, Cpu } from "lucide-react";

export default function LandingPage() {
  const [isHandshaking, setIsHandshaking] = useState(false);
  const router = useRouter();

  const handleStart = async () => {
    setIsHandshaking(true);
    // Simulate Neural Handshake sequence
    setTimeout(() => {
      router.push("/dashboard");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-void text-foreground font-mono overflow-hidden relative">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 matrix-grid opacity-20 pointer-events-none" />

      {/* Handshake Overlay */}
      <AnimatePresence>
        {isHandshaking && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-void/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-6 max-w-xs"
            >
              <Cpu className="h-12 w-12 text-bio-green mx-auto animate-spin" />
              <div className="space-y-2">
                <h3 className="text-bio-green font-bold tracking-widest uppercase">Initializing Handshake</h3>
                <div className="flex flex-col gap-1 text-[10px] text-muted-foreground uppercase">
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>- Neural Link Established</motion.span>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>- Symbeon Validator Sync: 100%</motion.span>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>- Secure Element Authorized</motion.span>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-bio-green">-- Access Granted --</motion.span>
                </div>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 2.2 }}
                  className="h-full bg-bio-green shadow-[0_0_10px_rgba(0,255,65,1)]" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center text-balance">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bio-green/30 bg-bio-green/5 text-bio-green text-[10px] tracking-widest uppercase mb-6">
            <Zap className="h-3 w-3 animate-pulse" /> Orbital Launch Phase: Active
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            GUARDDRIVE
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Establishing the first sovereign infrastructure for inviolable vehicle forensics. 
            Powered by the <span className="text-bio-green font-bold">Symbeon Protocol</span>.
          </p>
        </motion.div>

        {/* Hero Portal Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,255,65,0.1)] mb-16 group"
        >
          <Image 
            src="/assets/hero_portal.png" 
            alt="GuardDrive Hero Portal" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        </motion.div>

        {/* Features / Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-left hover:border-bio-green/30 transition-colors">
            <Shield className="h-6 w-6 text-bio-green mb-4" />
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">Forensic Integrity</h3>
            <p className="text-[11px] text-muted-foreground uppercase leading-tight">
              Real-time inertial validation and crash vector analysis.
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-left hover:border-synth-purple/30 transition-colors">
            <Lock className="h-6 w-6 text-synth-purple mb-4" />
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">IP Lockdown</h3>
            <p className="text-[11px] text-muted-foreground uppercase leading-tight">
              Local cryptographic signing via Secure Element firmware.
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-left hover:border-blue-400/30 transition-colors">
            <Gavel className="h-6 w-6 text-blue-400 mb-4" />
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">Smart Governance</h3>
            <p className="text-[11px] text-muted-foreground uppercase leading-tight">
              Direct integration with traffic authority infrastructure.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button 
            onClick={handleStart}
            className="flex items-center gap-2 bg-bio-green text-black px-8 py-4 font-bold rounded-lg hover:bg-bio-green/80 transition-all shadow-[0_0_30px_rgba(0,255,65,0.4)] group"
          >
            INITIALIZE COMMAND CENTER 
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </button>
          
          <Link href="/docs">
            <button className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 font-bold rounded-lg hover:bg-white/5 transition-all">
              REVIEW WHITE PAPER
            </button>
          </Link>
        </div>

      </main>

      {/* Footer Status */}
      <footer className="w-full p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest relative z-10">
        <div>System Version: 1.0.0-Pilot (Refined)</div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-bio-green animate-pulse" />
            <span>Edge Sync: Stable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-bio-green" />
            <span>Authority Link: Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-bio-green" />
            <span>IP_LOCKDOWN: ON</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
