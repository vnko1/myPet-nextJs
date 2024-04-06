import React from "react";

const UserLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  modal;
  return <main>{children}</main>;
};

export default UserLayout;
