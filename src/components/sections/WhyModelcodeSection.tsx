import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export const WhyModelcodeSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const benefits = [
    {
      title: t.adaptToMarket,
      description: t.adaptToMarketDesc
    },
    {
      title: t.limitlessSessions,
      description: t.limitlessSessionsDesc
    },
    {
      title: t.brandConcept,
      description: t.brandConceptDesc
    }
  ];

  return (
    <section id="why-modelcode" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">{t.whyModelcode}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="fade-in bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};