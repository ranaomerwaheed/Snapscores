import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

interface AuthProps {
  isDark: boolean;
  lang: string;
  setView: (view: string) => void;
}

export const Auth = ({ isDark, lang, setView }: AuthProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await updateProfile(user, { displayName: name });
        
        // Create user document
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: name,
          role: 'user',
          createdAt: new Date().toISOString(),
          affiliateCode: Math.random().toString(36).substring(2, 8).toUpperCase()
        });
        
        setSuccess(true);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess(true);
      }
      
      setTimeout(() => {
        setView('home');
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`min-h-screen pt-32 pb-20 px-6 flex items-center justify-center ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full max-w-md p-8 rounded-[2.5rem] border shadow-2xl ${
          isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
        }`}
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-snap-yellow rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg rotate-3">
            <ShieldCheck className="w-8 h-8 text-black" />
          </div>
          <h2 className={`text-3xl font-black tracking-tighter mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
            {mode === 'login' 
              ? (lang === 'ar' ? 'تسجيل الدخول' : 'Welcome Back') 
              : (lang === 'ar' ? 'إنشاء حساب' : 'Join SnapScore Store')}
          </h2>
          <p className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {mode === 'login' 
              ? (lang === 'ar' ? 'ادخل إلى حسابك للبدء' : 'Enter your credentials to continue') 
              : (lang === 'ar' ? 'ابدأ رحلتك معنا اليوم' : 'Start your journey with us today')}
          </p>
        </div>

        {success ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10"
          >
            <CheckCircle2 className="w-16 h-16 text-snap-yellow mx-auto mb-4" />
            <h3 className="text-xl font-bold text-snap-yellow">
              {lang === 'ar' ? 'تم بنجاح!' : 'Success!'}
            </h3>
            <p className="text-gray-400 mt-2">
              {lang === 'ar' ? 'جاري توجيهك...' : 'Redirecting you now...'}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'signup' && (
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className={`w-full pl-12 pr-6 py-4 rounded-2xl border outline-none transition-all ${
                      isDark ? "bg-white/5 border-white/10 text-white focus:border-snap-yellow" : "bg-gray-50 border-gray-200 text-gray-900 focus:border-snap-yellow"
                    }`}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full pl-12 pr-6 py-4 rounded-2xl border outline-none transition-all ${
                    isDark ? "bg-white/5 border-white/10 text-white focus:border-snap-yellow" : "bg-gray-50 border-gray-200 text-gray-900 focus:border-snap-yellow"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-6 py-4 rounded-2xl border outline-none transition-all ${
                    isDark ? "bg-white/5 border-white/10 text-white focus:border-snap-yellow" : "bg-gray-50 border-gray-200 text-gray-900 focus:border-snap-yellow"
                  }`}
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-snap-yellow text-black font-black rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className={`text-sm font-bold hover:text-snap-yellow transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                {mode === 'login' 
                  ? (lang === 'ar' ? 'ليس لديك حساب؟ سجل الآن' : "Don't have an account? Sign Up") 
                  : (lang === 'ar' ? 'لديك حساب بالفعل؟ سجل دخول' : "Already have an account? Sign In")}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};
