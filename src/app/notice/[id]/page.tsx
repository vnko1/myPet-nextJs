import React from "react";
import { getNotice } from "@/lib/actions";

async function NoticePage({ params }: { params: { id: string } }) {
  const data = await getNotice(params.id);
  console.log("🚀 ~ NoticePage ~ data:", data);

  return <div>NoticePage id: {params.id}</div>;
}

export default NoticePage;
