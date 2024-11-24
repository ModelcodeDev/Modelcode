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
    <section className="min-h-screen relative">
      {/* Background image - Desktop */}
      <div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: "url('/lovable-uploads/7add61ac-380a-4d84-82b0-b3c33fb0eccb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Background image - Mobile */}
      <div 
        className="absolute inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: "url('/lovable-uploads/470fd5ae-f8fb-4931-aeee-ff2aaa9d3e60.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex md:justify-end justify-center">
            <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left space-y-8 fade-in p-8 rounded-lg">
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
                  className="w-full md:w-auto bg-white text-black hover:bg-gray-200"
                  onClick={scrollToCalculator}
                >
                  {t.calculateSavings} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div>
                  <button 
                    onClick={scrollToSessions} 
                    className="text-white hover:text-gray-300 underline"
                  >
                    {t.seeOurSessions}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};