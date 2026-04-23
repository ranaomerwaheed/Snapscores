import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, CreditCard, RefreshCcw, ShieldCheck, ShoppingBag } from 'lucide-react';

export const ServiceDetail = ({ service, lang, onBack, onOrder }: { service: any, lang: string, onBack: () => void, onOrder: (s: any) => void }) => {
  const title = lang === 'ar' ? (service.arTitle || service.title) : service.title;
  const desc = lang === 'ar' ? (service.desc.ar || service.desc.en) : service.desc.en;

  return (
    <section className="pt-40 pb-24 px-6 min-h-screen bg-matte-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[3rem] border-white/10 overflow-hidden shadow-2xl p-8 lg:p-16"
        >
          <button 
            onClick={onBack}
            className="mb-12 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-snap-yellow hover:text-black transition-all shadow-lg"
          >
            <ChevronLeft className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-24 h-24 rounded-3xl bg-snap-yellow/20 flex items-center justify-center text-snap-yellow shrink-0 shadow-inner">
              {React.cloneElement(service.icon as React.ReactElement)}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-6xl font-black mb-6 italic text-white uppercase tracking-tighter">
                {title}
              </h1>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-snap-yellow" />
                  <span className="font-bold text-white">{service.price}</span>
                </div>
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <RefreshCcw className="w-5 h-5 text-snap-yellow" />
                  <span className="font-bold text-white">{service.deliveryTime}</span>
                </div>
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-snap-yellow" />
                  <span className="font-bold text-white">{service.guarantee}</span>
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 font-medium">
                {desc}
              </p>
              
              <div className="flex flex-col lg:flex-row gap-6 mb-12">
                <button 
                  onClick={() => onOrder(service)}
                  className="flex-1 px-12 py-6 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_10px_40px_rgba(255,252,0,0.3)] flex items-center justify-center gap-3 text-xl"
                >
                  <ShoppingBag className="w-6 h-6" />
                  {lang === 'ar' ? 'اطلب الآن عبر واتساب' : 'Order via WhatsApp'}
                </button>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      const text = `${title}\n\n${window.location.href}`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <RefreshCcw className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
