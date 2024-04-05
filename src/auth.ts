import { verifyToken } from "./utils/token";

export const authenticate = async (type: string, credential: string) => {
  try {
    const securityKey =
      type === "refreshToken"
        ? process.env.REFRESH_JWT_KEY || ""
        : process.env.JWT_KEY || "";
    const token = await verifyToken(credential, securityKey);

    return token;
  } catch (error) {
    // console.log(error);
  }
};
