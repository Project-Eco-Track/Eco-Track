import Footprint from "./Footprint";
import Pie from "./Pie";
import Tips from "./Tips";
import getUser from "@libs/getUser";
import { redirect } from 'next/navigation'
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

const getData = async (): Promise<CarbonFootprintData> => {
  const user = await getUser();
  const id = user?.id;
  const dataAppEndpoint =
    "https://sangria-swordfish-wrap.cyclic.app/carbonfootprint?id=" + id;
  try {
    const response = await fetch(dataAppEndpoint);
    if (!response.ok) {
      window.location.href = "/track";
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.error("Error fetching carbon footprint data:", error);
    throw error;
  }
};

const Analysis = async () => {
  let data = undefined;
  try {
    data = await getData();
  } catch (error) {
    console.error("Error getting carbon footprint data:", error);
  }

  if (data === undefined) {
    redirect("/track");
    return <div className=" w-full justify-center flex text-white">Take survey First</div>;
  }

  return (
    <div className=" w-full justify-center flex">
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
