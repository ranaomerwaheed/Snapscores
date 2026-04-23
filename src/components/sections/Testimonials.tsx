import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  isDark: boolean;
  t: any;
}

export const Testimonials = ({ isDark, t }: TestimonialsProps) => {
  return (
    <section id="reviews" className={`py-32 px-6 relative section-divider ${isDark ? "bg-matte-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight glow-text">{t.testimonials.title}</h2>
          <div className="w-32 h-1.5 bg-snap-yellow mx-auto rounded-full shadow-[0_0_15px_rgba(255,252,0,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {t.testimonials.items.map((review: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden glow-card neon-border ${
                i === 0 ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50' : 
                i === 1 ? 'bg-purple-600/5 border-purple-500/20 hover:border-purple-500/50' : 
                'bg-orange-600/5 border-orange-500/20 hover:border-orange-500/50'
              }`}
            >
              <Quote className={`absolute top-8 right-8 w-12 h-12 opacity-10 group-hover:opacity-30 transition-opacity ${
                i === 0 ? 'text-blue-400' : i === 1 ? 'text-purple-400' : 'text-orange-400'
              }`} />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="text-white font-black text-xl mb-1">{review.name}</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-snap-yellow fill-snap-yellow shadow-lg" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed italic font-medium">"{review.comment}"</p>
              <div className={`mt-8 text-[10px] font-black uppercase tracking-[0.3em] ${
                i === 0 ? 'text-blue-400' : i === 1 ? 'text-purple-400' : 'text-orange-400'
              }`}>VERIFIED CUSTOMER</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
