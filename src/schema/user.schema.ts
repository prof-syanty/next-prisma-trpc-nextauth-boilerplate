import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type userLoginInput = z.TypeOf<typeof userLoginSchema>;
