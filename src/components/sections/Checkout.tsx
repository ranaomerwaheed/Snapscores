import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Trash2,
  CreditCard,
  Lock,
  MessageCircle
} from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface CheckoutProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  cart: any[];
  removeFromCart: (index: number) => void;
  clearCart: () => void;
}

export const Checkout = ({ 
  isDark, 
  lang, 
  t, 
  setView, 
  cart, 
  removeFromCart, 
  clearCart 
}: CheckoutProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      clearCart();
    }, 2500);
  };

  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-black mb-6 uppercase tracking-widest"
          >
            <ShieldCheck className="w-4 h-4" />
            {lang === 'ar' ? 'دفع آمن 100%' : '100% SECURE CHECKOUT'}
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">
            {t.checkout.title} <span className="text-snap-yellow">{t.checkout.titleHighlight}</span>
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center p-16 rounded-[3.5rem] bg-green-500/10 border border-green-500/30"
            >
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <BadgeCheck className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-black mb-6 text-white">{t.checkout.successTitle}</h2>
              <p className="text-gray-400 text-xl font-medium mb-10 leading-relaxed">{t.checkout.successDesc}</p>
              <button
                onClick={() => setView('home')}
                className="px-10 py-5 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(255,252,0,0.3)]"
              >
                {t.checkout.successCta}
              </button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.length === 0 ? (
                  <div className={`p-20 rounded-[3rem] border text-center ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
                    <ShoppingBag className="w-20 h-20 text-gray-700 mx-auto mb-8 opacity-20" />
                    <h3 className="text-3xl font-black mb-4 text-gray-500">{t.checkout.empty}</h3>
                    <button
                      onClick={() => setView('shop')}
                      className="text-snap-yellow font-black uppercase tracking-widest text-sm hover:underline"
                    >
                      {lang === 'ar' ? 'اذهب للمتجر' : 'Go to Shop'}
                    </button>
                  </div>
                ) : (
                  cart.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-8 rounded-[2.5rem] border flex items-center justify-between gap-6 group transition-all ${
                        isDark ? "bg-white/5 border-white/10 hover:border-white/30" : "bg-white border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-snap-yellow/10 border border-snap-yellow/20 flex items-center justify-center text-snap-yellow font-black text-xl">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-white mb-1">{item.title}</h4>
                          <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Premium Service</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-white font-black text-2xl tabular-nums">${item.price}</div>
                        <button
                          onClick={() => removeFromCart(i)}
                          className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className={`p-10 rounded-[3rem] border sticky top-32 ${
                  isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
                }`}>
                  <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">{t.checkout.summary}</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-gray-400 font-bold">
                      <span>{t.checkout.subtotal}</span>
                      <span className="text-white tabular-nums">${total}</span>
                    </div>
                    <div className="flex justify-between text-gray-400 font-bold">
                      <span>{t.checkout.fee}</span>
                      <span className="text-green-400 uppercase tracking-widest text-xs">FREE</span>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white font-black text-xl">{t.checkout.total}</span>
                      <span className="text-snap-yellow font-black text-4xl tabular-nums">${total}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                      <Lock className="w-4 h-4 text-green-400" />
                      {t.checkout.secure}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                      <Zap className="w-4 h-4 text-snap-yellow" />
                      {t.checkout.instant}
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={cart.length === 0 || isProcessing}
                    className="w-full py-5 bg-snap-yellow text-black font-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(255,252,0,0.3)] disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
                  >
                    {isProcessing ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                        <Zap className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <CreditCard className="w-6 h-6" />
                    )}
                    {t.checkout.pay}
                  </button>

                  <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">Need Help?</div>
                    <button className="flex items-center justify-center gap-2 mx-auto text-white font-black text-sm hover:text-snap-yellow transition-colors">
                      <WhatsAppIcon className="w-5 h-5" />
                      Chat with Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
