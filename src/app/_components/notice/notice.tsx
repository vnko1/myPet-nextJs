"use client";
import React, { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import cn from "classnames";

import { IconEnum, NoticesTypes } from "@/types";
import { getCategory } from "@/utils";
import {
  addToFavorite,
  deleteNotice,
  getNotice,
  removeFromFavorite,
} from "@/lib/actions";
import { Icon, Modal, UIButton } from "@/components";
import { AuthModal, Pet } from "@/app/_components";
import { NoticeProps } from "./notice.type";
import styles from "./notice.module.scss";

const Notice: FC<NoticeProps> = ({
  _id,
  imageUrl,
  title,
  userId,
  category,
  location,
  favorites,
  sex,
  owner,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [authIsActive, setAuthIsActive] = useState(false);
  const [petIsActive, setPetIsActive] = useState(false);
  const [petIsLoading, setPetOsLoading] = useState(false);
  const [petCard, setPetCard] = useState<NoticesTypes | null>(null);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((item) => item.toString() === userId)
  );

  const pathName = usePathname();

  const openPetModal = async () => {
    try {
      setPetOsLoading(true);
      const pet = await getNotice(_id.toString());

      setPetCard(pet as NoticesTypes);
      setPetIsActive(true);
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    } finally {
      setPetOsLoading(false);
    }
  };

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item.toString() === userId));
  }, [favorites, userId]);

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
    if (!userId) return setAuthIsActive(true);

    if (isFavorite) await removeFromFavorite(_id.toString(), pathName);
    else await addToFavorite(_id.toString(), pathName);
  };

  const favoriteClassNames = cn(
    styles["label"],
    styles["label__btn"],
    styles["favorite"],
    { [styles["active"]]: isFavorite }
  );
  return (
    <div className={styles["notice"]}>
      <div className={styles["notice__thumb"]}>
        <Image
          src={imageUrl}
          alt="pet"
          sizes="(min-width:320px) 100%"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
        />
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
        {userId === owner ? (
          <button
            onClick={onTrashClick}
            className={`${styles["label"]} ${styles["label__btn"]} ${styles["trash"]}`}
          >
            <Icon size={24} icon={IconEnum.TRASH} />
          </button>
        ) : null}
        <button className={favoriteClassNames} onClick={onHandleFavoriteClick}>
          <Icon size={24} icon={IconEnum.HEART} />
        </button>
      </div>
      <div className={styles["notice__content"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <UIButton
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={openPetModal}
          isLoading={petIsLoading}
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
      <Modal
        classNames={styles["pet-modal"]}
        active={petIsActive}
        setActive={setPetIsActive}
      >
        <Pet pet={petCard as NoticesTypes} userId={userId} />
      </Modal>
      <AuthModal isActive={authIsActive} setIsActive={setAuthIsActive} />
    </div>
  );
};

export default Notice;

//  href={LinksEnum.NOTICE + "/" + _id}
// const data = await fetch("/notice/api/" + _id);
// const pet = await data.json();
