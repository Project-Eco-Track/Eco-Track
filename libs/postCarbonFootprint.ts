// type: Library
import { postRequest } from "./postRequest";
import { formateCF } from "@utils/formateCF";

const postCarbonFootprint = async (data: any, userId: string) => {
  const url = "https://sangria-swordfish-wrap.cyclic.app/post/carbon-footprint";
  const json = await formateCF(JSON.parse(data));
  const payload = { ...json }; //userId
  const res = postRequest<any>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postCarbonFootprint;
