import React from "react";

function NoticePage({ params }: { params: { id: string } }) {
  return <div>NoticePage id: {params.id}</div>;
}

export default NoticePage;
