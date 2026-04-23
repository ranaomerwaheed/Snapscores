import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, MessageCircle, InfinityIcon } from 'lucide-react';

interface WhyUsProps {
  isDark: boolean;
  t: any;
}

export const WhyUs = ({ isDark, t }: WhyUsProps) => {
  return (
    <section id="services" className={`py-32 px-6 relative section-divider bg-dark-brown`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight text-white">{t.why.title}</h2>
          <div className="w-32 h-1.5 bg-accent-gold mx-auto rounded-full shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {t.why.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[2.5rem] group border border-accent-gold/10 hover:border-accent-gold/50 transition-all duration-500 relative overflow-hidden glow-card neon-border bg-rich-brown/20`}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-accent-gold/10 transition-colors bg-accent-gold/5`}></div>
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg bg-accent-gold/10 text-accent-gold`}>
                {i === 0 ? <ShieldCheck className="w-10 h-10" /> : i === 1 ? <Zap className="w-10 h-10" /> : <InfinityIcon className="w-10 h-10" />}
              </div>
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-accent-gold transition-colors">{item.title}</h3>
              <p className="text-warm-tan/60 leading-relaxed text-lg font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
