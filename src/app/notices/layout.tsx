import React from "react";

function NoticesLayout({
  children,
  notice,
}: {
  children: React.ReactNode;
  notice: React.ReactNode;
}) {
  return (
    <div className="p-10">
      {children}
      {notice}
    </div>
  );
}

export default NoticesLayout;
