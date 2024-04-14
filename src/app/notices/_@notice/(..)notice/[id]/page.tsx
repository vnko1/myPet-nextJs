import React from "react";
import { headers } from "next/headers";
import { ConstantsEnum } from "@/types";
import { JSONParser } from "@/utils";
import { RouteModal } from "@/components";
import { getNotice } from "@/lib/actions";
import styles from "./notice.module.scss";
import { Pet } from "@/app/_components";

async function NoticeModalPage({ params: { id } }: { params: { id: string } }) {
  const data = await getNotice(id);
  const pet = JSONParser(data);
  const userId = headers().get(ConstantsEnum.USER_ID);

  return (
    <RouteModal classNames={styles["modal"]}>
      <Pet pet={pet} userId={userId} />
    </RouteModal>
  );
}

export default NoticeModalPage;

// const [noticeCard, setNoticeCard] = useState<NoticesTypes | null>(null);
// console.log(noticeCard);
// useEffect(() => {
//   fetch("/notice/api/" + id).then(async (res) => {
//     const notice = await res.json();

//     setNoticeCard(notice);
//     return notice;
//   });
// }, [id]);
