export const json = {
  title: "EcoTrack",
  description: "Carbon footprint calculator",
  completedHtml: "<h3>Calculating your Carbon Footprint, please wait</h3>",
  pages: [
    {
      name: "transportation",
      elements: [
        {
          type: "radiogroup",
          name: "commuteMethod",
          title: "How do you typically commute on a daily basis?",
          isRequired: true,
          choices: [
            { value: "A", text: "Drive alone" },
            { value: "B", text: "Use public transportation" },
            { value: "C", text: "Carpool with others" },
            { value: "D", text: "Walk or bike" },
          ],
        },
        {
          type: "radiogroup",
          name: "weeklyMiles",
          title: "Approximately how many miles do you travel each week?",
          isRequired: true,
          choices: [
            { value: "A", text: "Less than 50 miles" },
            { value: "B", text: "50-100 miles" },
            { value: "C", text: "100-200 miles" },
            { value: "D", text: "More than 200 miles" },
          ],
        },
        {
          type: "radiogroup",
          name: "carpoolFrequency",
          title: "How frequently do you carpool with others?",
          choices: [
            { value: "A", text: "Rarely or never" },
            { value: "B", text: "Occasionally" },
            { value: "C", text: "Frequently" },
            { value: "D", text: "I don't carpool" },
          ],
        },
        {
          type: "radiogroup",
          name: "electricVehicle",
          title: "Do you own an electric or hybrid vehicle?",
          choices: [
            { value: "A", text: "Yes, an electric vehicle" },
            { value: "B", text: "Yes, a hybrid vehicle" },
            { value: "C", text: "No, I own a conventional vehicle" },
            { value: "D", text: "I don't own a vehicle" },
          ],
        },
        {
          type: "radiogroup",
          name: "airTravelFrequency",
          title: "How frequently do you travel by air?",
          choices: [
            { value: "A", text: "Multiple times per month" },
            { value: "B", text: "Few times per year" },
            { value: "C", text: "Rarely or never" },
            { value: "D", text: "I don't travel by air" },
          ],
        },
      ],
      title: "Transportation",
      isRequired: true,
    },
    {
      name: "energyUsage",
      elements: [
        {
          type: "radiogroup",
          name: "energyEfficientAppliances",
          title: "Do you use energy-efficient appliances in your home?",
          isRequired: true,
          choices: [
            { value: "A", text: "Yes, all of them" },
            { value: "B", text: "Some of them" },
            { value: "C", text: "No, none of them" },
          ],
        },
        {
          type: "radiogroup",
          name: "lightsAndAppliances",
          title:
            "How often do you turn off lights and appliances when not in use?",
          isRequired: true,
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely" },
            { value: "D", text: "I often forget" },
          ],
        },
        {
          type: "radiogroup",
          name: "energyEfficientLightBulbs",
          title: "Have you switched to LED or energy-efficient light bulbs?",
          choices: [
            { value: "A", text: "Yes, throughout my home" },
            { value: "B", text: "Some of them" },
            { value: "C", text: "No, I still use traditional bulbs" },
          ],
        },
        {
          type: "radiogroup",
          name: "programmableThermostat",
          title:
            "Do you use a programmable thermostat to regulate heating and cooling?",
          choices: [
            {
              value: "A",
              text: "Yes, and I regularly adjust the settings",
            },
            { value: "B", text: "Yes, but I rarely adjust the settings" },
            {
              value: "C",
              text: "No, I don't have a programmable thermostat",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "renewableEnergyUsage",
          title:
            "How often do you use renewable energy sources (e.g., solar panels, wind power)?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
            {
              value: "D",
              text: "I don't have access to renewable energy options",
            },
          ],
        },
      ],
      title: "Energy Usage",
      isRequired: true,
    },
    {
      name: "diet",
      elements: [
        {
          type: "radiogroup",
          name: "meatAndDairyConsumption",
          title: "How often do you consume meat or dairy products?",
          choices: [
            { value: "A", text: "Multiple times per day" },
            { value: "B", text: "Daily" },
            { value: "C", text: "Occasionally" },
            { value: "D", text: "I'm vegetarian or vegan" },
          ],
        },
        {
          type: "radiogroup",
          name: "locallySourcedOrganicFood",
          title:
            "Do you prioritize purchasing locally sourced and organic food products?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "processedFoodsConsumption",
          title: "How often do you eat processed or packaged foods?",
          choices: [
            { value: "A", text: "Multiple times per day" },
            { value: "B", text: "Daily" },
            { value: "C", text: "Occasionally" },
            { value: "D", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "fruitsAndVegetablesConsumption",
          title:
            "Do you include a significant amount of fruits and vegetables in your diet?",
          choices: [
            { value: "A", text: "Yes, in every meal" },
            { value: "B", text: "Yes, in most meals" },
            { value: "C", text: "Occasionally" },
            { value: "D", text: "Rarely" },
          ],
        },
        {
          type: "radiogroup",
          name: "foodWasteFrequency",
          title:
            "How often do you waste food by throwing away uneaten portions?",
          choices: [
            { value: "A", text: "Rarely or never" },
            { value: "B", text: "Occasionally" },
            { value: "C", text: "Frequently" },
          ],
        },
      ],
      title: "Diet",
      isRequired: true,
    },
    {
      name: "purchasingHabits",
      elements: [
        {
          type: "radiogroup",
          name: "minimalPackagingBulkProducts",
          title:
            "Do you prioritize buying products with minimal packaging or in bulk?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "secondHandItemsPurchase",
          title: "How often do you purchase second-hand or used items?",
          choices: [
            { value: "A", text: "Frequently" },
            { value: "B", text: "Occasionally" },
            { value: "C", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "consideringEnvironmentalImpact",
          title:
            "Do you consider the environmental impact of a product before making a purchase?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "ecoFriendlyBrandsPreference",
          title: "How often do you opt for eco-friendly or sustainable brands?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "singleUsePlasticsAvoidance",
          title:
            "Do you actively avoid single-use plastics (e.g., bags, bottles, utensils)?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
          ],
        },
      ],
      title: "Purchasing Habits",
      isRequired: true,
    },
    {
      name: "wasteManagement",
      elements: [
        {
          type: "radiogroup",
          name: "recyclingHabits",
          title: "How often do you recycle paper, plastic, glass, and metal?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "organicWasteComposting",
          title:
            "Do you compost organic waste (e.g., food scraps, yard trimmings)?",
          choices: [
            { value: "A", text: "Yes, always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
            { value: "D", text: "I don't compost" },
          ],
        },
        {
          type: "radiogroup",
          name: "reusableContainersAndBags",
          title:
            "How often do you use reusable containers or bags instead of disposable ones?",
          choices: [
            { value: "A", text: "Always" },
            { value: "B", text: "Sometimes" },
            { value: "C", text: "Rarely or never" },
          ],
        },
        {
          type: "radiogroup",
          name: "reducingWasteByAvoidingUnnecessaryPackaging",
          title:
            "Have you reduced the amount of waste you generate by avoiding unnecessary packaging?",
          choices: [
            { value: "A", text: "Yes, significantly" },
            { value: "B", text: "To some extent" },
            { value: "C", text: "No, I haven't made changes" },
          ],
        },
        {
          type: "radiogroup",
          name: "awarenessOfProperDisposalMethods",
          title:
            "Are you aware of proper disposal methods for hazardous or electronic waste?",
          choices: [
            { value: "A", text: "Yes, I follow the guidelines" },
            {
              value: "B",
              text: "Somewhat, but I'm unsure about some items",
            },
            { value: "C", text: "No, I'm not aware of proper methods" },
          ],
        },
      ],
      title: "Waste Management",
      isRequired: true,
    },
  ],
  showQuestionNumbers: "off",
  storeOthersAsComment: false,
  pagePrevText: "Previous",
  pageNextText: "Continue",
  completeText: "Finish",
  requiredText: "",
  widthMode: "responsive",
  showProgressBar: "bottom",
  showCompletedPageTimer: 0,
  showTitle: true,
  showPageTitles: true,

  showCompletedPage: true,
};