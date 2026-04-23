import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogGridProps {
  isDark: boolean;
  lang: string;
  t: any;
  setView: (view: any) => void;
  setSelectedPost: (post: any) => void;
}

export const BlogGrid = ({ isDark, lang, t, setView, setSelectedPost }: BlogGridProps) => {
  return (
    <section id="blog" className={`py-32 px-6 relative section-divider bg-dark-brown`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight glow-text text-white">{t.blog.title}</h2>
          <div className="w-32 h-1.5 bg-accent-gold mx-auto rounded-full shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {t.blog.posts.map((post: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => {
                setSelectedPost(post);
                setView('blog-detail');
                window.scrollTo(0, 0);
              }}
              className={`group cursor-pointer rounded-[2.5rem] overflow-hidden border border-accent-gold/10 hover:border-accent-gold/50 transition-all duration-500 glow-card neon-border bg-rich-brown/20`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-accent-gold text-dark-brown text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg">
                  {lang === 'ar' && post.arCategory ? post.arCategory : post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 text-[10px] text-warm-tan/40 font-bold uppercase tracking-widest mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-accent-gold" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-accent-gold" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-accent-gold text-white transition-colors leading-tight">
                  {lang === 'ar' && post.arTitle ? post.arTitle : post.title}
                </h3>
                <p className="text-warm-tan/60 text-sm mb-8 leading-relaxed line-clamp-2 font-medium">
                  {lang === 'ar' && post.arExcerpt ? post.arExcerpt : post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-accent-gold font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Read Article'}
                  <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
