import React from 'react';
import { motion } from 'motion/react';
import { Shield, Smartphone, Globe, Zap, Lock, Database } from 'lucide-react';

interface SecurityFeaturesProps {
  isDark: boolean;
  lang: string;
  t: any;
}

export const SecurityFeatures = ({ isDark, lang, t }: SecurityFeaturesProps) => {
  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: lang === 'ar' ? 'صندوق حماية الجلسة الافتراضية' : 'Virtual Session Sandbox',
      desc: lang === 'ar' ? 'يتم إنشاء جلسة فريدة لكل طلب. يتم "حرق" جميع البيانات فور اكتمال العملية لضمان عدم ترك أي أثر.' : 'A unique session is created for every order. All data is "burned" immediately after completion to ensure no trace is left behind.',
      color: 'blue'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: lang === 'ar' ? 'محاكي بصمة الجهاز' : 'Device Spoofing Visualizer',
      desc: lang === 'ar' ? 'نستخدم بصمات أجهزة حقيقية (iPhone 15, Samsung S24) لجعل عمليات الزيادة تبدو طبيعية تماماً لخوارزميات سناب شات.' : 'We use real device signatures (iPhone 15, Samsung S24) to make boosts appear completely organic to Snapchat algorithms.',
      color: 'purple'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: lang === 'ar' ? 'درع البروكسي السكني' : 'IP-Residential Shield',
      desc: lang === 'ar' ? 'يتم توجيه حركة المرور عبر عناوين IP سكنية حقيقية في مواقع استراتيجية (السعودية، الإمارات، أمريكا) لتجنب أي كشف.' : 'Traffic is routed through real residential IP addresses in strategic locations (KSA, UAE, USA) to avoid any detection.',
      color: 'orange'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`p-8 rounded-[2.5rem] border transition-all group relative overflow-hidden ${
            f.color === 'blue' ? 'bg-blue-600/10 border-blue-500/20 hover:border-blue-500/50' : 
            f.color === 'purple' ? 'bg-purple-600/10 border-purple-500/20 hover:border-purple-500/50' : 
            'bg-orange-600/10 border-orange-500/20 hover:border-orange-500/50'
          }`}
        >
          <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-white/10 transition-colors ${
            f.color === 'blue' ? 'bg-blue-500/10' : 
            f.color === 'purple' ? 'bg-purple-500/10' : 
            'bg-orange-500/10'
          }`}></div>
          <div className="relative z-10">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
              f.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 
              f.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 
              'bg-orange-500/10 text-orange-400'
            }`}>
              {f.icon}
            </div>
            <h4 className="text-xl font-black mb-4 group-hover:text-white transition-colors">{f.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
