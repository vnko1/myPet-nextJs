import Link from "next/link";
import React from "react";

function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Link href="/user">Open modal</Link>
      {children}
      {modal}
    </>
  );
}

export default Layout;
