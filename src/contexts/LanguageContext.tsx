import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'pl';
  setLanguage: (lang: 'en' | 'pl') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'pl'>('en');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const initialLang = browserLang.startsWith('pl') ? 'pl' : 'en';
    setLanguage(initialLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};