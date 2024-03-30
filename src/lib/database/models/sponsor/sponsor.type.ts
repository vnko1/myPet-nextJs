import { Document } from "mongoose";

export interface ISponsor extends Document {
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  addres: string;
  phone: string;
  email: string;
  workDays: [{ isOpen: boolean; from: string; to: string }];
}
