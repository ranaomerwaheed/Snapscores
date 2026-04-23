import React from 'react';
import { motion } from 'motion/react';

export const UptimeGraph = () => {
  return (
    <div className="flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-500">
      <div className="flex items-end gap-0.5 h-8">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [Math.random() * 20 + 10, Math.random() * 20 + 10] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: i * 0.1 }}
            className="w-1 bg-snap-yellow/50 rounded-full"
          />
        ))}
      </div>
      <div className="text-[8px] font-mono uppercase tracking-[0.3em] text-gray-500 text-center">
        Engine: SnapScore-Core v6.1 | Uptime: 99.98% | Active Tunnels: 4,129
      </div>
    </div>
  );
};
