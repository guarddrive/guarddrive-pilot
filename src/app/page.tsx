import { useRef } from "react";
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

            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] select-none">
              Soberania <br />
              <span className="text-white/10 stroke-text">pela Inteligência</span>
            </h1>

            <p className="text-sm md:text-xl text-white/40 font-mono uppercase tracking-[0.5em] max-w-4xl mx-auto leading-relaxed">
              Consolidando a infraestrutura de confiança <br className="hidden md:block" /> 
              para a mobilidade autônoma global.
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
                O <span className="text-white font-bold">Protocolo de Camada 1</span> do GuardDrive estabelece a primeira malha de perícia absoluta, onde cada quilômetro percorrido é assinado via hardware e validado por consenso ético.
              </p>
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
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl group"
          >
             <div className="absolute inset-0 bg-[#00FF88]/5 group-hover:bg-[#00FF88]/10 transition-colors" />
             <div className="absolute inset-12 border border-[#00FF88]/20 flex items-center justify-center">
                <Shield className="h-24 w-24 text-[#00FF88] opacity-20 group-hover:opacity-100 transition-all group-hover:scale-110 duration-700" />
             </div>
             {/* Decorative HUD Elements */}
             <div className="absolute top-8 left-8 text-[8px] font-mono text-[#00FF88]/40 space-y-2 uppercase tracking-tighter">
                <div>SYSTEM_STATUS: NOMINAL</div>
                <div>ENCRYPTION_LAYER: ACTIVE</div>
                <div>GEO_SYNC: SALVADOR_LIVING_LAB</div>
             </div>
          </motion.div>
        </div>
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
