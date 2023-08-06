import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const queryParams = new URL(request.url).searchParams;
  const userid = queryParams.get("id");
  const carbonRes = await fetch(
    `https://sangria-swordfish-wrap.cyclic.app/carbonfootprint?id=${userid}`
  );
  const carbonData = await carbonRes.json();
  const badges = [
    {
      color: "green",
      icon: "fa fa-tree",
      title: "EcoTracker",
      description: "Sign Up for Eco-Track",
      disable: false,
    },
    {
      color: "teal",
      icon: "fa fa-lightbulb",
      title: "Energy Saver",
      description: "Reduce Energy Consumption below 5 points",
      disable: carbonData?.EnergyUsage < 5,
    },
    {
      color: "blue",
      icon: "fa fa-tint",
      title: "Water Hero",
      description: "Reduce Water Consumption below 5 points",
      disable: true,
    },
    {
      color: "purple",
      icon: "fa fa-recycle",
      title: "Waste Warrior",
      description: "Reduce Waste Production below 5 points",
      disable: carbonData?.PurchasingHabit < 5,
    },
    {
      color: "orange",
      icon: "fa fa-bicycle",
      title: "Sustainable Commuter",
      description: "Reduce Transportation Emissions below 5 points",
      disable: carbonData?.Transportation < 5,
    },
    {
      color: "red",
      icon: "fa fa-shopping-bag",
      title: "Plastic-Free Pro",
      description: "Reduce Plastic Consumption below 5 points",
      disable: carbonData?.PurchasingHabit < 4,
    },
    {
      color: "green",
      icon: "fa fa-leaf",
      title: "Green Cuisine",
      description: "Maintain Eco-Friendly Diet, below 5 points",
      disable: carbonData?.Diet < 5,
    },
    {
      color: "blue-dark",
      icon: "fa fa-sun",
      title: "Renewable Enthusiast",
      description:
        "Use Renewable Energy Sources Over Non Renewable Energy Sources",
      disable: carbonData?.EnergyUsage < 3,
    },
    {
      color: "green",
      icon: "fa fa-globe",
      title: "Carbon Cutter",
      description:
        "Offset 50% of Your Annual Carbon Footprint. Presented to individuals who have taken measures to reduce their carbon emissions and offset the remaining portion through verified carbon offset programs.",
      disable: carbonData?.CarbonFootprint < 20,
    },
    {
      color: "green-dark",
      icon: "fa fa-award",
      title: "Eco-Creative",
      description: "Contributed to the Eco-Track Community Blog",
      disable: true,
    },
    {
      color: "gold",
      icon: "fa fa-lightbulb",
      title: "Green Innovator",
      description: "Coming Soon",
      disable: true,
    },
    {
      color: "teal",
      icon: "fa fa-tree",
      title: "Nature Guardian",
      description: "Coming Soon",
      disable: true,
    },
    {
      color: "pink",
      icon: "fa fa-cloud-sun-rain",
      title: "Climate Advocate",
      description: "coming soon",
      disable: true,
    },
  ];

  const response = { badges: badges, carbonFootprint: carbonData?.CarbonFootprint };

  return NextResponse.json(response);
}
