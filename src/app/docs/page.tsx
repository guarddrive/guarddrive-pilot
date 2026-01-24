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
    <div className="min-h-screen bg-void text-foreground p-8 font-mono matrix-grid">
      <div className="mb-8 flex justify-between items-end border-b border-bio-green/20 pb-4">
        <div>
          <Link href="/" className="text-bio-green text-xs hover:underline decoration-bio-green mb-2 block">← RETURN TO OPERATIONAL VIEW</Link>
          <h1 className="text-2xl font-bold uppercase tracking-tighter">Sovereign Knowledge Base</h1>
        </div>
        <div className="text-[10px] text-muted-foreground uppercase opacity-50">Authorized Personnel Only</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc) => (
          <div key={doc.title} className="bg-card border border-border hover:border-bio-green/50 transition-all p-6 rounded-lg group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[9px] bg-bio-green/10 text-bio-green px-2 py-0.5 rounded">{doc.tag}</span>
              <doc.icon className="h-5 w-5 text-bio-green/40 group-hover:text-bio-green transition-colors" />
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-bio-green">{doc.title}</h3>
            <p className="text-xs text-muted-foreground mb-6 h-10">{doc.desc}</p>
            <button className="flex items-center gap-2 text-[10px] bg-bio-green text-black px-4 py-2 font-bold hover:bg-bio-green/80 transition-colors w-full justify-center">
              <Download className="h-3 w-3" /> ACCESS DOCUMENT
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 border border-dashed border-muted-foreground/20 rounded-lg">
        <h4 className="text-sm font-bold mb-2 opacity-60 flex items-center gap-2">
          <ShieldCheck className="h-3 w-3" /> SECURITY_NOTICE.LOG
        </h4>
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          Proprietary Layer 1 algorithms (Symbeon Validator) are not hosted on public endpoints. 
          To request full technical audit, initiate Handshake Protocol with GuardDrive CTO.
          All downloads are watermarked with your session ID.
        </p>
      </div>
    </div>
  );
}
