import * as z from "zod";
import { petsSchema } from "@/schema";

export type FormValues = z.infer<typeof petsSchema>;
