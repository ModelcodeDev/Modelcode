import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [productCount, setProductCount] = useState<number>(0);
  const [photosPerProduct, setPhotosPerProduct] = useState<number>(0);
  
  // Calculate savings
  const calculateSavings = () => {
    const totalPhotos = productCount * photosPerProduct;
    const traditionalCost = totalPhotos * 100; // Assuming $100 per traditional photo
    const aiCost = totalPhotos * 20; // Assuming $20 per AI photo
    const moneySaved = traditionalCost - aiCost;
    const timeSaved = totalPhotos * 2; // Assuming 2 hours saved per photo
    
    return {
      traditionalCost,
      aiCost,
      moneySaved,
      timeSaved
    };
  };

  const savings = calculateSavings();

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/4bd6ab60-5e02-4314-adcb-146db2fc78ea.png')",
          backgroundSize: "cover",
          backgroundPosition: { xs: "left", md: "center" },
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
        <section className="py-20 bg-black/80">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="section-title text-center mb-12 text-white">Calculate Your Savings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <label className="block text-white text-sm font-medium">
                  How many products do you have?
                </label>
                <Input
                  type="number"
                  min="0"
                  value={productCount}
                  onChange={(e) => setProductCount(Number(e.target.value))}
                  className="w-full"
                  placeholder="Enter number of products"
                />
              </div>
              
              <div className="space-y-4">
                <label className="block text-white text-sm font-medium">
                  How many photos per product?
                </label>
                <Input
                  type="number"
                  min="0"
                  value={photosPerProduct}
                  onChange={(e) => setPhotosPerProduct(Number(e.target.value))}
                  className="w-full"
                  placeholder="Enter photos per product"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-gray-300 mb-2">Traditional Cost</p>
                <p className="text-3xl font-bold text-white">${savings.traditionalCost}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-gray-300 mb-2">AI-Powered Cost</p>
                <p className="text-3xl font-bold text-white">${savings.aiCost}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-gray-300 mb-2">Money Saved</p>
                <p className="text-3xl font-bold text-green-400">${savings.moneySaved}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-gray-300 mb-2">Time Saved</p>
                <p className="text-3xl font-bold text-blue-400">{savings.timeSaved} hours</p>
              </div>
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
      </div>
    </div>
  );
};

export default Index;