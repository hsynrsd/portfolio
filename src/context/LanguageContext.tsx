import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>(() => {
    // First try to get language from URL
    if (lang && (lang === 'en' || lang === 'bg')) {
      return lang;
    }
    // Then try to get from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'bg') {
      return savedLanguage;
    }
    // Default to English
    return 'en';
  });

  useEffect(() => {
    // Update URL when language changes
    if (lang !== language) {
      navigate(`/${language}`, { replace: true });
    }
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language, lang, navigate]);

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

export default LanguageContext; 