"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { ConstantsEnum, LinksEnum, NoticesTypes } from "@/types";
import { Notices } from "@/lib/database";
import { redirect } from "next/navigation";
import { JSONParser } from "@/utils";

const notices = new Notices();

export async function getNotice(id: string) {
  return await notices.findNotice(id);
}

export async function deleteNotice(id: string) {
  await notices.deleteNotice(id);

  revalidatePath(LinksEnum.NOTICES, "layout");
}

export async function addToFavorite(noticeId: string, path: string) {
  const userId = headers().get(ConstantsEnum.USER_ID);
  if (!userId) return redirect(LinksEnum.HOME);

  const response: NoticesTypes = await notices.updateNotice(
    noticeId,
    { $addToSet: userId },
    { fieldName: "favorites" }
  );

  revalidatePath(path);

  const data = JSONParser(response);

  return data.favorites;
}

export async function removeFromFavorite(noticeId: string, path: string) {
  const userId = headers().get(ConstantsEnum.USER_ID);

  if (!userId) return redirect(LinksEnum.HOME);

  const response: NoticesTypes = await notices.updateNotice(
    noticeId,
    { $pull: userId },
    { fieldName: "favorites" }
  );

  revalidatePath(path);
  const data = JSONParser(response);

  return data.favorites;
}
