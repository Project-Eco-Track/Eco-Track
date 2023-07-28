import { NextResponse } from "next/server";
import { postRequest } from "@libs/postRequest";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);

  const userId = data.userId;
  const userName = data.userName;

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
  const purchasingHabitWeightage = {
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
  const dietWeightage = {
    recyclingHabits: data.recyclingHabits,
    organicWasteComposting: data.organicWasteComposting,
    reusableContainersAndBags: data.reusableContainersAndBags,
    reducingWasteByAvoidingUnnecessaryPackaging:
      data.reducingWasteByAvoidingUnnecessaryPackaging,
    awarenessOfProperDisposalMethods: data.awarenessOfProperDisposalMethods,
  };

  const payload = {
    transportWeightage,
    energyUsageWeightage,
    purchasingHabitWeightage,
    wasteManagementWeightage,
    dietWeightage,
    // userId,
    // userName,
  };

  const url = process.env.POST_CARBON_FOOTPRINT_URL;
  const res = await postRequest<any>(`${url}`, payload);
  return new NextResponse(res);
}
