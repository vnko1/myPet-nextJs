"use client";
import { useRouter } from "next/navigation";
import React from "react";

function NoticeModalPage({ params }: { params: { noticeId: string } }) {
  console.log("🚀 ~ NoticeModalPage ~ params:", params);
  const router = useRouter();
  return (
    <div>
      NoticeModalPage
      <button onClick={() => router.back()}>BACK</button>
    </div>
  );
}

export default NoticeModalPage;
