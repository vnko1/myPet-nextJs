import React from "react";
import { NOTICES_LIMIT, NoticeQueryParams } from "@/types";
import { getNotices, getNoticesPages } from "@/lib/database";
import { Pagination } from "@/app/_components";
import layoutStyles from "@/app/notices/notices.module.scss";

type PageProps = { searchParams: NoticeQueryParams };

async function SellPage({ searchParams }: PageProps) {
  const query: NoticeQueryParams = { ...searchParams, category: "sell" };
  const totals = await getNoticesPages(query);
  const notices = await getNotices(query);
  console.log("🚀 ~ SellPage ~ notices:", notices);

  return (
    <div>
      <div className={layoutStyles["content-wrapper"]}>SellPage</div>
      <Pagination totals={totals} limit={NOTICES_LIMIT} />
    </div>
  );
}

export default SellPage;
