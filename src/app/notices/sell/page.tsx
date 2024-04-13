import React from "react";
import { NOTICES_LIMIT, NoticeQueryParams } from "@/types";
import { getNotices, getNoticesPages } from "@/lib/database";
import { Pagination } from "@/app/_components";
import layoutStyles from "@/app/notices/notices.module.scss";
import { JSONParser } from "@/utils";
import { Notices } from "../_components";

type PageProps = { searchParams: NoticeQueryParams };

async function SellPage({ searchParams }: PageProps) {
  const query: NoticeQueryParams = { ...searchParams, category: "sell" };
  const totals = await getNoticesPages(query);
  const data = await getNotices(query);

  const notices = JSONParser(data);
  return (
    <>
      <div className={layoutStyles["content-wrapper"]}>
        <Notices notices={notices} />
      </div>
      <Pagination totals={totals} limit={NOTICES_LIMIT} />
    </>
  );
}

export default SellPage;
