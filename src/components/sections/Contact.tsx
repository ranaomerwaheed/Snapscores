import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, Globe } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface ContactProps {
  isDark: boolean;
  lang: string;
  t: any;
}

export const Contact = ({ isDark, lang, t }: ContactProps) => {
  return (
    <section id="contact" className={`py-32 px-6 relative section-divider ${isDark ? "bg-matte-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black mb-4 leading-[0.9] tracking-tighter glow-text">
              {t.contact.title} <br />
              <span className="text-snap-yellow">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-snap-yellow font-black text-xl mb-6 glow-text italic">
              {lang === 'ar' ? 'تواصل مع فريق الخبراء' : 'Contact Our Experts'}
            </p>
            <p className={`text-gray-400 text-xl leading-relaxed mb-12 max-w-lg font-medium`}>
              {t.contact.desc}
            </p>
            <div className="space-y-6">
              {[
                { icon: <WhatsAppIcon className="w-6 h-6" />, label: 'WhatsApp', value: '+1 (555) SNAP-PRO', color: 'bg-green-500/10 text-green-400' },
                { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'support@snapscores.store', color: 'bg-blue-500/10 text-blue-400' },
                { icon: <Globe className="w-6 h-6" />, label: 'Telegram', value: '@SnapScoreOfficial', color: 'bg-purple-500/10 text-purple-400' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: lang === 'ar' ? -10 : 10 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all cursor-pointer group glow-card neon-border"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">{item.label}</div>
                    <div className="text-white font-black text-xl group-hover:text-snap-yellow transition-colors">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={`p-12 rounded-[3.5rem] relative overflow-hidden border border-white/10 glow-card neon-border ${isDark ? "bg-white/5" : "bg-gray-50"}`}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-snap-yellow/10 rounded-full blur-3xl"></div>
            <form className="relative z-10 space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{lang === 'ar' ? 'الاسم' : 'Full Name'}</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-snap-yellow transition-all font-medium shadow-inner" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-snap-yellow transition-all font-medium shadow-inner" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{lang === 'ar' ? 'الموضوع' : 'Subject'}</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-snap-yellow transition-all font-medium shadow-inner" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">{lang === 'ar' ? 'الرسالة' : 'Message'}</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-snap-yellow transition-all font-medium resize-none shadow-inner" placeholder="Tell us more..."></textarea>
              </div>
              <button className="w-full py-5 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(255,252,0,0.3)] flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                {t.contact.cta}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
