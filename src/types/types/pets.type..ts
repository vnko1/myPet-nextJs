import { Types } from "mongoose";

export type PetsTypes = {
  _id: Types.ObjectId;
  name: string;
  date: Date;
  type: string;
  fileUrl: string;
  fileId: string;
  comment: string;
  owner: string;
};
