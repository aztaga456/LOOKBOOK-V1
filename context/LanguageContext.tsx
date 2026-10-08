'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (idKey: string, enKey: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (idKey: string) => idKey,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('id');

  useEffect(() => {
    const saved = localStorage.getItem('lp_lang') as Language;
    if (saved && (saved === 'id' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('lp_lang', newLang);
  };

  const t = (idText: string, enText: string) => {
    return lang === 'en' ? enText : idText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
