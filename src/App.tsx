import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

// Layout & Global Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BanShieldBar } from './components/layout/BanShieldBar';
import { ChatWidget } from './components/layout/ChatWidget';

// Home Sections
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { WhyUs } from './components/sections/WhyUs';
import { CatalogCategories } from './components/sections/CatalogCategories';
import { HowItWorks } from './components/sections/HowItWorks';
import { PremiumServices } from './components/sections/PremiumServices';
import { ToolsGrid } from './components/sections/ToolsGrid';
import { FAQ } from './components/sections/FAQ';
import { BlogGrid } from './components/sections/BlogGrid';
import { Testimonials } from './components/sections/Testimonials';
import { RecentWork } from './components/sections/RecentWork';
import { LoyaltyAffiliate } from './components/sections/LoyaltyAffiliate';
import { Contact } from './components/sections/Contact';
import { GlobalPresence } from './components/sections/GlobalPresence';

// Page Views
import { Shop } from './components/sections/Shop';
import { CategoryDetail } from './components/sections/CategoryDetail';
import { ServiceDetail } from './components/sections/ServiceDetail';
import { Checkout } from './components/sections/Checkout';
import { BlogDetail } from './components/sections/BlogDetail';
import { Tools } from './components/sections/Tools';
import { TrackingPage } from './components/sections/TrackingPage';
import { PrivacyPolicy, TermsOfService, RefundPolicy, About } from './components/sections/LegalPages';
import { Auth } from './components/sections/Auth';
import { BecomeSeller } from './components/sections/BecomeSeller';

// Firebase
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// Data
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [isDark, setIsDark] = useState(true);
  const [view, setView] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('aged');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [selectedTool, setSelectedTool] = useState<string>('checker');
  const [shopTab, setShopTab] = useState<'accounts' | 'services'>('accounts');
  const [cart, setCart] = useState<any[]>([]);
  const [score, setScore] = useState(124500);
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);

  // Auth Listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const docSnap = await getDoc(doc(db, 'users', u.uid));
        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
        }
      } else {
        setUserProfile(null);
      }
    });
    return () => unsub();
  }, []);

  // Chat States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Hello! I am SnapBot AI. How can I help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const t = translations[lang];

  // Cart Logic
  const addToCart = (item: any) => {
    setCart(prev => [...prev, item]);
    setView('checkout');
    window.scrollTo(0, 0);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  // Chat Logic
  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are SnapBot AI, a helpful assistant for SnapScore Store, a website that provides premium Snapchat services like score boosting, aged accounts, and followers. Answer the user's question concisely and professionally. User says: ${userMsg}`,
      });
      setChatMessages(prev => [...prev, { role: 'bot', text: response.text || 'I am sorry, I could not process that.' }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am having trouble connecting right now.' }]);
    }
  };

  // Score Animation
  useEffect(() => {
    const t = setInterval(() => {
      setScore(s => s + Math.floor(Math.random() * 120));
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Hash Routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'shop', 'services', 'tools', 'blog', 'contact', 'tracking', 'checkout', 'privacy', 'terms', 'refund', 'about', 'category-detail', 'blog-detail'].includes(hash)) {
        setView(hash);
        window.scrollTo(0, 0);
      } else if (hash === '') {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-matte-black text-white" : "bg-white text-gray-900"} ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark} 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        setView={setView} 
        cartCount={cart.length} 
      />

      <main>
        <AnimatePresence mode="wait">
          <MainContent 
            view={view}
            isDark={isDark}
            lang={lang}
            t={t}
            setView={setView}
            score={score}
            setSelectedCategory={setSelectedCategory}
            setSelectedService={setSelectedService}
            setSelectedPost={setSelectedPost}
            setSelectedTool={setSelectedTool}
            setShopTab={setShopTab}
            shopTab={shopTab}
            selectedCategory={selectedCategory}
            selectedService={selectedService}
            selectedPost={selectedPost}
            selectedTool={selectedTool}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            userProfile={userProfile}
          />
        </AnimatePresence>
      </main>

      <Footer isDark={isDark} lang={lang} setView={setView} />
      
      <ChatWidget 
        isDark={isDark} 
        lang={lang} 
        isChatOpen={isChatOpen} 
        setIsChatOpen={setIsChatOpen} 
        chatMessages={chatMessages} 
        chatInput={chatInput} 
        setChatInput={setChatInput} 
        handleSendMessage={handleSendMessage} 
      />
    </div>
  );
}

interface MainContentProps {
  view: string;
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: string) => void;
  score: number;
  setSelectedCategory: (cat: string) => void;
  setSelectedPost: (post: any) => void;
  setSelectedTool: (tool: string) => void;
  setShopTab: (tab: 'accounts' | 'services') => void;
  shopTab: 'accounts' | 'services';
  selectedCategory: string;
  selectedService: any;
  selectedPost: any;
  selectedTool: string;
  cart: any[];
  addToCart: (item: any) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  userProfile: any;
  setSelectedService: (service: any) => void;
}

const MainContent = ({
  view, isDark, lang, t, setView, score,
  setSelectedCategory, setSelectedPost, setSelectedTool, setShopTab,
  shopTab, selectedCategory, selectedService, selectedPost, selectedTool,
  cart, addToCart, removeFromCart, clearCart, userProfile, setSelectedService
}: MainContentProps) => {
  switch (view) {
    case 'home':
      return (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Hero isDark={isDark} lang={lang} t={t} setView={setView} score={score} />
          <BanShieldBar isDark={isDark} lang={lang} />
          <Stats isDark={isDark} t={t} />
          <WhyUs isDark={isDark} t={t} />
          <CatalogCategories isDark={isDark} lang={lang} setView={setView} setSelectedCategory={setSelectedCategory} />
          <HowItWorks isDark={isDark} lang={lang} t={t} />
          <PremiumServices isDark={isDark} lang={lang} t={t} setView={setView} setShopTab={setShopTab} />
          <RecentWork isDark={isDark} lang={lang} />
          <ToolsGrid isDark={isDark} lang={lang} t={t} setView={(v) => { setSelectedTool(v); setView('tools'); }} />
          <LoyaltyAffiliate isDark={isDark} lang={lang} setView={setView} userProfile={userProfile} />
          <GlobalPresence isDark={isDark} lang={lang} t={t} />
          <Testimonials isDark={isDark} t={t} />
          <FAQ isDark={isDark} t={t} />
          <BlogGrid isDark={isDark} lang={lang} t={t} setView={setView} setSelectedPost={setSelectedPost} />
          <Contact isDark={isDark} lang={lang} t={t} />
        </motion.div>
      );
    case 'shop':
      return (
        <motion.div key="shop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Shop 
            isDark={isDark} 
            lang={lang} 
            t={t} 
            setView={setView} 
            shopTab={shopTab} 
            setShopTab={setShopTab} 
            setSelectedCategory={setSelectedCategory} 
            setSelectedService={setSelectedService}
            addToCart={addToCart} 
          />
        </motion.div>
      );
    case 'category-detail':
      return (
        <motion.div key="cat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <CategoryDetail 
            isDark={isDark} 
            lang={lang} 
            t={t} 
            setView={setView} 
            selectedCategory={selectedCategory} 
            addToCart={addToCart} 
          />
        </motion.div>
      );
    case 'service-detail':
      return (
        <motion.div key="service" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <ServiceDetail 
            isDark={isDark} 
            lang={lang} 
            t={t} 
            setView={setView} 
            selectedService={selectedService} 
            addToCart={addToCart} 
          />
        </motion.div>
      );
    case 'checkout':
      return (
        <motion.div key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Checkout 
            isDark={isDark} 
            lang={lang} 
            t={t} 
            setView={setView} 
            cart={cart} 
            removeFromCart={removeFromCart} 
            clearCart={clearCart} 
          />
        </motion.div>
      );
    case 'blog':
      return (
        <motion.div key="blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <BlogGrid isDark={isDark} lang={lang} t={t} setView={setView} setSelectedPost={setSelectedPost} />
        </motion.div>
      );
    case 'blog-detail':
      return (
        <motion.div key="blog_det" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <BlogDetail isDark={isDark} lang={lang} t={t} setView={setView} selectedPost={selectedPost} />
        </motion.div>
      );
    case 'tools':
      return (
        <motion.div key="tools" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Tools isDark={isDark} lang={lang} t={t} setView={setView} selectedTool={selectedTool} />
        </motion.div>
      );
    case 'tracking':
      return (
        <motion.div key="tracking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <TrackingPage isDark={isDark} lang={lang} t={t} />
        </motion.div>
      );
    case 'privacy':
      return <PrivacyPolicy isDark={isDark} lang={lang} t={t} setView={setView} />;
    case 'terms':
      return <TermsOfService isDark={isDark} lang={lang} t={t} setView={setView} />;
    case 'refund':
      return <RefundPolicy isDark={isDark} lang={lang} t={t} setView={setView} />;
    case 'about':
      return <About isDark={isDark} lang={lang} t={t} setView={setView} />;
    case 'auth':
      return <Auth isDark={isDark} lang={lang} setView={setView} />;
    case 'become-seller':
      return <BecomeSeller isDark={isDark} lang={lang} setView={setView} />;
    default:
      return null;
  }
};
