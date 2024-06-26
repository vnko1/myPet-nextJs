"use client";
import React, { FC } from "react";
import Image from "next/image";
import { UIButton } from "@/components";
import { IconEnum } from "@/types";
import { deletePet } from "@/lib/actions";
import { PetProps } from "./pet.type";
import styles from "./pet.module.scss";

const Pet: FC<PetProps> = ({ imageUrl, name, date, comments, type, _id }) => {
  const onHandleDeleteClick = async () => {
    await deletePet(_id.toString());

    // await fetch(EndpointsEnum.PET + "/" + _id.toString(), { method: "DELETE" });
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
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk8LpfDwADJQGq85EagQAAAABJRU5ErkJggg=="
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
        <p className={styles["label"]}>
          <span>Name:</span> {name}
        </p>
        <p className={styles["label"]}>
          <span>Date of birth: </span>
          {date}
        </p>
        <p className={styles["label"]}>
          <span>Type: </span>
          {type}
        </p>
        {comments ? (
          <p className={styles["label"]}>
            <span>Comments: </span>
            {comments}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Pet;
