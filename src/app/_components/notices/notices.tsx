import React, { FC } from "react";
import { NoticesProps } from "./notices.type";
import Notice from "../notice/notice";

const Notices: FC<NoticesProps> = ({ notices, user }) => {
  return (
    <ul>
      {notices.map((notice) => (
        <li key={notice._id.toString()}>
          <Notice {...notice} user={user} />
        </li>
      ))}
    </ul>
  );
};

export default Notices;
