import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToCalculator = () => {
    const calculatorSection = document.querySelector('#calculator-section');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSessions = () => {
    const sessionsSection = document.querySelector('#sessions-section');
    sessionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center space-y-8 fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          {language === 'pl' ? (
            <span>Ożyw swoje produkty</span>
          ) : (
            <span>Bring Your Products to Life</span>
          )}
        </h1>
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="mt-8 bg-white text-black hover:bg-gray-200"
            onClick={scrollToCalculator}
          >
            {t.calculateSavings} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div>
            <button onClick={scrollToSessions} className="text-white hover:text-gray-300 underline">
              {t.seeOurSessions}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};