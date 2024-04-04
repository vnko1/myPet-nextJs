import bcrypt from "bcrypt";
import { UserTypes } from "@/types";
import { Users } from "@/lib/database";
import { createToken } from "@/utils";

const hashPassword = async (password: string) =>
  await bcrypt.hash(password, 10);

const user = new Users();

export async function register(newUser: UserTypes) {
  const userExist = await user.findUser({ email: newUser.email });
  if (userExist) throw new Error("This user is registered");

  const hashPass = await hashPassword(newUser.password);

  const [token, tokenLifeTime] = await createToken(
    { email: newUser.email },
    process.env.JWT_KEY || "",
    process.env.TOKEN_LIFE
  );

  const [refreshToken] = await createToken(
    {
      email: newUser.email,
    },
    process.env.REFRESH_JWT_KEY || "",
    process.env.REFRESH_TOKEN_LIFE
  );

  const res = await user.createUser({
    ...newUser,
    password: hashPass,
    token,
    tokenLifeTime,
    refreshToken,
  });

  return res;
}
