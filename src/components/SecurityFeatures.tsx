import React from 'react';
import { Shield, Smartphone, Globe } from 'lucide-react';

export const SecurityFeatures = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-snap-yellow/30 transition-all">
        <Shield className="w-8 h-8 text-snap-yellow mb-4" />
        <h4 className="text-sm font-black uppercase tracking-widest mb-2 italic">Virtual Session Sandbox</h4>
        <p className="text-[10px] text-gray-500 leading-relaxed">
          Our system uses "One-Time Virtual Sessions". As soon as the work is finished, your data is automatically "burned" from our servers.
        </p>
      </div>
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-snap-yellow/30 transition-all">
        <Smartphone className="w-8 h-8 text-snap-yellow mb-4" />
        <h4 className="text-sm font-black uppercase tracking-widest mb-2 italic">Device Spoofing</h4>
        <p className="text-[10px] text-gray-500 leading-relaxed">
          We use real device signatures (iPhone 15, Samsung S24) to ensure all boosts appear 100% organic to platform algorithms.
        </p>
      </div>
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-snap-yellow/30 transition-all">
        <Globe className="w-8 h-8 text-snap-yellow mb-4" />
        <h4 className="text-sm font-black uppercase tracking-widest mb-2 italic">IP-Residential Shield</h4>
        <p className="text-[10px] text-gray-500 leading-relaxed">
          All connections are routed through high-quality residential proxies in Saudi Arabia, UAE, and USA for maximum safety.
        </p>
      </div>
    </div>
  );
};
