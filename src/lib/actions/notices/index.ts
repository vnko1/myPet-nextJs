"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { ConstantsEnum, LinksEnum } from "@/types";
import { Notices } from "@/lib/database";
import { redirect } from "next/navigation";

const notices = new Notices();

export async function getNotice(id: string) {
  return await notices.findNotice(id);
}

export async function deleteNotice(id: string) {
  await notices.deleteNotice(id);

  revalidatePath(LinksEnum.NOTICES, "layout");
}

export async function addToFavorite() {
  const userId = headers().get(ConstantsEnum.USER_ID);

  if (!userId) return redirect(LinksEnum.HOME);
}
