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
  const savings = lastCost - modelcodeCost;
  const savingsPercentage = 55; // Fixed at 55%

  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
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

          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Your costs</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-medium">Traditional</h4>
                <p className="text-2xl font-bold text-red-500">
                  ${lastCost.toLocaleString()}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Modelcode</h4>
                <p className="text-2xl font-bold text-green-500">
                  ${modelcodeCost.toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-xl font-medium text-center">
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