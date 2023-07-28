// type: Library
import { postRequest } from "./postRequest";
import { formateCF } from "@utils/formateCF";

const postCarbonFootprint = async (data: any, userId: string) => {
  const url =
    "https://sangria-swordfish-wrap.cyclic.app/calculateCarbonFootprint";
  const json = await formateCF(JSON.parse(data));

  const date = new Date();
  const year = date.getFullYear().toString().slice(-2).padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const payload = { ...json, userID: userId, Date: formattedDate };
  const res = postRequest<any>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postCarbonFootprint;
