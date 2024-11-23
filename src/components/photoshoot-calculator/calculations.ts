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