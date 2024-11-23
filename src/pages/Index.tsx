import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PhotoshootCalculator from "@/components/PhotoshootCalculator";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Products", "Outfits", "Looks", "Clothes"];

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

  const portfolioPreviewImages = [
    '/lovable-uploads/b861ca7f-8e35-43a6-9c34-28e7a0928398.png',
    '/lovable-uploads/7a94c616-ae96-4056-8ded-052afef3b069.png',
    '/lovable-uploads/082622d6-76ab-4044-ab90-f7e551ec7346.png',
  ];

  const benefits = [
    {
      title: "Adapt to any market",
      description: "Choose models and visuals tailored for Asia, the US, or Europe. Stay ahead in the fast-paced fashion world with unmatched flexibility"
    },
    {
      title: "Limitless sessions",
      description: "Diverse models and any location. Create visuals more affordably than traditional shoots, without logistics costs or complex arrangements."
    },
    {
      title: "Your brand concept",
      description: "Modelcode allows you to create visuals that fully realize your brand's vision. Alignment with your brand concept? Unlimited!​"
    }
  ];

  return (
    <div className="min-h-screen relative">
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
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center space-y-8 fade-in">
            <h1 className="hero-text text-white">
              Bring Your{' '}
              <span className="relative inline-block w-[180px]">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={`absolute left-1/2 -translate-x-1/2 text-blue-400 min-w-[180px] ${
                      index === currentWord ? 'animate-word-change' : 'opacity-0'
                    }`}
                  >
                    {word}
                  </span>
                ))}
                <span className="invisible">{words[0]}</span>
              </span>
              {' '}to Life
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Transform your fashion brand with AI-powered photography that delivers
              unlimited possibilities, perfect consistency, and unmatched efficiency.
            </p>
            <div className="space-y-4">
              <Button size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">
                Calculate your savings <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div>
                <button onClick={scrollToWhySection} className="text-white hover:text-gray-300 underline">
                  Learn how it works
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Modelcode? Section */}
        <section id="why-modelcode" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Why Modelcode?</h2>
            <div className="flex flex-col md:flex-row gap-12">
              {/* Process Visualization - Left Side on Desktop */}
              <div className="md:w-1/3">
                <img
                  src="/lovable-uploads/58723372-d470-4ebf-9e33-b00222383190.png"
                  alt="Modelcode process visualization"
                  className="w-4/5 mx-auto rounded-lg"
                />
              </div>
              
              {/* Benefits - Right Side on Desktop */}
              <div className="md:w-2/3 space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="fade-in bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Calculator Section */}
        <PhotoshootCalculator className="bg-gray-50" />
        
        {/* Portfolio Preview Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="section-title text-center mb-16">Featured Work</h2>
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
                  View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;