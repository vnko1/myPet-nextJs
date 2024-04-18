import { NoticeQueryParams, NoticesTypes } from "@/types";
import { Notices } from "../../services";
import { getSession } from "@/lib/actions";

const notices = new Notices();

export const getNotices = notices.tryCatchWrapper<
  NoticesTypes[],
  NoticeQueryParams
>(async function (query: NoticeQueryParams) {
  const { userId } = await getSession();

  return await notices.findNotices(query, userId);
});

export const getNoticesPages = notices.tryCatchWrapper<
  number,
  NoticeQueryParams
>(async function (query: NoticeQueryParams) {
  const { userId } = await getSession();
  return await notices.countNoticesPagesData(query, userId);
});
