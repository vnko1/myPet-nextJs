import React from "react";
import { redirect } from "next/navigation";
import { isAuth } from "@/lib/database";
import { LinksEnum } from "@/types";
import { Profile } from "./_components";
import styles from "./user.module.scss";

async function User() {
  const user = await isAuth();

  if (user)
    return (
      <section className="section">
        <div className={`container ${styles["user"]}`}>
          <div className={styles["user__profile"]}>
            <h2 className={styles["title"]}>My information:</h2>
            <Profile user={user} />
          </div>
          <div className={styles["user__pets"]}>
            <h2>My pets:</h2>
          </div>
        </div>
      </section>
    );

  return redirect(LinksEnum.HOME);
}

export default User;
