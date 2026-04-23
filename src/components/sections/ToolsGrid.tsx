import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ToolsGridProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
}

export const ToolsGrid = ({ isDark, lang, t, setView }: ToolsGridProps) => {
  return (
    <section id="tools" className={`py-32 px-6 relative section-divider ${isDark ? "bg-matte-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight glow-text">{t.tools.title}</h2>
          <div className="w-32 h-1.5 bg-snap-yellow mx-auto rounded-full shadow-[0_0_15px_rgba(255,252,0,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {t.tools.items.map((tool: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setView(tool.view)}
              className={`p-10 rounded-[2.5rem] border transition-all group cursor-pointer relative overflow-hidden glow-card neon-border ${
                i === 0 ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50' : 
                i === 1 ? 'bg-purple-600/5 border-purple-500/20 hover:border-purple-500/50' : 
                i === 2 ? 'bg-orange-600/5 border-orange-500/20 hover:border-orange-500/50' :
                'bg-green-600/5 border-green-500/20 hover:border-green-500/50'
              }`}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl group-hover:bg-white/10 transition-colors ${
                i === 0 ? 'bg-blue-500/10' : 
                i === 1 ? 'bg-purple-500/10' : 
                i === 2 ? 'bg-orange-500/10' :
                'bg-green-500/10'
              }`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg ${
                  i === 0 ? 'bg-blue-500/10 text-blue-400' : 
                  i === 1 ? 'bg-purple-500/10 text-purple-400' : 
                  i === 2 ? 'bg-orange-500/10 text-orange-400' :
                  'bg-green-500/10 text-green-400'
                }`}>{tool.icon}</div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-snap-yellow transition-colors">{tool.title}</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">{tool.desc}</p>
                <div className="flex items-center gap-2 text-snap-yellow font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                  {lang === 'ar' ? 'استخدم الأداة' : 'Launch Tool'}
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
