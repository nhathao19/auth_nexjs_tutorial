import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({message: "Email không hợp lệ"}),
  password: z.string().min(1,{
    message: "Password không hợp lệ"
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({message: "Email không hợp lệ"}),
  password: z.string().min(6,{
    message: "Tối đa 6 ký tự"
  }),
  name: z.string().min(1,{
    message: "Tên không hợp lệ"
  })
});

