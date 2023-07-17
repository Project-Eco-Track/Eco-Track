import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: ["/","/blogs","/about"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
