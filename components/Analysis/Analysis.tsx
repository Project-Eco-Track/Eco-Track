import React, { useEffect, useState } from "react";
import Footprint from "./Footprint";
import Pie from "./Pie";
import Tips from "./Tips";
import { useUser } from "@clerk/clerk-react";

export interface CarbonFootprintData {
  CarbonFootprint: string;
  Date: string;
  Diet: string;
  EnergyUsage: string;
  PurchasingHabit: string;
  Transportation: string;
  UserID: string;
  WasteManagement: string;
}

const Analysis = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const [data, setData] = useState<CarbonFootprintData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isSignedIn && isLoaded) {
        const userId = user.id;
        const dataAppEndpoint = `https://sangria-swordfish-wrap.cyclic.app/carbonfootprint?id=${userId}`;
        
        try {
          const response = await fetch(dataAppEndpoint);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const responseData: CarbonFootprintData = await response.json();
          setData(responseData);
        } catch (error) {
          console.error("Error fetching carbon footprint data:", error);
        }
      }
    };

    fetchData();
  }, [isSignedIn, isLoaded, user]);

  if (!isSignedIn || !isLoaded) {
    return <div>Loading...</div>; // user not sign in or loading in progress
  }

  if (!data) {
    return <div>An Error Occurred</div>;
  }

  return (
    <div className="w-full justify-center flex">
      <div className="w-full justify-center items-center flex flex-col gap-3">
        <div className="flex w-full pt-5 gap-3">
          <Pie data={data} />
          <Footprint footprint={data.CarbonFootprint} />
        </div>
        <Tips />
      </div>
    </div>
  );
};

export default Analysis;