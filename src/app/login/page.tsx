"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Shield, Cpu, ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "verifying" | "error">("idle");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("verifying");

    // Strategic Master Token (Mock for demonstration, in production use actual auth)
    if (token === "SH1W4-PROTO-2026") {
      // Set secure cookie (client-side mock for now)
      document.cookie = "protocol-auth=authorized; path=/";
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } else {
      setTimeout(() => {
        setStatus("error");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#F3F3F3] font-sans flex items-center justify-center p-6 selection:bg-[#00FF88] selection:text-black">
      <div className="absolute inset-0 matrix-grid opacity-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md space-y-12 relative z-10"
      >
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.1)]">
              <Shield className="h-8 w-8 text-[#00FF88]" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight uppercase font-mono">Protocol Access</h1>
            <p className="text-sm text-muted-foreground uppercase font-mono tracking-widest">Authorized Personnel Only</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-[#00FF88] transition-colors" />
              <input
                type="password"
                placeholder="NÍVEL DE ACESSO: CREDENCIAL DE ENGENHARIA"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-[10px] font-mono focus:outline-none focus:border-[#00FF88]/50 focus:ring-1 focus:ring-[#00FF88]/50 transition-all placeholder:text-white/20 uppercase tracking-widest"
                autoFocus
              />
            </div>
            {status === "error" && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-[10px] uppercase font-mono tracking-tighter"
              >
                Falha na validação de integridade. Handshake negado.
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "verifying"}
            className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#00FF88] transition-all group disabled:opacity-50 text-[10px] tracking-[0.2em]"
          >
            {status === "verifying" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                EFETUAR HANDSHAKE DE SEGURANÇA
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase font-mono">
            <Cpu className="h-3 w-3" />
            <span>Criptografia via Validador de Camada 1</span>
          </div>
          <p className="text-[9px] text-muted-foreground/50 text-center uppercase tracking-tighter max-w-[280px]">
            Tentativas de acesso não autorizado são registradas na rede de confiança soberana.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
