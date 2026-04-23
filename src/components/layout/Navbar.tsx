import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Globe, 
  Moon, 
  Sun, 
  ShoppingBag, 
  User, 
  ChevronDown, 
  Zap, 
  ShieldCheck, 
  BadgeCheck,
  Star,
  TrendingUp,
  History,
  Users,
  Search,
  Download,
  Activity,
  Ghost
} from 'lucide-react';

import { LiveQueueTicker } from './LiveQueueTicker';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  t: any;
  setView: (view: any) => void;
  cartCount: number;
}

export const Navbar = ({ 
  isDark, 
  setIsDark, 
  lang, 
  setLang, 
  t, 
  setView, 
  cartCount 
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, view: 'home' },
    { 
      label: t.nav.catalog, 
      view: 'shop',
      dropdown: [
        { id: 'snapscore', label: lang === 'ar' ? 'حسابات سكور' : 'SnapScore Account', icon: <Star className="w-4 h-4" /> },
        { id: 'follower', label: lang === 'ar' ? 'حسابات متابعين' : 'Follower Account', icon: <Users className="w-4 h-4" /> },
        { id: 'aged', label: lang === 'ar' ? 'حسابات قديمة' : 'Age Account', icon: <History className="w-4 h-4" /> },
        { id: 'verified', label: lang === 'ar' ? 'حسابات موثقة' : 'Verified Account', icon: <BadgeCheck className="w-4 h-4" /> },
      ]
    },
    { 
      label: t.nav.services, 
      view: 'services',
      dropdown: [
        { id: 's_boost', label: lang === 'ar' ? 'زيادة السكور' : 'Score Boosting', icon: <TrendingUp className="w-4 h-4" /> },
        { id: 's_followers', label: lang === 'ar' ? 'زيادة المتابعين' : 'Follower Increase', icon: <Users className="w-4 h-4" /> },
        { id: 's_views', label: lang === 'ar' ? 'مشاهدات الستوري' : 'Stories Spotlight View', icon: <Activity className="w-4 h-4" /> },
        { id: 's_lens', label: lang === 'ar' ? 'إنشاء عدسات' : 'Create Lens', icon: <Zap className="w-4 h-4" /> },
        { id: 's_badge', label: lang === 'ar' ? 'توثيق الحساب' : 'Verified Badge', icon: <ShieldCheck className="w-4 h-4" /> },
      ]
    },
    { 
      label: t.nav.tools, 
      view: 'tools',
      dropdown: [
        { id: 'calc', label: lang === 'ar' ? 'حاسبة السكور' : 'Score Calculator', icon: <TrendingUp className="w-4 h-4" /> },
        { id: 'check', label: lang === 'ar' ? 'فاحص الحسابات' : 'Account Checker', icon: <ShieldCheck className="w-4 h-4" /> },
        { id: 'track', label: lang === 'ar' ? 'متتبع السكور' : 'Score Tracker', icon: <History className="w-4 h-4" /> },
        { id: 'bitmoji', label: lang === 'ar' ? 'منشئ البيتموجي' : 'Bitmoji Creator', icon: <Users className="w-4 h-4" /> },
        { id: 'snapify', label: lang === 'ar' ? 'أدوات سنابي فاي' : 'Snapify Tools', icon: <Zap className="w-4 h-4" /> },
      ]
    },
    { label: 'Loyalty', view: 'loyalty', badge: 'NEW' },
    { label: t.nav.blog, view: 'blog' },
  ];

  return (
    <>
      <LiveQueueTicker isDark={isDark} lang={lang} />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-3 header-gradient" : "py-6 bg-transparent"}`}>
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setView('home')}>
            <div className="w-12 h-12 bg-accent-gold rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.5)] group-hover:rotate-12 transition-transform duration-700">
              <Ghost className="w-7 h-7 text-dark-brown" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none text-white glow-text">SNAPSCORE</span>
              <span className="text-[11px] font-black tracking-[0.5em] text-accent-gold leading-none mt-1">STORE</span>
            </div>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center gap-2 p-1.5 rounded-2xl bg-rich-brown/60 border border-accent-gold/20 backdrop-blur-xl shadow-2xl">
            {navItems.map((item, i) => (
              <div 
                key={i} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => !item.dropdown && setView(item.view)}
                  className={`px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl flex items-center gap-2 ${
                    activeDropdown === item.label ? 'bg-accent-gold text-dark-brown shadow-[0_0_20px_rgba(197,160,89,0.4)]' : 'text-warm-tan/80 hover:text-white hover:bg-rich-brown/80'
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl z-50 bg-dark-brown/95 border-accent-gold/10`}
                    >
                      <div className="space-y-1">
                        {item.dropdown.map((sub, j) => (
                          <button
                            key={j}
                            onClick={() => {
                              setView(item.view);
                              setActiveDropdown(null);
                            }}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left group/sub hover:bg-rich-brown/50 text-warm-tan/70 hover:text-white`}
                          >
                            <div className={`p-2 rounded-lg transition-colors bg-rich-brown/50 group-hover/sub:bg-accent-gold group-hover/sub:text-dark-brown`}>
                              {sub.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest">{sub.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all border border-accent-gold/10 bg-rich-brown/40 text-white hover:bg-rich-brown/60"
            >
              <Globe className="w-4 h-4 text-accent-gold" />
            </button>

            {/* User / Auth */}
            <button
              onClick={() => setView('auth')}
              className="hidden md:flex px-4 h-9 rounded-lg items-center gap-1.5 transition-all border border-accent-gold/10 bg-rich-brown/40 text-white hover:bg-rich-brown/60 font-black text-[10px] uppercase tracking-widest"
            >
              <User className="w-4 h-4 text-accent-gold" />
              <span>Login</span>
            </button>

            {/* Seller Button */}
            <button
              onClick={() => setView('loyalty')}
              className="px-5 h-9 bg-accent-gold text-dark-brown rounded-lg flex items-center gap-1.5 font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:scale-105 transition-transform"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Seller</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-all border border-accent-gold/10 bg-rich-brown/40 text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
