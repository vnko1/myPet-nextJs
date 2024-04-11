import { Types } from "mongoose";
import * as z from "zod";
import { petsSchema } from "@/schema";

export type FormValues = z.infer<typeof petsSchema>;

export type PetResponseValue = { imageUrl: string; owner: string } & FormValues;

export type PetsTypes = {
  _id: Types.ObjectId;
  name: string;
  date: string;
  type: string;
  imageUrl: string;
  comments?: string;
  owner: string;
  // fileId: string;
};
