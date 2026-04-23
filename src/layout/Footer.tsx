import React from 'react';
import { Star, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
// Components
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { UptimeGraph } from '../components/UptimeGraph';

export const Footer = ({ lang, t, setView, WHATSAPP_NUMBER }: any) => {
  return (
    <footer className="footer-gradient pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Footer Background Mesh */}
      <div className="absolute inset-0 bg-mesh-1 opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center mb-16">
          <UptimeGraph />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-snap-yellow blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src="https://freesnapscores.com/assets/logo.svg" 
                  alt="SnapScore Store" 
                  className="w-12 h-12 relative z-10 drop-shadow-[0_0_15px_rgba(255,252,0,0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-snap-yellow via-white to-snap-yellow bg-clip-text text-transparent uppercase animate-gradient-x drop-shadow-[0_0_10px_rgba(255,252,0,0.3)]">
                {lang === 'ar' ? 'سناب سكور ستور' : 'SnapScore Store'}
              </span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              {lang === 'ar' 
                ? 'المزود الرائد عالمياً لخدمات نمو سناب شات. نحن نساعدك على بناء حضور قوي وموثوق بأمان تام.' 
                : 'The world\'s leading provider of Snapchat growth services. We help you build a strong and credible presence safely.'}
            </p>
            <div className="flex gap-4">
              {['twitter', 'instagram', 'facebook'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-snap-yellow hover:text-black transition-all duration-300">
                  <Star className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-snap-yellow">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-4">
              <li><a href="#catalog" className="text-gray-400 hover:text-snap-yellow transition-colors font-bold">{t.nav.catalog}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-snap-yellow transition-colors font-bold">{t.nav.services}</a></li>
              <li><a href="#tools" className="text-gray-400 hover:text-snap-yellow transition-colors font-bold">{t.nav.tools}</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-snap-yellow transition-colors font-bold">{t.nav.blog}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-snap-yellow">{lang === 'ar' ? 'خدماتنا' : 'Our Services'}</h4>
            <ul className="space-y-4">
              {t.nav.serviceItems.map((item: any) => (
                <li key={item.id}><a href="#" className="text-gray-400 hover:text-snap-yellow transition-colors font-bold">{item.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-snap-yellow">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 font-bold">
                <WhatsAppIcon className="w-5 h-5 text-snap-yellow" />
                <span>{WHATSAPP_NUMBER}</span>
              </li>
              <li className="text-gray-400 font-bold">
                {lang === 'ar' ? 'متاحون 24/7 للمساعدة' : 'Available 24/7 for support'}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-snap-yellow/20 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-snap-yellow/10 via-transparent to-snap-yellow/10 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(255,252,0,0.05)]">
          <div className="text-gray-400 text-sm font-bold flex flex-col gap-2">
            <div className="text-white">{t.footer.rights}</div>
            <div className="opacity-70 flex items-center gap-2">
              <div className="w-5 h-5 bg-snap-yellow rounded-md flex items-center justify-center">
                <Star className="text-black w-3 h-3 fill-black" />
              </div>
              <span className="text-xs">We are not affiliated with Snapchat Inc.</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-snap-yellow hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-snap-yellow hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-snap-yellow hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-snap-yellow hover:text-black transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-snap-yellow hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-8 text-xs font-bold text-gray-500">
              <button 
                onClick={() => {
                  setView('privacy');
                  window.scrollTo(0, 0);
                }} 
                className="hover:text-snap-yellow transition-colors"
              >
                {t.footer.privacy}
              </button>
              <button 
                onClick={() => {
                  setView('terms');
                  window.scrollTo(0, 0);
                }} 
                className="hover:text-snap-yellow transition-colors"
              >
                {t.footer.terms}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
