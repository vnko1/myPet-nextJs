import React, { FC } from "react";
import { NoticesProps } from "./notices.type";
import Notice from "../notice/notice";

const Notices: FC<NoticesProps> = ({ notices }) => {
  return (
    <ul>
      {notices.map((notice) => (
        <li key={notice._id.toString()}>
          <Notice {...notice} />
        </li>
      ))}
    </ul>
  );
};

export default Notices;
