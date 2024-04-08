import React from "react";

function DashLayout({
  children,
  modal,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

export default DashLayout;
