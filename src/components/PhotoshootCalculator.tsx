import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import InputSection from "./photoshoot-calculator/InputSection";
import ResultsSection from "./photoshoot-calculator/ResultsSection";
import { calculateResults } from "./photoshoot-calculator/calculations";

interface PhotoshootCalculatorProps {
  className?: string;
  id?: string;
}

const PhotoshootCalculator = ({ className, id }: PhotoshootCalculatorProps) => {
  const [photoCount, setPhotoCount] = useState<number>(1);
  const [outfitCount, setOutfitCount] = useState<number>(1);
  const [locationCount, setLocationCount] = useState<number>(1);
  const [modelCount, setModelCount] = useState<number>(1);

  const results = calculateResults(photoCount, outfitCount, locationCount, modelCount);
  const savings = results.traditional.costs.total - results.ai.costs.total;

  const scrollToResults = () => {
    const resultsElement = document.querySelector('#calculator-results');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center mb-4">Calculate Your Savings</h2>
        
        {/* Mobile Summary */}
        <div className="md:hidden text-center mb-8">
          <p className="text-lg font-medium text-green-600">
            Save up to ${savings.toLocaleString()}
          </p>
          <button 
            onClick={scrollToResults}
            className="text-sm text-blue-600 underline mt-1"
          >
            Learn more
          </button>
        </div>
        
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
          <div id="calculator-results">
            <ResultsSection
              traditional={results.traditional}
              ai={results.ai}
              photoCount={photoCount}
            />
          </div>
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
