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
  const photographerDayRate = 1500;
  const modelDayRate = 1200 * modelCount;
  const locationCost = locationCount * 500;
  const makeupArtist = 400 * modelCount;
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

  // AI Costs - base price $100 plus complexity factors
  const basePrice = 100;
  const complexityFactor = (photoCount * 0.2) + (outfitCount * 0.3) + (locationCount * 0.4) + (modelCount * 0.5);
  const aiTotal = Math.round(basePrice * (1 + complexityFactor));

  // Time calculations (in hours) - AI time now scales with complexity
  const traditionalTime = {
    preProduction: locationCount * 4 + outfitCount * 2,
    shootTime: locationCount * 4 + outfitCount * 2,
    postProduction: photoCount * 1.5,
    coordination: locationCount * 2 + outfitCount,
  };

  const aiTime = {
    preparation: 1 + (modelCount * 0.5),
    promptWriting: photoCount * 0.5 + (outfitCount * 0.2),
    generation: photoCount * 0.2 + (locationCount * 0.3),
    review: photoCount * 0.3 + (modelCount * 0.2),
    adjustments: photoCount * 0.4 + (outfitCount * 0.2),
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