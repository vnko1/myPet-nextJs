import bcrypt from "bcrypt";
import { customError } from "@/utils";
import { Users } from "../../services";
import { ID, UserTypes } from "@/types";
import { SessionData } from "@/services/session";
import { getSession } from "@/lib/actions";

const users = new Users();

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

const passCompare = async (data: string, encrypted: string) =>
  await bcrypt.compare(data, encrypted);

async function getUser(session: SessionData): Promise<null | UserTypes> {
  const options = { projection: "-token -password" };
  let user = null;
  if (session.userId) user = await users.findUserById(session.userId, options);

  return user;
}

export async function currentUser() {
  const session = await getSession();

  return await getUser(session);
}

export async function createUser(
  newUser: Omit<UserTypes, "_id" | "avatarUrl">
) {
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

  return user;
}

export const logOut = async () => {
  const user = await currentUser();
  if (!user) throw new Error("Something wrong");

  return user;
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
