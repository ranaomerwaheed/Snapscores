import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Link, Share2 } from 'lucide-react';
import { accountCategories } from '../../constants';

interface CatalogCategoriesProps {
  isDark: boolean;
  lang: string;
  setView: (view: any) => void;
  setSelectedCategory: (cat: string) => void;
}

export const CatalogCategories = ({ isDark, lang, setView, setSelectedCategory }: CatalogCategoriesProps) => {
  return (
    <section id="catalog" className={`py-32 px-6 relative overflow-hidden section-divider ${isDark ? "bg-matte-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter glow-text">
            {lang === 'ar' ? 'تصنيفات' : 'Account'} <span className="text-snap-yellow">{lang === 'ar' ? 'الحسابات' : 'Categories'}</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium">{lang === 'ar' ? 'اختر نوع الحساب الذي تبحث عنه' : 'Choose the type of account you are looking for'}</p>
          <div className="w-32 h-1.5 bg-snap-yellow mx-auto rounded-full mt-8 shadow-[0_0_15px_rgba(255,252,0,0.5)]"></div>
        </div>

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
      </div>
    </section>
  );
};
