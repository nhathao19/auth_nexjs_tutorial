import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({message: "Email không hợp lệ"}),
  password: z.string().min(1,{
    message: "Password không hợp lệ"
  }),
});

