import { errorResponse } from "./utils";
import { verifyToken } from "./utils/token";

export const authenticate = async (type: string, credential: string) => {
  try {
    const securityKey =
      type === "token" ? process.env.JWT_KEY : process.env.REFRESH_JWT_KEY;

    return await verifyToken(credential, securityKey);
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message);
  }
};
