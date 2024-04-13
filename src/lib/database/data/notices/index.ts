import { NoticeQueryParams, NoticesTypes } from "@/types";
import { Notices } from "../../services";

const notices = new Notices();

export const getNotices = notices.tryCatchWrapper<
  NoticesTypes[],
  NoticeQueryParams
>(async function (query: NoticeQueryParams) {
  return await notices.getNotices(query);
});

export const getNoticesPages = notices.tryCatchWrapper<
  number,
  NoticeQueryParams
>(async function (query: NoticeQueryParams) {
  return await notices.getNoticesPagesData(query);
});
