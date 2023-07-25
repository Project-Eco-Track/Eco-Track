import { NextResponse } from "next/server";
import { postRequest } from "@libs/postRequest";

export async function POST(request: Request) {
  const data = await request.json();

  const userId = data.userId;
  const userName = data.userName;

  const transportWeightage = {
    commuteMethod: data.transportWeightage.commuteMethod,
    weeklyMiles: data.transportWeightage.weeklyMiles,
    carpoolFrequency: data.transportWeightage.carpoolFrequency,
    electricVehicle: data.transportWeightage.electricVehicle,
    airTravelFrequency: data.transportWeightage.airTravelFrequency,
  };
  const energyUsageWeightage = {
    energyEfficientAppliances:
      data.energyUsageWeightage.energyEfficientAppliances,
    lightsAndAppliances: data.energyUsageWeightage.lightsAndAppliances,
    energyEfficientLightBulbs:
      data.energyUsageWeightage.energyEfficientLightBulbs,
    programmableThermostat: data.energyUsageWeightage.programmableThermostat,
    renewableEnergyUsage: data.energyUsageWeightage.renewableEnergyUsage,
  };
  const purchasingHabitWeightage = {
    meatAndDairyConsumption:
      data.purchasingHabitWeightage.meatAndDairyConsumption,
    locallySourcedOrganicFood:
      data.purchasingHabitWeightage.locallySourcedOrganicFood,
    processedFoodsConsumption:
      data.purchasingHabitWeightage.processedFoodsConsumption,
    fruitsAndVegetablesConsumption:
      data.purchasingHabitWeightage.fruitsAndVegetablesConsumption,
    foodWasteFrequency: data.purchasingHabitWeightage.foodWasteFrequency,
  };
  const wasteManagementWeightage = {
    minimalPackagingBulkProducts:
      data.wasteManagementWeightage.minimalPackagingBulkProducts,
    secondHandItemsPurchase:
      data.wasteManagementWeightage.secondHandItemsPurchase,
    consideringEnvironmentalImpact:
      data.wasteManagementWeightage.consideringEnvironmentalImpact,
    ecoFriendlyBrandsPreference:
      data.wasteManagementWeightage.ecoFriendlyBrandsPreference,
    singleUsePlasticsAvoidance:
      data.wasteManagementWeightage.singleUsePlasticsAvoidance,
  };
  const dietWeightage = {
    recyclingHabits: data.dietWeightage.recyclingHabits,
    organicWasteComposting: data.dietWeightage.organicWasteComposting,
    reusableContainersAndBags: data.dietWeightage.reusableContainersAndBags,
    reducingWasteByAvoidingUnnecessaryPackaging:
      data.dietWeightage.reducingWasteByAvoidingUnnecessaryPackaging,
    awarenessOfProperDisposalMethods:
      data.dietWeightage.awarenessOfProperDisposalMethods,
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
