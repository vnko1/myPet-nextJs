"use server";

import { revalidatePath } from "next/cache";
import { LinksEnum, NoticesTypes } from "@/types";
import { Notices } from "@/lib/database";
import { redirect } from "next/navigation";
import { JSONParser } from "@/utils";
import { getSession } from "../auth";

const notices = new Notices();

export async function getNotice(id: string) {
  const data = await notices.findNotice(id);

  return JSONParser(data);
}

export async function deleteNotice(id: string) {
  await notices.deleteNotice(id);

  revalidatePath(LinksEnum.NOTICES, "layout");
}

export async function addToFavorite(noticeId: string, path?: string) {
  const { userId } = await getSession();

  if (!userId) return redirect(LinksEnum.HOME);

  const response: NoticesTypes = await notices.updateNotice(
    noticeId,
    { $addToSet: userId },
    { fieldName: "favorites" }
  );

  path && revalidatePath(path);

  const data = JSONParser(response);

  return data.favorites;
}

export async function removeFromFavorite(noticeId: string, path?: string) {
  const { userId } = await getSession();

  if (!userId) return redirect(LinksEnum.HOME);

  const response: NoticesTypes = await notices.updateNotice(
    noticeId,
    { $pull: userId },
    { fieldName: "favorites" }
  );

  path && revalidatePath(path);
  const data = JSONParser(response);

  return data.favorites;
}
