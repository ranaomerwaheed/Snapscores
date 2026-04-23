import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const LiveQueueTicker = ({ isDark, lang }: { isDark: boolean; lang: string }) => {
  const [boosts, setBoosts] = useState(1402);
  const [totalPts, setTotalPts] = useState(14.8);
  const [load, setLoad] = useState(64);
  const [nextSlot, setNextSlot] = useState(134); // seconds

  useEffect(() => {
    const t = setInterval(() => {
      setBoosts(b => b + Math.floor(Math.random() * 3));
      setTotalPts(p => Math.round((p + 0.1) * 10) / 10);
      setLoad(l => Math.max(55, Math.min(82, l + (Math.random() > 0.5 ? 1 : -1))));
      setNextSlot(s => s > 0 ? s - 1 : 180);
    }, 1500);
    return () => clearInterval(t);
  }, []);

  const mins = Math.floor(nextSlot / 60);
  const secs = nextSlot % 60;

  const items = [
    { label: 'ACTIVE BOOSTS', value: boosts.toLocaleString(), color: 'text-snap-yellow' },
    { label: "TODAY'S TOTAL", value: `${totalPts}M PTS`, color: 'text-green-400' },
    { label: 'SYSTEM LOAD', value: `${load}%`, color: 'text-blue-400' },
    { label: 'NEXT SLOT', value: `${mins}m ${secs.toString().padStart(2,'0')}s`, color: 'text-orange-400' },
    { label: 'ACTIVE USERS', value: '2,841', color: 'text-purple-400' },
    { label: 'COMPLETED TODAY', value: '384', color: 'text-emerald-400' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-[#06060f] border-b border-white/5 overflow-hidden flex items-center">
      <div className="flex-shrink-0 flex items-center gap-3 px-6 h-full bg-snap-yellow/5 border-r border-white/5">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        <span className="text-white font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">LIVE ENGINE</span>
      </div>

      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-0 whitespace-nowrap"
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-10 h-full border-r border-white/5">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{item.label}</span>
              <span className={`text-[11px] font-black tabular-nums ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
