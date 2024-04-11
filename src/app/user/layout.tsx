import React from "react";

import styles from "./user.module.scss";

const UserLayout = ({
  children,
  pets,
  profile,
  modal,
}: {
  children: React.ReactNode;
  pets: React.ReactNode;
  profile: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <main>
      <section className="section">
        <div className={`container ${styles["user"]}`}>
          {children}
          {profile}
          {pets}
        </div>
      </section>
      {modal}
    </main>
  );
};

export default UserLayout;
