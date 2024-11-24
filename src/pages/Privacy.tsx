import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Privacy = () => {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  return (
    <div className="container py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
      <div className="prose prose-lg">
        <p className="mb-4">{t.lastUpdated}: {new Date().toLocaleDateString()}</p>
        
        <p className="mb-8">{t.intro}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.dataWeCollect}</h2>
        <p className="mb-4">{t.dataWeCollectDesc}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.howWeUse}</h2>
        <p className="mb-4">{t.howWeUseDesc}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{t.contact}</h2>
        <p className="mb-4">
          {t.contactDesc}
          <br />
          Email: kordian@modelcode.io
        </p>
      </div>
    </div>
  );
};

export default Privacy;