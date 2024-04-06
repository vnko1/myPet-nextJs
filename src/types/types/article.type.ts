import { Types } from "mongoose";

export type ArticleTypes = {
  _id: Types.ObjectId;
  imgUrl: string;
  title: string;
  text: string;
  date: Date;
  url: string;
};
