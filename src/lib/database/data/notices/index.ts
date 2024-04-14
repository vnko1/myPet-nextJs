import { headers } from "next/headers";
import { NoticeQueryParams, NoticesTypes } from "@/types";
import { Notices } from "../../services";

const notices = new Notices();

export const getNotices = notices.tryCatchWrapper<
  NoticesTypes[],
  NoticeQueryParams
>(async function (query: NoticeQueryParams) {
  const userId = headers().get("userId");

  return await notices.findNotices(query, userId);
});

export const getNoticesPages = notices.tryCatchWrapper<
  number,
  NoticeQueryParams
>(async function (query: NoticeQueryParams) {
  const userId = headers().get("userId");
  return await notices.countNoticesPagesData(query, userId);
});
