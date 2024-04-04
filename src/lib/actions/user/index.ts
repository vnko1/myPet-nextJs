"use server";

import { loginSchema, registerSchema } from "@/schema";
import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
  const validatedFields = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });
  if (validatedFields.success) console.log(validatedFields.data);

  revalidatePath("/register");
}

export async function authenticate(formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validatedFields.success) console.log(validatedFields.data);

  revalidatePath("/register");
}
