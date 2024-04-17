import { SessionOptions } from "iron-session";

const pass = process.env.SECRET_PASS as string;
export interface SessionData {
  username: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: "",
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
