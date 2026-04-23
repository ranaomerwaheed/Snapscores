# SnapScore Store — Premium Snapchat Services

A full-stack React + TypeScript + Vite web application for SnapScore Store.

## 🗂 Project Structure

```
snapscore-store/
├── public/                         # Static assets
│   └── sitemap.xml
├── src/
│   ├── App.tsx                     # Root app + routing
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles (Tailwind)
│   ├── constants.tsx               # Shared constants & data
│   ├── translations.tsx            # i18n (EN / AR)
│   ├── types.ts                    # TypeScript types
│   ├── firebase.ts                 # Firebase config
│   │
│   ├── components/
│   │   ├── layout/                 # Persistent layout pieces
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── BanShieldBar.tsx
│   │   │   ├── LiveQueueTicker.tsx
│   │   │   ├── HeartbeatMonitor.tsx
│   │   │   └── ChatWidget.tsx
│   │   │
│   │   ├── sections/               # Page-level sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── CatalogCategories.tsx
│   │   │   ├── CategoryDetail.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── PremiumServices.tsx
│   │   │   ├── ToolsGrid.tsx
│   │   │   ├── Tools.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   ├── BlogDetail.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── RecentWork.tsx
│   │   │   ├── LoyaltyAffiliate.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── GlobalPresence.tsx
│   │   │   ├── Shop.tsx
│   │   │   ├── ServiceDetail.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── TrackingPage.tsx
│   │   │   ├── SecurityFeatures.tsx
│   │   │   ├── GhostLoginHistory.tsx
│   │   │   ├── Auth.tsx
│   │   │   ├── BecomeSeller.tsx
│   │   │   └── LegalPages.tsx
│   │   │
│   │   └── ui/                     # Reusable UI primitives
│   │       ├── WhatsAppIcon.tsx
│   │       ├── BackButton.tsx
│   │       └── OrderConsole.tsx
│   │
│   ├── pages/                      # Page wrappers
│   │   ├── Blog.tsx
│   │   ├── Catalog.tsx
│   │   ├── Services.tsx
│   │   └── Legal.tsx
│   │
│   └── layout/                     # Legacy layout (kept for compat)
│       ├── Navbar.tsx
│       └── Footer.tsx
│
├── component/                      # Standalone legacy components
│   ├── BlogSection.tsx
│   └── ContentBlock.tsx
│
├── .env.example                    # Environment variable template
├── .gitignore
├── index.html                      # Vite HTML entry
├── package.json
├── tsconfig.json
├── vite.config.ts
├── firestore.rules
├── firebase-applet-config.json
└── firebase-blueprint.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Create your .env file
cp .env.example .env
# Fill in GEMINI_API_KEY and APP_URL

# 3. Start dev server
npm run dev
# Runs on http://localhost:3000

# 4. Production build
npm run build
```

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| AI | Google Gemini API |
| Backend | Express.js |
| Database | Firebase / Firestore |
| Icons | Lucide React |
| i18n | English + Arabic (RTL) |

## 🌐 Features

- **Bilingual** — Full EN/AR with RTL support
- **Dark / Light Mode** toggle
- **Live Ticker** — Real-time queue stats
- **AI Tools** — Bitmoji creator, Lens simulator, Map finder
- **Score Calculator & Tracker**
- **Catalog** — Score, Follower, Aged, Verified accounts
- **Services** — Boosting, Followers, Views, Lens, Badge
- **Blog** — Multi-language articles with deep links
- **Global Presence Map** — IP-based geolocation
- **Loyalty & Affiliate** — Commission tiers
- **Order Console** — Live WhatsApp checkout
- **Firebase Auth** — Login / Seller portal

## 📦 Scripts

```bash
npm run dev      # Dev server (port 3000)
npm run build    # Production build → dist/
npm run preview  # Preview built output
npm run lint     # TypeScript type check
npm run clean    # Remove dist/
```

## 🔑 Environment Variables

```env
GEMINI_API_KEY=your_google_gemini_api_key
APP_URL=https://your-deployment-url.com
VITE_GTM_ID=GTM-XXXXXXX          # Optional: Google Tag Manager
```

## 📄 License

© 2026 SnapScore Store. All rights reserved.
"# Snapscores" 
