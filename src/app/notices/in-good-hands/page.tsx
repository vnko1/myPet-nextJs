import React from "react";

import { NOTICES_LIMIT, NoticeQueryParams } from "@/types";
import { JSONParser } from "@/utils";
import { getParsedSession } from "@/lib/actions";
import { getNotices, getNoticesPages } from "@/lib/database";
import { Pagination, Notices } from "@/app/_components";
import layoutStyles from "@/app/notices/notices.module.scss";

type PageProps = { searchParams: NoticeQueryParams };

export const dynamic = "force-dynamic";
export const revalidate = 300;

async function InGoodHandsPage({ searchParams }: PageProps) {
  const query: NoticeQueryParams = {
    ...searchParams,
    category: "in-good-hands",
  };
  const totals = await getNoticesPages(query);
  const data = await getNotices(query);
  const notices = JSONParser(data);
  const { userId } = await getParsedSession();

  return (
    <>
      <div className={layoutStyles["content-wrapper"]}>
        <Notices notices={notices || []} userId={userId} />
      </div>
      <Pagination totals={totals || 0} limit={NOTICES_LIMIT} />
    </>
  );
}

export default InGoodHandsPage;
