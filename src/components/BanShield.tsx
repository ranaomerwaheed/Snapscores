import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const BanShield = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md border-y border-white/5 py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
        <ShieldCheck className="w-4 h-4 text-snap-yellow animate-pulse" />
        <span className="text-white/40">BAN-SHIELD STATUS:</span>
        <span className="text-green-400">100% PROTECTED</span>
        <span className="text-white/20">|</span>
        <span className="text-white/40">CURRENT ALGORITHM:</span>
        <span className="text-snap-yellow font-bold">BYPASSED</span>
        <span className="text-white/20">|</span>
        <span className="text-white/40">LAST SYNC:</span>
        <span className="text-white">12 SECONDS AGO</span>
      </div>
    </div>
  );
};
