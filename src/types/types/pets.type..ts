import { Types } from "mongoose";

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
