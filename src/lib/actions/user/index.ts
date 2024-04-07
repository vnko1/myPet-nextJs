"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { loginSchema, registerSchema } from "@/schema";
import { logOut, createUser, signIn } from "@/lib/database";
import { LinksEnum } from "@/types";
import { errorResponse } from "@/utils";

export async function register(formData: FormData) {
  try {
    const validatedFields = registerSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });
    if (validatedFields.success) {
      await createUser(validatedFields.data);
    }
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, error.name);
  }

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
        httpOnly: true,
      });
    }
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, error.name);
  }

  redirect(LinksEnum.USER);
}

export async function signOut() {
  try {
    await logOut();
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, error.name);
  }
  revalidatePath("/");
}

// **************************************************************************

// export const register = tryCatchWrapper(async (formData: FormData) => {
//   const validatedFields = registerSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//     confirmPassword: formData.get("confirmPassword"),
//   });
//   if (validatedFields.success) await createUser(validatedFields.data);

//   redirect(LinksEnum.LOGIN);
// });

// export const login = tryCatchWrapper(async (formData: FormData) => {
//   const validatedFields = loginSchema.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   if (validatedFields.success) {
//     const user = await signIn(validatedFields.data);
//     const token: string = user.token;
//     const tokenLifeTime = user.tokenLifeTime;

//     cookies().set("token", token, {
//       secure: true,
//       expires: tokenLifeTime,
//       httpOnly: true,
//     });
//   }

//   redirect(LinksEnum.USER);
// });

// export const signOut = tryCatchWrapper(async () => {
//   await logOut();
//   revalidatePath("/");
// });

// const refreshToken: string = user.refreshToken;
// const refreshTokenLifeTime: number = user.refreshTokenLifeTime;
// cookies().set("refreshToken", refreshToken, {
//   secure: true,
//   httpOnly: true,
// });
// **************************************************************************
