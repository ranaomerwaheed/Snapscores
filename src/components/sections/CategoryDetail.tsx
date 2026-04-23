import React from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  BadgeCheck, 
  Star, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  History, 
  Package, 
  Users, 
  TrendingUp,
  ChevronLeft
} from 'lucide-react';
import { accountCategories, agedAccountsStock, verifiedAccountsStock, scoreAccountsStock, followerAccountsStock } from '../../constants';
import { BackButton } from '../ui/BackButton';

interface CategoryDetailProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  selectedCategory: string;
  addToCart: (item: any) => void;
}

export const CategoryDetail = ({ 
  isDark, 
  lang, 
  t, 
  setView, 
  selectedCategory, 
  addToCart 
}: CategoryDetailProps) => {
  const category = accountCategories.find(c => c.id === selectedCategory);
  
  const getStock = () => {
    switch(selectedCategory) {
      case 'aged': return agedAccountsStock;
      case 'verified': return verifiedAccountsStock;
      case 'snapscore': return scoreAccountsStock;
      case 'follower': return followerAccountsStock;
      default: return [];
    }
  };

  const stock = getStock();

  if (!category) return null;

  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        <BackButton onClick={() => setView('shop')} lang={lang} />

        {/* Category Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${
              category.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 
              category.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 
              category.color === 'orange' ? 'bg-orange-500/10 text-orange-400' :
              'bg-green-500/10 text-green-400'
            }`}>
              {React.cloneElement(category.icon as React.ReactElement<any>, { className: "w-10 h-10" })}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
              {(category.title as any)[lang]}
            </h1>
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-lg mb-8">
              {(category.desc as any)[lang]}
            </p>
            <div className="flex flex-col items-start gap-2 mb-10">
              <span className="text-snap-yellow font-black text-2xl glow-text">{t.shop.choosePackage}</span>
              <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">{t.shop.choosePackageDesc}</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-gray-400">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                100% Secure
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-gray-400">
                <BadgeCheck className="w-4 h-4 text-snap-yellow" />
                Verified Stock
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-video rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl group"
          >
            <img
              src={`https://picsum.photos/seed/snapchat-${selectedCategory}/1200/800`}
              alt={(category.title as any)[lang]}
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Stock Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stock.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[3rem] border transition-all group relative overflow-hidden ${
                category.color === 'blue' ? 'bg-blue-600/10 border-blue-500/20 hover:border-blue-500/50' : 
                category.color === 'purple' ? 'bg-purple-600/10 border-purple-500/20 hover:border-purple-500/50' : 
                category.color === 'orange' ? 'bg-orange-600/10 border-orange-500/20 hover:border-orange-500/50' :
                'bg-green-600/10 border-green-500/20 hover:border-green-500/50'
              }`}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-white/10 transition-colors ${
                category.color === 'blue' ? 'bg-blue-500/10' : 
                category.color === 'purple' ? 'bg-purple-500/10' : 
                category.color === 'orange' ? 'bg-orange-500/10' :
                'bg-green-500/10'
              }`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                    category.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 
                    category.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 
                    category.color === 'orange' ? 'bg-orange-600/10 text-orange-400' :
                    'bg-green-500/10 text-green-400'
                  }`}>
                    {React.cloneElement(category.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                  </div>
                  <div className="text-right">
                    <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{lang === 'ar' ? 'السعر' : 'Price'}</div>
                    <div className="text-white font-black text-3xl tabular-nums">${item.price}</div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-snap-yellow transition-colors">{(item as any).amount || ((item as any).title as any)?.[lang]}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">{(item.desc as any)[lang]}</p>
                
                <div className="space-y-3 mb-10">
                  {((item as any).features || []).map((f: string, j: number) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-gray-300">
                      <BadgeCheck className="w-4 h-4 text-snap-yellow" />
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => addToCart({ ...item, title: (item as any).amount || ((item as any).title as any)?.[lang] })}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                    category.color === 'blue' ? 'bg-blue-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)]' : 
                    category.color === 'purple' ? 'bg-purple-500 text-white shadow-[0_10px_30px_rgba(168,85,247,0.3)]' : 
                    category.color === 'orange' ? 'bg-orange-500 text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)]' :
                    'bg-green-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)]'
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {t.shop.addToCart}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
