import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingBag, Link } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ProductDetail = ({ product, lang, onBack, onBuy }: { product: any, lang: string, onBack: () => void, onBuy: (p: any) => void }) => {
  const desc = lang === 'ar' ? (product.desc.ar || product.desc.en) : product.desc.en;

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
            <div className="w-full lg:w-1/2 aspect-square rounded-[2.5rem] bg-gradient-to-br from-snap-yellow/20 to-transparent border-2 border-snap-yellow/30 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,252,0,0.1)_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="text-center relative z-10">
                <div className="text-7xl lg:text-9xl font-black text-snap-yellow mb-4 drop-shadow-[0_0_30px_rgba(255,252,0,0.5)]">
                  {product.amount}
                </div>
                <div className="text-xl lg:text-2xl font-black text-white uppercase tracking-widest opacity-60">
                  {product.type === 'Score Account' ? (lang === 'ar' ? 'سكور' : 'Score') : (lang === 'ar' ? 'متابع' : 'Followers')}
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <h1 className="text-4xl lg:text-6xl font-black mb-8 italic text-white uppercase tracking-tighter">
                {product.type} {product.amount}
              </h1>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="block text-gray-500 text-xs uppercase font-black mb-2">{lang === 'ar' ? 'السعر' : 'Price'}</span>
                  <span className="text-2xl font-black text-snap-yellow">{product.price}</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="block text-gray-500 text-xs uppercase font-black mb-2">{lang === 'ar' ? 'وقت التسليم' : 'Delivery'}</span>
                  <span className="text-2xl font-black text-white">{product.deliveryTime}</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="block text-gray-500 text-xs uppercase font-black mb-2">{lang === 'ar' ? 'سنة الإنشاء' : 'Account Age'}</span>
                  <span className="text-2xl font-black text-white">{product.age}</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="block text-gray-500 text-xs uppercase font-black mb-2">
                    {product.type === 'Score Account' ? (lang === 'ar' ? 'المتابعين' : 'Followers') : (lang === 'ar' ? 'السكور' : 'Score')}
                  </span>
                  <span className="text-2xl font-black text-white">
                    {product.type === 'Score Account' ? product.followers : product.score}
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-12 font-medium">
                {desc}
              </p>

              <div className="flex flex-col lg:flex-row gap-6">
                <button 
                  onClick={() => onBuy(product)}
                  className="flex-1 px-12 py-6 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_10px_40px_rgba(255,252,0,0.3)] flex items-center justify-center gap-3 text-xl"
                >
                  <ShoppingBag className="w-6 h-6" />
                  {lang === 'ar' ? 'اشترِ الآن' : 'Buy Now'}
                </button>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      const text = `${product.type} ${product.amount}\n\n${window.location.href}`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="w-16 h-16 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-all shadow-lg hover:-translate-y-1"
                  >
                    <WhatsAppIcon className="w-8 h-8" />
                  </button>
                  <button 
                    onClick={() => {
                      const url = window.location.href;
                      navigator.clipboard.writeText(url);
                      alert(lang === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!');
                    }}
                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-lg hover:-translate-y-1"
                  >
                    <Link className="w-6 h-6 text-snap-yellow" />
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
