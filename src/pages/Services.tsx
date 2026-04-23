import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Zap, ShieldCheck, Clock, Star, TrendingUp, CheckCircle2 } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const Services = ({ 
  lang, 
  t, 
  view, 
  setView, 
  trackerInput, 
  setTrackerInput, 
  toolResult, 
  setToolResult 
}: any) => {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-mesh-2 opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <BackButton onClick={() => setView('home')} lang={lang} />
        </div>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-black mb-6 uppercase tracking-widest animate-pulse">
            <Zap className="w-4 h-4 fill-snap-yellow" />
            {lang === 'ar' ? 'خدمة احترافية' : 'Professional Service'}
          </div>
          <h1 className="text-5xl lg:text-8xl font-black mb-8 uppercase tracking-tighter italic">
            {t.nav.serviceItems.find((s: any) => s.id === 'boosting')?.title}
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
            {t.nav.serviceItems.find((s: any) => s.id === 'boosting')?.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <ShieldCheck className="w-8 h-8" />, title: lang === 'ar' ? 'أمان تام' : 'Total Safety', desc: lang === 'ar' ? 'نستخدم تقنيات متقدمة لضمان سلامة حسابك بنسبة 100%.' : 'We use advanced techniques to ensure 100% account safety.', color: 'bg-blue-500' },
            { icon: <Clock className="w-8 h-8" />, title: lang === 'ar' ? 'سرعة فائقة' : 'Ultra Fast', desc: lang === 'ar' ? 'توصيل سريع ومستقر للنتائج خلال وقت قياسي.' : 'Fast and stable delivery of results in record time.', color: 'bg-purple-500' },
            { icon: <Star className="w-8 h-8" />, title: lang === 'ar' ? 'دعم فني' : 'Expert Support', desc: lang === 'ar' ? 'فريق متخصص متاح دائماً لمساعدتك في أي استفسار.' : 'Specialized team always available to help with any inquiry.', color: 'bg-orange-500' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] glass border-white/10 relative overflow-hidden group"
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${feature.color}/10 rounded-full blur-3xl group-hover:blur-[50px] transition-all`}></div>
              <div className={`w-16 h-16 rounded-2xl ${feature.color}/20 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Score Tracker Tool */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter">
              {lang === 'ar' ? 'مخطط نمو السكور' : 'Score Growth Roadmap'}
            </h2>
            <p className="text-gray-400 font-medium">{lang === 'ar' ? 'خطط لنمو حسابك وراقب تقدمك نحو القمة' : 'Plan your account growth and monitor your progress to the top'}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="glass p-10 rounded-[3rem] border-white/10 space-y-8 sticky top-32">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3 ml-2">{lang === 'ar' ? 'السكور الحالي' : 'Current Score'}</label>
                    <input 
                      type="number" 
                      value={trackerInput.current}
                      onChange={(e) => setTrackerInput({...trackerInput, current: e.target.value})}
                      placeholder="e.g. 50000"
                      className="w-full bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 focus:border-snap-yellow outline-none font-bold text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3 ml-2">{lang === 'ar' ? 'السكور المستهدف' : 'Target Score'}</label>
                    <input 
                      type="number" 
                      value={trackerInput.target}
                      onChange={(e) => setTrackerInput({...trackerInput, target: e.target.value})}
                      placeholder="e.g. 1000000"
                      className="w-full bg-orange-500/10 border border-orange-400/30 rounded-xl p-4 focus:border-snap-yellow outline-none font-bold text-white"
                    />
                  </div>
                  <button 
                    onClick={() => {
                      const cur = parseInt(trackerInput.current) || 0;
                      const tar = parseInt(trackerInput.target) || 1000000;
                      const milestones = [
                        { label: 'Bronze', score: Math.floor(tar * 0.25) },
                        { label: 'Silver', score: Math.floor(tar * 0.5) },
                        { label: 'Gold', score: Math.floor(tar * 0.75) },
                        { label: 'Diamond', score: tar }
                      ];
                      setToolResult({ cur, tar, milestones });
                    }}
                    className="w-full py-4 bg-snap-yellow text-black font-black rounded-xl hover:scale-105 transition-all"
                  >
                    {lang === 'ar' ? 'تحديث المخطط' : 'Update Tracker'}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass p-10 rounded-[3rem] border-white/10 h-full">
                {toolResult ? (
                  <div className="space-y-12">
                    <div className="relative pt-8">
                      <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((toolResult.cur / toolResult.tar) * 100, 100)}%` }}
                          className="h-full bg-snap-yellow shadow-[0_0_20px_rgba(255,252,0,0.5)]"
                        />
                      </div>
                      <div className="flex justify-between mt-4 text-xs font-black uppercase tracking-widest text-gray-500">
                        <span>{toolResult.cur.toLocaleString()}</span>
                        <span>{toolResult.tar.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {toolResult.milestones.map((m: any, i: number) => (
                        <div key={i} className={`p-6 rounded-2xl border transition-all relative overflow-hidden group ${
                          toolResult.cur >= m.score 
                            ? (i % 4 === 0 ? 'bg-blue-600/20 border-blue-500/50' : 
                               i % 4 === 1 ? 'bg-purple-600/20 border-purple-500/20' : 
                               i % 4 === 2 ? 'bg-orange-600/20 border-orange-500/20' :
                               'bg-green-600/20 border-green-500/20')
                            : 'bg-white/5 border-white/10 opacity-50'
                        }`}>
                          <div className={`absolute -top-5 -right-5 w-20 h-20 rounded-full blur-2xl transition-colors ${
                            toolResult.cur >= m.score 
                               ? (i % 4 === 0 ? 'bg-blue-500/10' : 
                                  i % 4 === 1 ? 'bg-purple-500/10' : 
                                  i % 4 === 2 ? 'bg-orange-500/10' :
                                  'bg-green-500/10')
                               : 'bg-transparent'
                          }`}></div>
                          <div className="flex justify-between items-center relative z-10">
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                toolResult.cur >= m.score 
                                   ? 'bg-snap-yellow text-black' 
                                   : 'bg-white/10 text-gray-500'
                              }`}>
                                {toolResult.cur >= m.score ? <CheckCircle2 className="w-6 h-6" /> : <Star className="w-5 h-5" />}
                              </div>
                              <div>
                                <div className="text-sm font-black uppercase tracking-widest">{m.label} Tier</div>
                                <div className="text-xs font-bold text-gray-500">{m.score.toLocaleString()} Score</div>
                              </div>
                            </div>
                            {toolResult.cur < m.score && (
                              <div className="text-[10px] font-black text-snap-yellow uppercase tracking-widest">
                                {(m.score - toolResult.cur).toLocaleString()} Left
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                    <TrendingUp className="w-16 h-16 mb-4 opacity-20" />
                    <p className="font-bold">{lang === 'ar' ? 'أدخل بياناتك لعرض مخطط النمو' : 'Enter your data to view growth roadmap'}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
