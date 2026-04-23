import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Gift, 
  Users, 
  Zap, 
  ArrowRight, 
  Trophy, 
  Copy, 
  CheckCircle2,
  Store
} from 'lucide-react';

interface LoyaltyAffiliateProps {
  isDark: boolean;
  lang: string;
  setView: (view: string) => void;
  userProfile: any;
}

export const LoyaltyAffiliate = ({ isDark, lang, setView, userProfile }: LoyaltyAffiliateProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!userProfile?.affiliateCode) {
      setView('auth');
      return;
    }
    navigator.clipboard.writeText(userProfile.affiliateCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`py-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Affiliate Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            className={`p-10 rounded-[3rem] border relative overflow-hidden group glow-card neon-border ${
              isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
            }`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Users className="w-32 h-32" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-snap-yellow rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className={`text-4xl font-black tracking-tighter mb-2 glow-text ${isDark ? "text-white" : "text-gray-900"}`}>
                {lang === 'ar' ? 'برنامج الأفلييت' : 'Affiliate Program'}
              </h3>
              <p className="text-snap-yellow font-black text-lg mb-4 glow-text italic">
                {lang === 'ar' ? 'اكسب من كل إحالة' : 'Earn From Every Referral'}
              </p>
              <p className={`text-lg mb-8 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                {lang === 'ar' 
                  ? 'شارك كودك الخاص واحصل على عمولة 10% على كل عملية بيع.' 
                  : 'Share your unique code and earn 10% commission on every sale made through your link.'}
              </p>

              {userProfile?.affiliateCode ? (
                <div className={`flex items-center gap-4 p-4 rounded-2xl border mb-8 ${isDark ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-200"}`}>
                  <div className="flex-1">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Your Referral Code</div>
                    <div className="text-xl font-black text-snap-yellow glow-text">{userProfile.affiliateCode}</div>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="p-3 bg-snap-yellow text-black rounded-xl hover:scale-110 transition-all shadow-lg"
                  >
                    {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setView('auth')}
                  className="px-8 py-4 bg-snap-yellow text-black font-black rounded-2xl mb-8 flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  Login to Get Code <ArrowRight className="w-5 h-5" />
                </button>
              )}

              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-snap-yellow glow-text">10%</span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Commission</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-snap-yellow glow-text">Instant</span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Payouts</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seller Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            className={`p-10 rounded-[3rem] border relative overflow-hidden group glow-card neon-border ${
              isDark ? "bg-snap-yellow/5 border-snap-yellow/20" : "bg-snap-yellow/5 border-snap-yellow/20"
            }`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Store className="w-32 h-32" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-matte-black rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform">
                <Trophy className="w-8 h-8 text-snap-yellow" />
              </div>
              <h3 className={`text-4xl font-black tracking-tighter mb-4 glow-text ${isDark ? "text-white" : "text-gray-900"}`}>
                {lang === 'ar' ? 'كن بائعاً معنا' : 'Become a Seller'}
              </h3>
              <p className={`text-lg mb-8 font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                {lang === 'ar' 
                  ? 'هل لديك خدمات سناب شات؟ انضم إلينا وابدأ في بيع خدماتك لآلاف العملاء.' 
                  : 'Do you have Snapchat services? Join our elite seller network and reach thousands of customers worldwide.'}
              </p>
              
              <button
                onClick={() => setView('become-seller')}
                className="px-10 py-5 bg-matte-black text-snap-yellow font-black rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-xl"
              >
                <Store className="w-6 h-6" />
                {lang === 'ar' ? 'قدم الآن' : 'Apply to Sell'}
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-8 flex items-center gap-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-snap-yellow" />
                  Verified Badge
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-snap-yellow" />
                  Global Exposure
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
