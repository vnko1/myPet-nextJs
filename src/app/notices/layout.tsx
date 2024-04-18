import React from "react";

import { Search } from "../_components";
import { Categories, Filters } from "@/app/_components";
import styles from "./notices.module.scss";
import { getParsedSession } from "@/lib/actions";

async function NoticesLayout({ children }: { children: React.ReactNode }) {
  const user = await getParsedSession();

  return (
    <main>
      <section className={`${styles["notices"]} section`}>
        <div className={`${styles["notices__wrapper"]} container`}>
          <h1 className={styles["notices__title"]}>Find your favorite pet</h1>
          <Search />
          <div className={styles["notices__nav-bar"]}>
            <div className={styles["categories"]}>
              <Categories userIsLoggerIn={user.isLoggedIn} />
            </div>
            <div className={styles["filters"]}>
              <Filters userIsLoggerIn={user.isLoggedIn} />
            </div>
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}

export default NoticesLayout;
