"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { loginSchema, registerSchema } from "@/schema";
import { register, signIn } from "@/lib/auth";
import { LinksEnum } from "@/types";

export async function createUser(formData: FormData) {
  try {
    const validatedFields = registerSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });
    if (validatedFields.success) {
      await register(validatedFields.data);
    }
  } catch (error: unknown) {
    return { errors: { email: "Something wrong" } };
  }
  revalidatePath(LinksEnum.REGISTER);
  redirect(LinksEnum.LOGIN);
}

export async function login(formData: FormData) {
  try {
    const validatedFields = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (validatedFields.success) {
      const user = await signIn(validatedFields.data);
      const token: string = user.token;
      const tokenLifeTime = user.tokenLifeTime;

      cookies().set("token", token, {
        secure: true,
        expires: tokenLifeTime,
      });
      // const refreshToken: string = user.refreshToken;
      // const refreshTokenLifeTime: number = user.refreshTokenLifeTime;
      // cookies().set("refreshToken", refreshToken, {
      //   secure: true,
      //   httpOnly: true,
      // });
    }
  } catch (error: unknown) {
    return { errors: { password: "Wrong email or password" } };
  }
  revalidatePath(LinksEnum.LOGIN);
  redirect(LinksEnum.USER);
}
