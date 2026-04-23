import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Globe, BadgeCheck, ShoppingBag, Star, Users, History, Zap, ShieldCheck } from 'lucide-react';

export const Navbar = ({ 
  lang, 
  setLang, 
  view, 
  setView, 
  setShopTab, 
  isMenuOpen, 
  setIsMenuOpen, 
  handleToolClick, 
  openWhatsApp, 
  t 
}: any) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-gradient backdrop-blur-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Header Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-snap-yellow/60 to-transparent blur-[1px]"></div>
        
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setView('home')}>
          <div className="relative">
            <img 
              src="https://freesnapscores.com/assets/logo.svg" 
              alt="SnapScore Store Logo" 
              className="w-12 h-12 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,252,0,0.6)]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-snap-yellow blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-snap-yellow via-white to-snap-yellow bg-clip-text text-transparent uppercase animate-gradient-x drop-shadow-[0_0_10px_rgba(255,252,0,0.3)]">SnapScore Store</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-400">
          <button onClick={() => setView('home')} className={`hover:text-snap-yellow transition-colors ${view === 'home' ? 'text-snap-yellow' : ''}`}>{t.nav.home}</button>
          <button onClick={() => setView('tracking')} className={`hover:text-snap-yellow transition-colors ${view === 'tracking' ? 'text-snap-yellow' : ''}`}>{t.nav.tracking}</button>
          
          {/* Catalog Dropdown */}
          <div className="relative group">
            <button className="hover:text-snap-yellow transition-colors flex items-center gap-1 py-4">
              {t.nav.catalog}
              <ChevronRight className="w-4 h-4 rotate-90" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-snap-yellow/20 to-orange-500/10 rounded-3xl pointer-events-none"></div>
              {t.nav.catalogItems.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'score' || item.id === 'age') {
                      setView('shop');
                      setShopTab('score');
                    } else if (item.id === 'followers') {
                      setView('shop');
                      setShopTab('followers');
                    } else {
                      setView('shop');
                      setShopTab('services');
                    }
                  }}
                  className="w-full text-left px-4 py-3 rounded-2xl hover:bg-snap-yellow hover:text-black transition-all text-xs font-black uppercase tracking-wider relative z-10"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-snap-yellow transition-colors flex items-center gap-1 py-4">
              {t.nav.services}
              <ChevronRight className="w-4 h-4 rotate-90" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl pointer-events-none"></div>
              {t.nav.serviceItems.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'boosting') {
                      setView('boosting');
                    } else if (item.id === 'followers') {
                      setView('shop');
                      setShopTab('followers');
                    } else {
                      setView('shop');
                      setShopTab('services');
                    }
                  }}
                  className="w-full text-left px-4 py-3 rounded-2xl hover:bg-blue-500 hover:text-white transition-all text-xs font-black uppercase tracking-wider relative z-10"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Dropdown */}
          <div className="relative group">
            <button className="hover:text-snap-yellow transition-colors flex items-center gap-1 py-4">
              {t.nav.tools}
              <ChevronRight className="w-4 h-4 rotate-90" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl pointer-events-none"></div>
              {t.nav.toolItems.map((item: any) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setView(item.id as any);
                  }}
                  className="w-full text-left px-4 py-3 rounded-2xl hover:bg-purple-500 hover:text-white transition-all text-xs font-black uppercase tracking-wider relative z-10"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => setView('blog')} className={`hover:text-snap-yellow transition-colors ${view === 'blog' ? 'text-snap-yellow' : ''}`}>{t.nav.blog}</button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:bg-white/10 hover:border-snap-yellow/50 transition-all"
          >
            <Globe className="w-4 h-4" />
            {t.nav.lang}
          </button>
          <button 
            onClick={() => openWhatsApp(lang === 'ar' ? 'مرحباً، أريد الاستفسار عن خدمات سناب بوست' : 'Hello, I want to inquire about Snap Boost services')}
            className="hidden sm:flex px-6 py-2.5 bg-snap-yellow text-black font-black rounded-full hover:scale-105 transition-all duration-300 text-sm shadow-[0_0_20px_rgba(255,252,0,0.3)]"
          >
            {t.nav.contact}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-snap-yellow transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-matte-black border-t border-white/10 overflow-hidden"
          >
            <div className={`flex flex-col p-6 gap-6 text-lg font-bold text-gray-400 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="hover:text-snap-yellow transition-colors">{lang === 'ar' ? 'الرئيسية' : 'Home'}</button>
              <button onClick={() => { setView('tracking'); setIsMenuOpen(false); }} className="hover:text-snap-yellow transition-colors">{t.nav.tracking}</button>
              
              <div className="space-y-4">
                <div className={`text-xs font-black text-snap-yellow uppercase tracking-widest ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.nav.catalog}</div>
                <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'pr-4 border-r' : 'pl-4 border-l'} border-white/10`}>
                  {t.nav.catalogItems.map((item: any) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.id === 'score' || item.id === 'age') {
                          setView('shop');
                          setShopTab('score');
                        } else if (item.id === 'followers') {
                          setView('shop');
                          setShopTab('followers');
                        } else {
                          setView('shop');
                          setShopTab('services');
                        }
                        setIsMenuOpen(false);
                      }}
                      className="text-right hover:text-snap-yellow transition-colors"
                      style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className={`text-xs font-black text-snap-yellow uppercase tracking-widest ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.nav.services}</div>
                <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'pr-4 border-r' : 'pl-4 border-l'} border-white/10`}>
                  {t.nav.serviceItems.map((item: any) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.id === 'boosting') {
                          setView('boosting');
                        } else if (item.id === 'followers') {
                          setView('shop');
                          setShopTab('followers');
                        } else {
                          setView('shop');
                          setShopTab('services');
                        }
                        setIsMenuOpen(false);
                      }}
                      className="text-right hover:text-snap-yellow transition-colors"
                      style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className={`text-xs font-black text-snap-yellow uppercase tracking-widest ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{t.nav.tools}</div>
                <div className={`flex flex-col gap-3 ${lang === 'ar' ? 'pr-4 border-r' : 'pl-4 border-l'} border-white/10`}>
                  {t.nav.toolItems.map((item: any) => (
                    <button
                      key={item.id}
                      onClick={() => handleToolClick(item.id, item.isPro)}
                      className={`hover:text-snap-yellow transition-colors flex items-center gap-2 ${lang === 'ar' ? 'flex-row-reverse justify-start' : 'justify-start'}`}
                      style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                    >
                      {item.title}
                      {item.isPro ? (
                        <span className="text-[8px] bg-snap-yellow text-black px-1.5 py-0.5 rounded-md font-black">PRO</span>
                      ) : (
                        <span className="text-[8px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-md border border-green-500/30 font-black">FREE</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => { setView('blog'); setIsMenuOpen(false); }} className="hover:text-snap-yellow transition-colors">{t.nav.blog}</button>
              
              <a href="#how" onClick={() => setIsMenuOpen(false)} className="hover:text-snap-yellow transition-colors">{t.nav.how}</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-snap-yellow transition-colors">{t.nav.faq}</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  openWhatsApp(lang === 'ar' ? 'مرحباً، أريد الاستفسار عن خدمات سناب سكور ستور' : 'Hello, I want to inquire about SnapScore Store services');
                }}
                className="w-full py-4 bg-snap-yellow text-black font-black rounded-xl text-center"
              >
                {t.nav.contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
