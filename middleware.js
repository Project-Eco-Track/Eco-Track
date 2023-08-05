import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/blogs",
    "/api",
    "/api/getBlogs",
    "/api/uploadImage",
    "/api/carbonFootprint",
    "/api/getBadge"
  ],
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
