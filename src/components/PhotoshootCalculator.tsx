import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import InputSection from "./photoshoot-calculator/InputSection";
import ResultsSection from "./photoshoot-calculator/ResultsSection";
import { calculateResults } from "./photoshoot-calculator/calculations";

interface PhotoshootCalculatorProps {
  className?: string;
}

const PhotoshootCalculator = ({ className }: PhotoshootCalculatorProps) => {
  const [photoCount, setPhotoCount] = useState<number>(1);
  const [outfitCount, setOutfitCount] = useState<number>(1);
  const [locationCount, setLocationCount] = useState<number>(1);
  const [modelCount, setModelCount] = useState<number>(1);

  const results = calculateResults(photoCount, outfitCount, locationCount, modelCount);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center mb-12">Calculate Your Savings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <InputSection
            outfitCount={outfitCount}
            setOutfitCount={setOutfitCount}
            photoCount={photoCount}
            setPhotoCount={setPhotoCount}
            locationCount={locationCount}
            setLocationCount={setLocationCount}
            modelCount={modelCount}
            setModelCount={setModelCount}
          />
          <ResultsSection
            traditional={results.traditional}
            ai={results.ai}
            photoCount={photoCount}
          />
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Save on Your Photoshoot <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoshootCalculator;