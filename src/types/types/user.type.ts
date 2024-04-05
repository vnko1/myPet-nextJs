import { NoticesTypes, PetsTypes } from ".";

export type UserTypes = {
  id: string;
  email: string;
  password: string;
  name: string;
  pets?: Array<PetsTypes & { id: string }>;
  favorites?: Array<NoticesTypes & { id: string }>;
  birthday?: Date;
  phone?: string;
  city?: string;
  avatarUrl?: string;
  avatarId?: string;
  googleId?: string;
  token?: string;
  refreshToken?: string;
  // tokenLifeTime?: Date;
};
