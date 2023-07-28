export async function formateCF(data: any) {
  const transportWeightage = {
    commuteMethod: data.commuteMethod,
    weeklyMiles: data.weeklyMiles,
    carpoolFrequency: data.carpoolFrequency,
    electricVehicle: data.electricVehicle,
    airTravelFrequency: data.airTravelFrequency,
  };
  const energyUsageWeightage = {
    energyEfficientAppliances: data.energyEfficientAppliances,
    lightsAndAppliances: data.lightsAndAppliances,
    energyEfficientLightBulbs: data.energyEfficientLightBulbs,
    programmableThermostat: data.programmableThermostat,
    renewableEnergyUsage: data.renewableEnergyUsage,
  };
  const dietWeightage = {
    meatAndDairyConsumption: data.meatAndDairyConsumption,
    locallySourcedOrganicFood: data.locallySourcedOrganicFood,
    processedFoodsConsumption: data.processedFoodsConsumption,
    fruitsAndVegetablesConsumption: data.fruitsAndVegetablesConsumption,
    foodWasteFrequency: data.foodWasteFrequency,
  };
  const wasteManagementWeightage = {
    minimalPackagingBulkProducts: data.minimalPackagingBulkProducts,
    secondHandItemsPurchase: data.secondHandItemsPurchase,
    consideringEnvironmentalImpact: data.consideringEnvironmentalImpact,
    ecoFriendlyBrandsPreference: data.ecoFriendlyBrandsPreference,
    singleUsePlasticsAvoidance: data.singleUsePlasticsAvoidance,
  };
  const purchasingHabitWeightage = {
    recyclingHabits: data.recyclingHabits,
    organicWasteComposting: data.organicWasteComposting,
    reusableContainersAndBags: data.reusableContainersAndBags,
    reducingWasteByAvoidingUnnecessaryPackaging:
      data.reducingWasteByAvoidingUnnecessaryPackaging,
    awarenessOfProperDisposalMethods: data.awarenessOfProperDisposalMethods,
  };

  const formattedJson = {
    transportWeightage,
    energyUsageWeightage,
    purchasingHabitWeightage,
    wasteManagementWeightage,
    dietWeightage,
    // userId,
    // userName,
  };
  return formattedJson;
}
