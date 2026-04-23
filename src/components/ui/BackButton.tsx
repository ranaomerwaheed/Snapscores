import React from 'react';
import { ChevronLeft } from 'lucide-react';

export const BackButton = ({ onClick, lang }: { onClick: () => void, lang: string }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 glass rounded-xl hover:bg-snap-yellow hover:text-black transition-all font-bold mb-6 group"
  >
    <ChevronLeft className={`w-5 h-5 transition-transform group-hover:-translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
    <span>{lang === 'ar' ? 'رجوع' : 'Back'}</span>
  </button>
);
