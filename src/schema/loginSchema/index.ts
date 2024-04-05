import * as z from "zod";
import { emailValid, passwordValid } from "@/utils";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email field is required" })
    .email("Enter a valid Email")
    .max(70, { message: "Maximum 70 characters" })
    .min(10, { message: "Minimum 10 characters" })
    .regex(emailValid, { message: "Enter a valid Email" }),
  password: z
    .string({ required_error: "Password field is required" })
    .min(6, { message: "Enter 6 or more characters" })
    .max(16, { message: "Please enter 16 characters or less" })
    .regex(passwordValid, {
      message: "Please enter min 6 characters and max 16",
    }),
});
