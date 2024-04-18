"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { LinksEnum } from "@/types";
import { Pets } from "@/lib/database";
import { getSession } from "../auth";

const pets = new Pets();

export async function getPets() {
  const { userId } = await getSession();

  if (userId) return await pets.findPets(userId);

  return redirect(LinksEnum.HOME);
}

export async function deletePet(petId: string) {
  await pets.deletePet(petId);

  revalidatePath(LinksEnum.USER);
}
