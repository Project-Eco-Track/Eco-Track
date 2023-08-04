const data = [
  {
    color: "green",
    icon: "fa fa-tree",
    title: "EcoTracker",
    description:
      "Plant 100 Trees. For individuals or groups who have actively participated in tree-planting initiatives, contributing to reforestation efforts and carbon sequestration.",
    disable: false,
  },
  {
    color: "teal",
    icon: "fa fa-lightbulb",
    title: "Energy Saver",
    description:
      "Reduce Electricity Consumption by 20%. Awarded to those who have made conscious efforts to reduce their electricity usage and overall energy footprint at home or work.",
    disable: false,
  },
  {
    color: "blue",
    icon: "fa fa-tint",
    title: "Water Hero",
    description:
      "Cut Water Usage by 30%. Presented to individuals who have successfully conserved water through efficient practices and technologies, helping to preserve this precious resource.",
    disable: false,
  },
  {
    color: "purple",
    icon: "fa fa-recycle",
    title: "Waste Warrior",
    description:
      "Achieve Zero Waste for 3 Months. Given to those who have practiced effective waste reduction and recycling methods, minimizing their impact on landfills and the environment.",
    disable: false,
  },
  {
    color: "orange",
    icon: "fa fa-bicycle",
    title: "Sustainable Commuter",
    description:
      "Complete 100 Days of Eco-Friendly Transportation. Earned by individuals who have chosen sustainable transportation methods such as biking, walking, carpooling, or using public transit.",
    disable: false,
  },
  {
    color: "red",
    icon: "fa fa-shopping-bag",
    title: "Plastic-Free Pro",
    description:
      "Refuse Single-Use Plastics for 6 Months. Awarded to those who have made a commitment to reduce plastic waste by avoiding single-use plastic items in their daily lives.",
    disable: false,
  },
  {
    color: "green",
    icon: "fa fa-leaf",
    title: "Green Cuisine",
    description:
      "Maintain a Plant-Based Diet for a Year. Given to individuals who have embraced a plant-based diet, significantly reducing the carbon footprint associated with food production.",
    disable: false,
  },
  {
    color: "blue-dark",
    icon: "fa fa-sun",
    title: "Renewable Enthusiast",
    description:
      "Install Solar Panels or Wind Turbine. Awarded to those who have adopted renewable energy systems, generating their electricity from clean and sustainable sources.",
    disable: false,
  },
  {
    color: "green",
    icon: "fa fa-globe",
    title: "Carbon Cutter",
    description:
      "Offset 50% of Your Annual Carbon Footprint. Presented to individuals who have taken measures to reduce their carbon emissions and offset the remaining portion through verified carbon offset programs.",
    disable: false,
  },
  {
    color: "green-dark",
    icon: "fa fa-award",
    title: "Eco-Creative",
    description:
      "Lead 5 Environmental Awareness Events. Given to eco-conscious individuals who have organized and hosted events to raise awareness and educate others about environmental issues.",
    disable: false,
  },
  {
    color: "gold",
    icon: "fa fa-lightbulb",
    title: "Green Innovator",
    description:
      "Implement Energy-Efficient Technologies in Your Community. Earned by those who have taken the initiative to introduce and promote energy-efficient technologies in their neighborhoods or workplaces.",
    disable: false,
  },
  {
    color: "silver",
    icon: "fa fa-tree",
    title: "Nature Guardian",
    description:
      "Volunteer 100 Hours in Environmental Conservation. Awarded to individuals who have dedicated significant time and effort to protect and preserve natural habitats through volunteering.",
    disable: false,
  },
  {
    color: "pink",
    icon: "fa fa-globe",
    title: "Climate Advocate",
    description:
      "Write 10 Letters to Local Representatives about Climate Change. Given to proactive individuals who have engaged in civic action by advocating for climate change policies and action at the local or national level.",
    disable: false,
  },
];

const getBadgeData = () => {
  return JSON.stringify(data);
};

export default getBadgeData;
