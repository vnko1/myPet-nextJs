import { Types } from "mongoose";
import { NoticesTypes, PetsTypes } from ".";

export type UserTypes = {
  _id: Types.ObjectId;
  email: string;
  password: string;
  name: string;
  pets?: Array<PetsTypes & { id: string }>;
  favorites?: Array<NoticesTypes & { id: string }>;
  birthday?: Date;
  phone?: string;
  city?: string;
  avatarUrl?: string;
  token?: string;
  // avatarId?: string;
  // refreshToken?: string;
  // googleId?: string;
  // tokenLifeTime?: Date;
};
