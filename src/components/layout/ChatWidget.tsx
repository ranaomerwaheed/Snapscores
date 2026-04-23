import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send } from 'lucide-react';

interface ChatWidgetProps {
  isDark: boolean;
  lang: string;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  chatMessages: { role: 'user' | 'bot', text: string }[];
  chatInput: string;
  setChatInput: (input: string) => void;
  handleSendMessage: () => void;
}

export const ChatWidget = ({
  isDark,
  lang,
  isChatOpen,
  setIsChatOpen,
  chatMessages,
  chatInput,
  setChatInput,
  handleSendMessage
}: ChatWidgetProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="w-80 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border"
            style={{ background: isDark ? '#0d0d1a' : 'white', borderColor: isDark ? 'rgba(255,220,0,0.2)' : '#e5e7eb' }}
          >
            {/* Chat header */}
            <div className="px-5 py-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg,#1a1200,#0d0d00)' }}>
              <div className="w-9 h-9 rounded-full bg-snap-yellow flex items-center justify-center text-black font-black text-base shadow-[0_0_15px_rgba(255,220,0,0.4)]">
                👻
              </div>
              <div>
                <div className="text-white font-black text-sm">SnapBot AI</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-bold">Online 24/7</span>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="ml-auto text-gray-400 hover:text-white transition-colors">✕</button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
              {chatMessages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm font-medium leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-snap-yellow text-black rounded-br-sm'
                      : isDark ? 'bg-white/8 text-gray-200 rounded-bl-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className={`px-4 py-3 border-t flex gap-2 ${isDark ? 'border-white/8' : 'border-gray-200'}`}>
              <input
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && chatInput.trim()) {
                    handleSendMessage();
                  }
                }}
                placeholder={lang === 'ar' ? 'اسأل SnapBot...' : 'Ask SnapBot...'}
                className={`flex-1 text-sm px-3 py-2 rounded-xl outline-none font-medium ${isDark ? 'bg-white/8 text-white placeholder:text-gray-600 border border-white/8' : 'bg-gray-100 text-gray-800 placeholder:text-gray-400 border border-gray-200'}`}
              />
              <button
                onClick={handleSendMessage}
                className="w-9 h-9 bg-snap-yellow rounded-xl flex items-center justify-center text-black flex-shrink-0 hover:scale-110 transition-transform shadow-[0_4px_12px_rgba(255,220,0,0.3)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={!isChatOpen ? { y: [0, -6, 0] } : {}}
        transition={!isChatOpen ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
        className="w-16 h-16 rounded-full bg-snap-yellow text-black flex items-center justify-center shadow-[0_8px_30px_rgba(255,220,0,0.5)] relative"
      >
        <AnimatePresence mode="wait">
          {isChatOpen
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="text-2xl font-black">✕</motion.span>
            : <motion.span key="ghost" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-2xl">👻</motion.span>
          }
        </AnimatePresence>
        {/* Notification dot */}
        {!isChatOpen && (
          <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] font-black">
            1
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};
