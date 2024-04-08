import * as z from "zod";
import { birthdayRegex, emailValid, phoneRegex } from "@/utils";

export const userSchema = z.object({
  name: z.string({ required_error: "Name field is required" }).min(2).max(16),
  email: z
    .string({ required_error: "Email field is required" })
    .email("Enter a valid Email")
    .max(70, { message: "Maximum 70 characters" })
    .min(10, { message: "Minimum 10 characters" })
    .regex(emailValid, { message: "Enter a valid Email" }),
  birthday: z.string().regex(birthdayRegex),
  phone: z.string().regex(phoneRegex),
  city: z.string(),
});
