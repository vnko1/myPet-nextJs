"use server";

import { register, signIn } from "@/auth";
import { loginSchema, registerSchema } from "@/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function authenticate(formData: FormData) {
  try {
    const validatedFields = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (validatedFields.success) {
      await signIn(validatedFields.data);
    }
  } catch (error: unknown) {
    return { errors: { email: "Wrong email or password" } };
  }
  revalidatePath("/login");
}
