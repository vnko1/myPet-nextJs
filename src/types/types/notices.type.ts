import { Types } from "mongoose";

export type NoticesTypes = {
  _id: Types.ObjectId;
  name: string;
  category: "sell" | "lost/found" | "in good hands";
  date: string;
  type: string;
  imageUrl: string;
  comment?: string;
  title: string;
  sex: "male" | "female";
  location: string;
  price: number;
  owner: string;
  // favorites: Array<UserTypes>;
  // fileId: string;
};
