import * as z from "zod";
import { birthdayRegex } from "@/utils";

export const petsSchema = z
  .object({
    category: z.enum(["sell", "lost/found", "in good hands", "your pet"]),
    title: z.string().optional(),
    name: z
      .string({ required_error: "Name field is required" })
      .max(16, { message: "Maximum 16 characters" })
      .min(2, { message: "Minimum 10 characters" }),
    date: z.string().regex(birthdayRegex),
    type: z
      .string({ required_error: "Type field is required" })
      .max(16, { message: "Maximum 16 characters" })
      .min(2, { message: "Minimum 10 characters" }),
    sex: z.enum(["male", "female"]).optional(),
    location: z.string().optional(),
    price: z.number().positive().optional(),
    comments: z.string().max(120).optional(),
  })
  .refine((data) => {
    if (data.category === "sell") {
      console.log(data);
    }
  });
