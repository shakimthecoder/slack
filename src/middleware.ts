import { convexAuthNextjsMiddleware, createRouteMatcher, isAuthenticatedNextjs, nextjsMiddlewareRedirect  } from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(['/auth']);
 
export default convexAuthNextjsMiddleware((request) => {
   
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};