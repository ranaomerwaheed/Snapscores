import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const OrderConsole = ({ amount, isDark }: { amount: string; isDark: boolean }) => {
  const [lines, setLines] = useState<{ text: string; color: string; done: boolean }[]>([]);
  const [phase, setPhase] = useState(0);

  const script = [
    { text: '> Initializing Secure Session...', color: '#60a5fa', delay: 0 },
    { text: '> Connecting to Processing Network...', color: '#60a5fa', delay: 600 },
    { text: '  ✓ Network Connected [Latency: 4ms]', color: '#4ade80', delay: 1200 },
    { text: '> Validating Account Credentials...', color: '#facc15', delay: 1800 },
    { text: '  ✓ Credentials Verified [Encrypted]', color: '#4ade80', delay: 2400 },
    { text: `> Starting Score Injection [+${amount}]...`, color: '#facc15', delay: 3000 },
    { text: '  ⚡ Processing Batch #1... [+5,000]', color: '#fb923c', delay: 3600 },
    { text: '  ⚡ Processing Batch #2... [+10,000]', color: '#fb923c', delay: 4200 },
    { text: '  ⚡ Processing Batch #3... [+10,000]', color: '#fb923c', delay: 4800 },
    { text: '> Running Safety Verification...', color: '#a78bfa', delay: 5400 },
    { text: '  ✓ Account Status: SAFE [No Flags]', color: '#4ade80', delay: 6000 },
    { text: '  ✓ Session Burned [Data Cleared]', color: '#4ade80', delay: 6600 },
    { text: '> Order Status: COMPLETE ✓', color: '#facc15', delay: 7200 },
  ];

  useEffect(() => {
    setLines([]);
    setPhase(0);
    script.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, { text: line.text, color: line.color, done: true }]);
        setPhase(i);
      }, line.delay);
    });
  }, [amount]);

  return (
    <div className="rounded-2xl overflow-hidden border border-green-500/20" style={{ background: '#050d05', fontFamily: 'monospace' }}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-green-500/15" style={{ background: '#081008' }}>
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="text-green-500/50 text-[10px] ml-3 font-bold uppercase tracking-widest">SnapScore Engine — Order Console</span>
        <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}
          className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-green-400 text-[10px] font-bold">LIVE</span>
        </motion.div>
      </div>

      {/* Console body */}
      <div className="p-4 h-52 overflow-y-auto space-y-1" style={{ scrollbarWidth: 'thin', scrollbarColor: '#1a3a1a transparent' }}>
        {lines.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            className="text-[11px] leading-relaxed font-mono" style={{ color: line.color }}>
            {line.text}
          </motion.div>
        ))}
        {/* Cursor blink */}
        <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.7, repeat: Infinity }}
          className="text-green-400 text-[11px]">▋</motion.div>
      </div>

      {/* Progress bar */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between text-[10px] text-green-600 mb-1">
          <span>Processing...</span>
          <span>{Math.min(100, Math.round((phase / (script.length - 1)) * 100))}%</span>
        </div>
        <div className="h-1 bg-green-900/40 rounded-full overflow-hidden">
          <motion.div className="h-full bg-green-400 rounded-full"
            animate={{ width: `${Math.min(100, Math.round((phase / (script.length - 1)) * 100))}%` }}
            transition={{ duration: 0.5 }} />
        </div>
      </div>
    </div>
  );
};
