"use server";

import { Notices } from "@/lib/database";

const notices = new Notices();

export async function getNotice(id: string) {
  return await notices.findNotice(id);
}
