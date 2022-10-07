import { createRouter } from "@server/createRouter";
import { userRouter } from "@server/router/user.router";

export const appRouter = createRouter()
  //merge routers
  .merge("users.", userRouter);

export type AppRouter = typeof appRouter;
