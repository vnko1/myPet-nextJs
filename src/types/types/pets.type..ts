import { Types } from "mongoose";
import * as z from "zod";
import { petsSchema } from "@/schema";

export type FormValues = z.infer<typeof petsSchema>;

export type PetsTypes = {
  _id: Types.ObjectId;
  name: string;
  date: string;
  type: string;
  imageUrl: string;
  comment?: string;
  owner: string;
  // fileId: string;
};
