import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const BanShieldBar = ({ isDark, lang }: { isDark: boolean; lang: string }) => {
  const [syncTime, setSyncTime] = useState(12);
  const [protectedPct, setProtectedPct] = useState(100);

  useEffect(() => {
    const t = setInterval(() => {
      setSyncTime(s => s >= 60 ? 0 : s + 1);
      setProtectedPct(p => p < 100 ? p + 1 : 100);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const items = [
    { icon: '🛡️', text: lang === 'ar' ? `الحماية: ${protectedPct}%` : `BAN-SHIELD: ${protectedPct}% ACTIVE` },
    { icon: '🔒', text: lang === 'ar' ? 'جلسة مشفرة' : 'SESSION: ENCRYPTED' },
    { icon: '📡', text: lang === 'ar' ? 'خوادم متصلة: 4,129' : 'SECURE TUNNELS: 4,129' },
    { icon: '⚙️', text: lang === 'ar' ? `آخر تحديث: ${syncTime} ثانية` : `LAST SYNC: ${syncTime}s AGO` },
    { icon: '✅', text: lang === 'ar' ? 'جميع الأنظمة تعمل' : 'ALL SYSTEMS OPERATIONAL' },
  ];

  return (
    <div className="overflow-hidden py-2 glass-premium"
      style={{ borderBottom: '1px solid rgba(34,197,94,0.1)', borderTop: '1px solid rgba(34,197,94,0.05)' }}>
      <div className="flex items-center gap-0">
        <div className="flex-shrink-0 px-6 py-1 border-r border-green-500/20 flex items-center gap-2 bg-green-500/5">
          <motion.div animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="text-green-500 font-black text-[9px] uppercase tracking-[0.3em] whitespace-nowrap">SHIELD ACTIVE</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap">
            {[...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-1 border-r border-green-500/5 group hover:bg-green-500/5 transition-colors">
                <span className="text-xs group-hover:scale-125 transition-transform">{item.icon}</span>
                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
