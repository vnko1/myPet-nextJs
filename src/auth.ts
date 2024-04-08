import { verifyToken } from "./utils/token";

export const authenticate = async (type: string, credential: string) => {
  try {
    const securityKey =
      type === "token" ? process.env.JWT_KEY : process.env.REFRESH_JWT_KEY;
    return await verifyToken(credential, securityKey);
  } catch (error) {
    console.log("🚀 ~ authenticate ~ error:", error);
  }
};
