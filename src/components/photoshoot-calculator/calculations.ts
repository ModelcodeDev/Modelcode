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

export const calculateResults = (
  photoCount: number,
  outfitCount: number,
  locationCount: number,
  modelCount: number
): Costs => {
  // Traditional Photoshoot Costs
  const photographerDayRate = 1500 + (locationCount * 500);
  const modelDayRate = 800 * modelCount;
  const locationCost = locationCount * 500;
  const makeupArtist = 400 * modelCount;
  const stylingCost = outfitCount * 200;
  const equipmentRental = 500 + (locationCount * 200);
  const postProduction = photoCount * outfitCount * 50;
  const travelCosts = locationCount * 200;
  const studioRental = locationCount === 1 ? 800 : locationCount * 800;

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

  // AI Costs - fixed $100 per photo
  const basePrice = 100 * photoCount * outfitCount;
  const complexityFactor = (locationCount * 0.1) + (modelCount * 0.15);
  const aiTotal = Math.round(basePrice * (1 + complexityFactor));

  // Time calculations (in hours)
  const traditionalTime = {
    preProduction: locationCount * 2 + outfitCount,
    shootTime: locationCount * 4 + outfitCount * 1.5,
    postProduction: photoCount * outfitCount,
    coordination: locationCount * 2 + modelCount,
  };

  const aiTime = {
    preparation: 1 + (modelCount * 0.5),
    promptWriting: photoCount * outfitCount * 0.2,
    generation: photoCount * outfitCount * 0.1 + (locationCount * 0.2),
    review: photoCount * outfitCount * 0.1,
    adjustments: photoCount * outfitCount * 0.2,
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
          basePrice,
          complexityFactors: aiTotal - basePrice,
        },
      },
      time: aiTime,
      totalTime: totalAiTime,
    },
  };
};