import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck } from 'lucide-react';

interface RecentWorkProps {
  isDark: boolean;
  lang: string;
}

export const RecentWork = ({ isDark, lang }: RecentWorkProps) => {
  return (
    <section className={`py-32 px-6 relative section-divider ${isDark ? "bg-[#0a0a18]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight glow-text">
            {lang === 'ar' ? 'أحدث' : 'Recent'} <span className="text-snap-yellow">{lang === 'ar' ? 'الأعمال' : 'Work'}</span>
          </h2>
          <div className="w-32 h-1.5 bg-snap-yellow mx-auto rounded-full shadow-[0_0_15px_rgba(255,252,0,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: '1.2M Score Boost', client: 'Elite Member', type: 'Instant Injection', color: 'blue' },
            { title: 'Aged Verified Account', client: 'Business User', type: 'Secure Transfer', color: 'purple' },
            { title: '50k Follower Growth', client: 'Influencer', type: 'Organic Reach', color: 'orange' },
          ].map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[2.5rem] border transition-all group relative overflow-hidden glow-card neon-border ${
                work.color === 'blue' ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50' : 
                work.color === 'purple' ? 'bg-purple-600/5 border-purple-500/20 hover:border-purple-500/50' : 
                'bg-orange-600/5 border-orange-500/20 hover:border-orange-500/50'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ${
                  work.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 
                  work.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 
                  'bg-orange-500/10 text-orange-400'
                }`}>
                  <Zap className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                  Verified
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2 group-hover:text-snap-yellow transition-colors">{work.title}</h3>
              <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">{work.client}</div>
              <div className={`text-xs font-black uppercase tracking-[0.3em] ${
                work.color === 'blue' ? 'text-blue-400' : work.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
              }`}>{work.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
