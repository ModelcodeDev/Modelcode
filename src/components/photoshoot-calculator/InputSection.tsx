import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface InputSectionProps {
  outfitCount: number;
  setOutfitCount: (value: number) => void;
  photoCount: number;
  setPhotoCount: (value: number) => void;
}

const InputSection = ({
  outfitCount,
  setOutfitCount,
  photoCount,
  setPhotoCount,
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
          Photos Per Outfit
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-2">
                <Info className="h-4 w-4 inline" />
              </TooltipTrigger>
              <TooltipContent>
                <p>5 photos included per outfit. Additional photos available at extra cost.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </label>
        <div className="px-2">
          <Slider
            value={[photoCount]}
            onValueChange={(values) => setPhotoCount(values[0])}
            min={5}
            max={10}
            step={1}
            className="w-full"
          />
        </div>
        <div className="text-right space-y-1">
          <span className="block">{photoCount} photos per outfit</span>
          <span className="block text-sm text-gray-500">
            {photoCount > 5 ? `(${photoCount - 5} additional photos)` : '(5 included)'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputSection;