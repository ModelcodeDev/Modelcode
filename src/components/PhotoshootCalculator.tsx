import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface PhotoshootCalculatorProps {
  className?: string;
}

const PhotoshootCalculator = ({ className }: PhotoshootCalculatorProps) => {
  // Input parameters
  const [photoCount, setPhotoCount] = useState<number>(10);
  const [outfitCount, setOutfitCount] = useState<number>(2);
  const [locationCount, setLocationCount] = useState<number>(1);
  const [budget, setBudget] = useState<string>("");

  // Calculate costs and times
  const calculateResults = () => {
    // Traditional Photoshoot Costs
    const photographerDayRate = 1500;
    const modelDayRate = 1200;
    const locationCost = locationCount * 500;
    const makeupArtist = 400;
    const stylingCost = outfitCount * 200;
    const equipmentRental = 300;
    const postProduction = photoCount * 50;
    const travelCosts = locationCount * 200;
    const studioRental = locationCount === 1 ? 800 : 0;

    const traditionalTotal = 
      photographerDayRate + 
      modelDayRate + 
      locationCost + 
      makeupArtist + 
      stylingCost + 
      equipmentRental + 
      postProduction + 
      travelCosts + 
      studioRental;

    // AI Costs
    const aiPerImage = 20;
    const promptEngineering = 200;
    const revisions = photoCount * 10;
    const styleConsultation = 150;

    const aiTotal = 
      (photoCount * aiPerImage) + 
      promptEngineering + 
      revisions + 
      styleConsultation;

    // Time calculations (in hours)
    const traditionalTime = {
      preProduction: locationCount * 4 + outfitCount * 2,
      shootTime: locationCount * 4 + outfitCount * 2,
      postProduction: photoCount * 1.5,
      coordination: locationCount * 2 + outfitCount,
    };

    const aiTime = {
      preparation: 2,
      promptWriting: photoCount * 0.25,
      generation: photoCount * 0.1,
      review: photoCount * 0.25,
      adjustments: photoCount * 0.2,
    };

    const totalTraditionalTime = 
      traditionalTime.preProduction + 
      traditionalTime.shootTime + 
      traditionalTime.postProduction + 
      traditionalTime.coordination;

    const totalAiTime = 
      aiTime.preparation + 
      aiTime.promptWriting + 
      aiTime.generation + 
      aiTime.review + 
      aiTime.adjustments;

    return {
      traditional: {
        costs: {
          total: traditionalTotal,
          breakdown: {
            photographer: photographerDayRate,
            model: modelDayRate,
            location: locationCost,
            makeup: makeupArtist,
            styling: stylingCost,
            equipment: equipmentRental,
            postProduction,
            travel: travelCosts,
            studio: studioRental,
          },
        },
        time: traditionalTime,
        totalTime: totalTraditionalTime,
      },
      ai: {
        costs: {
          total: aiTotal,
          breakdown: {
            perImage: photoCount * aiPerImage,
            promptEngineering,
            revisions,
            styleConsultation,
          },
        },
        time: aiTime,
        totalTime: totalAiTime,
      },
    };
  };

  const results = calculateResults();
  const savings = results.traditional.costs.total - results.ai.costs.total;
  const savingsPercentage = ((savings / results.traditional.costs.total) * 100).toFixed(1);
  const timeSaved = results.traditional.totalTime - results.ai.totalTime;

  return (
    <section className={`py-20 ${className}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-title text-center mb-12">Advanced Cost Calculator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Input Parameters */}
          <div className="space-y-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Project Requirements</h3>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Number of Final Photos
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="ml-2">
                      <Info className="h-4 w-4 inline" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total number of unique final images needed</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </label>
              <div className="px-2">
                <Slider
                  value={[photoCount]}
                  onValueChange={(values) => setPhotoCount(values[0])}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="block text-right">{photoCount} photos</span>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Number of Outfits/Looks
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="ml-2">
                      <Info className="h-4 w-4 inline" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Different clothing combinations needed</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </label>
              <div className="px-2">
                <Slider
                  value={[outfitCount]}
                  onValueChange={(values) => setOutfitCount(values[0])}
                  max={20}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="block text-right">{outfitCount} outfits</span>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Number of Locations
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="ml-2">
                      <Info className="h-4 w-4 inline" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Different shooting locations or backgrounds required</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </label>
              <div className="px-2">
                <Slider
                  value={[locationCount]}
                  onValueChange={(values) => setLocationCount(values[0])}
                  max={10}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="block text-right">{locationCount} locations</span>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Current Photography Budget (Optional)
              </label>
              <Input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter your budget"
                className="w-full"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-6">Cost Comparison</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Traditional</h4>
                  <p className="text-2xl font-bold">${results.traditional.costs.total}</p>
                  <p className="text-sm text-gray-500">${(results.traditional.costs.total / photoCount).toFixed(0)} per photo</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">AI-Powered</h4>
                  <p className="text-2xl font-bold text-green-600">${results.ai.costs.total}</p>
                  <p className="text-sm text-gray-500">${(results.ai.costs.total / photoCount).toFixed(0)} per photo</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="font-medium">Total Savings</p>
                <p className="text-3xl font-bold text-green-600">${savings}</p>
                <p className="text-sm text-gray-500">Save {savingsPercentage}% on your photoshoot</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-6">Time Savings</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Traditional</h4>
                  <p className="text-2xl font-bold">{results.traditional.totalTime.toFixed(1)} hours</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">AI-Powered</h4>
                  <p className="text-2xl font-bold text-blue-600">{results.ai.totalTime.toFixed(1)} hours</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Total Time Saved</p>
                <p className="text-3xl font-bold text-blue-600">{timeSaved.toFixed(1)} hours</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Additional Benefits</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  Unlimited revisions at no extra cost
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  No logistics or coordination needed
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  Easy generation of variations
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  Weather and location independent
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoshootCalculator;