import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Shield, Smartphone, Globe, MapPin, Loader2 } from 'lucide-react';
import { SystemConsole } from './SystemConsole';
import { SecurityFeatures } from './SecurityFeatures';

export const TrackingPage = ({ lang, t }: any) => {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = () => {
    if (!orderId) return;
    setIsTracking(true);
    setTimeout(() => {
      setIsTracking(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic"
          >
            {t.tracking.title}
          </motion.h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            {t.tracking.subtitle}
          </p>
        </div>

        <div className="glass p-8 rounded-[2.5rem] border border-white/10 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder={t.tracking.placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 focus:border-snap-yellow outline-none transition-all font-bold"
              />
            </div>
            <button 
              onClick={handleTrack}
              disabled={isTracking}
              className="px-12 py-5 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isTracking ? <Loader2 className="animate-spin w-5 h-5" /> : t.tracking.button}
            </button>
          </div>
        </div>

        {showResult && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-[2.5rem] border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black uppercase italic">{t.tracking.status}</h3>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">{t.tracking.active}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Order ID</span>
                    <span className="text-xs font-black text-white">#SNAP-{orderId.slice(0, 8).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Service</span>
                    <span className="text-xs font-black text-snap-yellow">SCORE BOOST (1M+)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Progress</span>
                    <span className="text-xs font-black text-white">64% COMPLETE</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '64%' }}
                      className="h-full bg-snap-yellow shadow-[0_0_15px_rgba(255,252,0,0.5)]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] ml-4">{t.tracking.console}</h3>
                <SystemConsole />
              </div>
            </div>

            <div className="glass p-8 rounded-[2.5rem] border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <Globe className="w-6 h-6 text-snap-yellow" />
                <h3 className="text-xl font-black uppercase italic">{t.tracking.map}</h3>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <img 
                  src="https://picsum.photos/seed/worldmap/1200/800?grayscale" 
                  alt="Proxy Map" 
                  className="w-full h-full object-cover opacity-20"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-snap-yellow rounded-full"
                    />
                    <MapPin className="w-8 h-8 text-snap-yellow relative z-10" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-snap-yellow rounded-full"></div>
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Proxy Node: Riyadh, KSA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Tunnel: AES-256-GCM</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[24px] font-black text-white leading-none">42ms</div>
                    <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Latency</div>
                  </div>
                </div>
              </div>
            </div>

            <SecurityFeatures />
          </motion.div>
        )}
      </div>
    </div>
  );
};
