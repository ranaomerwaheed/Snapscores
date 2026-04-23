import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Store, 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Briefcase,
  Star,
  Users
} from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase';

interface BecomeSellerProps {
  isDark: boolean;
  lang: string;
  setView: (view: string) => void;
}

export const BecomeSeller = ({ isDark, lang, setView }: BecomeSellerProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    experience: '',
    services: '',
    telegram: '',
    previousWork: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!auth.currentUser) {
      setView('auth');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'sellerApplications'), {
        userId: auth.currentUser.uid,
        email: auth.currentUser.email,
        ...formData,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Error submitting application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      title: "Why Sell with Us?",
      icon: <Star className="w-8 h-8" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: <Users />, title: "10k+ Clients", desc: "Access our massive global customer base instantly." },
            { icon: <ShieldCheck />, title: "Secure Payments", desc: "Get paid instantly and securely for every sale." },
            { icon: <Zap />, title: "Fast Growth", desc: "Scale your services with our professional platform." }
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-3xl border ${isDark ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-200"}`}>
              <div className="text-snap-yellow mb-4">{item.icon}</div>
              <h4 className="font-black mb-2">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Your Experience",
      icon: <Briefcase className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Years of Experience</label>
            <select 
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              className={`w-full p-4 rounded-2xl border outline-none ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-gray-50 border-gray-200"}`}
            >
              <option value="">Select Experience</option>
              <option value="1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3+">3+ years</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Services You Provide</label>
            <textarea 
              value={formData.services}
              onChange={(e) => setFormData({...formData, services: e.target.value})}
              placeholder="e.g. Score Boosting, Aged Accounts, Custom Lenses..."
              className={`w-full p-4 rounded-2xl border outline-none h-32 ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-gray-50 border-gray-200"}`}
            />
          </div>
        </div>
      )
    },
    {
      title: "Contact & Portfolio",
      icon: <Users className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Telegram / WhatsApp Number</label>
            <input 
              type="text"
              value={formData.telegram}
              onChange={(e) => setFormData({...formData, telegram: e.target.value})}
              placeholder="@username or +123..."
              className={`w-full p-4 rounded-2xl border outline-none ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-gray-50 border-gray-200"}`}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Link to Previous Work / Proof</label>
            <input 
              type="text"
              value={formData.previousWork}
              onChange={(e) => setFormData({...formData, previousWork: e.target.value})}
              placeholder="https://..."
              className={`w-full p-4 rounded-2xl border outline-none ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-gray-50 border-gray-200"}`}
            />
          </div>
        </div>
      )
    }
  ];

  if (submitted) {
    return (
      <section className={`min-h-screen pt-32 pb-20 px-6 flex items-center justify-center ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-lg">
          <div className="w-24 h-24 bg-snap-yellow rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <CheckCircle2 className="w-12 h-12 text-black" />
          </div>
          <h2 className="text-4xl font-black mb-4">Application Submitted!</h2>
          <p className="text-gray-500 mb-8">Our team will review your application and contact you within 24-48 hours. Thank you for your interest in joining SnapScore Store.</p>
          <button onClick={() => setView('home')} className="px-10 py-4 bg-snap-yellow text-black font-black rounded-2xl">Return Home</button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={`min-h-screen pt-32 pb-20 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-bold mb-6">
            <Store className="w-4 h-4" />
            PARTNER PROGRAM
          </div>
          <h2 className={`text-5xl font-black tracking-tighter mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Become a <span className="text-snap-yellow">SnapScore Seller</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">Join the world's most professional Snapchat service marketplace and start earning today.</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${
                step === s ? "bg-snap-yellow text-black scale-110 shadow-lg" : 
                step > s ? "bg-snap-yellow/20 text-snap-yellow" : "bg-white/5 text-gray-600 border border-white/10"
              }`}>
                {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 rounded-full ${step > s ? "bg-snap-yellow" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className={`p-10 rounded-[3rem] border shadow-2xl ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-4 bg-snap-yellow/10 rounded-2xl text-snap-yellow">
              {steps[step-1].icon}
            </div>
            <h3 className="text-2xl font-black">{steps[step-1].title}</h3>
          </div>

          {steps[step-1].content}

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
            <button
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
              className={`flex items-center gap-2 font-bold transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "hover:text-snap-yellow"}`}
            >
              <ArrowLeft className="w-5 h-5" /> Back
            </button>
            
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-10 py-4 bg-snap-yellow text-black font-black rounded-2xl flex items-center gap-2 hover:scale-105 transition-all"
              >
                Next Step <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-10 py-4 bg-snap-yellow text-black font-black rounded-2xl flex items-center gap-2 hover:scale-105 transition-all disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
                {!loading && <CheckCircle2 className="w-5 h-5" />}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
