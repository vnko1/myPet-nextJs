import * as z from "zod";
import { registerSchema } from "./schema";

export type RegisterSchema = z.infer<typeof registerSchema>;
