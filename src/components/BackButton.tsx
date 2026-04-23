import React from 'react';
import { ChevronLeft } from 'lucide-react';

export const BackButton = ({ onClick, lang }: { onClick: () => void, lang: 'en' | 'ar' }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-snap-yellow transition-all font-black uppercase tracking-widest text-xs group"
    >
      <ChevronLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
      {lang === 'ar' ? 'العودة' : 'Back'}
    </button>
  );
};
