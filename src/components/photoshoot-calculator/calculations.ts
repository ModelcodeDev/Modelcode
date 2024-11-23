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
  const photographerDayRate = 2500;
  const modelDayRate = 1500 * modelCount;
  const locationCost = locationCount * 800;
  const makeupArtist = 600 * modelCount;
  const stylingCost = outfitCount * 300;
  const equipmentRental = 1000;
  const postProduction = photoCount * outfitCount * 80;
  const travelCosts = locationCount * 400;
  const studioRental = locationCount === 1 ? 1200 : locationCount * 1200;

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

  // AI Costs - base price $100 per photo
  const basePrice = 100 * photoCount * outfitCount;
  const complexityFactor = (locationCount * 0.2) + (modelCount * 0.3);
  const aiTotal = Math.round(basePrice * (1 + complexityFactor));

  // Time calculations (in hours)
  const traditionalTime = {
    preProduction: locationCount * 4 + outfitCount * 2,
    shootTime: locationCount * 6 + outfitCount * 3,
    postProduction: photoCount * outfitCount * 2,
    coordination: locationCount * 3 + modelCount * 2,
  };

  const aiTime = {
    preparation: 1 + (modelCount * 0.5),
    promptWriting: photoCount * outfitCount * 0.3,
    generation: photoCount * outfitCount * 0.2 + (locationCount * 0.3),
    review: photoCount * outfitCount * 0.2,
    adjustments: photoCount * outfitCount * 0.3,
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