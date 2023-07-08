import { exampleRouter } from "y/server/api/routers/example";
import { createTRPCRouter } from "y/server/api/trpc";
import { testRouter } from "./routers/test";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  testRouter: testRouter,
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
