import { Types } from "mongoose";

// import { NoticesTypes, PetsTypes } from ".";

export type ID = Types.ObjectId;

export type UserTypes = {
  _id: ID;
  email: string;
  password: string;
  name: string;
  birthday?: string;
  phone?: string;
  city?: string;
  avatarUrl: string;
  // token?: string;
  // pets?: Array<PetsTypes & { id: string }>;
  // favorites?: Array<NoticesTypes & { id: string }>;
  // avatarId?: string;
  // refreshToken?: string;
  // googleId?: string;
  // tokenLifeTime?: Date;
};
