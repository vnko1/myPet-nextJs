import React from "react";

function NoticePage({ params }: { params: { noticeId: string } }) {
  console.log("🚀 ~ NoticePage ~ params:", params);

  return <div>NoticePage</div>;
}

export default NoticePage;
