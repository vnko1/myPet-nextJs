"use client";
import React, { FC } from "react";
import Image from "next/image";
import { LinksEnum } from "@/types";
import { UIButton } from "@/components";
import { NoticeProps } from "./notice.type";
import styles from "./notice.module.scss";

const Notice: FC<NoticeProps> = ({ _id, imageUrl, title }) => {
  return (
    <div className={styles["notice"]}>
      <div className={styles["thumb"]}>
        <Image src={imageUrl} alt="pet" width={288} height={288} />
      </div>
      <h3>{title}</h3>
      <UIButton
        variant="outlined"
        color="secondary"
        fullWidth
        href={LinksEnum.NOTICE + "/" + _id}
      >
        Learn more
      </UIButton>
    </div>
  );
};

export default Notice;
