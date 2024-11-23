import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
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

      {/* Navigation */}
      <Navigation />

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
              Pimp My Photos <ArrowRight className="ml-2 h-4 w-4" />
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

        {/* Process Section */}
        <section className="py-20 bg-black/80">
          <div className="container">
            <h2 className="section-title text-center mb-16 text-white">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Camera className="h-8 w-8" />,
                  title: "Product Photos",
                  description: "Upload your product images",
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Creative Brief",
                  description: "Define your vision and requirements",
                },
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "AI Generation",
                  description: "Let our AI create perfect shots",
                },
                {
                  icon: <ArrowRight className="h-8 w-8" />,
                  title: "Final Delivery",
                  description: "Receive your stunning photos",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-lg text-center fade-in-right text-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 inline-block">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/80">
          <div className="container max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="section-title text-white">Get in Touch</h2>
              <p className="text-gray-300">
                Ready to transform your fashion photography? Contact us today.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <p className="text-lg text-white">
                Email:{" "}
                <a
                  href="mailto:kordian@modelcode.io"
                  className="text-white hover:text-gray-300"
                >
                  kordian@modelcode.io
                </a>
              </p>
              <p className="text-lg text-white">
                Phone:{" "}
                <a href="tel:+48797502346" className="text-white hover:text-gray-300">
                  +48 797 502 346
                </a>
              </p>
              <p className="text-lg text-white">
                Website:{" "}
                <a
                  href="https://modelcode.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  modelcode.io
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-black/80 text-white text-center">
          <div className="container">
            <div className="space-y-4">
              <p>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </p>
              <p>Made with ❤️ in Warsaw</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
