import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  isDark: boolean;
  t: any;
}

export const FAQ = ({ isDark, t }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={`py-32 px-6 relative section-divider ${isDark ? "bg-matte-black" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight glow-text">{t.faq.title}</h2>
          <div className="w-32 h-1.5 bg-snap-yellow mx-auto rounded-full shadow-[0_0_15px_rgba(255,252,0,0.5)]"></div>
        </div>

        <div className="space-y-6">
          {t.faq.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl border transition-all overflow-hidden glow-card ${
                openIndex === i 
                  ? 'bg-snap-yellow/10 border-snap-yellow/50 shadow-[0_10px_30px_rgba(255,252,0,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
              >
                <span className={`text-xl font-black transition-colors ${openIndex === i ? 'text-snap-yellow' : 'text-white'}`}>
                  {item.q}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-lg ${openIndex === i ? 'bg-snap-yellow text-black rotate-180' : 'bg-white/10 text-white'}`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed font-medium text-lg border-t border-white/5 pt-6">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
