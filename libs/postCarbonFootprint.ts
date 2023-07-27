// type: Library
import { postRequest } from "./postRequest";

const postCarbonFootprint = async (
  data: any,
  userId: string,
  userName: any
) => {
  const url = '/api/carbonFootprint';
  const payload = {data, userId, userName };

  console.log(payload);
  const res = postRequest<any>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postCarbonFootprint;
