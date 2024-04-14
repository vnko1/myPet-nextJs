import React from "react";
import { NOTICES_LIMIT, NoticeQueryParams } from "@/types";
import { getNotices, getNoticesPages } from "@/lib/database";
import { Pagination, Notices } from "@/app/_components";
import layoutStyles from "@/app/notices/notices.module.scss";
import { JSONParser } from "@/utils";
import { userIsAuthenticated } from "@/auth";

type PageProps = { searchParams: NoticeQueryParams };

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function SellPage({ searchParams }: PageProps) {
  const query: NoticeQueryParams = { ...searchParams, category: "sell" };
  const totals = await getNoticesPages(query);
  const data = await getNotices(query);

  const notices = JSONParser(data);

  const userData = (await userIsAuthenticated()) || null;

  const user = JSONParser(userData);
  return (
    <>
      <div className={layoutStyles["content-wrapper"]}>
        <Notices notices={notices || []} user={user} />
      </div>
      <Pagination totals={totals || 0} limit={NOTICES_LIMIT} />
    </>
  );
}

export default SellPage;
