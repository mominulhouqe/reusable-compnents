import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email().min(1, { message: "email is required" }),
  password: z.string().min(6, "toos short"),
});

export type TNormalForm = z.infer<typeof signUpSchema>;
