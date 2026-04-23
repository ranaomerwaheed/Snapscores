import React from 'react';
import { motion } from 'motion/react';

export const LiveTicker = () => {
  return (
    <div className="bg-snap-yellow text-black py-2 overflow-hidden whitespace-nowrap border-b border-black/10 z-[60] relative">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        <span className="mx-8 font-black uppercase tracking-widest text-xs">
          CURRENT BOOSTS: 1,402 | TODAY'S TOTAL: 14.8M POINTS | SYSTEM LOAD: 64% | NEXT SLOT: 2m 14s
        </span>
        <span className="mx-8 font-black uppercase tracking-widest text-xs">
          CURRENT BOOSTS: 1,402 | TODAY'S TOTAL: 14.8M POINTS | SYSTEM LOAD: 64% | NEXT SLOT: 2m 14s
        </span>
        <span className="mx-8 font-black uppercase tracking-widest text-xs">
          CURRENT BOOSTS: 1,402 | TODAY'S TOTAL: 14.8M POINTS | SYSTEM LOAD: 64% | NEXT SLOT: 2m 14s
        </span>
        <span className="mx-8 font-black uppercase tracking-widest text-xs">
          CURRENT BOOSTS: 1,402 | TODAY'S TOTAL: 14.8M POINTS | SYSTEM LOAD: 64% | NEXT SLOT: 2m 14s
        </span>
      </motion.div>
    </div>
  );
};
