// type: Library
import { postRequest } from "./postRequest";

const postCarbonFootprint = async (data: any, userId: string) => {
  const url = "http://localhost:3001/post/carbon-footprint";
  const payload = { ...data }; //userId
  const res = postRequest<any>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postCarbonFootprint;
