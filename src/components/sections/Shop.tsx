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
  TrendingUp 
} from 'lucide-react';
import { accountCategories, servicesList } from '../../constants';

interface ShopProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  shopTab: 'accounts' | 'services';
  setShopTab: (tab: 'accounts' | 'services') => void;
  setSelectedCategory: (cat: string) => void;
  setSelectedService: (service: any) => void;
  addToCart: (item: any) => void;
}

export const Shop = ({ 
  isDark, 
  lang, 
  t, 
  setView, 
  shopTab, 
  setShopTab, 
  setSelectedCategory, 
  setSelectedService,
  addToCart 
}: ShopProps) => {
  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-matte-black" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-black mb-6 uppercase tracking-widest"
          >
            <ShoppingBag className="w-4 h-4" />
            {lang === 'ar' ? 'متجر سناب شات الاحترافي' : 'PREMIUM SNAPCHAT SHOP'}
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            {t.shop.title} <span className="text-snap-yellow">{t.shop.titleHighlight}</span>
          </h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto mb-8">{t.shop.subtitle}</p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-snap-yellow font-black text-2xl glow-text">{t.shop.choosePackage}</span>
            <span className="text-gray-500 font-bold text-sm uppercase tracking-widest">{t.shop.choosePackageDesc}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className={`p-2 rounded-2xl flex gap-2 border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
            <button
              onClick={() => setShopTab('accounts')}
              className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                shopTab === 'accounts' ? 'bg-snap-yellow text-black shadow-lg' : 'text-gray-500 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              {t.shop.tabs.accounts}
            </button>
            <button
              onClick={() => setShopTab('services')}
              className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                shopTab === 'services' ? 'bg-snap-yellow text-black shadow-lg' : 'text-gray-500 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              {t.shop.tabs.services}
            </button>
          </div>
        </div>

        {/* Content */}
        {shopTab === 'accounts' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {accountCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setView('category-detail');
                  window.scrollTo(0, 0);
                }}
                className={`p-10 rounded-[3rem] border transition-all group cursor-pointer relative overflow-hidden glow-card neon-border ${
                  cat.color === 'blue' ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50' : 
                  cat.color === 'purple' ? 'bg-purple-600/5 border-purple-500/20 hover:border-purple-500/50' : 
                  cat.color === 'orange' ? 'bg-orange-600/5 border-orange-500/20 hover:border-orange-500/50' :
                  'bg-green-600/5 border-green-500/20 hover:border-green-500/50'
                }`}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-white/10 transition-colors ${
                  cat.color === 'blue' ? 'bg-blue-500/10' : 
                  cat.color === 'purple' ? 'bg-purple-500/10' : 
                  cat.color === 'orange' ? 'bg-orange-500/10' :
                  'bg-green-500/10'
                }`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg ${
                    cat.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 
                    cat.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 
                    cat.color === 'orange' ? 'bg-orange-600/10 text-orange-400' :
                    'bg-green-500/10 text-green-400'
                  }`}>
                    {React.cloneElement(cat.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-snap-yellow transition-colors">{(cat.title as any)[lang]}</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">{(cat.desc as any)[lang]}</p>
                  <div className="flex items-center gap-2 text-snap-yellow font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                    {lang === 'ar' ? 'عرض الكل' : 'View Catalog'}
                    <ChevronRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[3rem] border transition-all group relative overflow-hidden glow-card neon-border ${
                  (service as any).color === 'blue' ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50' : 
                  (service as any).color === 'purple' ? 'bg-purple-600/5 border-purple-500/20 hover:border-purple-500/50' : 
                  'bg-orange-600/5 border-orange-500/20 hover:border-orange-500/50'
                }`}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-white/10 transition-colors ${
                  (service as any).color === 'blue' ? 'bg-blue-500/10' : 
                  (service as any).color === 'purple' ? 'bg-purple-500/10' : 
                  'bg-orange-500/10'
                }`}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ${
                      (service as any).color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 
                      (service as any).color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 
                      'bg-orange-600/10 text-orange-400'
                    }`}>
                      {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{lang === 'ar' ? 'يبدأ من' : 'Starts From'}</div>
                      <div className="text-white font-black text-3xl tabular-nums glow-text">${service.price}</div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-4 group-hover:text-snap-yellow transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">{(service.desc as any)[lang]}</p>
                  
                  <div className="space-y-3 mb-10">
                    {((service as any).features || []).map((f: string, j: number) => (
                      <div key={j} className="flex items-center gap-3 text-xs font-bold text-gray-300">
                        <BadgeCheck className="w-4 h-4 text-snap-yellow" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(service);
                      setView('service-detail');
                      window.scrollTo(0, 0);
                    }}
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105 ${
                      (service as any).color === 'blue' ? 'bg-blue-500 text-white shadow-blue-500/20' : 
                      (service as any).color === 'purple' ? 'bg-purple-500 text-white shadow-purple-500/20' : 
                      'bg-orange-500 text-white shadow-orange-500/20'
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {t.shop.addToCart}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
