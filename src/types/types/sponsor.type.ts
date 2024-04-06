import { Types } from "mongoose";

export type WorkDays = {
  isOpen: boolean;
  from: string;
  to: string;
  _id: Types.ObjectId;
};

export type SponsorType = {
  _id: Types.ObjectId;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  workDays: WorkDays[] | null;
};
