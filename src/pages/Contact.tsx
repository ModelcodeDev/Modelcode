import React from 'react';
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #000000, #1a1a1a)",
          opacity: 0.95
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-white">
            <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl mb-12 text-gray-200">
              {t.subtitle}
            </p>
            
            <div className="space-y-8">
              <a 
                href="tel:+48797502346" 
                className="flex items-center space-x-4 text-lg hover:text-gray-300 transition-colors"
              >
                <Phone className="h-6 w-6" />
                <span>{t.phone}</span>
              </a>
              
              <a 
                href="mailto:Kordian@modelcode.io" 
                className="flex items-center space-x-4 text-lg hover:text-gray-300 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span>{t.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;