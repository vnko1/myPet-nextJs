"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { loginSchema, registerSchema } from "@/schema";
import { createUser, signIn, currentUser, updateUser } from "@/lib/database";
import { LinksEnum, UserTypes } from "@/types";
import Files from "@/services/files";
import { customError, errorResponse } from "@/utils";
import { handleAuth, logout } from "../auth";
//
const files = new Files();

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
      const user: UserTypes = await signIn(validatedFields.data);
      await handleAuth(user.name, user._id.toString(), user.email);
    }
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, error.name);
  }

  redirect(LinksEnum.USER);
}

export async function signOut() {
  try {
    await logout();
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, error.name);
  }
  revalidatePath(LinksEnum.HOME);
}

export async function updateUserProfile(formData: FormData) {
  try {
    const user = await currentUser();

    if (!user) throw customError({ message: "Unauthorized" });

    const body: Partial<UserTypes> = {};

    const avatar = formData.get("avatarUrl")?.toString();

    if (avatar) {
      const res = await files.upload(avatar, {
        resource_type: "image",
        folder: "pets/avatar",
        public_id: user._id.toString(),
        eager: "f_auto",
        overwrite: true,
      });

      if (res) body.avatarUrl = res.eager[0].secure_url;
    }

    formData.forEach((value, key) => {
      if (key === "avatarUrl") return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (body as any)[key] = value;
    });

    await updateUser(user._id, body);
  } catch (error) {
    if (error instanceof Error) return errorResponse(error.message, error.name);
  }
  revalidatePath(LinksEnum.USER);
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
