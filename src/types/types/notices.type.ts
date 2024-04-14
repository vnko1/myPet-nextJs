import { Types } from "mongoose";
export type NoticeCategory = "sell" | "lost-found" | "in-good-hands";

export type NoticesTypes = {
  _id: Types.ObjectId;
  name: string;
  category: NoticeCategory;
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
