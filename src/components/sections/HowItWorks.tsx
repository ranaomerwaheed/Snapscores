import React from 'react';

interface HowItWorksProps {
  isDark: boolean;
  lang: string;
  t: any;
}

export const HowItWorks = ({ isDark, lang, t }: HowItWorksProps) => {
  return (
    <section id="how" className={`py-32 px-6 relative section-divider ${isDark ? "bg-matte-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight glow-text">{t.how.title}</h2>
          <div className="w-32 h-1.5 bg-snap-yellow mx-auto rounded-full shadow-[0_0_15px_rgba(255,252,0,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.how.steps.map((step: any, i: number) => (
            <div key={i} className="relative text-center group">
              <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-3xl font-black shadow-[0_0_30px_rgba(255,252,0,0.1)] group-hover:scale-110 transition-transform duration-500 relative ${
                i === 0 ? 'bg-blue-600/20 text-blue-400 border-2 border-blue-500/50' : 
                i === 1 ? 'bg-purple-600/20 text-purple-400 border-2 border-purple-500/50' : 
                'bg-orange-600/20 text-orange-400 border-2 border-orange-500/50'
              }`}>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-snap-yellow text-black rounded-full text-[10px] font-black flex items-center justify-center border-4 border-matte-black shadow-lg">
                  {i + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-snap-yellow transition-colors">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-lg">{step.desc}</p>
              {i < 2 && (
                <div className={`hidden lg:block absolute top-12 left-[70%] w-full h-[2px] bg-gradient-to-r from-snap-yellow/30 to-transparent ${lang === 'ar' ? 'rotate-180' : ''} shadow-[0_0_10px_rgba(255,252,0,0.2)]`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
