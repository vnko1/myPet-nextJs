import React from "react";

import styles from "./notices.module.scss";
import { Search } from "../_components";
import { Categories, Filters } from "./_components";

function NoticesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className={`${styles["notices"]} section`}>
        <div className={`${styles["notices__wrapper"]} container`}>
          <h1 className={styles["notices__title"]}>Find your favorite pet</h1>
          <Search />
          <div className={styles["notices_nav-bar"]}>
            <div className={styles["categories"]}>
              <Categories />
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
