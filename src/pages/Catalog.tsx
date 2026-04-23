import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Star, Users, Zap } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const Catalog = ({ 
  lang, 
  t, 
  view, 
  setView, 
  selectedCategory, 
  setSelectedProduct, 
  handleBuy, 
  accountCategories, 
  scoreAccountsStock, 
  followerAccountsStock, 
  agedAccountsStock, 
  verifiedAccountsStock,
  servicesList,
  openWhatsApp,
  getPackageColor
}: any) => {
  if (view === 'category-detail') {
    const category = accountCategories.find((c: any) => c.id === selectedCategory);
    const stock = selectedCategory === 'snapscore' ? scoreAccountsStock : 
                  selectedCategory === 'follower' ? followerAccountsStock : 
                  selectedCategory === 'aged' ? agedAccountsStock : 
                  verifiedAccountsStock;

    return (
      <section className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <button 
              onClick={() => setView('home')}
              className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-snap-yellow hover:text-black transition-all"
            >
              <ChevronLeft className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <div>
              <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter">
                {category?.title?.[lang]}
              </h1>
              <p className="text-gray-400 font-medium">
                {category?.desc?.[lang]}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stock.map((pkg: any, i: number) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-10 rounded-[3rem] border transition-all group relative overflow-hidden ${
                  selectedCategory === 'snapscore' ? 'bg-blue-600/10 border-blue-500/20 hover:border-blue-500/50' : 
                  selectedCategory === 'follower' ? 'bg-purple-600/10 border-purple-500/20 hover:border-purple-500/50' : 
                  selectedCategory === 'aged' ? 'bg-orange-600/10 border-orange-500/20 hover:border-orange-500/50' :
                  'bg-green-600/10 border-green-500/20 hover:border-green-500/50'
                }`}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-white/10 transition-colors ${
                  selectedCategory === 'snapscore' ? 'bg-blue-500/10' : 
                  selectedCategory === 'follower' ? 'bg-purple-500/10' : 
                  selectedCategory === 'aged' ? 'bg-orange-500/10' :
                  'bg-green-500/10'
                }`}></div>
                <div className="relative z-10">
                  <div className="text-xs font-black text-snap-yellow mb-4 tracking-[0.3em] uppercase">{pkg.desc[lang]}</div>
                  <div className="text-5xl font-black mb-6 group-hover:text-snap-yellow transition-colors tracking-tighter">
                    {pkg.amount} {selectedCategory === 'snapscore' ? 'Score' : selectedCategory === 'follower' ? 'Followers' : ''}
                  </div>
                  <div className="text-3xl font-bold text-white/90 mb-10">{pkg.price}</div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => {
                        setSelectedProduct(pkg);
                        setView('product-detail');
                        window.location.hash = `product-${pkg.id}`;
                      }}
                      className="flex-1 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                    >
                      {lang === 'ar' ? 'التفاصيل' : 'Details'}
                    </button>
                    <button 
                      onClick={() => handleBuy(pkg)}
                      className="flex-1 py-4 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all shadow-lg"
                    >
                      {t.shop.buy}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-40 pb-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <BackButton onClick={() => setView('home')} lang={lang} />
        </div>
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            {t.shop.title}
          </h1>
          <p className="text-xl text-gray-400 font-medium">{t.shop.subtitle}</p>
        </div>

        <div className="space-y-32">
          {/* Score Accounts Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-snap-yellow rounded-xl flex items-center justify-center text-black">
                <Star className="w-6 h-6 fill-black" />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight">{t.shop.scoreAccounts}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scoreAccountsStock.map((pkg: any, i: number) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-10 rounded-[3rem] border transition-all group relative overflow-hidden ${getPackageColor(pkg.amount)}`}
                >
                  <div className="absolute inset-0 backdrop-blur-xl pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="text-xs font-black text-snap-yellow mb-4 tracking-[0.3em] uppercase">{pkg.desc[lang]}</div>
                    <div className="text-6xl font-black mb-6 group-hover:text-snap-yellow transition-colors tracking-tighter">{pkg.amount}</div>
                    <div className="text-3xl font-bold text-white/90 mb-10">{pkg.price}</div>
                    <button 
                      onClick={() => handleBuy(pkg)}
                      className="w-full py-5 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 text-xl shadow-lg"
                    >
                      {t.shop.buy}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Follower Accounts Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-snap-yellow rounded-xl flex items-center justify-center text-black">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight">{t.shop.followerAccounts}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {followerAccountsStock.map((pkg: any, i: number) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-10 rounded-[3rem] border transition-all group relative overflow-hidden ${getPackageColor(pkg.amount)}`}
                >
                  <div className="absolute inset-0 backdrop-blur-xl pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="text-xs font-black text-snap-yellow mb-4 tracking-[0.3em] uppercase">{pkg.desc[lang]}</div>
                    <div className="text-6xl font-black mb-6 group-hover:text-snap-yellow transition-colors tracking-tighter">{pkg.amount}</div>
                    <div className="text-3xl font-bold text-white/90 mb-10">{pkg.price}</div>
                    <button 
                      onClick={() => handleBuy(pkg)}
                      className="w-full py-5 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 text-xl shadow-lg"
                    >
                      {t.shop.buy}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Services Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-snap-yellow rounded-xl flex items-center justify-center text-black">
                <Zap className="w-6 h-6 fill-black" />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight">{t.shop.servicesTab}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service: any, i: number) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-10 rounded-[3rem] border transition-all group relative overflow-hidden ${
                    i % 4 === 0 ? 'bg-blue-600/10 border-blue-500/20 hover:border-blue-500/50' : 
                    i % 4 === 1 ? 'bg-purple-600/10 border-purple-500/20 hover:border-purple-500/50' : 
                    i % 4 === 2 ? 'bg-orange-600/10 border-orange-500/20 hover:border-orange-500/50' :
                    'bg-green-600/10 border-green-500/20 hover:border-green-500/50'
                  }`}
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-white/10 transition-colors ${
                    i % 4 === 0 ? 'bg-blue-500/10' : 
                    i % 4 === 1 ? 'bg-purple-500/10' : 
                    i % 4 === 2 ? 'bg-orange-500/10' :
                    'bg-green-500/10'
                  }`}></div>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
                    i % 4 === 0 ? 'bg-blue-500/10 text-blue-400' : 
                    i % 4 === 1 ? 'bg-purple-500/10 text-purple-400' : 
                    i % 4 === 2 ? 'bg-orange-500/10 text-orange-400' :
                    'bg-green-500/10 text-green-400'
                  }`}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-3xl font-black mb-4 group-hover:text-snap-yellow transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">{service.desc[lang]}</p>
                  <div className="text-2xl font-bold text-white mb-10">{service.price}</div>
                  <button 
                    onClick={() => {
                      if (service.id === 's_boost') {
                        setView('boosting');
                        window.scrollTo(0, 0);
                      } else {
                        openWhatsApp(lang === 'ar' ? `أريد طلب خدمة: ${service.title}` : `I want to order service: ${service.title}`);
                      }
                    }}
                    className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-snap-yellow hover:text-black transition-all flex items-center justify-center gap-3 text-lg relative z-10"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    {t.shop.order}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
