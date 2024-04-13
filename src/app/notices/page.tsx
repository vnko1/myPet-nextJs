import Link from "next/link";
import React from "react";

function NoticesPage() {
  return (
    <div>
      NoticesPage
      <Link href={"/notice/12"}>Go to NOTICE</Link>
    </div>
  );
}

export default NoticesPage;
