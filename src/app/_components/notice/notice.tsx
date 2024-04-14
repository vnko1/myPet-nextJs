"use client";
import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon, Modal, UIButton } from "@/components";
import { IconEnum, LinksEnum, NoticeCategory } from "@/types";
import { addToFavorite, deleteNotice, removeFromFavorite } from "@/lib/actions";
import { NoticeProps } from "./notice.type";
import styles from "./notice.module.scss";
import AuthModal from "../authModal/authModal";

function getCategory(category: NoticeCategory) {
  switch (category) {
    case "sell":
      return "Sell";
    case "in-good-hands":
      return "In good hands";
    case "lost-found":
      return "lost/found";
  }
}

const Notice: FC<NoticeProps> = ({
  _id,
  imageUrl,
  title,
  user,
  category,
  location,
  sex,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [authIsActive, setAuthIsActive] = useState(false);

  const pathName = usePathname();
  console.log(pathName);

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
        <p className={`${styles["label"]} ${styles["category"]}`}>
          {getCategory(category)}
        </p>
        <p
          className={`${styles["label"]} ${styles["label__info"]} ${styles["location"]}`}
        >
          <Icon size={24} icon={IconEnum.LOCATION} />
          <span>{location}</span>
        </p>
        <p
          className={`${styles["label"]} ${styles["label__info"]} ${styles["sex"]}`}
        >
          <Icon
            size={24}
            icon={sex === "female" ? IconEnum.FEMALE : IconEnum.MALE}
          />
          <span>{sex}</span>
        </p>
        {pathName === LinksEnum.NOTICES_OWN ? (
          <button
            onClick={onTrashClick}
            className={`${styles["label"]} ${styles["label__btn"]} ${styles["trash"]}`}
          >
            <Icon size={24} icon={IconEnum.TRASH} />
          </button>
        ) : null}
        <button
          className={`${styles["label"]} ${styles["label__btn"]} ${styles["favorite"]}`}
        >
          <Icon size={24} icon={IconEnum.HEART} />
        </button>
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
      <Modal
        active={isActive}
        setActive={setIsActive}
        classNames={styles["modal"]}
      >
        <h2 className={styles["modal__title"]}>Delete advertisement?</h2>
        <p className={styles["modal__text"]}>
          Are you sure you want to delete <b>&quot;{`${title}`}&quot;?</b> You
          can&apos;t undo this action.
        </p>
        <div className={styles["modal__buttons"]}>
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
        </div>
      </Modal>
      <AuthModal isActive={authIsActive} setIsActive={setAuthIsActive} />
    </div>
  );
};

export default Notice;
