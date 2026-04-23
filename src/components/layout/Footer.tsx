import React from 'react';
import { motion } from 'motion/react';
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  ShieldCheck, 
  BadgeCheck,
  Facebook,
  Linkedin,
  Star,
  MessageCircle,
  Ghost
} from 'lucide-react';
import { HeartbeatMonitor } from './HeartbeatMonitor';
import { WHATSAPP_NUMBER } from '../../constants';

interface FooterProps {
  isDark: boolean;
  lang: string;
  setView: (view: any) => void;
}

export const Footer = ({ isDark, lang, setView }: FooterProps) => {
  return (
    <footer className={`pt-32 pb-12 px-6 relative overflow-hidden footer-gradient`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setView('home')}>
              <div className="w-16 h-16 bg-accent-gold rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(197,160,89,0.5)] group-hover:rotate-12 transition-transform duration-700 overflow-hidden">
                <Ghost className="w-10 h-10 text-dark-brown" />
              </div>
              <div>
                <div className={`text-3xl font-black tracking-tighter leading-none glow-text text-white`}>
                  SNAPSCORE<br />STORE
                </div>
              </div>
            </div>
            <p className="text-warm-tan/70 text-base leading-relaxed max-w-xs font-medium">
              The world's leading provider of Snapchat growth services. We help you build a strong and credible presence safely.
            </p>
            <div className="flex items-center gap-5">
              {[Star, Star, Star].map((Icon, i) => (
                <button
                  key={i}
                  className="w-12 h-12 rounded-2xl bg-rich-brown/60 border border-accent-gold/20 flex items-center justify-center text-warm-tan/50 hover:text-accent-gold hover:border-accent-gold/50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-accent-gold font-black text-lg uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Catalog', 'Services', 'Tools', 'Blog'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setView(item.toLowerCase())}
                    className="text-warm-tan/60 hover:text-white font-bold transition-all text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-8">
            <h4 className="text-accent-gold font-black text-lg uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-4">
              {['Score Boosting', 'Follower Increase', 'Stories Spotlight View', 'Create Lens', 'Verified Badge'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setView('shop')}
                    className="text-warm-tan/60 hover:text-white font-bold transition-all text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-8">
            <h4 className="text-accent-gold font-black text-lg uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-warm-tan/60 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-bold">{WHATSAPP_NUMBER}</span>
              </a>
              <p className="text-warm-tan/40 text-sm font-medium">Available 24/7 for support</p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Socials */}
        <div className="py-12 border-t border-accent-gold/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="text-warm-tan/60 text-sm font-bold">
              © 2026 SnapScore Store. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-warm-tan/40 text-[10px] font-black uppercase tracking-widest">
              <div className="w-4 h-4 bg-accent-gold rounded-sm flex items-center justify-center text-dark-brown">
                <Star className="w-3 h-3 fill-current" />
              </div>
              We are not affiliated with Snapchat Inc.
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-xl bg-rich-brown/40 border border-accent-gold/10 flex items-center justify-center text-warm-tan/40 hover:text-accent-gold transition-all"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-warm-tan/40">
              <button className="hover:text-accent-gold transition-colors">Privacy Policy</button>
              <button className="hover:text-accent-gold transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>

        {/* Heartbeat Monitor */}
        <div className="mt-12">
          <HeartbeatMonitor />
        </div>
      </div>
    </footer>
  );
};
