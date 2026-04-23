import React from 'react';
import { BackButton } from '../components/BackButton';

export const PrivacyPolicy = ({ lang, setView, t }: any) => {
  return (
    <section className="pt-40 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton onClick={() => setView('home')} lang={lang} />
        </div>
        <div className="glass p-10 lg:p-16 rounded-[3rem] border-white/10">
          <h1 className="text-4xl lg:text-6xl font-black mb-12 uppercase tracking-tighter">
            {t.privacy.title}
          </h1>
          <div className="prose prose-invert max-w-none space-y-8 text-gray-400 font-medium leading-relaxed">
            {t.privacy.sections.map((section: any, i: number) => (
              <div key={i}>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TermsOfService = ({ lang, setView, t }: any) => {
  return (
    <section className="pt-40 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton onClick={() => setView('home')} lang={lang} />
        </div>
        <div className="glass p-10 lg:p-16 rounded-[3rem] border-white/10">
          <h1 className="text-4xl lg:text-6xl font-black mb-12 uppercase tracking-tighter">
            {t.terms.title}
          </h1>
          <div className="prose prose-invert max-w-none space-y-8 text-gray-400 font-medium leading-relaxed">
            {t.terms.sections.map((section: any, i: number) => (
              <div key={i}>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
