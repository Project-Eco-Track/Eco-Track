export const json = {
  "title": "EcoTrack",
  "description": "Carbon footprint calculator",
  "completedHtml": "<h3>Carbon footprint is: </h3>",
  "pages": [
    {
      "name": "Transportation",
      "elements": [
        {
          "type": "radiogroup",
          "name": "primaryMethod",
          "title": "What is your primary method of transportation for commuting?",
          "choices": [
            "Car",
            "Public transit (bus, train, etc.)",
            "Bicycle",
            "Walking"
          ]
        },
        {
          "type": "radiogroup",
          "name": "carpoolFrequency",
          "title": "How frequently do you carpool with others for transportation?",
          "choices": [
            "Never",
            "Occasionally",
            "Frequently",
            "Always"
          ]
        },
        {
          "type": "radiogroup",
          "name": "electricHybridVehicle",
          "title": "Are you considering or currently using an electric or hybrid vehicle?",
          "choices": [
            "Yes, I currently own/use one",
            "Considering purchasing one",
            "No, not considering or using one",
            "Not applicable (N/A)"
          ]
        },
        {
          "type": "radiogroup",
          "name": "airTravelFrequency",
          "title": "How often do you engage in air travel?",
          "choices": [
            "Frequently (multiple times per year)",
            "Occasionally (once or twice per year)",
            "Rarely (every few years)",
            "Never"
          ]
        },
        {
          "type": "radiogroup",
          "name": "avoidPeakTraffic",
          "title": "Do you actively try to avoid peak traffic times?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "alternativeTransportation",
          "title": "Do you utilize alternative transportation options such as public transit or biking?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "vehicleMaintenance",
          "title": "How often do you perform vehicle maintenance?",
          "choices": [
            "Frequently",
            "Occasionally",
            "Rarely",
            "Never"
          ]
        },
        {
          "type": "radiogroup",
          "name": "carpoolingProgram",
          "title": "Are you part of a carpooling program or initiative?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "walkBikeFrequency",
          "title": "How frequently do you choose to walk or bike for transportation?",
          "choices": [
            "Frequently",
            "Occasionally",
            "Rarely",
            "Never"
          ]
        }
      ]
    },
    {
      "name": "Energy Usage",
      "elements": [
        {
          "type": "radiogroup",
          "name": "heatingSystem",
          "title": "What type of heating system do you use in your home?",
          "choices": [
            "Gas or oil furnace",
            "Electric heater",
            "Heat pump",
            "Radiant floor heating"
          ]
        },
        {
          "type": "radiogroup",
          "name": "thermostatAdjustment",
          "title": "Do you adjust your thermostat to conserve energy?",
          "choices": [
            "Yes, regularly",
            "Occasionally",
            "Rarely",
            "No, I don't adjust it"
          ]
        },
        {
          "type": "radiogroup",
          "name": "energyEfficientLightBulbs",
          "title": "Have you switched to energy-efficient light bulbs?",
          "choices": [
            "Yes, completely",
            "Mostly, but still have some traditional bulbs",
            "No, not yet",
            "Not applicable (N/A)"
          ]
        },
        {
          "type": "radiogroup",
          "name": "lightsAppliancesUsage",
          "title": "How mindful are you of your lights and appliances usage?",
          "choices": [
            "Very mindful, I consciously minimize usage",
            "Moderately mindful, I try to be conscious of it",
            "Not very mindful, but I make some effort",
            "Not mindful at all, I don't pay attention to it"
          ]
        },
        {
          "type": "radiogroup",
          "name": "solarPanels",
          "title": "Have you considered or installed solar panels to generate renewable energy?",
          "choices": [
            "Yes, I have installed them",
            "Considering installing them",
            "No, not considering or using them",
            "Not applicable (N/A)"
          ]
        },
        {
          "type": "radiogroup",
          "name": "energyMonitoring",
          "title": "Do you monitor your energy usage and make efforts to reduce it?",
          "choices": [
            "Yes, regularly monitor and make efforts to reduce",
            "Occasionally monitor and make some efforts",
            "Rarely monitor or make efforts",
            "No, I don't monitor or make efforts"
          ]
        },
        {
          "type": "radiogroup",
          "name": "energyAudit",
          "title": "Have you conducted an energy audit to identify areas of improvement?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "energyEfficientAppliances",
          "title": "Have you replaced old appliances with energy-efficient models?",
          "choices": [
            "Yes, completely",
            "Partially",
            "No, not yet",
            "Not applicable (N/A)"
          ]
        },
        {
          "type": "radiogroup",
          "name": "programmableThermostats",
          "title": "Do you use programmable thermostats to optimize energy consumption?",
          "choices": [
            "Yes",
            "No"
          ]
        }
      ]
    },
    {
      "name": "Diet",
      "elements": [
        {
          "type": "radiogroup",
          "name": "meatDairyConsumption",
          "title": "How often do you consume meat and dairy products?",
          "choices": [
            "Daily",
            "Several times per week",
            "Occasionally (once or twice per week)",
            "Rarely or never"
          ]
        },
        {
          "type": "radiogroup",
          "name": "vegetarianVeganDiet",
          "title": "Are you following a vegetarian or vegan diet?",
          "choices": [
            "Yes, I am vegetarian",
            "Yes, I am vegan",
            "No, but I am considering it",
            "No, I prefer a diet that includes meat and dairy"
          ]
        },
        {
          "type": "radiogroup",
         "name": "locallySourcedProduce",
          "title": "Do you prioritize locally sourced produce when grocery shopping?",
          "choices": [
            "Always, it's a top priority for me",
            "Most of the time, but not always",
            "Occasionally, when it's convenient",
            "No, I don't prioritize it"
          ]
        },
        {
          "type": "radiogroup",
          "name": "foodWasteReduction",
          "title": "How do you reduce food waste in your household?",
          "choices": [
            "Meal planning and portion control",
            "Composting uneaten food",
            "Saving leftovers for future meals",
            "I don't actively take measures to reduce food waste"
          ]
        },
        {
          "type": "radiogroup",
          "name": "reduceProcessedPackagedFoods",
          "title": "Do you actively avoid processed and packaged foods?",
          "choices": [
            "Yes, I avoid them as much as possible",
            "Sometimes, but not always",
            "Rarely, I consume them occasionally",
            "No, I consume processed and packaged foods regularly"
          ]
        },
        {
          "type": "radiogroup",
          "name": "organicSustainableFood",
          "title": "Are you conscious of choosing organic and sustainable food options?",
          "choices": [
            "Yes, always",
            "Most of the time, but not always",
            "Occasionally, when available",
            "No, I don't prioritize organic or sustainable options"
          ]
        },
        {
          "type": "radiogroup",
          "name": "csaParticipation",
          "title": "Are you participating in a community-supported agriculture (CSA) program?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "plantBasedProteins",
          "title": "Do you incorporate plant-based proteins into your meals?",
          "choices": [
            "Yes, frequently",
            "Sometimes, but not always",
            "Rarely, I consume them occasionally",
            "No, I don't incorporate plant-based proteins"
          ]
        },
        {
          "type": "radiogroup",
          "name": "fromScratchMeals",
          "title": "How often do you cook meals from scratch?",
          "choices": [
            "Frequently, I cook most meals from scratch",
            "Sometimes, I cook a few meals from scratch",
            "Rarely, I mostly rely on pre-packaged or pre-cooked meals",
            "Never, I don't cook meals from scratch"
          ]
        }
      ]
    },
    {
      "name": "Purchasing Habits",
      "elements": [
        {
          "type": "radiogroup",
          "name": "reusableBags",
          "title": "Do you use reusable bags when shopping?",
          "choices": [
            "Yes, always",
            "Most of the time, but not always",
            "Occasionally, when I remember",
            "No, I don't use reusable bags"
          ]
        },
        {
          "type": "radiogroup",
          "name": "localProducts",
          "title": "Do you prioritize purchasing locally made or sourced products?",
          "choices": [
            "Yes, always",
            "Most of the time, but not always",
            "Occasionally, when available",
            "No, I don't prioritize local products"
          ]
        },
        {
          "type": "radiogroup",
          "name": "ecoFriendlyCertifications",
          "title": "Do you consider eco-friendly certifications when making purchasing decisions?",
          "choices": [
            "Yes, always",
            "Sometimes, if available",
            "Rarely, I don't actively consider certifications",
            "No, I don't consider certifications"
          ]
        },
        {
          "type": "radiogroup",
          "name": "singleUsePlasticItems",
          "title": "How do you minimize the use of single-use plastic items in your daily life?",
          "choices": [
            "I avoid them completely",
            "I use alternatives whenever possible",
            "I reduce their usage, but still use them occasionally",
            "I don't actively minimize the use of single-use plastic items"
          ]
        },
        {
          "type": "radiogroup",
          "name": "clothingShoppingApproach",
          "title": "What is your approach to shopping for clothing in terms of sustainability?",
          "choices": [
            "I prioritize sustainable and ethical brands",
            "I consider sustainability, but it's not my primary focus",
            "I rarely consider sustainability",
            "I don't consider sustainability when shopping for clothing"
          ]
        },
        {
          "type": "radiogroup",
          "name": "repairOrMendItems",
          "title": "Do you repair or mend items instead of immediately replacing them?",
          "choices": [
            "Yes, I always try to repair or mend items",
            "Sometimes, if it's feasible",
            "Rarely, I usually replace items",
            "No, I don't repair or mend items"
          ]
        },
        {
          "type": "radiogroup",
          "name": "packagingImpactConsideration",
          "title": "Do you consider the environmental impact of packaging when making purchases?",
          "choices": [
            "Yes, always",
            "Sometimes, if there are sustainable packaging options",
            "Rarely, I don't actively consider packaging impact",
            "No, I don't consider packaging impact"
          ]
        },
        {
          "type": "radiogroup",
          "name": "bulkBuyingPractices",
          "title": "Do you practice bulk buying to reduce packaging waste?",
          "choices": [
            "Yes, always",
            "Sometimes, when feasible",
            "Rarely, I don't actively practice bulk buying",
            "No, I don't practice bulk buying"
          ]
        },
        {
          "type": "radiogroup",
          "name": "responsibleDisposal",
          "title": "Are you conscious of responsible disposal methods for your unwanted items?",
          "choices": [
            "Yes, I make sure to dispose of items responsibly",
            "Sometimes, if there are proper disposal options available",
            "Rarely, I don't actively consider responsible disposal",
            "No, I don't consider responsible disposal"
          ]
        }
      ]
    },
    {
      "name": "Waste Management",
      "elements": [
        {
          "type": "radiogroup",
          "name": "organicWasteDisposal",
          "title": "How do you handle the disposal of organic waste in your household?",
          "choices": [
            "Composting",
            "Using a green waste bin",
            "Throwing it in the regular trash",
            "I don't have a specific method for organic waste disposal"
          ]
        },
        {
          "type": "radiogroup",
          "name": "paperPlasticGlassMetalRecycling",
          "title": "Are you actively recycling paper, plastic, glass, and metal materials?",
          "choices": [
            "Yes, Ialways recycle these materials",
            "Most of the time, but not always",
            "Occasionally, when it's convenient",
            "No, I don't actively recycle these materials"
          ]
        },
        {
          "type": "radiogroup",
          "name": "avoidSingleUsePlastic",
          "title": "What steps do you take to avoid using single-use plastic items?",
          "choices": [
            "I use reusable alternatives",
            "I minimize their usage, but still use them occasionally",
            "I don't actively avoid single-use plastic items",
            "I haven't taken any specific steps to avoid them"
          ]
        },
        {
          "type": "radiogroup",
          "name": "reduceDisposableProducts",
          "title": "How do you reduce your consumption of disposable products?",
          "choices": [
            "I use reusable or refillable alternatives",
            "I try to minimize their usage, but still use them occasionally",
            "I don't actively reduce my consumption of disposable products",
            "I haven't taken any specific steps to reduce their consumption"
          ]
        },
        {
          "type": "radiogroup",
          "name": "communityCleanupParticipation",
          "title": "Have you participated in community cleanup initiatives or events?",
          "choices": [
            "Yes, frequently",
            "Occasionally",
            "Rarely",
            "No, I haven't participated"
          ]
        },
        {
          "type": "radiogroup",
          "name": "eWasteRecycling",
          "title": "Do you properly dispose of electronic waste (e-waste)?",
          "choices": [
            "Yes, I recycle e-waste at designated facilities",
            "Sometimes, if there are e-waste recycling options available",
            "No, I don't actively recycle e-waste",
            "I haven't disposed of e-waste yet"
          ]
        },
        {
          "type": "radiogroup",
          "name": "minimizePackagingWaste",
          "title": "How do you minimize packaging waste when making purchases?",
          "choices": [
            "I choose products with minimal or eco-friendly packaging",
            "I reuse or repurpose packaging materials",
            "I don't actively minimize packaging waste",
            "I haven't taken specific steps to minimize packaging waste"
          ]
        },
        {
          "type": "radiogroup",
          "name": "repairOrRepurposeItems",
          "title": "Do you repair or repurpose items instead of throwing them away?",
          "choices": [
            "Yes, always",
            "Sometimes, if it's feasible",
            "Rarely, I usually discard items",
            "No, I don't repair or repurpose items"
          ]
        },
        {
          "type": "radiogroup",
          "name": "donateUnwantedItems",
          "title": "Do you donate unwanted items instead of discarding them?",
          "choices": [
            "Yes, always",
            "Sometimes, if the items are in good condition",
            "Rarely, I usually discard unwanted items",
            "No, I don't donate unwanted items"
          ]
        },
        {
          "type": "radiogroup",
          "name": "recyclingGuidelinesAwareness",
          "title": "Are you aware of recycling guidelines for your area?",
          "choices": [
            "Yes, I am familiar with the guidelines",
            "I have some knowledge but not fully aware",
            "Not completely, but I try to follow them",
            "No, I'm not aware of the guidelines"
          ]
        }
      ]
    }
  ],
  "cookieName": "Ecotrack-Calculator",
  "widthMode": "responsive"
}