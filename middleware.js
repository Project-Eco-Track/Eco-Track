import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: ["/","/about","/api","/api/getBlogs","/api/uploadImage","/api/carbonFootprint"],
})
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
