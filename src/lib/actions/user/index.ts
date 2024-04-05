"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { register, signIn } from "@/auth";
import { loginSchema, registerSchema } from "@/schema";

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
  revalidatePath("/register");
  redirect(`/login`);
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
      const tokenLifeTime: number = user.tokenLifeTime;

      cookies().set("token", token, { expires: tokenLifeTime, secure: true });
      const refreshToken: string = user.refreshToken;
      const refreshTokenLifeTime: number = user.refreshTokenLifeTime;
      cookies().set("refreshToken", refreshToken, {
        expires: refreshTokenLifeTime,
        secure: true,
        httpOnly: true,
      });
    }
  } catch (error: unknown) {
    return { errors: { password: "Wrong email or password" } };
  }
  revalidatePath("/login");
}
