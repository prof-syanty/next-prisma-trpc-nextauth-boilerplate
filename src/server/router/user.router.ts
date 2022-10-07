import { userLoginSchema } from "@schema/user.schema";
import { createRouter } from "@server/createRouter";
export const userRouter = createRouter().mutation("login-user", {
  input: userLoginSchema,
  async resolve() {},
});
