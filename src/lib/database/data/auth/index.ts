import bcrypt from "bcrypt";
import { cookies } from "next/headers";

import { authenticate } from "@/auth";
import { TOKEN_LIFE, createToken } from "@/utils";
import { Users } from "../../services";
import { IJWT, UserTypes } from "@/types";

const users = new Users();

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

const passCompare = async (data: string, encrypted: string) =>
  await bcrypt.compare(data, encrypted);

async function getUser(payload?: IJWT | boolean): Promise<null | UserTypes> {
  const options = { projection: "-token -refreshToken -password" };
  let user = null;
  if (payload && typeof payload === "object") {
    if (payload.email)
      user = await users.findUser({ email: payload.email }, options);
    if (payload.id) user = await users.findUserById(payload.id, options);
  }

  return user;
}

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
    TOKEN_LIFE
  );

  // const [refreshToken, refreshTokenLifeTime] = await createToken(
  //   {
  //     email: user.email,
  //   },
  //   process.env.REFRESH_JWT_KEY || "",
  //   REFRESH_TOKEN_LIFE
  // );
  await users
    .updateUser(
      user.id,
      {
        token,
      },
      { projection: "-password -avatarId" }
    )
    .populate("pets");
  return { token, tokenLifeTime };
}

export const currentUser = async () => {
  const token = cookies().get("token");

  const isValidToken = token && (await authenticate(token?.name, token?.value));

  return await getUser(isValidToken);
};
