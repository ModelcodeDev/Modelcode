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

const TRADITIONAL_PHOTO_COST = 600;
const AI_PHOTO_COST = 250;
const BASE_PHOTOS_PER_OUTFIT = 5;
const ADDITIONAL_PHOTO_COST_TRADITIONAL = 400;
const ADDITIONAL_PHOTO_COST_AI = 200;

export const calculateResults = (
  photosPerOutfit: number,
  outfitCount: number,
): Costs => {
  // Input validation
  const validatedOutfits = Math.max(1, Math.round(outfitCount));
  const validatedPhotosPerOutfit = Math.max(BASE_PHOTOS_PER_OUTFIT, Math.round(photosPerOutfit));
  
  // Calculate total photos and additional photos
  const totalPhotos = validatedPhotosPerOutfit * validatedOutfits;
  const additionalPhotosPerOutfit = Math.max(0, validatedPhotosPerOutfit - BASE_PHOTOS_PER_OUTFIT);
  const totalAdditionalPhotos = additionalPhotosPerOutfit * validatedOutfits;
  
  console.log('Photos calculation:', {
    outfits: validatedOutfits,
    photosPerOutfit: validatedPhotosPerOutfit,
    basePhotos: BASE_PHOTOS_PER_OUTFIT * validatedOutfits,
    additionalPhotos: totalAdditionalPhotos,
    totalPhotos
  });

  // Calculate base costs
  const baseTraditionalCost = validatedOutfits * (BASE_PHOTOS_PER_OUTFIT * TRADITIONAL_PHOTO_COST);
  const baseAiCost = validatedOutfits * (BASE_PHOTOS_PER_OUTFIT * AI_PHOTO_COST);

  // Calculate additional photo costs
  const additionalTraditionalCost = totalAdditionalPhotos * ADDITIONAL_PHOTO_COST_TRADITIONAL;
  const additionalAiCost = totalAdditionalPhotos * ADDITIONAL_PHOTO_COST_AI;

  // Calculate total costs
  const traditionalTotal = baseTraditionalCost + additionalTraditionalCost;
  const aiTotal = baseAiCost + additionalAiCost;

  // Time calculations (per outfit)
  const traditionalTime = {
    preProduction: validatedOutfits * 2, // 2 hours prep per outfit
    shootTime: validatedOutfits * 1.5, // 1.5 hours shooting per outfit
    postProduction: totalPhotos * 0.5, // 30 mins post-production per photo
    coordination: validatedOutfits * 1, // 1 hour coordination per outfit
  };

  const aiTime = {
    preparation: validatedOutfits * 0.5, // 30 mins prep per outfit
    promptWriting: totalPhotos * 0.2, // 12 mins per photo
    generation: totalPhotos * 0.1, // 6 mins per photo
    review: totalPhotos * 0.1, // 6 mins per photo
    adjustments: totalPhotos * 0.2, // 12 mins per photo
  };

  // Calculate total time
  const traditionalTotalTime = Object.values(traditionalTime).reduce((a, b) => a + b, 0);
  const aiTotalTime = Object.values(aiTime).reduce((a, b) => a + b, 0);

  return {
    traditional: {
      costs: {
        total: traditionalTotal,
        breakdown: {
          basePhotos: baseTraditionalCost,
          additionalPhotos: additionalTraditionalCost,
        },
      },
      time: traditionalTime,
      totalTime: traditionalTotalTime,
    },
    ai: {
      costs: {
        total: aiTotal,
        breakdown: {
          basePhotos: baseAiCost,
          additionalPhotos: additionalAiCost,
        },
      },
      time: aiTime,
      totalTime: aiTotalTime,
    },
  };
};