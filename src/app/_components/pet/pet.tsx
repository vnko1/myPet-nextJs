"use client";
import React, { FC } from "react";
import Image from "next/image";
import { PetProps } from "./pet.type";
import styles from "./pet.module.scss";
import { getCategory } from "@/utils";
import { UIButton } from "@/components";
import { IconEnum } from "@/types";

const Pet: FC<PetProps> = ({
  pet: {
    imageUrl,
    category,
    title,
    name,
    type,
    location,
    sex,
    price,
    owner: { email, phone },
    comment,
  },
}) => {
  return (
    <div className={styles["pet"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["pet__thumb"]}>
          <Image src={imageUrl} alt="pet" sizes="(min-width:320px) 100%" fill />
          <p className={`${styles["label"]} ${styles["category"]}`}>
            {getCategory(category)}
          </p>
        </div>
        <div className={styles["pet__info"]}>
          <h2 className={styles["title"]}>{title}</h2>
          <div className={styles["details"]}>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Name:</p>
              <p className={styles["info__value"]}>{name}</p>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Type:</p>
              <p className={styles["info__value"]}>{type}</p>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Place:</p>
              <p className={styles["info__value"]}>{location}</p>
            </div>
            {price ? (
              <div className={styles["info"]}>
                <p className={styles["info__name"]}>Price:</p>
                <p className={styles["info__value"]}>{price}</p>
              </div>
            ) : null}
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>The sex:</p>
              <p className={styles["info__value"]}>{sex}</p>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Email:</p>
              <a
                className={`${styles["info__value"]} ${styles["accent"]}`}
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </div>
            <div className={styles["info"]}>
              <p className={styles["info__name"]}>Phone:</p>
              <a
                className={`${styles["info__value"]} ${styles["accent"]}`}
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["pet__comment"]}>
        <p>{comment}</p>
      </div>
      <div className={styles["pet__buttons"]}>
        <UIButton
          variant="outlined"
          color="secondary"
          fullWidth
          href={`tel:${phone}`}
        >
          Contact
        </UIButton>
        <UIButton
          variant="contained"
          color="secondary"
          fullWidth
          icon={IconEnum.HEART}
          alignIcon="right"
        >
          Add to
        </UIButton>
      </div>
    </div>
  );
};

export default Pet;
