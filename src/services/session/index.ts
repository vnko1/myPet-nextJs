import { SessionOptions } from "iron-session";

const pass = process.env.SECRET_PASS as string;
export interface SessionData {
  username: string | null;
  userId: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: null,
  userId: null,
  email: null,
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: pass,
  cookieName: "user",
  cookieOptions: {
    secure: true,
  },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
