import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Slider } from "./ui/slider";

interface PhotoshootCalculatorProps {
  className?: string;
  id?: string;
}

const PhotoshootCalculator = ({ className, id }: PhotoshootCalculatorProps) => {
  const [lastCost, setLastCost] = useState<number>(5000); // Default to $5k
  
  const modelcodeCost = lastCost * 0.45; // 45% of traditional cost
  const savingsPercentage = 55; // Fixed at 55%

  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Your last normal photoshoot cost
          </h2>
          
          <div className="mb-16 space-y-4">
            <div className="px-2">
              <Slider
                value={[lastCost]}
                onValueChange={(values) => setLastCost(values[0])}
                max={100000}
                step={100}
                className="w-full"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>$100,000</span>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-xl md:text-2xl font-semibold text-center">Comparison</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                <h4 className="font-medium text-lg text-center">Traditional</h4>
                <p className="text-3xl font-bold text-red-500 text-center">
                  ${lastCost.toLocaleString()}
                </p>
                <p className="text-gray-600 text-center italic">
                  It took long, right? 😈
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                <h4 className="font-medium text-lg text-center">Modelcode</h4>
                <p className="text-3xl font-bold text-green-500 text-center">
                  ${modelcodeCost.toLocaleString()}
                </p>
                <p className="text-blue-600 font-semibold text-center">
                  hyperfast ⚡
                </p>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-medium text-center bg-black text-white py-4 px-6 rounded-lg inline-block mx-auto">
              Save {savingsPercentage}% on your photoshoot
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Save on Your Photoshoot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoshootCalculator;