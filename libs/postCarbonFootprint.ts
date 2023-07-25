// type: Library
import { postRequest } from "./postRequest";
const postCarbonFootprint = async (
  data: any,
  userId: string,
  userName: any
) => {
  const url = process.env.POST_CARBON_FOOTPRINT_URL;
  const payload = { ...data, userId, userName };

  console.log(payload);
  const res = postRequest<any>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postCarbonFootprint;
