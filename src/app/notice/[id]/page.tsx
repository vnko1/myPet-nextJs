import React from "react";
import { headers } from "next/headers";
import { ConstantsEnum } from "@/types";
import { JSONParser } from "@/utils";
import { getNotice } from "@/lib/actions";
import { Pet } from "@/app/_components";
import styles from "./notice.module.scss";

async function NoticePage({ params }: { params: { id: string } }) {
  const data = await getNotice(params.id);

  const pet = JSONParser(data);

  const userId = headers().get(ConstantsEnum.USER_ID);

  return (
    <main>
      <section className="section">
        <div className={`container ${styles["notice"]}`}>
          <div className={styles["wrapper"]}>
            <Pet pet={pet} userId={userId} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NoticePage;
