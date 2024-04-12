import React from "react";

import styles from "./notices.module.scss";
import { Search } from "../_components";
import { Categories, Filters } from "./_components";
import { userIsAuthenticated } from "@/auth";

async function NoticesLayout({ children }: { children: React.ReactNode }) {
  const user = await userIsAuthenticated() || null;

  return (
    <main>
      <section className={`${styles["notices"]} section`}>
        <div className={`${styles["notices__wrapper"]} container`}>
          <h1 className={styles["notices__title"]}>Find your favorite pet</h1>
          <Search />
          <div className={styles["notices_nav-bar"]}>
            <div className={styles["categories"]}>
              <Categories user={JSON.parse(JSON.stringify(user))} />
            </div>
            <div className={styles["filters"]}>
              <Filters />
            </div>
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}

export default NoticesLayout;
