import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  BadgeCheck, 
  Star, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  History, 
  Package, 
  Users, 
  TrendingUp,
  Search,
  Download,
  Lock,
  Smartphone,
  Globe,
  Database
} from 'lucide-react';
import { BackButton } from '../ui/BackButton';

interface ToolsProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  selectedTool: string;
}

export const Tools = ({ 
  isDark, 
  lang, 
  t, 
  setView, 
  selectedTool 
}: ToolsProps) => {
  const [inputValue, setInputValue] = useState('');
  const [targetScore, setTargetScore] = useState('');
  const [currentScore, setCurrentScore] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAction = () => {
    if (selectedTool === 'calc') {
      if (!currentScore || !targetScore) return;
    } else {
      if (!inputValue.trim()) return;
    }
    
    setIsProcessing(true);
    setShowResult(false);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 2000);
  };

  const tool = t.tools.items.find((t: any) => t.view === selectedTool);

  if (!tool) return null;

  const renderToolContent = () => {
    if (selectedTool === 'calc') {
      return (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Current Score</label>
              <input
                type="number"
                value={currentScore}
                onChange={e => setCurrentScore(e.target.value)}
                placeholder="0"
                className={`w-full px-8 py-4 rounded-2xl border outline-none transition-all font-bold ${
                  isDark ? "bg-white/5 border-white/10 text-white focus:border-snap-yellow" : "bg-white border-gray-200 focus:border-snap-yellow"
                }`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Target Score</label>
              <input
                type="number"
                value={targetScore}
                onChange={e => setTargetScore(e.target.value)}
                placeholder="1,000,000"
                className={`w-full px-8 py-4 rounded-2xl border outline-none transition-all font-bold ${
                  isDark ? "bg-white/5 border-white/10 text-white focus:border-snap-yellow" : "bg-white border-gray-200 focus:border-snap-yellow"
                }`}
              />
            </div>
          </div>
          <button
            onClick={handleAction}
            disabled={isProcessing}
            className="w-full py-5 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 shadow-xl"
          >
            {isProcessing ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}><Zap className="w-6 h-6" /></motion.div> : <TrendingUp className="w-6 h-6" />}
            {lang === 'ar' ? 'احسب الآن' : 'CALCULATE NOW'}
          </button>
        </div>
      );
    }

    return (
      <div className={`p-3 rounded-[2.5rem] flex items-center gap-3 border shadow-2xl transition-all ${
        isDark ? "bg-white/5 border-white/10 focus-within:border-snap-yellow/50" : "bg-white border-gray-200 focus-within:border-snap-yellow"
      }`}>
        <div className="pl-6 text-gray-500">
          {selectedTool === 'downloader' ? <Download className="w-6 h-6" /> : <Search className="w-6 h-6" />}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder={selectedTool === 'downloader' ? (lang === 'ar' ? 'أدخل رابط القصة...' : 'Enter Story Link...') : (lang === 'ar' ? 'أدخل اسم المستخدم...' : 'Enter Username...')}
          className="flex-1 bg-transparent border-none outline-none text-white text-lg font-bold py-4"
        />
        <button
          onClick={handleAction}
          disabled={isProcessing}
          className="px-10 py-4 bg-snap-yellow text-black font-black rounded-[2rem] hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center gap-2"
        >
          {isProcessing ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}><Zap className="w-5 h-5" /></motion.div> : <Zap className="w-5 h-5" />}
          {lang === 'ar' ? 'بدء العملية' : 'Start Process'}
        </button>
      </div>
    );
  };

  const renderResult = () => {
    if (selectedTool === 'calc') {
      const diff = Math.max(0, parseInt(targetScore) - parseInt(currentScore));
      const days = Math.ceil(diff / 50000); // Assuming 50k per day
      return (
        <div className={`p-10 rounded-[3.5rem] border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-snap-yellow/10 border border-snap-yellow/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-snap-yellow" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">Calculation Results</h3>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Based on safe boosting speeds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Points Needed</div>
              <div className="text-white font-black text-3xl tabular-nums">{diff.toLocaleString()}</div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Estimated Time</div>
              <div className="text-snap-yellow font-black text-3xl tabular-nums">{days} Days</div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">Safety Level</div>
              <div className="text-green-400 font-black text-3xl">ULTRA</div>
            </div>
          </div>
          <button 
            onClick={() => setView('shop')}
            className="w-full py-5 mt-10 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm"
          >
            Order Boost Now
          </button>
        </div>
      );
    }

    return (
      <div className={`p-10 rounded-[3.5rem] border text-center ${
        isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
      }`}>
        <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <BadgeCheck className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-3xl font-black mb-4 text-white">{lang === 'ar' ? 'اكتملت العملية بنجاح' : 'Process Completed Successfully'}</h3>
        <p className="text-gray-400 text-lg font-medium mb-10 leading-relaxed">
          {lang === 'ar' ? 'تم معالجة طلبك بنجاح. يمكنك الآن المتابعة.' : 'Your request has been processed successfully. You can now proceed.'}
        </p>
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Status</div>
            <div className="text-green-400 font-black text-sm">SUCCESS</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Security</div>
            <div className="text-blue-400 font-black text-sm">PROTECTED</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <BackButton onClick={() => setView('home')} lang={lang} />

        {/* Tool Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-black mb-6 uppercase tracking-widest"
          >
            {tool.icon}
            {lang === 'ar' ? 'أداة احترافية' : 'PRO TOOL'}
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            {tool.title}
          </h1>
          <p className="text-gray-400 text-xl font-medium max-w-lg mx-auto">{tool.desc}</p>
        </div>

        {/* Action Box */}
        <div className="mb-20">
          {renderToolContent()}
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="space-y-12"
            >
              {renderResult()}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight">Elite Trust Security</h2>
            <p className="text-gray-500 text-sm font-medium">How we keep your account 100% safe during the process</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Lock className="w-8 h-8" />, title: 'Encrypted Session', desc: 'All data is encrypted using AES-256-GCM and burned after use.' },
              { icon: <Smartphone className="w-8 h-8" />, title: 'Device Spoofing', desc: 'We use real device signatures to make requests look organic.' },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-snap-yellow/10 flex items-center justify-center text-snap-yellow flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2">{f.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
