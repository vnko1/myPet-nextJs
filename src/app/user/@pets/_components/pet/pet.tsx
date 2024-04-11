"use client";
import React, { FC } from "react";
import Image from "next/image";
import { PetProps } from "./pet.type";
import styles from "./pet.module.scss";
import { UIButton } from "@/components";
import { IconEnum } from "@/types";
import { deletePet } from "@/lib/actions";

const Pet: FC<PetProps> = ({ imageUrl, name, _id }) => {
  const deletePeteWithId = deletePet.bind(null, _id.toString());
  const onHandleDeleteClick = async () => {
    await deletePeteWithId();
  };
  return (
    <div className={`wrapper ${styles["pet"]}`}>
      <div className={styles["pet__top-wrapper"]}>
        <Image
          src={imageUrl}
          width={240}
          height={240}
          alt="Pet"
          className={styles["image"]}
        />
      </div>
      <div className={styles["pet__bottom-wrapper"]}>
        <div className={styles["trash-button"]}>
          <UIButton
            variant="text"
            icon={IconEnum.TRASH}
            color="accent"
            onClick={onHandleDeleteClick}
          />
        </div>
        <p>Name: {name}</p>
      </div>
    </div>
  );
};

export default Pet;
