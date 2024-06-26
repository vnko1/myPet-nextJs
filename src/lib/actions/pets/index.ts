"use server";

import { Pets } from "@/lib/database";
import { ConstantsEnum, LinksEnum } from "@/types";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const pets = new Pets();

export async function getPets() {
  const userId = headers().get(ConstantsEnum.USER_ID);

  if (userId) return await pets.findPets(userId);

  return redirect(LinksEnum.HOME);
}

export async function deletePet(petId: string) {
  await pets.deletePet(petId);

  revalidatePath(LinksEnum.USER);
}
