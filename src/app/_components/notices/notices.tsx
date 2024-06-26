import React, { FC } from "react";
import { NoticesProps } from "./notices.type";
import Notice from "../notice/notice";
import styles from "./notices.module.scss";

const Notices: FC<NoticesProps> = ({ notices, userId }) => {
  return (
    <ul className={styles["notices"]}>
      {notices.map((notice) => (
        <li key={notice._id.toString()}>
          <Notice {...notice} userId={userId} />
        </li>
      ))}
    </ul>
  );
};

export default Notices;
