import React from 'react';
import { 
  InfinityIcon, 
  TrendingUp,
  Users,
  Eye,
  BadgeCheck,
  Zap,
  Star,
  History,
  MessageCircle,
  ShieldCheck,
  RefreshCcw,
  ShoppingBag,
  Download
} from 'lucide-react';

export const WHATSAPP_NUMBER = "+923431390157";

export const testimonials = [
  {
    name: { en: "Ahmed Al-Harbi", ar: "أحمد الحربي" },
    location: { en: "Riyadh, KSA", ar: "الرياض، السعودية" },
    text: { 
      en: "Best service in the Middle East. My Snap score reached 1M in just 2 days. Highly recommended for anyone looking for reliability.", 
      ar: "أفضل خدمة في الشرق الأوسط. وصل سكور حسابي إلى مليون في يومين فقط. أنصح به بشدة لكل من يبحث عن المصداقية." 
    },
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: { en: "Sara Mohammed", ar: "سارة محمد" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    text: { 
      en: "I was worried about my account, but they reassured me and the service was extremely professional. Highly recommended.", 
      ar: "كنت خايفة على حسابي بس طمنوني والخدمة كانت احترافية للغاية. أنصح فيهم وبقوة." 
    },
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: { en: "Sultan Al-Kuwari", ar: "سلطان الكواري" },
    location: { en: "Doha, Qatar", ar: "الدوحة، قطر" },
    text: { 
      en: "Best service I've dealt with in the Gulf. Credibility and speed in execution.", 
      ar: "أفضل خدمة تعاملت معها في الخليج. مصداقية وسرعة في التنفيذ." 
    },
    avatar: "https://picsum.photos/seed/user3/100/100"
  },
  {
    name: { en: "Layla Hassan", ar: "ليلى حسن" },
    location: { en: "Kuwait City, Kuwait", ar: "مدينة الكويت، الكويت" },
    text: { 
      en: "Incredible results! My account looks so much more professional now. The support team was very helpful.", 
      ar: "نتائج مذهلة! حسابي يبدو أكثر احترافية الآن. فريق الدعم كان متعاوناً جداً." 
    },
    avatar: "https://picsum.photos/seed/user4/100/100"
  },
  {
    name: { en: "Omar Farooq", ar: "عمر فاروق" },
    location: { en: "Manama, Bahrain", ar: "المنامة، البحرين" },
    text: { 
      en: "Fast delivery and great communication. I will definitely use this service again for my other accounts.", 
      ar: "تسليم سريع وتواصل رائع. سأستخدم هذه الخدمة بالتأكيد مرة أخرى لحساباتي الأخرى." 
    },
    avatar: "https://picsum.photos/seed/user5/100/100"
  },
  {
    name: { en: "Noura Al-Said", ar: "نورة السعيد" },
    location: { en: "Muscat, Oman", ar: "مسقط، عمان" },
    text: { 
      en: "The AI tools are a game changer! I love the Bitmoji creator. The score boost was also perfect.", 
      ar: "أدوات الذكاء الاصطناعي غيرت كل شيء! أحببت منشئ البيتموجي. زيادة السكور كانت مثالية أيضاً." 
    },
    avatar: "https://picsum.photos/seed/user6/100/100"
  }
];

export const faqData = [
  {
    q: { en: "Is it safe for my account?", ar: "هل الخدمة آمنة لحسابي؟" },
    a: { en: "Yes, we use secure methods that comply with Snapchat's guidelines. We have served over 10,000 clients without issues.", ar: "نعم، نستخدم طرقاً آمنة تتوافق مع إرشادات سناب شات. خدمنا أكثر من 10,000 عميل بدون أي مشاكل." }
  },
  {
    q: { en: "How long does it take?", ar: "كم من الوقت يستغرق التنفيذ؟" },
    a: { en: "Most orders are completed within 1-24 hours. Larger score boosts might take up to 48 hours for maximum safety.", ar: "معظم الطلبات تكتمل خلال 1-24 ساعة. رفع السكور الكبير قد يستغرق حتى 48 ساعة لأقصى درجات الأمان." }
  },
  {
    q: { en: "Do I need to provide my password?", ar: "هل أحتاج لتزويدكم بكلمة المرور؟" },
    a: { en: "For score boosting, we need temporary access. For followers or buying new accounts, no password is required.", ar: "لرفع السكور، نحتاج وصولاً مؤقتاً. لزيادة المتابعين أو شراء حسابات جديدة، لا يلزم وجود كلمة مرور." }
  },
  {
    q: { en: "What is the 14-Day Money Back Guarantee?", ar: "ما هو ضمان استرداد الأموال لمدة 14 يوماً؟" },
    a: { en: "We stand by our service. If you're not satisfied with the results, we'll refund your purchase within 14 days.", ar: "نحن نثق في خدماتنا. إذا لم تكن راضياً عن النتائج، سنعيد لك أموالك خلال 14 يوماً." }
  },
  {
    q: { en: "How can I contact support?", ar: "كيف يمكنني التواصل مع الدعم؟" },
    a: { en: "You can reach us 24/7 via WhatsApp, Email, or our social media channels. We're always here to help!", ar: "يمكنك التواصل معنا على مدار الساعة عبر الواتساب، البريد الإلكتروني، أو قنوات التواصل الاجتماعي الخاصة بنا." }
  },
  {
    q: { en: "Are the tools real?", ar: "هل الأدوات حقيقية؟" },
    a: { en: "Yes! Our Bitmoji Creator, AI Lens Simulator, and Snap Map Finder are fully functional and powered by advanced AI models.", ar: "نعم! منشئ بيتموجي، محاكي العدسات، ومكتشف المواقع كلها أدوات وظيفية بالكامل ومدعومة بنماذج الذكاء الاصطناعي المتقدمة." }
  }
];

export const catalog = [
  { id: 1, score: "5K+", price: "$3", age: "2023", type: "Starter", description: { en: "Fresh Account", ar: "حساب جديد" } },
  { id: 2, score: "10K+", price: "$5", age: "2022", type: "Basic", description: { en: "Established Account", ar: "حساب قائم" } },
  { id: 3, score: "20K+", price: "$7", age: "2021", type: "Growth", description: { en: "Active Account", ar: "حساب نشط" } },
  { id: 4, score: "50K+", price: "$12", age: "2020", type: "Popular", description: { en: "High Engagement", ar: "تفاعل عالي" } },
  { id: 5, score: "100K+", price: "$15", age: "2019", type: "Influencer", description: { en: "Professional Presence", ar: "حضور احترافي" } },
  { id: 6, score: "200K+", price: "$18", age: "2018", type: "Pro", description: { en: "Authority Account", ar: "حساب سلطة" } },
  { id: 7, score: "300K+", price: "$22", age: "2017", type: "Expert", description: { en: "Expert Presence", ar: "حضور خبير" } },
  { id: 8, score: "500K+", price: "$28", age: "2016", type: "Elite", description: { en: "Elite Presence", ar: "حضور النخبة" } },
  { id: 9, score: "700K+", price: "$33", age: "2015", type: "Ultimate", description: { en: "Ultimate Presence", ar: "حضور أقصى" } },
  { id: 10, score: "1M+", price: "$40", age: "2014", type: "Legendary", description: { en: "Legendary Status", ar: "حالة أسطورية" } },
  { id: 11, score: "2M+", price: "$75", age: "2013", type: "Mythic", description: { en: "Mythic Status", ar: "حالة خرافية" } },
  { id: 12, score: "5M+", price: "$350", age: "2012", type: "Godlike", description: { en: "Godlike Authority", ar: "سلطة إلهية" } },
  { id: 13, score: "10M+", price: "$800", age: "2011", type: "Ultimate", description: { en: "Ultimate Authority", ar: "السلطة القصوى" } },
];

export const accountCategories = [
  { id: 'snapscore', title: { en: 'SnapScore Account', ar: 'حسابات سكور عالي' }, icon: <Star />, color: 'blue', desc: { en: 'High score accounts ready for use.', ar: 'حسابات بسكور عالي جاهزة للاستخدام.' } },
  { id: 'follower', title: { en: 'Follower Account', ar: 'حسابات متابعين' }, icon: <Users />, color: 'purple', desc: { en: 'Accounts with real followers and reach.', ar: 'حسابات مع متابعين حقيقيين وتفاعل.' } },
  { id: 'aged', title: { en: 'Aged Account', ar: 'حسابات قديمة' }, icon: <History />, color: 'orange', desc: { en: 'Old accounts from 2015-2020.', ar: 'حسابات قديمة من 2015-2020.' } },
  { id: 'verified', title: { en: 'Verified Account', ar: 'حسابات موثقة' }, icon: <BadgeCheck />, color: 'green', desc: { en: 'Accounts with verification badges.', ar: 'حسابات موثقة بشارات التوثيق.' } },
];

export const scoreAccountsStock = [
  { id: 'sa5k', amount: '5,000', price: '$3', type: 'Score Account', age: '2023', followers: '100-500', deliveryTime: '1-2 Hours', desc: { en: 'Starter Score Account', ar: 'حساب سكور بداية' } },
  { id: 'sa10k', amount: '10,000', price: '$5', type: 'Score Account', age: '2022', followers: '500-1k', deliveryTime: '1-2 Hours', desc: { en: 'Aged Score Account', ar: 'حساب سكور قديم' } },
  { id: 'sa50k', amount: '50,000', price: '$12', type: 'Score Account', age: '2020', followers: '2k-5k', deliveryTime: '4-6 Hours', desc: { en: 'Popular Score Tier', ar: 'فئة سكور شائعة' } },
  { id: 'sa100k', amount: '100,000', price: '$15', type: 'Score Account', age: '2019', followers: '5k-10k', deliveryTime: '6-12 Hours', desc: { en: 'Influencer Ready', ar: 'جاهز للمؤثرين' } },
  { id: 'sa200k', amount: '200,000', price: '$18', type: 'Score Account', age: '2018', followers: '10k-20k', deliveryTime: '12-24 Hours', desc: { en: 'Pro Status', ar: 'مستوى المحترفين' } },
  { id: 'sa300k', amount: '300,000', price: '$22', type: 'Score Account', age: '2017', followers: '20k-30k', deliveryTime: '24-48 Hours', desc: { en: 'Expert Status', ar: 'مستوى الخبراء' } },
  { id: 'sa500k', amount: '500,000', price: '$28', type: 'Score Account', age: '2016', followers: '30k-50k', deliveryTime: '2-3 Days', desc: { en: 'Elite Presence', ar: 'حضور النخبة' } },
  { id: 'sa700k', amount: '700,000', price: '$33', type: 'Score Account', age: '2015', followers: '50k-70k', deliveryTime: '3-5 Days', desc: { en: 'Ultimate Presence', ar: 'حضور أقصى' } },
  { id: 'sa800k', amount: '800,000', price: '$36', type: 'Score Account', age: '2015', followers: '60k-80k', deliveryTime: '4-6 Days', desc: { en: 'Advanced Presence', ar: 'حضور متقدم' } },
  { id: 'sa1m', amount: '1,000,000', price: '$40', type: 'Score Account', age: '2014', followers: '100k+', deliveryTime: '5-7 Days', desc: { en: 'Legendary Status', ar: 'حالة أسطورية' } },
  { id: 'sa2m', amount: '2,000,000', price: '$70', type: 'Score Account', age: '2013', followers: '200k+', deliveryTime: '7-10 Days', desc: { en: 'Double Millionaire', ar: 'مليونير مزدوج' } },
  { id: 'sa5m', amount: '5,000,000', price: '$350', type: 'Score Account', age: '2012', followers: '500k+', deliveryTime: '10-15 Days', desc: { en: 'Mega Authority', ar: 'سلطة ضخمة' } },
  { id: 'sa10m', amount: '10,000,000', price: '$800', type: 'Score Account', age: '2011', followers: '1M+', deliveryTime: '15-20 Days', desc: { en: 'Ultimate Authority', ar: 'السلطة القصوى' } },
  { id: 'sa_custom', amount: 'Custom Score', price: 'Contact', type: 'Score Account', age: 'Any', followers: 'Custom', deliveryTime: 'Varies', desc: { en: 'Customized Score Account', ar: 'حساب سكور مخصص' } },
];

export const followerAccountsStock = [
  { id: 'fa1k', amount: '1,000', price: '$15', type: 'Follower Account', age: '2023', score: '500-1k', deliveryTime: '1 Hour', desc: { en: 'Starter Followers', ar: 'متابعين بداية' } },
  { id: 'fa5k', amount: '5,000', price: '$45', type: 'Follower Account', age: '2022', score: '1k-5k', deliveryTime: '1-2 Hours', desc: { en: 'Rising Star', ar: 'نجم صاعد' } },
  { id: 'fa10k', amount: '10,000', price: '$85', type: 'Follower Account', age: '2021', score: '5k-10k', deliveryTime: '2-4 Hours', desc: { en: 'Popular Account', ar: 'حساب شائع' } },
  { id: 'fa20k', amount: '20,000', price: '$150', type: 'Follower Account', age: '2020', score: '10k-20k', deliveryTime: '4-6 Hours', desc: { en: 'Influencer Pack', ar: 'باقة المؤثرين' } },
  { id: 'fa50k', amount: '50,000', price: '$350', type: 'Follower Account', age: '2019', score: '20k-50k', deliveryTime: '6-12 Hours', desc: { en: 'Elite Presence', ar: 'حضور النخبة' } },
  { id: 'fa100k', amount: '100,000', price: '$650', type: 'Follower Account', age: '2018', score: '50k-100k', deliveryTime: '12-24 Hours', desc: { en: 'Verified Potential', ar: 'إمكانية توثيق' } },
  { id: 'fa200k', amount: '200,000', price: '$1100', type: 'Follower Account', age: '2017', score: '100k-200k', deliveryTime: '24-48 Hours', desc: { en: 'Mega Account', ar: 'حساب ضخم' } },
  { id: 'fa300k', amount: '300,000', price: '$1500', type: 'Follower Account', age: '2016', score: '200k-300k', deliveryTime: '2-3 Days', desc: { en: 'Pro Account', ar: 'حساب محترف' } },
  { id: 'fa400k', amount: '400,000', price: '$1800', type: 'Follower Account', age: '2015', score: '250k-400k', deliveryTime: '3-4 Days', desc: { en: 'Top Tier', ar: 'فئة عليا' } },
];

export const agedAccountsStock = [
  { id: 'a2010', amount: '2010 Created', price: '$120', desc: { en: 'Ultra Rare 2010 account', ar: 'حساب نادر جداً من 2010' } },
  { id: 'a2014', amount: '2014 Created', price: '$60', desc: { en: 'Legendary 2014 account', ar: 'حساب أسطوري من 2014' } },
  { id: 'a2021', amount: '2021 Created', price: '$15', desc: { en: 'Active 2021 account', ar: 'حساب نشط من 2021' } },
  { id: 'a2025', amount: '2025 Created', price: '$5', desc: { en: 'Fresh 2025 account', ar: 'حساب جديد من 2025' } },
];

export const verifiedAccountsStock = [
  { id: 'v1m', amount: '1 Month', price: '$15', desc: { en: '1 Month Subscription Account', ar: 'حساب اشتراك شهر واحد' } },
  { id: 'v3m', amount: '3 Months', price: '$40', desc: { en: '3 Months Subscription Account', ar: 'حساب اشتراك 3 أشهر' } },
  { id: 'v12m', amount: '12 Months', price: '$120', desc: { en: '12 Months Subscription Account', ar: 'حساب اشتراك 12 شهر' } },
];

export const servicesList = [
  { 
    id: 's_boost', 
    title: 'Snap Score Boost', 
    price: 'From $3', 
    icon: <TrendingUp />, 
    deliveryTime: '1-48 Hours', 
    guarantee: '100% Safe', 
    requiresLogin: true,
    desc: { en: 'Boost your own account score safely. Requires Username & Password.', ar: 'ارفع سكور حسابك بأمان. يتطلب اسم المستخدم وكلمة المرور.' },
    tiers: [
      { id: 'sb5k', amount: '5,000', price: '$3' },
      { id: 'sb10k', amount: '10,000', price: '$5' },
      { id: 'sb20k', amount: '20,000', price: '$7' },
      { id: 'sb50k', amount: '50,000', price: '$12' },
      { id: 'sb100k', amount: '100,000', price: '$15' },
      { id: 'sb200k', amount: '200,000', price: '$18' },
      { id: 'sb300k', amount: '300,000', price: '$22' },
      { id: 'sb500k', amount: '500,000', price: '$28' },
      { id: 'sb700k', amount: '700,000', price: '$33' },
      { id: 'sb800k', amount: '800,000', price: '$36' },
      { id: 'sb1m', amount: '1,000,000', price: '$40' },
      { id: 'sb2m', amount: '2,000,000', price: '$75' },
      { id: 'sb5m', amount: '5,000,000', price: '$180' },
      { id: 'sb7m', amount: '7,000,000', price: '$250' },
      { id: 'sb10m', amount: '10,000,000', price: '$350' },
      { id: 'sb_custom', amount: 'Custom', price: 'Contact' },
    ]
  },
  { 
    id: 's_followers', 
    title: 'Follower Increase', 
    price: 'From $20', 
    icon: <Users />, 
    deliveryTime: '1-24 Hours', 
    guarantee: 'Non-Drop', 
    desc: { en: 'Increase real followers on your account.', ar: 'زيادة متابعين حقيقيين على حسابك.' },
    tiers: [
      { id: 'sf1k', amount: '1,000', price: '$20' },
      { id: 'sf5k', amount: '5,000', price: '$80' },
      { id: 'sf10k', amount: '10,000', price: '$150' },
      { id: 'sf50k', amount: '50,000', price: '$600' },
      { id: 'sf_custom', amount: 'Custom', price: 'Contact' },
    ]
  },
  { 
    id: 's_views', 
    title: 'Spotlight & Story Views', 
    price: 'From $15', 
    icon: <Eye />, 
    deliveryTime: '1-2 Hours', 
    guarantee: 'Instant Start', 
    desc: { en: 'Boost your spotlight and story views instantly.', ar: 'عزز مشاهدات السبوت لايت والستوري الخاصة بك فوراً.' },
    tiers: [
      { id: 'sv1k', amount: '1,000', price: '$15' },
      { id: 'sv5k', amount: '5,000', price: '$60' },
      { id: 'sv10k', amount: '10,000', price: '$100' },
      { id: 'sv50k', amount: '50,000', price: '$400' },
      { id: 'sv_custom', amount: 'Custom', price: 'Contact' },
    ]
  },
  { 
    id: 's_sub', 
    title: 'Snapchat+ Subscription', 
    price: 'From $10', 
    icon: <BadgeCheck />, 
    deliveryTime: '1-24 Hours', 
    guarantee: 'Official', 
    desc: { en: 'Get Snapchat+ features via Gift or Login.', ar: 'احصل على مميزات سناب شات بلس عبر الهدية أو الدخول.' },
    methods: [
      { id: 'via_gift', title: 'Via Gift', requiresLogin: false },
      { id: 'via_login', title: 'Via Login', requiresLogin: true },
    ],
    tiers: [
      { id: 'sub1m', amount: '1 Month', price: '$10' },
      { id: 'sub3m', amount: '3 Months', price: '$25' },
      { id: 'sub6m', amount: '6 Months', price: '$45' },
      { id: 'sub12m', amount: '12 Months', price: '$80' },
    ]
  },
  { id: 's_lens', title: 'Create Lens', price: 'Contact Us', icon: <Zap />, deliveryTime: '3-5 Days', guarantee: 'Custom Design', desc: { en: 'Custom AR lenses created for your profile.', ar: 'عدسات واقع معزز مخصصة لملفك الشخصي.' } },
  { id: 's_ads', title: 'Snapchat Ads', price: 'Contact Us', icon: <TrendingUp />, deliveryTime: '1-3 Days', guarantee: 'Professional Setup', desc: { en: 'Professional Snapchat ad campaign setup.', ar: 'إعداد حملات إعلانية احترافية على سناب شات.' } },
];

export const toolsList = [
  { id: 'tool_calc', title: 'Score Calculator', ar: 'حاسبة السكور', icon: <TrendingUp />, desc: { en: 'Calculate your potential score growth.', ar: 'احسب نمو السكور المحتمل الخاص بك.' } },
  { id: 'tool_check', title: 'Account Checker', ar: 'فاحص الحسابات', icon: <ShieldCheck />, desc: { en: 'Check account status and safety.', ar: 'افحص حالة الحساب والأمان.' } },
  { id: 'tool_track', title: 'Score Tracker', ar: 'متتبع السكور', icon: <History />, desc: { en: 'Track your score progress daily.', ar: 'تتبع تقدم السكور الخاص بك يومياً.' } },
  { id: 'tool_bitmoji', title: 'Bitmoji Creator', ar: 'منشئ البيتموجي', icon: <Users />, desc: { en: 'Create unique 3D Bitmojis.', ar: 'أنشئ بيتموجي ثلاثي الأبعاد فريد.' } },
  { id: 'tool_snapify', title: 'Snapify Tools', ar: 'أدوات سنابي فاي', icon: <Zap />, desc: { en: 'All-in-one Snapchat utility suite.', ar: 'مجموعة أدوات سناب شات المتكاملة.' } },
];
