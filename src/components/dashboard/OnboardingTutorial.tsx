"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight, X, ChevronRight, ChevronLeft, Info } from "lucide-react";

interface Step {
  id: string;
  targetId: string;
  title: string;
  what: string;
  why: string;
  advantage: string;
}

const steps: Step[] = [
  {
    id: "validation-status",
    targetId: "pilot-validation-card",
    title: "PILOT_VALIDATION_STATUS",
    what: "Métricas consolidadas de operação real do protótipo.",
    why: "Avaliadores buscam evidências de teste em ambiente real (TRL 6). Números concretos eliminam a subjetividade da nota.",
    advantage: "Enquanto sistemas padrão operam em simulação teórica, o GuardDrive já acumula 500h de telemetria pericial validada."
  },
  {
    id: "multi-city",
    targetId: "city-selector-ui",
    title: "MULTI_CITY_LIVING_LABS",
    what: "Rede distribuída de validação geográfica (SSA, FSA, LDF).",
    why: "Prova que a tecnologia é agnóstica ao contexto local e possui alta capacidade de replicação (Escalabilidade).",
    advantage: "A arquitetura multi-nó garante resiliência jurídica e técnica em diferentes jurisdições municipais."
  },
  {
    id: "seve-gov",
    targetId: "seve-govern-panel",
    title: "SEVE_ETHICAL_GOVERNANCE",
    what: "Framework para ponderação ética e explicabilidade algorítmica segundo diretrizes da SBC.",
    why: "Atendimento direto às diretrizes de IA Ética da SBC e Finep. Garante transparência em decisões críticas.",
    advantage: "O SEVE transforma a IA de uma 'caixa-preta' em um processo de decisão pericial transparente e auditável."
  },
  {
    id: "evidence-stream",
    targetId: "evidence-log-panel",
    title: "PROTOCOL_PROTOCOL_CHAIN",
    what: "Stream criptográfico de eventos (Cadeia de Custódia) assinado via hardware edge.",
    why: "Garantir a admissibilidade jurídica dos dados coletados conforme o CPC-BR.",
    advantage: "Diferente de logs de nuvem manipuláveis, o GuardDrive utiliza 'Root of Trust' em hardware para imunidade de dados."
  }
];

export default function OnboardingTutorial() {
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [spotlightRect, setSpotlightRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  useEffect(() => {
    const hasSeen = localStorage.getItem("pilot_onboarding_seen");
    if (!hasSeen) {
      setTimeout(() => {
        setIsVisible(true);
        setCurrentStep(0);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (isVisible && currentStep >= 0) {
      const updateRect = () => {
        const targetId = steps[currentStep].targetId;
        const element = document.getElementById(targetId);
        if (element) {
          const rect = element.getBoundingClientRect();
          setSpotlightRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          });
        }
      };
      
      updateRect();
      const targetId = steps[currentStep].targetId;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      window.addEventListener('resize', updateRect);
      window.addEventListener('scroll', updateRect);
      return () => {
        window.removeEventListener('resize', updateRect);
        window.removeEventListener('scroll', updateRect);
      };
    }
  }, [currentStep, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("pilot_onboarding_seen", "true");
  };

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
    else handleClose();
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep(c => c - 1);
  };

  if (!isVisible || currentStep === -1) return null;

  const activeStep = steps[currentStep];

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Dim Overlay with Spotlight Hole using Clip-Path */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#0E0E10]/95 backdrop-blur-[2px] pointer-events-auto"
        style={{
          clipPath: spotlightRect 
            ? `polygon(
                0% 0%, 
                0% 100%, 
                ${spotlightRect.left - 10}px 100%, 
                ${spotlightRect.left - 10}px ${spotlightRect.top - 10}px, 
                ${spotlightRect.left + spotlightRect.width + 10}px ${spotlightRect.top - 10}px, 
                ${spotlightRect.left + spotlightRect.width + 10}px ${spotlightRect.top + spotlightRect.height + 10}px, 
                ${spotlightRect.left - 10}px ${spotlightRect.top + spotlightRect.height + 10}px, 
                ${spotlightRect.left - 10}px 100%, 
                100% 100%, 
                100% 0%
              )`
            : 'none'
        }}
        onClick={handleClose}
      />

      {/* Tutorial Content Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="relative z-10 w-full max-w-xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="h-1 bg-white/5 w-full">
              <motion.div 
                className="h-full bg-[#00FF88]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            <div className="p-8 space-y-8">
              <div className="flex justify-between items-start">
                 <div className="space-y-1">
                    <span className="text-[10px] text-[#00FF88] font-black tracking-[0.3em] font-mono">STEP_0{currentStep + 1} // PROTOCOL_ENGINEERING</span>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-white">{activeStep.title}</h2>
                 </div>
                 <button onClick={handleClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white">
                   <X className="h-5 w-5" />
                 </button>
              </div>

              <div className="space-y-6">
                 <div className="space-y-2">
                    <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest flex items-center gap-2">
                      <Info className="h-3 w-3" /> DEFINIÇÃO_TÉCNICA
                    </span>
                    <p className="text-sm text-white/70 leading-relaxed font-mono">
                      {activeStep.what}
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 p-4 bg-white/5 border border-white/5 rounded-xl">
                      <span className="text-[8px] text-[#00FF88] font-bold uppercase tracking-widest block mb-1">PROPOSTA_VALOR</span>
                      <p className="text-[11px] text-white/50 leading-snug italic">
                        {activeStep.why}
                      </p>
                    </div>
                    <div className="space-y-2 p-4 bg-white/5 border border-white/5 rounded-xl">
                      <span className="text-[8px] text-blue-400 font-bold uppercase tracking-widest block mb-1">DIFERENCIAL_ESTRATÉGICO</span>
                      <p className="text-[11px] text-white/50 leading-snug">
                        {activeStep.advantage}
                      </p>
                    </div>
                 </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                 <div className="flex gap-2">
                    <button 
                      disabled={currentStep === 0}
                      onClick={prev}
                      className="p-3 border border-white/10 rounded-xl disabled:opacity-20 hover:bg-white/5 transition-colors text-white"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={next}
                      className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-white"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                 </div>
                 
                 <button 
                  onClick={next} 
                  className="bg-white text-black font-black px-6 py-3 rounded-xl flex items-center gap-3 text-[10px] tracking-widest uppercase hover:bg-[#00FF88] transition-all group"
                 >
                   {currentStep === steps.length - 1 ? "FINALIZAR_TOUR" : "PRÓXIMO_MÓDULO"}
                   <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>

            <div className="px-8 pb-4 flex items-center gap-2 opacity-20 pointer-events-none">
               <Shield className="h-3 w-3 text-white" />
               <span className="text-[8px] uppercase tracking-widest font-mono text-white">Themis/EditalShield Validated Narrative Layer</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
