import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import { useState } from "react";

export const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Products", "Outfits", "Looks", "Clothes"];
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
        <h1 className="hero-text text-white">
          {language === 'pl' ? (
            <span>Ożyw swoje produkty</span>
          ) : (
            <>
              <span className="hidden md:inline">
                {t.bringProductsToLife}
              </span>
              
              {/* Mobile version */}
              <span className="md:hidden">
                <span className="block">Bring Your</span>
                <span className="relative inline-flex justify-center">
                  {words.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute block ${
                        index === currentWord ? 'animate-word-change text-blue-400' : 'opacity-0'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                  <span className="invisible">{words[0]}</span>
                </span>
                <span className="block">to Life</span>
              </span>
            </>
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