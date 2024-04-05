import bcrypt from "bcrypt";
import { UserTypes } from "@/types";
import { Users } from "../database";
import { createToken } from "@/utils";

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

const passCompare = async (data: string, encrypted: string) =>
  await bcrypt.compare(data, encrypted);

const users = new Users();

export async function register(newUser: UserTypes) {
  const userExist = await users.findUser({ email: newUser.email });
  if (userExist) throw new Error("This user is registered");

  const hashPass = await hashPassword(newUser.password);

  const res = await users.createUser({
    ...newUser,
    password: hashPass,
  });

  return res;
}

export async function signIn(
  currentUser: Pick<UserTypes, "email" | "password">
) {
  const user = await users.findUser({ email: currentUser.email });

  if (!user) throw new Error("Wrong email or password");

  const isPasswordValid = await passCompare(
    currentUser.password,
    user.password
  );

  if (!isPasswordValid) throw new Error("Wrong email or password");

  const [token, tokenLifeTime] = await createToken(
    { email: user.email },
    process.env.JWT_KEY || "",
    process.env.TOKEN_LIFE
  );

  const [refreshToken, refreshTokenLifeTime] = await createToken(
    {
      email: user.email,
    },
    process.env.REFRESH_JWT_KEY || "",
    process.env.REFRESH_TOKEN_LIFE
  );
  await users
    .updateUser(
      user.id,
      {
        token,
        refreshToken,
      },
      { projection: "-password -avatarId" }
    )
    .populate("pets");
  return { token, refreshToken, tokenLifeTime, refreshTokenLifeTime };
}

// export const authenticate =
//   (security: "token" | "refreshToken") => async (req, _, next) => {
//     let securityToken = null;
//     let securityKey = null;
//     if (security === "token") {
//       const { authorization = "" } = req.headers;
//       const [bearer, token] = authorization.split(" ");

//       if (bearer !== "Bearer" && !token)
//         return next(httpError(401, errorMessage[401].wrongAuth));

//       securityToken = token;
//       securityKey = process.env.JWT_KEY;
//     }

//     if (security === "refreshToken") {
//       const { refreshToken } = req.body;

//       if (!refreshToken)
//         return next(httpError(401, errorMessage[401].wrongAuth));

//       securityToken = refreshToken;
//       securityKey = process.env.REFRESH_JWT_KEY;
//     }
//     try {
//       const userToken = jwt.verify(securityToken, securityKey);

//       let user = null;
//       if (userToken.id) user = await Users.findUserById(userToken.id);
//       if (userToken.email)
//         user = await Users.findUserByQuery({ email: userToken.email });

//       if (!user || !user[security] || user[security] !== securityToken)
//         return next(httpError(401, errorMessage[401].wrongAuth));

//       req.user = user;

//       next();
//     } catch {
//       next(httpError(401, errorMessage[401].wrongAuth));
//     }
//   };
