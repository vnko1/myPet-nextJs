import * as z from "zod";
import { birthdayRegex } from "@/utils";

export const petsSchema = z
  .object({
    category: z.enum(["sell", "lost/found", "in good hands", "your pet"], {
      required_error: "Field is required",
    }),
    title: z.string().optional(),
    name: z
      .string({ required_error: "Name field is required" })
      .max(16, { message: "Maximum 16 characters" })
      .min(2, { message: "Minimum 2 characters" }),
    date: z
      .string({
        required_error: "Field is required",
      })
      .regex(birthdayRegex, { message: "Invalid date" }),
    type: z
      .string({ required_error: "Type field is required" })
      .max(16, { message: "Maximum 16 characters" })
      .min(2, { message: "Minimum 2 characters" }),
    sex: z.enum(["male", "female"]).optional(),
    file: z.string(),
    location: z.string().min(2).optional(),
    price: z.coerce.number().positive("Invalid price").optional(),
    comments: z.string().max(120).optional(),
  })
  .refine(
    (data) => {
      if (
        ["sell", "lost/found", "in good hands"].includes(data.category) &&
        !data.title
      )
        return false;

      return true;
    },
    {
      message: "Field is required",
      path: ["title"],
    }
  )
  .refine(
    (data) => {
      if (
        ["sell", "lost/found", "in good hands"].includes(data.category) &&
        !data.sex
      )
        return false;

      return true;
    },
    {
      message: "Field is required",
      path: ["sex"],
    }
  )
  .refine(
    (data) => {
      if (
        ["sell", "lost/found", "in good hands"].includes(data.category) &&
        !data.location
      )
        return false;

      return true;
    },
    {
      message: "Field is required",
      path: ["location"],
    }
  )
  .refine(
    (data) => {
      if ("sell" === data.category && !data.price) return false;

      return true;
    },
    {
      message: "Field is required",
      path: ["price"],
    }
  );
