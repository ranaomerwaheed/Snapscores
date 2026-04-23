import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  ShoppingBag, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  BadgeCheck,
  Ghost
} from 'lucide-react';

interface HeroProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  score: number;
}

export const Hero = ({ isDark, lang, t, setView, score }: HeroProps) => {
  return (
    <section className={`relative pt-48 pb-24 px-6 overflow-hidden section-divider bg-dark-brown`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent-gold/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-rich-brown/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-[10px] font-black mb-8 uppercase tracking-widest shadow-lg backdrop-blur-md">
            <div className="w-4 h-4 rounded-full bg-accent-gold flex items-center justify-center text-dark-brown">
              <Star className="w-2.5 h-2.5 fill-current" />
            </div>
            {lang === 'ar' ? 'الخدمة رقم 1 عالمياً' : '#1 Trusted Service Worldwide'}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-8 tracking-tighter uppercase">
            <span className="text-white">Boost Your</span><br />
            <span className="text-accent-gold glow-text">Snapchat</span><br />
            <span className="text-white">Presence</span><br />
            <span className="text-accent-gold glow-text">Instantly</span>
          </h1>

          <p className="text-lg mb-12 max-w-xl leading-relaxed font-medium text-warm-tan/60">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <button
              onClick={() => setView('shop')}
              className="px-10 py-5 bg-accent-gold text-dark-brown font-black rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(197,160,89,0.3)] flex items-center gap-3 group text-base uppercase tracking-tighter"
            >
              <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {t.hero.cta}
            </button>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px]">
                <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <span>{t.hero.protection}</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-accent-gold fill-accent-gold" />)}
                <span className="text-[10px] text-warm-tan/40 ml-2 font-black uppercase tracking-widest">5,000+ Happy Clients</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`relative flex justify-center ${lang === 'ar' ? 'lg:justify-start' : 'lg:justify-end'}`}
        >
          <div className="relative w-80 h-[600px] bg-dark-brown rounded-[3.5rem] border-[12px] border-rich-brown shadow-2xl overflow-hidden">
            {/* Phone Screen */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/5 to-dark-brown p-8 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-accent-gold rounded-3xl mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                <Zap className="w-12 h-12 text-dark-brown fill-current" />
              </div>
              
              <div className="text-warm-tan/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Snap Score</div>
              <div className="text-6xl font-black text-white tabular-nums tracking-tighter mb-8">
                129,134
              </div>

              <div className="w-full space-y-4">
                <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    animate={{ width: ["10%", "85%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full bg-accent-gold shadow-[0_0_15px_rgba(197,160,89,0.5)]"
                  />
                </div>
                <div className="text-[11px] font-black text-warm-tan/40 uppercase tracking-widest animate-pulse">
                  Boosting in progress...
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-gold/10 blur-[120px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
