import React from 'react';
import { 
  InfinityIcon, 
  TrendingUp,
  Users,
  ShoppingBag,
  RefreshCcw,
  Zap,
  History,
  ShieldCheck
} from 'lucide-react';

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      catalog: "Catalog",
      how: "How it Works",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact",
      tools: "Tools",
      shop: "Shop Now",
      tracking: "Track Order",
      lang: "العربية",
      toolItems: [
        { id: 'calc', title: "Snapchat Score Calculator", ar: "سناب شات سكور حاسبة" },
        { id: 'checker', title: "Account Age & Trust Checker", ar: "فاحص عمر الحساب" },
        { id: 'tracker', title: "Snapchat Score Milestone Tracker", ar: "مخطط أهداف السكور" },
        { id: 'bitmoji', title: "Bitmoji Avatar Creator", ar: "منشئ صور بيتموجي" },
        { id: 'lens', title: "AI Lens Simulator", ar: "محاكي عدسات الذكاء الاصطناعي" },
        { id: 'map', title: "Snap Map Location Finder", ar: "مكتشف مواقع خريطة سناب" },
        { id: 'snapscore', title: "SnapScore Store", ar: "متجر سناب سكور", isPro: true }
      ]
    },
    tools_ui: {
      bitmoji: {
        title: "Bitmoji Avatar Creator",
        subtitle: "Describe your ideal character and let AI generate it",
        placeholder: "e.g., Cool guy with sunglasses, blue hoodie, blonde hair",
        button: "Generate Image",
        result: "Your Custom Avatar"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      catalog: "الكتالوج",
      how: "كيف يعمل",
      faq: "الأسئلة الشائعة",
      blog: "المدونة",
      contact: "اتصل بنا",
      tools: "الأدوات",
      shop: "تسوق الآن",
      tracking: "تتبع الطلب",
      lang: "English",
      toolItems: [
        { view: 'calc', title: "حاسبة النقاط", desc: "قدر وقت الوصول لمليون نقطة بناءً على نشاطك.", icon: <TrendingUp className="w-8 h-8" /> },
        { view: 'check', title: "فاحص الحسابات", desc: "تحقق من تاريخ الإنشاء الدقيق ومستوى الثقة لأي حساب.", icon: <ShieldCheck className="w-8 h-8" /> },
        { view: 'track', title: "متتبع السكور", desc: "راقب تقدم نقاطك اليومي مع تحليلات مفصلة.", icon: <History className="w-8 h-8" /> },
        { view: 'bitmoji', title: "منشئ البيتموجي", desc: "أنشئ شخصيات بيتموجي ثلاثية الأبعاد مخصصة باستخدام الذكاء الاصطناعي.", icon: <Users className="w-6 h-6" /> },
        { view: 'snapify', title: "أدوات سنابي فاي", desc: "مجموعة أدوات سناب شات المتكاملة للمستخدمين المتقدمين.", icon: <Zap className="w-6 h-6" /> },
      ]
    },
    tools_ui: {
      bitmoji: {
        title: "منشئ صور بيتموجي",
        subtitle: "صف شخصيتك المثالية ودع الذكاء الاصطناعي ينشئها",
        placeholder: "مثال: شاب رائع يرتدي نظارات شمسية، هودي أزرق، وشعر أشقر",
        button: "إنشاء الصورة",
        result: "صورتك المخصصة"
      }
    }
  }
};