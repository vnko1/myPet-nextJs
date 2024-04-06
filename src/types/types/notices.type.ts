import { Types } from "mongoose";
import { UserTypes } from ".";

export type NoticesTypes = {
  _id: Types.ObjectId;
  name: string;
  category: "sell" | "lost-found" | "for-free";
  date: Date;
  type: string;
  fileUrl: string;
  fileId: string;
  comment: string;
  title: string;
  sex: "male" | "female";
  location: string;
  price: number;
  favorites: Array<UserTypes & { id: string }>;
  owner: Array<UserTypes & { id: string }>;
};
