import React from "react";

import { JSONParser } from "@/utils";
import { userIsAuthenticated } from "@/auth";
import { Search } from "../_components";
import { Categories, Filters } from "./_components";
import styles from "./notices.module.scss";

async function NoticesLayout({ children }: { children: React.ReactNode }) {
  const data = (await userIsAuthenticated()) || null;

  const user = JSONParser(data);

  return (
    <main>
      <section className={`${styles["notices"]} section`}>
        <div className={`${styles["notices__wrapper"]} container`}>
          <h1 className={styles["notices__title"]}>Find your favorite pet</h1>
          <Search />
          <div className={styles["notices__nav-bar"]}>
            <div className={styles["categories"]}>
              <Categories user={user} />
            </div>
            <div className={styles["filters"]}>
              <Filters user={user} />
            </div>
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}

export default NoticesLayout;
