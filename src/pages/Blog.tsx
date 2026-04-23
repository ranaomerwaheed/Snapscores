import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const Blog = ({ lang, t, setView, setSelectedBlogPost }: any) => {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      {/* Colorful Background Blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-snap-yellow/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <BackButton onClick={() => setView('home')} lang={lang} />
        </div>
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tighter bg-gradient-to-r from-white via-snap-yellow to-white bg-clip-text text-transparent">
            {t.blog.title}
          </h1>
          <p className="text-xl text-gray-400 font-medium">{t.blog.subtitle}</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-snap-yellow to-purple-500 mx-auto rounded-full mt-8 shadow-[0_0_20px_rgba(255,252,0,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blog.posts.map((post: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-snap-yellow/50 transition-all group relative transform hover:-translate-y-2 duration-500 shadow-2xl ${
                i % 4 === 0 ? 'bg-gradient-to-br from-blue-600/40 to-cyan-500/20' : 
                i % 4 === 1 ? 'bg-gradient-to-br from-purple-600/40 to-pink-500/20' : 
                i % 4 === 2 ? 'bg-gradient-to-br from-orange-500/40 to-yellow-400/20' :
                'bg-gradient-to-br from-green-600/40 to-emerald-500/20'
              }`}
            >
              <div className="absolute inset-0 backdrop-blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <div 
                  className="aspect-video overflow-hidden cursor-pointer relative"
                  onClick={() => {
                    setSelectedBlogPost(post);
                    setView('blog-detail');
                    window.location.hash = `blog-${i}`;
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className={`absolute inset-0 opacity-40 bg-gradient-to-t from-black via-transparent to-transparent z-10`}></div>
                  <img 
                    src={post.thumbnail || `https://picsum.photos/seed/blog-page-${i}/600/400`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`w-10 h-10 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-lg ${
                    i % 4 === 0 ? 'bg-blue-500 text-white' : 
                    i % 4 === 1 ? 'bg-purple-500 text-white' : 
                    i % 4 === 2 ? 'bg-orange-500 text-white' :
                    'bg-green-500 text-white'
                  }`}>{post.date}</div>
                  <h3 
                    className="text-2xl font-black mb-4 leading-tight group-hover:text-snap-yellow transition-colors cursor-pointer line-clamp-2"
                    onClick={() => {
                      setSelectedBlogPost(post);
                      setView('blog-detail');
                      window.location.hash = `blog-${i}`;
                      window.scrollTo(0, 0);
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed line-clamp-3 font-medium">{post.excerpt}</p>
                  <button 
                    onClick={() => {
                      setSelectedBlogPost(post);
                      setView('blog-detail');
                      window.location.hash = `blog-${i}`;
                      window.scrollTo(0, 0);
                    }}
                    className="w-full py-4 glass text-white font-black rounded-2xl hover:bg-snap-yellow hover:text-black transition-all uppercase tracking-widest text-xs"
                  >
                    {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
