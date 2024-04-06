import { Types } from "mongoose";
import { UserTypes } from ".";

export type NoticesTypes = {
  _id: Types.ObjectId;
  name: string;
  category: "sell" | "lost-found" | "for-free";
  date: Date;
  type: string;
  imageUrl: string;
  comment: string;
  title: string;
  sex: "male" | "female";
  location: string;
  price: number;
  favorites: Array<UserTypes>;
  owner: Array<UserTypes>;
  // fileId: string;
};
