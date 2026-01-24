"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Zap, Lock, ArrowRight, Gavel } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-void text-foreground font-mono overflow-hidden relative">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 matrix-grid opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
        
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
            Powered by the <span className="text-bio-green">Symbeon Protocol</span>.
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
            <h3 className="text-sm font-bold mb-2">Forensic Integrity</h3>
            <p className="text-[10px] text-muted-foreground uppercase leading-tight">
              Real-time inertial validation and crash vector analysis.
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-left hover:border-synth-purple/30 transition-colors">
            <Lock className="h-6 w-6 text-synth-purple mb-4" />
            <h3 className="text-sm font-bold mb-2">IP Lockdown</h3>
            <p className="text-[10px] text-muted-foreground uppercase leading-tight">
              Local cryptographic signing via Secure Element firmware.
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-left hover:border-blue-400/30 transition-colors">
            <Gavel className="h-6 w-6 text-blue-400 mb-4" />
            <h3 className="text-sm font-bold mb-2">Smart Governance</h3>
            <p className="text-[10px] text-muted-foreground uppercase leading-tight">
              Direct integration with traffic authority infrastructure.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link href="/dashboard">
            <button className="flex items-center gap-2 bg-bio-green text-black px-8 py-3 font-bold rounded-lg hover:bg-bio-green/80 transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)]">
              INITIALIZE COMMAND CENTER <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <Link href="/docs">
            <button className="flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-3 font-bold rounded-lg hover:bg-white/5 transition-all">
              REVIEW WHITE PAPER
            </button>
          </Link>
        </div>

      </main>

      {/* Footer Status */}
      <footer className="absolute bottom-0 w-full p-6 border-t border-white/5 flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest">
        <div>System Version: 1.0.0-Pilot</div>
        <div className="flex gap-6">
          <span>Latência Edge: 12ms</span>
          <span className="text-bio-green">Auth Status: Verified</span>
        </div>
      </footer>
    </div>
  );
}
