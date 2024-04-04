"use server";

import { register } from "@/auth";
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
      const res = await register(validatedFields.data);
      return res;
      // return res;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
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

    if (validatedFields.success) console.log(validatedFields.data);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.message) throw new Error(error.message);
  }
  revalidatePath("/login");
}
