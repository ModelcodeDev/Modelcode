interface Costs {
  traditional: {
    costs: {
      total: number;
      breakdown: Record<string, number>;
    };
    time: {
      preProduction: number;
      shootTime: number;
      postProduction: number;
      coordination: number;
    };
    totalTime: number;
  };
  ai: {
    costs: {
      total: number;
      breakdown: Record<string, number>;
    };
    time: Record<string, number>;
    totalTime: number;
  };
}

const BASE_PACKAGE_PHOTOS = 150;
const BASE_PACKAGE_COST = 14000;
const EXTRA_PHOTO_COST = 35;
const MODEL_COST = 2500;
const LOCATION_COST = 1000;

const TRADITIONAL_TIME = 165.0;
const AI_TIME = 64.4;
const AI_COST_PERCENTAGE = 0.3; // Fixed 30% of traditional cost for consistent pricing

export const calculateResults = (
  photosPerOutfit: number,
  outfitCount: number,
  locationCount: number,
  modelCount: number
): Costs => {
  // Input validation
  const validatedPhotos = Math.max(1, Math.round(photosPerOutfit));
  const validatedOutfits = Math.max(1, Math.round(outfitCount));
  const validatedLocations = Math.max(1, Math.round(locationCount));
  const validatedModels = Math.max(1, Math.round(modelCount));

  // Calculate total photos needed
  const totalPhotos = validatedPhotos * validatedOutfits;
  console.log('Total photos calculation:', { photosPerOutfit: validatedPhotos, outfitCount: validatedOutfits, totalPhotos });

  // Traditional cost calculation
  const extraPhotos = Math.max(0, totalPhotos - BASE_PACKAGE_PHOTOS);
  const basePhotoCost = BASE_PACKAGE_COST + (extraPhotos * EXTRA_PHOTO_COST);
  const modelCost = validatedModels * MODEL_COST;
  const locationCost = validatedLocations * LOCATION_COST;

  const traditionalTotal = basePhotoCost + modelCost + locationCost;

  // AI cost calculation (fixed at 30% of traditional)
  const aiTotal = Math.round(traditionalTotal * AI_COST_PERCENTAGE);

  // Time calculations
  const traditionalTime = {
    preProduction: validatedLocations * 2 + validatedOutfits,
    shootTime: validatedLocations * 4 + validatedOutfits * 1.5,
    postProduction: totalPhotos * 0.5,
    coordination: validatedLocations * 2 + validatedModels,
  };

  const aiTime = {
    preparation: 1 + (validatedModels * 0.5),
    promptWriting: totalPhotos * 0.2,
    generation: totalPhotos * 0.1 + (validatedLocations * 0.2),
    review: totalPhotos * 0.1,
    adjustments: totalPhotos * 0.2,
  };

  return {
    traditional: {
      costs: {
        total: traditionalTotal,
        breakdown: {
          basePackage: BASE_PACKAGE_COST,
          extraPhotos: extraPhotos * EXTRA_PHOTO_COST,
          models: modelCost,
          locations: locationCost,
        },
      },
      time: traditionalTime,
      totalTime: TRADITIONAL_TIME,
    },
    ai: {
      costs: {
        total: aiTotal,
        breakdown: {
          baseAiCost: aiTotal,
        },
      },
      time: aiTime,
      totalTime: AI_TIME,
    },
  };
};