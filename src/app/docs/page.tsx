"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Wait, I need to make sure UI components are available here too
import { FileText, Download, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

const docs = [
  {
    title: "Centelha/FAPESB Spec",
    desc: "Full project specification and implementation roadmap.",
    icon: ShieldCheck,
    tag: "GOVERNANCE",
  },
  {
    title: "Symbeon Protocol Whitepaper",
    desc: "The inner workings of the L1 validation engine.",
    icon: Cpu,
    tag: "TECHNICAL",
  },
  {
    title: "V2X Mesh Architecture",
    desc: "Anti-jammer communication protocol details.",
    icon: FileText,
    tag: "INFRASTRUCTURE",
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#F3F3F3] p-8 font-mono matrix-grid relative overflow-hidden selection:bg-[#00FF88] selection:text-black">
      
      {/* Navigation Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 gap-6">
        <div>
          <Link href="/dashboard" className="text-[#00FF88] text-[10px] hover:underline decoration-[#00FF88]/30 mb-4 block tracking-widest uppercase">
            [ BACK_TO_CONTROL_CENTER ]
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tighter leading-none flex items-center gap-4">
             <div className="w-2 h-8 bg-[#00FF88]" />
             Sovereign Knowledge Base
          </h1>
        </div>
        <div className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-bold">
          Access Level: Authorized // Protocol: 4.0.2
        </div>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {docs.map((doc) => (
          <div key={doc.title} className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:border-[#00FF88]/50 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <doc.icon className="h-12 w-12 text-[#00FF88]" />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <span className="text-[9px] text-[#00FF88] font-bold tracking-widest border border-[#00FF88]/20 px-2 py-0.5 rounded uppercase">
                   {doc.tag}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight pt-2">{doc.title}</h3>
              </div>
              
              <p className="text-xs text-white/50 leading-relaxed h-12">
                {doc.desc}
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                <div className="flex justify-between text-[8px] text-white/20 uppercase tracking-widest">
                   <span>ID: {Math.random().toString(16).substring(2,8).toUpperCase()}</span>
                   <span>Status: ENCRYPTED</span>
                </div>
                <button className="flex items-center justify-center gap-3 bg-white text-black px-6 py-3 font-bold text-[10px] tracking-widest uppercase hover:bg-[#00FF88] transition-all">
                  <Download className="h-3 w-3" /> 
                  Download_Asset
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Footer Note */}
      <div className="mt-16 p-8 bg-[#00FF88]/5 border border-[#00FF88]/20 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
        <div className="h-12 w-12 rounded-xl bg-[#00FF88]/10 flex items-center justify-center border border-[#00FF88]/20">
           <ShieldCheck className="h-6 w-6 text-[#00FF88]" />
        </div>
        <div className="space-y-2 flex-1">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00FF88]">Security Advisory: Protocol Locking Active</h4>
          <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider max-w-3xl">
            Proprietary Layer 1 algorithms (Symbeon Validator) are hosted off-chain to ensure IP lockdown. 
            Full technical audits require a physical neural handshake with the organization's CTO. 
            all downloads are cryptographically watermarked with session hash [AUTH_SHA256].
          </p>
        </div>
      </div>
    </div>
  );
}
