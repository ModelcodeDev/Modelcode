import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Slider } from "./ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

interface PhotoshootCalculatorProps {
  className?: string;
  id?: string;
}

const PhotoshootCalculator = ({ className, id }: PhotoshootCalculatorProps) => {
  const [lastCost, setLastCost] = useState<number>(5000);
  const { language } = useLanguage();
  const t = translations[language];
  
  const modelcodeCost = lastCost * 0.45;

  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t.lastPhotoshootCost}
          </h2>
          
          <div className="mb-16 space-y-4">
            <p className="text-center text-lg font-semibold">
              ${lastCost.toLocaleString()}
            </p>
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
            <h3 className="text-xl md:text-2xl font-semibold text-center">{t.comparison}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:[&>*:first-child]:order-none [&>*:first-child]:order-last">
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                <h4 className="font-medium text-lg text-center">{t.traditional}</h4>
                <p className="text-3xl font-bold text-red-500 text-center">
                  ${lastCost.toLocaleString()}
                </p>
                <p className="text-gray-600 text-center italic">
                  {t.timeTook}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                <h4 className="font-medium text-lg text-center">{t.modelcode}</h4>
                <p className="text-3xl font-bold text-green-500 text-center">
                  ${modelcodeCost.toLocaleString()}
                </p>
                <p className="text-blue-600 font-semibold text-center">
                  {t.timeHyperfast}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                {t.saveOnPhotoshoot} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoshootCalculator;