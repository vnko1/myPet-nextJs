"use client";
import React, { useEffect, useState } from "react";
import { RouteModal } from "@/components";
import { NoticesTypes } from "@/types";

function NoticeModalPage({ params: { id } }: { params: { id: string } }) {
  const [noticeCard, setNoticeCard] = useState<NoticesTypes | null>(null);
  console.log(noticeCard);
  useEffect(() => {
    fetch("/notice/api/" + id).then(async (res) => {
      const notice = await res.json();

      setNoticeCard(notice);
      return notice;
    });
  }, [id]);

  return (
    <RouteModal>
      <p>NoticeModalPage : {id}</p>
    </RouteModal>
  );
}

export default NoticeModalPage;
