// Type: Library
// Get user object from Clerk, for server environment

import { currentUser } from "@clerk/nextjs";

const getUser = async () => {
  const user = await currentUser();
  if (!user) {
    console.log("User not found");
  } else return user;
};
export default getUser;
