import bcrypt from "bcrypt";
import { cookies } from "next/headers";

import { authenticate } from "@/auth";
import { TOKEN_LIFE, createToken, customError } from "@/utils";
import { Users } from "../../services";
import { ID, JWTPayloadType, UserTypes } from "@/types";

const users = new Users();

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

const passCompare = async (data: string, encrypted: string) =>
  await bcrypt.compare(data, encrypted);

async function getUser(
  payload?: JWTPayloadType | boolean
): Promise<null | UserTypes> {
  const options = { projection: "-token -password" };
  let user = null;
  if (payload && typeof payload === "object") {
    if (payload.email)
      user = await users.findUser({ email: payload.email }, options);
    if (payload._id) user = await users.findUserById(payload._id, options);
  }

  return user;
}

export async function currentUser(type: "token" | "refreshToken" = "token") {
  const token = cookies().get(type);

  const isValidToken = token && (await authenticate(token?.name, token?.value));

  return await getUser(isValidToken);
}

export async function createUser(newUser: Omit<UserTypes, "_id">) {
  const userExist = await users.findUser({ email: newUser.email });
  if (userExist)
    throw customError({
      name: "email",
      message: "User with this email is registered",
    });

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
  const error = { message: "Wrong email or password", name: "password" };
  const user = await users.findUser({ email: currentUser.email });
  if (!user) throw customError(error);

  const isPasswordValid = await passCompare(
    currentUser.password,
    user.password
  );

  if (!isPasswordValid) throw customError(error);

  const [token, tokenLifeTime] = await createToken(
    { email: user.email, _id: user.id, name: user.name },
    process.env.JWT_KEY || "",
    TOKEN_LIFE
  );

  return { token, tokenLifeTime };
}

export const logOut = async () => {
  const user = await currentUser();
  if (!user) throw new Error("Something wrong");

  cookies().delete("token");
};

export const updateUser = async (id: ID, userData: Partial<UserTypes>) => {
  return await users.updateUser(id, userData, { projection: "-password" });
};
// **************************************************************************
// await users.updateUser(
//   user.id,
//   {
//     token,
//   },
//   { projection: "-password" }
// );

// await users.updateUser(user._id, { token: "" });

// const [refreshToken, refreshTokenLifeTime] = await createToken(
//   {
//     email: user.email,
//   },
//   process.env.REFRESH_JWT_KEY || "",
//   REFRESH_TOKEN_LIFE
// );
// **************************************************************************
