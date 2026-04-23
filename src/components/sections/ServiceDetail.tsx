import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
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
  ChevronLeft,
  Lock,
  User
} from 'lucide-react';
import { BackButton } from '../ui/BackButton';
import { WHATSAPP_NUMBER } from '../../constants';

interface ServiceDetailProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  selectedService: any;
  addToCart: (item: any) => void;
}

export const ServiceDetail = ({ 
  isDark, 
  lang, 
  t, 
  setView, 
  selectedService, 
  addToCart 
}: ServiceDetailProps) => {
  const [selectedTier, setSelectedTier] = useState<any>(selectedService?.tiers?.[0] || null);
  const [selectedMethod, setSelectedMethod] = useState<any>(selectedService?.methods?.[0] || null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!selectedService) return null;

  const requiresLogin = selectedService.requiresLogin || selectedMethod?.requiresLogin;

  const handleOrder = () => {
    if (requiresLogin && (!username || !password)) {
      alert(lang === 'ar' ? 'يرجى إدخال اسم المستخدم وكلمة المرور' : 'Please enter username and password');
      return;
    }

    const message = `*New Order from SnapScore Store*%0A%0A` +
      `*Service:* ${selectedService.title}%0A` +
      `*Tier:* ${selectedTier?.amount || 'N/A'}%0A` +
      `*Price:* ${selectedTier?.price || selectedService.price}%0A` +
      (selectedMethod ? `*Method:* ${selectedMethod.title}%0A` : '') +
      (requiresLogin ? `*Username:* ${username}%0A*Password:* ${password}%0A` : '') +
      `%0A*Total:* ${selectedTier?.price || selectedService.price}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        <BackButton onClick={() => setView('shop')} lang={lang} />

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-snap-yellow/10 text-snap-yellow shadow-lg`}>
              {React.cloneElement(selectedService.icon as React.ReactElement<any>, { className: "w-10 h-10" })}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
              {selectedService.title}
            </h1>
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-lg mb-10">
              {selectedService.desc[lang]}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 glow-card">
                <ShieldCheck className="w-8 h-8 text-green-400" />
                <div>
                  <div className="text-white font-black uppercase tracking-widest text-xs mb-1">Guarantee</div>
                  <div className="text-gray-400 text-sm font-bold">{selectedService.guarantee}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 glow-card">
                <History className="w-8 h-8 text-snap-yellow" />
                <div>
                  <div className="text-white font-black uppercase tracking-widest text-xs mb-1">Delivery Time</div>
                  <div className="text-gray-400 text-sm font-bold">{selectedService.deliveryTime}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Order Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-10 rounded-[3.5rem] border glow-card neon-border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
          >
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Customize Your Order</h3>

            {/* Methods (if any) */}
            {selectedService.methods && (
              <div className="mb-8">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block">Select Method</label>
                <div className="grid grid-cols-2 gap-4">
                  {selectedService.methods.map((method: any) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method)}
                      className={`py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all border ${
                        selectedMethod?.id === method.id 
                          ? 'bg-snap-yellow text-black border-snap-yellow shadow-lg' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {method.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tiers (if any) */}
            {selectedService.tiers && (
              <div className="mb-8">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block">Select Package</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedService.tiers.map((tier: any) => (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border ${
                        selectedTier?.id === tier.id 
                          ? 'bg-snap-yellow text-black border-snap-yellow shadow-lg' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {tier.amount}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Login Credentials (if required) */}
            {requiresLogin && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-4 mb-8"
              >
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 mb-6">
                  <Lock className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <p className="text-[10px] font-bold text-red-400 leading-relaxed uppercase tracking-widest">
                    {lang === 'ar' 
                      ? 'هذه الخدمة تتطلب الدخول لحسابك. يرجى تزويدنا بالبيانات الصحيحة.' 
                      : 'This service requires account login. Please provide correct credentials.'}
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Username</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-snap-yellow transition-all font-medium" 
                      placeholder="Snapchat Username" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-4">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-snap-yellow transition-all font-medium" 
                      placeholder="Snapchat Password" 
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Price & Order */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div className="text-gray-500 text-xs font-black uppercase tracking-widest">Total Price</div>
                <div className="text-snap-yellow font-black text-4xl glow-text tabular-nums">
                  {selectedTier?.price || selectedService.price}
                </div>
              </div>

              <button
                onClick={handleOrder}
                className="w-full py-6 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(255,252,0,0.3)] flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-6 h-6" />
                {lang === 'ar' ? 'اطلب الآن عبر واتساب' : 'ORDER NOW VIA WHATSAPP'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
