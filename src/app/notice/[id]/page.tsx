import React from "react";
import { getNotice } from "@/lib/actions";
import { Pet } from "@/app/_components";
import { JSONParser } from "@/utils";
import styles from "./notice.module.scss";

async function NoticePage({ params }: { params: { id: string } }) {
  const data = await getNotice(params.id);

  const pet = JSONParser(data);

  return (
    <main>
      <section className="section">
        <div className={`container ${styles["notice"]}`}>
          <div className={styles["wrapper"]}>
            <Pet pet={pet} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NoticePage;
