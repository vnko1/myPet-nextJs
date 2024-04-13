"use client";
import { useRouter } from "next/navigation";
import React from "react";

function NoticeModalPage({ params }: { params: { id: string } }) {
  const { back } = useRouter();
  return (
    <div className="p-10">
      NoticeModalPage id:{params.id}
      <button onClick={() => back()}>Go back</button>
    </div>
  );
}

export default NoticeModalPage;
