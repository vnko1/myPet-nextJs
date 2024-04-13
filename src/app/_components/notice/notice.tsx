"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Modal, UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import { deleteNotice } from "@/lib/actions";
import { NoticeProps } from "./notice.type";
import styles from "./notice.module.scss";

const Notice: FC<NoticeProps> = ({ _id, imageUrl, title }) => {
  const [isActive, setIsActive] = useState(false);

  const onDelete = async () => {
    await deleteNotice(_id.toString());
  };
  const onTrashClick = () => {
    setIsActive(true);
  };
  const onCancel = () => {
    setIsActive(false);
  };
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
      <button onClick={onTrashClick}>DELETE</button>
      <Modal active={isActive} setActive={setIsActive}>
        <h2>Delete adverstiment?</h2>
        <p>
          Are you sure you want to delete “Cute dog looking for a home”? You
          can`t undo this action.
        </p>
        <UIButton variant="outlined" color="secondary" onClick={onCancel}>
          Cancel
        </UIButton>
        <UIButton
          variant="contained"
          color="secondary"
          icon={IconEnum.TRASH}
          alignIcon="right"
          onClick={onDelete}
        >
          Yes
        </UIButton>
      </Modal>
    </div>
  );
};

export default Notice;
