import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import { BackButton } from '../ui/BackButton';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface BlogDetailProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  selectedPost: any;
}

export const BlogDetail = ({ 
  isDark, 
  lang, 
  t, 
  setView, 
  selectedPost 
}: BlogDetailProps) => {
  if (!selectedPost) return null;

  return (
    <div className={`min-h-screen pt-36 pb-24 px-6 ${isDark ? "bg-[#06060f]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <BackButton onClick={() => setView('blog')} lang={lang} />

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-snap-yellow/10 border border-snap-yellow/20 text-snap-yellow text-xs font-black mb-6 uppercase tracking-widest">
            {lang === 'ar' && selectedPost.arCategory ? selectedPost.arCategory : selectedPost.category}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
            {lang === 'ar' && selectedPost.arTitle ? selectedPost.arTitle : selectedPost.title}
          </h1>
          <div className="flex items-center gap-8 text-xs text-gray-500 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-snap-yellow" />
              {selectedPost.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-snap-yellow" />
              {selectedPost.author}
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl mb-16"
        >
          <img
            src={selectedPost.thumbnail}
            alt={selectedPost.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-xl max-w-none text-gray-400 leading-relaxed font-medium markdown-content"
        >
          <p className="text-2xl text-white font-bold mb-10 leading-relaxed">
            {lang === 'ar' && selectedPost.arExcerpt ? selectedPost.arExcerpt : selectedPost.excerpt}
          </p>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {lang === 'ar' && selectedPost.arContent ? selectedPost.arContent : selectedPost.content}
          </ReactMarkdown>
        </motion.div>

        {/* Share & Actions */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs font-black uppercase tracking-widest">Share this post:</span>
            <div className="flex gap-3">
              {[Share2, MessageCircle].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-snap-yellow hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setView('blog')}
            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3"
          >
            <ArrowLeft className="w-6 h-6" />
            {lang === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
          </button>
        </div>
      </div>
    </div>
  );
};
