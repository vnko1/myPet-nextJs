import React from "react";

import { NoticesTypes } from "@/types";
import { JSONParser } from "@/utils";
import { RouteModal } from "@/components";
import { getNotice, getParsedSession } from "@/lib/actions";
import styles from "./notice.module.scss";
import { Pet } from "@/app/_components";

async function NoticeModalPage({ params: { id } }: { params: { id: string } }) {
  const data = await getNotice(id);
  const pet = JSONParser(data);
  const { userId } = await getParsedSession();

  return (
    <RouteModal classNames={styles["modal"]}>
      <Pet pet={pet as NoticesTypes} userId={userId} />
    </RouteModal>
  );
}

export default NoticeModalPage;

// const [noticeCard, setNoticeCard] = useState<NoticesTypes | null>(null);

// useEffect(() => {
//   fetch("/notice/api/" + id).then(async (res) => {
//     const notice = await res.json();

//     setNoticeCard(notice);
//     return notice;
//   });
// }, [id]);
