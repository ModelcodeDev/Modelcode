import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PhotoshootCalculator from "@/components/PhotoshootCalculator";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Products", "Outfits", "Looks", "Clothes"];
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWhySection = () => {
    const whySection = document.querySelector('#why-modelcode');
    whySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    const calculatorSection = document.querySelector('#calculator-section');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSessions = () => {
    const sessionsSection = document.querySelector('#sessions-section');
    sessionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSaveClick = () => {
    navigate('/contact');
  };

  const portfolioPreviewImages = [
    '/lovable-uploads/b861ca7f-8e35-43a6-9c34-28e7a0928398.png',
    '/lovable-uploads/7a94c616-ae96-4056-8ded-052afef3b069.png',
    '/lovable-uploads/082622d6-76ab-4044-ab90-f7e551ec7346.png',
  ];

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
    <div className="min-h-screen relative">
      {/* Language Switcher - Desktop only */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <LanguageSwitcher />
      </div>

      {/* Background Images */}
      <div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: "url('/lovable-uploads/1368a7a7-6eeb-41bd-9e03-6cf54f44b5bb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          height: "100vh",
          width: "100vw"
        }}
      />
      <div 
        className="absolute inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: "url('/lovable-uploads/899b484d-7aa9-418a-bed0-3d4fe1029897.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          height: "100vh",
          width: "100vw"
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
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

        {/* Why Modelcode? Section */}
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

        {/* Featured Work Section */}
        <section id="sessions-section" className="py-20 bg-white">
          <div className="container">
            <h2 className="section-title text-center mb-16">{t.checkOurSessions}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {portfolioPreviewImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={image}
                    alt={`Portfolio preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/portfolio">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  {t.viewPortfolio} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Advanced Calculator Section */}
        <section id="calculator-section" className="bg-white">
          <div className="container py-20">
            <h2 className="section-title text-center mb-16">{t.saveOnPhotoshoot}</h2>
            <div className="text-center mb-8">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800"
                onClick={handleSaveClick}
              >
                {t.saveOnPhotoshoot} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <PhotoshootCalculator />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
