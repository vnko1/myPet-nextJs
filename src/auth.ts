import bcrypt from "bcrypt";
import { UserTypes } from "@/types";
import { Users } from "@/lib/database";
import { createToken } from "@/utils";

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

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

  const isPasswordValid = await bcrypt.compare(
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
  const res = await users
    .updateUser(
      user.id,
      {
        token,
        refreshToken,
      },
      { projection: "-password -avatarId" }
    )
    .populate("pets");
  return { ...res, tokenLifeTime, refreshTokenLifeTime };
}
