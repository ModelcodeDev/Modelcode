import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SavingsCalculator from "@/components/SavingsCalculator";

const Index = () => {
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
      {/* Background Image - Desktop */}
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
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: "url('/Home background - mobile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          height: "100vh",
          width: "100vw"
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center space-y-8 fade-in">
            <h1 className="hero-text text-white">
              Bring Your Products
              <br />
              to Life
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Transform your fashion brand with AI-powered photography that delivers
              unlimited possibilities, perfect consistency, and unmatched efficiency.
            </p>
            <Button size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">
              Calculate your savings <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Why Modelcode? Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title mb-12">Why Modelcode?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="fade-in bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <img
                src="/lovable-uploads/58723372-d470-4ebf-9e33-b00222383190.png"
                alt="Modelcode process visualization"
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <SavingsCalculator />
        
        {/* CTA Section */}
        <div className="bg-black/80 py-12 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-white mb-6">Ready to transform your product photography?</h3>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

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