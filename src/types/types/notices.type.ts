import { Types } from "mongoose";
import { UserTypes } from "./user.type";

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
  price?: number;
  owner: Partial<UserTypes>;
  favorites: Array<Types.ObjectId>;

  // favorites: Array<UserTypes>;
  // fileId: string;
};
