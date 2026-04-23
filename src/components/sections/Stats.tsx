import React from 'react';
import { motion } from 'motion/react';

interface StatsProps {
  isDark: boolean;
  t: any;
}

export const Stats = ({ isDark, t }: StatsProps) => {
  return (
    <section className={`py-20 px-6 relative overflow-hidden section-divider bg-dark-brown border-y border-accent-gold/10`}>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 via-rich-brown/5 to-accent-gold/5 opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {t.stats.items.map((stat: any, i: number) => {
            const colors = [
              'from-accent-gold to-warm-tan',
              'from-accent-gold to-white',
              'from-warm-tan to-accent-gold',
              'from-white to-accent-gold'
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className={`text-5xl lg:text-7xl font-black mb-2 tracking-tighter bg-gradient-to-br ${colors[i % colors.length]} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-warm-tan/40 uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                <div className={`mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${colors[i % colors.length]} opacity-20 group-hover:opacity-100 group-hover:w-24 transition-all duration-500 shadow-[0_0_10px_currentColor]`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
