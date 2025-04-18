import GitHub from "@auth/core/providers/github";
import { convexAuth } from "@convex-dev/auth/server";
import Google from "@auth/core/providers/google";
export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [GitHub, Google],
});
