"use server";

import { Notices } from "@/lib/database";
import { LinksEnum } from "@/types";
import { revalidatePath } from "next/cache";

const notices = new Notices();

export async function getNotice(id: string) {
  return await notices.findNotice(id);
}

export async function deleteNotice(id: string) {
  await notices.deleteNotice(id);

  revalidatePath(LinksEnum.NOTICES, "layout");
}
