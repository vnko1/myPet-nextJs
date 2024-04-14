import { cookies } from "next/headers";
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

export async function userIsAuthenticated(credName = "token") {
  const token = cookies().get(credName);

  return await authenticate(token?.name || "", token?.value || "");
}
