import { authMiddleware } from "@clerk/nextjs"
import axios from 'axios';

async function makeRequest(userid) {
  try {
    const response = await axios.post("/api/user/login", { userid });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
export default authMiddleware({
  async afterAuth(auth, req, evt) {
    if (auth.userId) {
      console.log("User ID:", auth.userId)
      await makeRequest(auth.userId)
    }
  },
  publicRoutes: ["/"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
