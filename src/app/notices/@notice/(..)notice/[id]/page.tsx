import React from "react";
import { RouteModal } from "@/components";
import { getNotice } from "@/lib/actions";

async function NoticeModalPage({ params: { id } }: { params: { id: string } }) {
  const notice = await getNotice(id);
  console.log("🚀 ~ NoticeModalPage ~ notice:", notice);
  return (
    <RouteModal>
      <p>NoticeModalPage : {id}</p>
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
