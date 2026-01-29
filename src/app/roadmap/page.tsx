"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Globe, Cpu, Zap, ChevronRight } from "lucide-react";

const roadmapData = [
  {
    trl: "TRL 4/5",
    status: "CURRENT",
    title: "Validação em Ambiente Simulado",
    description: "Conclusão do ciclo de testes no Salvador Living Lab via Digital Twin. Protocolo L1 Core estabilizado e Cadeia de Custódia validada.",
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-[#00FF88]"
  },
  {
    trl: "TRL 7",
    status: "Q2 2026",
    title: "Demonstração em Sistema Operacional",
    description: "Deploy em frota piloto de segurança pública (50 veículos reais). Integração nativa com hardware HSM automotivo.",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-blue-500"
  },
  {
    trl: "TRL 8",
    status: "Q4 2026",
    title: "Sistema Completo e Qualificado",
    description: "Certificação ISO 21434 (Cybersecurity) e conformidade total com a Lei de Perícias brasileira. Abertura do Hub de BaaT para seguradoras.",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-purple-500"
  },
  {
    trl: "TRL 9",
    status: "2027",
    title: "Deploy Global Soberano",
    description: "Escala massiva em infraestruturas Smart City internacionais. O GuardDrive torna-se o protocolo padrão para perícia de veículos L4/L5.",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-amber-500"
  }
];

export default function RoadmapPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0E0E10] text-[#F3F3F3] font-mono selection:bg-[#00FF88] selection:text-black">
      {/* Background Parallax Grid */}
      <motion.div style={{ y }} className="fixed inset-0 matrix-grid opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="mb-20 flex justify-between items-center">
           <Link href="/dashboard" className="group flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/40 hover:text-[#00FF88] transition-colors">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Voltar ao Terminal
           </Link>
           <div className="text-right space-y-1">
              <h1 className="text-2xl font-black tracking-tighter uppercase">Roadmap Estratégico</h1>
              <p className="text-[10px] text-white/20 uppercase">Maturidade Tecnológica do Ecossistema</p>
           </div>
        </div>

        <div className="space-y-40">
           {roadmapData.map((item, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
             >
                <div className="flex-1 space-y-6">
                   <div className="flex items-center gap-4">
                      <span className={`px-4 py-1 rounded-full text-black font-black text-xs ${item.color}`}>
                        {item.trl}
                      </span>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">
                        {item.status}
                      </span>
                   </div>
                   <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                     {item.title}
                   </h2>
                   <p className="text-sm text-white/40 leading-relaxed max-w-lg uppercase tracking-wider">
                     {item.description}
                   </p>
                   {item.trl === "TRL 4/5" && (
                     <div className="pt-4 flex items-center gap-3 text-[#00FF88] text-[9px] font-bold uppercase tracking-widest">
                        <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                        Status: Auditoria Local Concluída
                     </div>
                   )}
                </div>

                <div className="flex-1 flex justify-center">
                   <div className="relative group">
                      <motion.div 
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`absolute -inset-8 border border-white/5 rounded-full opacity-20 group-hover:opacity-100 transition-opacity`}
                      />
                      <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 transition-all group-hover:scale-110 group-hover:bg-white/10 shadow-2xl`}>
                         {item.icon}
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-60 pt-20 border-t border-white/5">
           <div className="space-y-4 mb-20">
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Próxima Grande Cota</h3>
              <p className="text-xs text-white/30 uppercase tracking-[0.3em]">Hegemonia em Perícia Autônoma Global</p>
              <div className="pt-8">
                 <button className="px-12 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-[#00FF88] transition-colors shadow-2xl text-center">
                    Agendar Briefing Técnico
                 </button>
              </div>
           </div>

           {/* Knowledge Center */}
           <div className="text-left bg-white/5 border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
              <h4 className="text-xs font-black text-[#00FF88] uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                 <Shield className="h-4 w-4" /> Centro de Autoridade e Conformidade
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
                 <div className="space-y-2 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors border border-transparent hover:border-white/5">
                    <div className="text-[10px] text-white flex justify-between uppercase">
                       <span>Lei 13.964/19 (Cadeia de Custódia)</span>
                       <span className="text-[#00FF88]">VERIFIED</span>
                    </div>
                    <p className="text-[8px] text-white/30 uppercase leading-relaxed">Diretrizes de admissibilidade pericial para veículos conectados no Brasil.</p>
                 </div>
                 <div className="space-y-2 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors border border-transparent hover:border-white/5">
                    <div className="text-[10px] text-white flex justify-between uppercase">
                       <span>ISO 21434 (Cybersecurity)</span>
                       <span className="text-blue-500">READY</span>
                    </div>
                    <p className="text-[8px] text-white/30 uppercase leading-relaxed">Blueprint de segurança de camada 1 e mitigação de ameaças V2X.</p>
                 </div>
                 <div className="space-y-2 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors border border-transparent hover:border-white/5">
                    <div className="text-[10px] text-white flex justify-between uppercase">
                       <span>Protocolo L1 Core v4.4 Specs</span>
                       <span className="text-purple-500">PROPRIETARY</span>
                    </div>
                    <p className="text-[8px] text-white/30 uppercase leading-relaxed">Especificações técnicas da arquitetura de prova inercial descentralizada.</p>
                 </div>
                 <div className="space-y-2 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-colors border border-transparent hover:border-white/5">
                    <div className="text-[10px] text-white flex justify-between uppercase">
                       <span>BaaT Economic Model</span>
                       <span className="text-amber-500">ECONOMY_V1</span>
                    </div>
                    <p className="text-[8px] text-white/30 uppercase leading-relaxed">Whitepaper sobre tokenização comportamental e monetização de rigor.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <footer className="py-20 text-center text-[8px] text-muted-foreground uppercase tracking-[0.5em] opacity-30">
        © 2026 Sovereign Trust Network // Engineered by SH1W4
      </footer>
    </div>
  );
}
