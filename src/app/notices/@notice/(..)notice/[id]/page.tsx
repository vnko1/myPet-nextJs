"use client";
import React from "react";
import { RouteModal } from "@/components";

function NoticeModalPage({ params }: { params: { id: string } }) {
  // const [noticeCard, setNoticeCard] = useState();
  return (
    <RouteModal>
      <p>NoticeModalPage : {params.id}</p>
    </RouteModal>
  );
}

export default NoticeModalPage;
