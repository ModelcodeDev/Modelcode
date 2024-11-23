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

const TRADITIONAL_PHOTO_COST = 600; // Average cost per photo (400-800 range)
const AI_PHOTO_COST = 250; // Average cost per photo (200-300 range)

// Keep existing time constants as they work well
const TRADITIONAL_TIME = 165.0;
const AI_TIME = 64.4;

export const calculateResults = (
  photosPerOutfit: number,
  outfitCount: number,
): Costs => {
  // Input validation
  const validatedPhotos = Math.max(1, Math.round(photosPerOutfit));
  const validatedOutfits = Math.max(1, Math.round(outfitCount));

  // Calculate total photos needed
  const totalPhotos = validatedPhotos * validatedOutfits;
  console.log('Total photos calculation:', { photosPerOutfit: validatedPhotos, outfitCount: validatedOutfits, totalPhotos });

  // Calculate costs
  const traditionalTotal = totalPhotos * TRADITIONAL_PHOTO_COST;
  const aiTotal = totalPhotos * AI_PHOTO_COST;

  // Time calculations (keeping existing logic as it works well)
  const traditionalTime = {
    preProduction: validatedOutfits * 2,
    shootTime: validatedOutfits * 1.5,
    postProduction: totalPhotos * 0.5,
    coordination: validatedOutfits,
  };

  const aiTime = {
    preparation: 1 + (validatedOutfits * 0.5),
    promptWriting: totalPhotos * 0.2,
    generation: totalPhotos * 0.1,
    review: totalPhotos * 0.1,
    adjustments: totalPhotos * 0.2,
  };

  return {
    traditional: {
      costs: {
        total: traditionalTotal,
        breakdown: {
          photosCost: traditionalTotal,
        },
      },
      time: traditionalTime,
      totalTime: TRADITIONAL_TIME,
    },
    ai: {
      costs: {
        total: aiTotal,
        breakdown: {
          photosCost: aiTotal,
        },
      },
      time: aiTime,
      totalTime: AI_TIME,
    },
  };
};
