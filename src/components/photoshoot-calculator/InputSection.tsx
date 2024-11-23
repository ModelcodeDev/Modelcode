import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface InputSectionProps {
  outfitCount: number;
  setOutfitCount: (value: number) => void;
  photoCount: number;
  setPhotoCount: (value: number) => void;
  locationCount: number;
  setLocationCount: (value: number) => void;
  modelCount: number;
  setModelCount: (value: number) => void;
}

const InputSection = ({
  outfitCount,
  setOutfitCount,
  photoCount,
  setPhotoCount,
  locationCount,
  setLocationCount,
  modelCount,
  setModelCount,
}: InputSectionProps) => {
  return (
    <div className="space-y-8 bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-6">Your Requirements</h3>
      
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
            max={50}
            step={1}
            className="w-full"
          />
        </div>
        <span className="block text-right">{outfitCount} outfits</span>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium">
          Number of Final Photos Per Outfit/Look
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-2">
                <Info className="h-4 w-4 inline" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Total number of unique final images needed per outfit/look</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </label>
        <div className="px-2">
          <Slider
            value={[photoCount]}
            onValueChange={(values) => setPhotoCount(values[0])}
            max={10}
            step={1}
            className="w-full"
          />
        </div>
        <span className="block text-right">{photoCount} photos</span>
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

      <div className="space-y-4">
        <label className="block text-sm font-medium">
          Number of Models
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-2">
                <Info className="h-4 w-4 inline" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Number of different models needed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </label>
        <div className="px-2">
          <Slider
            value={[modelCount]}
            onValueChange={(values) => setModelCount(values[0])}
            max={10}
            step={1}
            className="w-full"
          />
        </div>
        <span className="block text-right">{modelCount} models</span>
      </div>
    </div>
  );
};

export default InputSection;