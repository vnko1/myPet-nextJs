import { HTMLInputTypeAttribute } from "react";
import * as z from "zod";
import { registerSchema } from "@/schema";

export type RegisterSchema = z.infer<typeof registerSchema>;

export type SignUpProps = {
  classNames?: string;
  path: "login" | "register";
  fields: {
    name: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
  }[];
};
