import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, BadgeCheck } from 'lucide-react';
import { BackButton } from '../ui/BackButton';

interface LegalProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
}

export const PrivacyPolicy = ({ isDark, lang, t, setView }: LegalProps) => {
  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 px-4 py-2 glass rounded-xl hover:bg-snap-yellow hover:text-black transition-all font-bold mb-6 group"
        >
          <span className="text-sm">{lang === 'ar' ? 'رجوع' : 'Back'}</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black mb-6 uppercase tracking-widest">
            <Shield className="w-4 h-4" />
            {lang === 'ar' ? 'خصوصية البيانات' : 'DATA PRIVACY'}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            {t.privacy.title}
          </h1>
          <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl">
            {t.privacy.subtitle}
          </p>
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-gray-400 leading-relaxed font-medium space-y-12">
          {t.privacy.sections.map((section: any, i: number) => (
            <div key={i}>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{section.title}</h2>
              <p className="mb-6">{section.content}</p>
              {section.list && (
                <ul className="space-y-4 list-none pl-0">
                  {section.list.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-snap-yellow mt-3 flex-shrink-0"></div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TermsOfService = ({ isDark, lang, t, setView }: LegalProps) => {
  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 px-4 py-2 glass rounded-xl hover:bg-snap-yellow hover:text-black transition-all font-bold mb-6 group"
        >
          <span className="text-sm">{lang === 'ar' ? 'رجوع' : 'Back'}</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black mb-6 uppercase tracking-widest">
            <FileText className="w-4 h-4" />
            {lang === 'ar' ? 'اتفاقية الاستخدام' : 'USER AGREEMENT'}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            {t.terms.title}
          </h1>
          <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl">
            {t.terms.subtitle}
          </p>
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-gray-400 leading-relaxed font-medium space-y-12">
          {t.terms.sections.map((section: any, i: number) => (
            <div key={i}>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{section.title}</h2>
              <p className="mb-6">{section.content}</p>
              {section.list && (
                <ul className="space-y-4 list-none pl-0">
                  {section.list.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-snap-yellow mt-3 flex-shrink-0"></div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const RefundPolicy = ({ isDark, lang, t, setView }: LegalProps) => {
  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 px-4 py-2 glass rounded-xl hover:bg-snap-yellow hover:text-black transition-all font-bold mb-6 group"
        >
          <span className="text-sm">{lang === 'ar' ? 'رجوع' : 'Back'}</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black mb-6 uppercase tracking-widest">
            <Shield className="w-4 h-4" />
            {lang === 'ar' ? 'سياسة الاسترجاع' : 'REFUND POLICY'}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            {t.refund.title}
          </h1>
          <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl">
            {t.refund.subtitle}
          </p>
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-gray-400 leading-relaxed font-medium space-y-12">
          {t.refund.sections.map((section: any, i: number) => (
            <div key={i}>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{section.title}</h2>
              <p className="mb-6">{section.content}</p>
              {section.list && (
                <ul className="space-y-4 list-none pl-0">
                  {section.list.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-snap-yellow mt-3 flex-shrink-0"></div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const About = ({ isDark, lang, t, setView }: LegalProps) => {
  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 px-4 py-2 glass rounded-xl hover:bg-snap-yellow hover:text-black transition-all font-bold mb-6 group"
        >
          <span className="text-sm">{lang === 'ar' ? 'رجوع' : 'Back'}</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-black mb-6 uppercase tracking-widest">
            <BadgeCheck className="w-4 h-4" />
            {lang === 'ar' ? 'من نحن' : 'ABOUT US'}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            {t.about.title}
          </h1>
          <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-2xl">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="prose prose-invert prose-xl max-w-none text-gray-400 leading-relaxed font-medium space-y-12">
          {t.about.sections.map((section: any, i: number) => (
            <div key={i}>
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">{section.title}</h2>
              <p className="mb-6">{section.content}</p>
              {section.list && (
                <ul className="space-y-4 list-none pl-0">
                  {section.list.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-snap-yellow mt-3 flex-shrink-0"></div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
