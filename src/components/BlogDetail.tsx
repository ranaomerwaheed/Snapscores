import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const BlogDetail = ({ post, lang, onBack }: { post: any, lang: string, onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  const content = lang === 'ar' ? (post.arContent || post.content) : post.content;
  const title = lang === 'ar' ? (post.arTitle || post.title) : post.title;

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-40 pb-24 px-6 min-h-screen bg-matte-black relative overflow-hidden">
      {/* Colorful Background Blobs */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-snap-yellow/5 rounded-full blur-[200px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-[3rem] border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="relative h-[300px] lg:h-[500px]">
            <img 
              src={post.thumbnail || `https://picsum.photos/seed/blog-${post.title}/1200/800`} 
              alt={title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/20 to-transparent"></div>
            <button 
              onClick={onBack}
              className="absolute top-8 left-8 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-snap-yellow hover:text-black transition-all z-20 shadow-lg"
            >
              <ChevronLeft className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="p-8 lg:p-16 -mt-20 relative z-10">
            <div className="inline-block px-6 py-3 rounded-2xl bg-snap-yellow text-black font-black text-sm uppercase tracking-widest mb-8 shadow-[0_10px_30px_rgba(255,252,0,0.3)]">
              {post.date}
            </div>
            <h1 className="text-4xl lg:text-7xl font-black mb-12 leading-tight tracking-tighter italic text-white uppercase">
              {title}
            </h1>
            
            <div className="prose prose-invert prose-snap max-w-none">
              <div className={`text-gray-300 leading-relaxed text-xl space-y-10 markdown-body ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <ReactMarkdown
                  components={{
                    h2: ({node, ...props}) => (
                      <div className="my-16 p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/30 to-purple-600/10 border-2 border-blue-500/40 shadow-[0_20px_50px_rgba(37,99,235,0.2)] relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
                        <h2 className="text-3xl lg:text-5xl font-black text-blue-400 m-0 uppercase tracking-tighter italic relative z-10 drop-shadow-lg" {...props} />
                      </div>
                    ),
                    h3: ({node, ...props}) => (
                      <div className="my-12 p-8 rounded-[2rem] bg-gradient-to-r from-snap-yellow/20 to-transparent border-l-8 border-snap-yellow shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-snap-yellow/5 rounded-full blur-2xl"></div>
                        <h3 className="text-2xl lg:text-4xl font-black text-snap-yellow m-0 uppercase tracking-tight relative z-10 drop-shadow-md" {...props} />
                      </div>
                    ),
                    h4: ({node, ...props}) => (
                      <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/5 border-2 border-green-500/30 shadow-xl">
                        <h4 className="text-xl lg:text-3xl font-black text-green-400 m-0 uppercase italic" {...props} />
                      </div>
                    ),
                    p: ({node, ...props}) => <p className="text-gray-300 leading-relaxed font-medium mb-8 text-lg lg:text-xl" {...props} />,
                    ul: ({node, ...props}) => <ul className="space-y-6 my-10 list-none p-0" {...props} />,
                    ol: ({node, ...props}) => <ol className="space-y-6 my-10 list-decimal list-inside p-0" {...props} />,
                    li: ({node, ...props}) => (
                      <li className="flex items-start gap-4 text-gray-300 font-medium bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-snap-yellow/40 hover:bg-white/10 transition-all shadow-lg group">
                        <div className="w-3 h-3 rounded-full bg-snap-yellow mt-3 shrink-0 shadow-[0_0_15px_rgba(255,252,0,0.6)] group-hover:scale-125 transition-transform"></div>
                        <span className="flex-1">{props.children}</span>
                      </li>
                    ),
                    strong: ({node, ...props}) => <strong className="text-snap-yellow font-black bg-snap-yellow/10 px-2 py-0.5 rounded border border-snap-yellow/20" {...props} />,
                    blockquote: ({node, ...props}) => (
                      <div className="my-12 p-10 rounded-[2.5rem] bg-gradient-to-br from-purple-600/20 to-pink-600/5 border-2 border-dashed border-purple-500/40 relative shadow-2xl">
                        <div className="absolute -top-6 left-10 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-black uppercase tracking-widest rounded-xl shadow-lg">
                          {lang === 'ar' ? 'ملاحظة هامة' : 'Important Note'}
                        </div>
                        <blockquote className="italic text-purple-200 m-0 text-2xl font-medium leading-relaxed" {...props} />
                      </div>
                    )
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
