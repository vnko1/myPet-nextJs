import React from "react";

import { NoticesTypes } from "@/types";
import { JSONParser } from "@/utils";
import { getNotice, getParsedSession } from "@/lib/actions";
import { Pet } from "@/app/_components";
import styles from "./notice.module.scss";

async function NoticePage({ params }: { params: { id: string } }) {
  const data = await getNotice(params.id);

  const pet = JSONParser(data);

  const user = await getParsedSession();

  return (
    <main>
      <section className="section">
        <div className={`container ${styles["notice"]}`}>
          <div className={styles["wrapper"]}>
            <Pet pet={pet as NoticesTypes} userId={user.userId} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NoticePage;
