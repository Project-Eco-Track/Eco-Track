// type: Library
import { postRequest } from "./postRequest";
const postCarbonFootprint = async (data: any) => {
  const url = process.env.POST_CARBON_FOOTPRINT_URL;
  const res = postRequest<any>(`${url}`, data);
  return JSON.stringify(res);
};

export default postCarbonFootprint;
