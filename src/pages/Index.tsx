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

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/4bd6ab60-5e02-4314-adcb-146db2fc78ea.png')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
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

        {/* Calculator Section */}
        <SavingsCalculator />

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