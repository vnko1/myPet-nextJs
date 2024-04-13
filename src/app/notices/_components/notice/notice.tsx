import React, { FC } from "react";
import { NoticeProps } from "./notice.type";
import styles from "./notice.module.scss";
import Image from "next/image";
import Link from "next/link";

const Notice: FC<NoticeProps> = ({ _id, imageUrl, title }) => {
  _id;
  return (
    <div className={styles["notice"]}>
      <div className={styles["thumb"]}>
        <Image src={imageUrl} alt="pet" width={288} height={288} />
      </div>
      <h3>{title}</h3>
      {/* <Link></Link> */}
    </div>
  );
};

export default Notice;
