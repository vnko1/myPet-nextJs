import React from "react";
import { NOTICES_LIMIT, NoticeQueryParams } from "@/types";
import { getNotices, getNoticesPages } from "@/lib/database";
import { Pagination } from "@/app/_components";
import layoutStyles from "@/app/notices/notices.module.scss";

type PageProps = { searchParams: NoticeQueryParams };

async function LostFoundPage({ searchParams }: PageProps) {
  const query: NoticeQueryParams = { ...searchParams, category: "lost-found" };
  const totals = await getNoticesPages(query);
  const notices = await getNotices(query);
  console.log("🚀 ~ LostFoundPage ~ notices:", notices);

  return (
    <>
      <div className={layoutStyles["content-wrapper"]}>LostFoundPage</div>{" "}
      <Pagination totals={totals} limit={NOTICES_LIMIT} />
    </>
  );
}

export default LostFoundPage;
