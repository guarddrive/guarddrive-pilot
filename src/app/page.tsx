"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Lock, ArrowRight, Gavel, Loader2, Cpu, Globe, ChevronDown } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleStart = () => {
    router.push("/login");
  };

  return (
    <div ref={containerRef} className="min-h-[200vh] bg-[#0E0E10] text-[#F3F3F3] font-sans selection:bg-[#00FF88] selection:text-black overflow-x-hidden relative">
      
      {/* Cinematic 3D Moving Grid Animation with Parallax */}
      <div className="fixed inset-0 z-0 pointer-events-none perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10] via-transparent to-[#0E0E10] z-10" />
        
        <motion.div 
          style={{ y: gridY, rotateX: 60 }}
          className="absolute inset-0 w-[400%] left-[-150%] h-[400%] origin-center"
        >
          {/* Infinite Grid System */}
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 255, 136, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 255, 136, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            }}
            animate={{
              backgroundPositionY: ["0px", "60px"]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Technical Data Particles */}
          <div className="absolute inset-0 opacity-20">
             {Array.from({ length: 20 }).map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-1 h-1 bg-[#00FF88] rounded-full"
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                 }}
                 animate={{
                   y: ["0%", "100%"],
                   opacity: [0, 1, 0]
                 }}
                 transition={{
                   duration: Math.random() * 2 + 1,
                   repeat: Infinity,
                   ease: "linear",
                   delay: Math.random() * 2
                 }}
               />
             ))}
          </div>
        </motion.div>

        {/* Technical Horizon Line */}
        <div className="absolute top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF88]/30 to-transparent shadow-[0_0_20px_rgba(0,255,136,0.3)]" />
      </div>

      {/* Hero Content Section */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6">
        
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, y: heroY }}
          className="max-w-5xl space-y-16"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/5 text-[10px] uppercase font-bold tracking-[0.4em] text-[#00FF88]"
            >
              <Globe className="h-3 w-3 animate-pulse" />
              Sovereign Infrastructure Protocol
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] select-none">
              A primeira camada de <br />
              <span className="text-[#00FF88]">Validação Forense</span> <br />
              <span className="text-white/10 stroke-text italic">Descentralizada</span>
            </h1>

            <p className="text-sm md:text-base text-white/40 font-mono uppercase tracking-[0.5em] max-w-4xl mx-auto leading-relaxed">
              Para veículos autônomos e conectados.
            </p>
          </div>

          <div className="pt-12 flex flex-col items-center gap-12">
            <button 
              onClick={handleStart}
              className="group relative flex items-center justify-center gap-6 bg-[#00FF88] text-black px-16 py-8 font-black text-xs tracking-[0.3em] rounded-full hover:bg-white transition-all shadow-[0_0_80px_rgba(0,255,136,0.4)] hover:scale-105 active:scale-95 uppercase"
            >
              INICIAR PROTOCOLO DE ACESSO
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[#00FF88] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="text-white/20"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Strategic Storytelling Layer */}
      <section className="relative z-20 container mx-auto px-6 py-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
              A Mão Invisível <br />
              <span className="text-[#00FF88] not-italic">do Código.</span>
            </h2>
            <div className="space-y-8 text-white/50 font-mono text-sm leading-relaxed uppercase tracking-widest">
              <p>
                Acreditamos que a confiança não deve ser uma política institucional — deve ser um subproduto inevitável de algoritmos determinísticos.
              </p>
              <p>
                O <span className="text-white font-bold">Protocolo de Camada 1</span> do GuardDrive estabelece a primeira malha de perícia absoluta, permitindo a **Tokenização de Métricas Comportamentais**. Transformamos o rigor da condução em ativos digitais auditáveis, criando a fundação para uma economia de mobilidade baseada em mérito técnico.
              </p>
            </div>

            {/* Hardware Agnostic Module */}
            <div className="pt-8">
               <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                 <Cpu className="h-5 w-5 text-[#00FF88]" /> Versatilidade de Hardware (L1)
               </h3>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg space-y-2 group hover:bg-white/10 transition-colors">
                     <span className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Universal Adapter</span>
                     <p className="text-[9px] text-white/40 uppercase">
                       Integração nativa com **ESP32-S3** para captura de telemetria OBD-II sem modificação no veículo.
                     </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-lg space-y-2 group hover:bg-white/10 transition-colors">
                     <span className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Selo Digital (QR/IR)</span>
                     <p className="text-[9px] text-white/40 uppercase">
                       Transmissão de status pericial via infravermelho e QR Code para fiscalização não-intrusiva.
                     </p>
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 opacity-40">
               <div className="space-y-2">
                 <div className="h-0.5 w-full bg-[#00FF88]" />
                 <span className="text-[8px] font-bold tracking-widest">TRL 6+</span>
               </div>
               <div className="space-y-2">
                 <div className="h-0.5 w-full bg-white/20" />
                 <span className="text-[8px] font-bold tracking-widest">L1_CORE_V4</span>
               </div>
               <div className="space-y-2">
                 <div className="h-0.5 w-full bg-white/20" />
                 <span className="text-[8px] font-bold tracking-widest">STEALTH_ACTIVE</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 group shadow-2xl"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] to-transparent z-10 opacity-60" />
             <img 
               src="/assets/sovereign_architecture_v2.png" 
               alt="Sovereign Architecture Dashboard"
               className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
             />
             
             {/* Decorative HUD Elements */}
             <div className="absolute top-8 left-8 z-20 text-[8px] font-mono text-[#00FF88] space-y-2 uppercase tracking-tighter bg-black/60 backdrop-blur-md p-3 border border-[#00FF88]/20 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#00FF88] animate-pulse" />
                  SYSTEM_STATUS: NOMINAL
                </div>
                <div>ENCRYPTION_LAYER: ACTIVE</div>
                <div>GEO_SYNC: SALVADOR_LIVING_LAB</div>
             </div>
             
             <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
                <Shield className="h-4 w-4 text-[#00FF88]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Validated_by_L1</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="relative z-20 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              The <span className="text-[#00FF88]">Sovereign Stack</span>
            </h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest max-w-2xl mx-auto">
              Core Technologies Powering Forensic Truth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ZK-Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all group"
            >
              <Lock className="h-8 w-8 text-[#00FF88] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-black uppercase tracking-tight">ZK-Privacy Layer</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Zero-Knowledge proofs ensure LGPD/GDPR compliance while enabling institutional audits without exposing raw behavioral data.
              </p>
            </motion.div>

            {/* PoPE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all group"
            >
              <Shield className="h-8 w-8 text-[#00FF88] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-black uppercase tracking-tight">PoPE Protocol</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Proof of Physical Evidence establishes hardware-backed chain of custody with cryptographic signatures at the edge (HSM/Secure Element).
              </p>
            </motion.div>

            {/* Trinity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all group"
            >
              <Gavel className="h-8 w-8 text-[#00FF88] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-black uppercase tracking-tight">Trinity Protocol</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Balances Narrative (ESG value), Technical (TRL 6+ rigor), and Compliance (regulatory conformity) for institutional readiness.
              </p>
            </motion.div>

            {/* BaaT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all group"
            >
              <Zap className="h-8 w-8 text-[#00FF88] group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-black uppercase tracking-tight">Behaviour-as-a-Token</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Transmutes verified driving behavior into GuardScore Tokens (GST) for dynamic insurance pricing and ESG-compliant fleet monetization.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Impact & Validation Metrics */}
      <section className="relative z-20 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Impact & <span className="text-[#00FF88]">Validation</span>
            </h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest max-w-2xl mx-auto">
              Proven Technology Readiness
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-8 space-y-2">
                <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Technology Readiness Level</div>
                <div className="text-2xl font-black">TRL 6</div>
                <div className="text-xs text-white/40">Validated in Digital Twin</div>
              </div>
              <div className="p-8 space-y-2">
                <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Validation Environment</div>
                <div className="text-2xl font-black">Salvador Living Lab</div>
                <div className="text-xs text-white/40">City-Twin-Engine</div>
              </div>
              <div className="p-8 space-y-2">
                <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Target Market</div>
                <div className="text-lg font-black">Connected Vehicle Forensics</div>
                <div className="text-xs text-white/40">Smart City Infrastructure</div>
              </div>
              <div className="p-8 space-y-2">
                <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Patent Portfolio</div>
                <div className="text-2xl font-black">3 Strategic Drafts</div>
                <div className="text-xs text-white/40">Framework, Identity, Security</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Institutional Use Cases */}
      <section className="relative z-20 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Institutional <span className="text-[#00FF88]">Use Cases</span>
            </h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest max-w-2xl mx-auto">
              Real-World Applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all"
            >
              <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Insurance Sector</div>
              <h3 className="text-xl font-black uppercase">Automated Claims Processing</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Cryptographically-signed telemetry enables instant, fraud-resistant claims validation. Insurers gain access to immutable evidence chains, reducing investigation costs by up to <span className="text-[#00FF88] font-bold">70%</span>.
              </p>
            </motion.div>

            {/* Law Enforcement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all"
            >
              <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Law Enforcement</div>
              <h3 className="text-xl font-black uppercase">Criminal Investigation Support</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Our PoPE protocol provides <span className="text-white font-bold">court-admissible evidence</span> for accident reconstruction and criminal cases. Chain of custody is mathematically guaranteed from sensor to courtroom.
              </p>
            </motion.div>

            {/* Smart Cities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all"
            >
              <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Smart Cities</div>
              <h3 className="text-xl font-black uppercase">Real-Time Fleet Management</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Municipalities can monitor ESG compliance, optimize traffic flow, and enforce environmental regulations using our Digital Twin validation layer.
              </p>
            </motion.div>

            {/* Autonomous Fleets */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl space-y-4 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all"
            >
              <div className="text-[10px] text-[#00FF88] font-bold uppercase tracking-widest">Autonomous Vehicles</div>
              <h3 className="text-xl font-black uppercase">Trust Layer for L4/L5</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Autonomous operators require absolute certainty in decision provenance. GuardDrive provides the "black box" infrastructure for <span className="text-white font-bold">algorithmic accountability</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Institutional Footer */}
      <footer className="relative z-20 w-full p-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-16 text-[10px] text-muted-foreground uppercase font-mono tracking-[0.2em]">
        <div className="space-y-6">
          <div className="text-white font-bold tracking-[0.4em]">Laboratório de Engenharia Proprietária</div>
          <p className="normal-case text-xs text-white/30 italic">
            "Desenvolvendo as fundações soberanas da mobilidade regenerativa."
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-white/20 font-bold">Project Details</div>
          <div>Entity: SH1W4 // Sector: Mobility Forensics</div>
          <div>Project: GuardDrive Pilot V4.3</div>
          <div>Status: IP Lockdown / Stealth Operational</div>
        </div>
        <div className="space-y-4 text-right">
          <div className="flex items-center gap-2 justify-end text-[#00FF88]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
            <span>Master Engine: Stable</span>
          </div>
          <div>Protected by Master Patent INPI-BR</div>
          <div className="opacity-30">© 2026 Sovereign Trust Network. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
