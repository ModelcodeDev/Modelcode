import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface SavingsCalculatorProps {
  className?: string;
}

const SavingsCalculator = ({ className }: SavingsCalculatorProps) => {
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
    <section className={`py-20 bg-black/80 ${className}`}>
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="section-title text-center mb-12 text-white">Calculate Your Savings</h2>
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block text-white text-sm font-medium">
                How many products do you have?
              </label>
              <div className="px-2">
                <Slider
                  value={[productCount]}
                  onValueChange={(values) => setProductCount(values[0])}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="block text-white text-right">{productCount} products</span>
            </div>
            
            <div className="space-y-4">
              <label className="block text-white text-sm font-medium">
                How many photos per product?
              </label>
              <div className="px-2">
                <Slider
                  value={[photosPerProduct]}
                  onValueChange={(values) => setPhotosPerProduct(values[0])}
                  max={20}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="block text-white text-right">{photosPerProduct} photos</span>
            </div>
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
  );
};

export default SavingsCalculator;