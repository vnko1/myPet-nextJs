import { Users } from "./src/lib/database/services";
// import { verifyToken } from "./utils/token";

const users = new Users();

export const authenticate = (
  credential: string,
  type: "token" | "refreshToken" = "token"
) => {
  const securityKey =
    type === "refreshToken"
      ? process.env.REFRESH_JWT_KEY || ""
      : process.env.JWT_KEY || "";

  // const token = verifyToken(credential, securityKey);

  // let user = null;
  // if (token.id) user = await users.findUserById(token.id);
  // if (token.email) user = await users.findUser({ email: token.email });

  // if (!user || !user[type] || user[type] !== credential) return false;

  return credential;
};
