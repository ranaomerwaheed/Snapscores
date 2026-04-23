import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Package, ShieldCheck, Zap, Globe, MapPin, Smartphone, Lock, Clock, Shield } from 'lucide-react';
import { OrderConsole } from '../ui/OrderConsole';
import { SecurityFeatures } from './SecurityFeatures';
import { GhostLoginHistory } from './GhostLoginHistory';

interface TrackingPageProps {
  isDark: boolean;
  lang: string;
  t: any;
}

export const TrackingPage = ({ isDark, lang, t }: TrackingPageProps) => {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = () => {
    if (!orderId.trim()) return;
    setIsTracking(true);
    setShowResult(false);
    setTimeout(() => {
      setIsTracking(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-black mb-6 uppercase tracking-widest"
          >
            <Zap className="w-4 h-4" />
            {lang === 'ar' ? 'تتبع فوري' : 'INSTANT TRACKING'}
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            {t.tracking.title} <span className="text-snap-yellow">{t.tracking.titleHighlight}</span>
          </h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">{t.tracking.subtitle}</p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className={`p-3 rounded-[2.5rem] flex items-center gap-3 border shadow-2xl transition-all ${
            isDark ? "bg-white/5 border-white/10 focus-within:border-snap-yellow/50" : "bg-white border-gray-200 focus-within:border-snap-yellow"
          }`}>
            <div className="pl-6 text-gray-500">
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              value={orderId}
              onChange={e => setOrderId(e.target.value)}
              placeholder={t.tracking.placeholder}
              className="flex-1 bg-transparent border-none outline-none text-white text-lg font-bold py-4"
            />
            <button
              onClick={handleTrack}
              disabled={isTracking}
              className="px-10 py-4 bg-snap-yellow text-black font-black rounded-[2rem] hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center gap-2"
            >
              {isTracking ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}><Zap className="w-5 h-5" /></motion.div> : <Zap className="w-5 h-5" />}
              {t.tracking.cta}
            </button>
          </div>
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="space-y-12"
            >
              {/* Main Status Card */}
              <div className={`grid lg:grid-cols-3 gap-8 p-10 rounded-[3.5rem] border ${
                isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
              }`}>
                <div className="lg:col-span-2 space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Order ID</div>
                      <div className="text-white font-black text-3xl tracking-tighter">#{orderId.toUpperCase()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Status</div>
                      <div className="px-5 py-2 bg-green-500/10 border border-green-500/30 text-green-400 font-black text-sm rounded-xl flex items-center gap-2">
                        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-green-400" />
                        IN PROGRESS
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span className="text-gray-400">Boosting Progress</span>
                      <span className="text-snap-yellow">64% Complete</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '64%' }}
                        className="h-full bg-gradient-to-r from-snap-yellow via-gold-accent to-snap-yellow rounded-full shadow-[0_0_15px_rgba(255,252,0,0.4)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      { label: 'Service', value: 'Score Boost' },
                      { label: 'Amount', value: '500,000' },
                      { label: 'Started', value: '2m ago' },
                      { label: 'Est. End', value: '14m' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-gray-600 text-[9px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-white font-black text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Console */}
                <div className="lg:col-span-1">
                  <OrderConsole amount="500,000" isDark={isDark} />
                </div>
              </div>

              {/* Ghost Login History */}
              <GhostLoginHistory isDark={isDark} lang={lang} />

              {/* Security Features Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-black uppercase tracking-tight">Elite Trust Security</h2>
                  <p className="text-gray-500 text-sm font-medium">How we keep your account 100% safe during the process</p>
                </div>
                <SecurityFeatures isDark={isDark} lang={lang} t={t} />
              </div>

              {/* Residential Shield Visualizer */}
              <div className={`p-10 rounded-[3.5rem] border ${
                isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
              }`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
                      <Globe className="w-4 h-4" />
                      IP-Residential Shield
                    </div>
                    <h3 className="text-4xl font-black mb-6 leading-tight">Your Traffic is Routed via <span className="text-orange-400">Residential Proxies</span></h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      To avoid detection, we use real home internet connections (Residential IPs) from around the world. This makes your boost look like it's coming from a real person's phone.
                    </p>
                    <div className="space-y-4">
                      {[
                        { label: 'Current Node', value: 'Riyadh, Saudi Arabia' },
                        { label: 'Proxy Type', value: 'Residential (ISP)' },
                        { label: 'Latency', value: '4ms' },
                        { label: 'Encryption', value: 'AES-256-GCM' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-white/5">
                          <span className="text-gray-500 text-sm font-bold">{item.label}</span>
                          <span className="text-white font-black text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-white/10 group">
                    <img
                      src="https://picsum.photos/seed/proxy-map/800/450"
                      alt="Proxy Map"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500/20 rounded-full"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border-orange-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-white font-black text-xs">Node #4129-SA</div>
                            <div className="text-[9px] text-gray-400 uppercase font-bold">Riyadh, KSA</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-black text-xs">ACTIVE</div>
                          <div className="text-[9px] text-gray-400 uppercase font-bold">4ms Latency</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
