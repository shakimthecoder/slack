import { query, mutation } from './_generated/server'
import { v } from "convex/values"
import { getAuthUserId } from "@convex-dev/auth/server";

export const create = mutation({
    args: {
       name: v.string()
    },
    handler: async (ctx, args) => {
      const user = await getAuthUserId(ctx); 
      if(!user){
        throw new Error("Unauthorized");
     }
      const joinCode = "123456";

      const workspaceId = await ctx.db.insert("workspaces", {
        name: args.name,
        user,
        joinCode,
      })
      return workspaceId;
    }
})

export const get = query({
    args: {
    },
    handler: async(ctx, args) => {
        return await ctx.db.query("workspaces").collect();
    }
})