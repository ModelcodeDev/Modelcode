import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Privacy = () => {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  return (
    <div className="container py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          {t.lastUpdated}: {t.lastUpdatedDate}
        </p>
        
        <p className="mb-8">{t.intro}</p>

        {Object.entries(t.sections).map(([key, section]) => (
          <div key={key} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
            {section.items && (
              <ul className="list-disc pl-6 space-y-2">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;