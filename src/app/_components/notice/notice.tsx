"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Modal, UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import { addToFavorite, deleteNotice, removeFromFavorite } from "@/lib/actions";
import { NoticeProps } from "./notice.type";
import styles from "./notice.module.scss";
import AuthModal from "../authModal/authModal";

const Notice: FC<NoticeProps> = ({ _id, imageUrl, title, user }) => {
  const [isActive, setIsActive] = useState(false);
  const [authIsActive, setAuthIsActive] = useState(false);

  const onDelete = async () => {
    await deleteNotice(_id.toString());
  };
  const onTrashClick = () => {
    setIsActive(true);
  };
  const onCancel = () => {
    setIsActive(false);
  };

  const onHandleFavoriteClick = async () => {
    if (!user) setAuthIsActive(true);
    await addToFavorite(_id.toString());
  };
  return (
    <div className={styles["notice"]}>
      <div className={styles["notice__thumb"]}>
        <Image src={imageUrl} alt="pet" sizes="(min-width:320px) 100%" fill />
      </div>
      <div className={styles["notice__content"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <UIButton
          variant="outlined"
          color="secondary"
          fullWidth
          href={LinksEnum.NOTICE + "/" + _id}
        >
          Learn more
        </UIButton>
      </div>
      <Modal active={isActive} setActive={setIsActive}>
        <h2>Delete advertisement?</h2>
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
      <AuthModal isActive={authIsActive} setIsActive={setAuthIsActive} />
    </div>
  );
};

export default Notice;
