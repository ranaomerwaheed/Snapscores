import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface PremiumServicesProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  setShopTab: (tab: any) => void;
}

export const PremiumServices = ({ isDark, lang, t, setView, setShopTab }: PremiumServicesProps) => {
  return (
    <section className={`py-32 px-6 relative section-divider ${isDark ? "bg-matte-black" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
              {t.services.title} <br />
              <span className="text-snap-yellow">{t.services.titleHighlight}</span> <br />
              <span className="text-2xl lg:text-4xl block mt-4 text-white/80">{t.services.subtitle}</span>
            </h2>
            <div className="space-y-8">
              {t.services.items.map((service: any, i: number) => (
                <motion.div
                  key={i}
                  whileHover={{ x: lang === 'ar' ? -10 : 10, scale: 1.02 }}
                  onClick={() => {
                    setView('shop');
                    setShopTab('services');
                  }}
                  className={`flex gap-8 p-8 rounded-[2rem] border transition-all cursor-pointer group/service glow-card neon-border ${
                    i === 0 ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50' : 
                    i === 1 ? 'bg-purple-600/5 border-purple-500/20 hover:border-purple-500/50' : 
                    'bg-orange-600/5 border-orange-500/20 hover:border-orange-500/50'
                  }`}
                >
                  <div className={`flex-shrink-0 p-4 rounded-2xl h-fit transition-colors shadow-lg ${
                    i === 0 ? 'bg-blue-500/10 text-blue-400 group-hover/service:bg-blue-500 group-hover/service:text-white' : 
                    i === 1 ? 'bg-purple-500/10 text-purple-400 group-hover/service:bg-purple-500 group-hover/service:text-white' : 
                    'bg-orange-500/10 text-orange-400 group-hover/service:bg-orange-500 group-hover/service:text-white'
                  }`}>{service.icon}</div>
                  <div>
                    <h4 className="text-2xl font-black mb-3 group-hover:text-snap-yellow transition-colors">{service.title}</h4>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
              <img
                src="https://picsum.photos/seed/snapchat-luxury/1000/1250"
                alt="Premium Snapchat Services"
                className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 w-56 h-56 glass rounded-[2.5rem] p-8 flex flex-col justify-center border-snap-yellow/40 backdrop-blur-2xl"
            >
              <Star className="w-12 h-12 text-snap-yellow fill-snap-yellow mb-4" />
              <div className="text-white font-black text-4xl mb-1 tracking-tighter">100%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-snap-yellow font-bold">Safe & Verified</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
