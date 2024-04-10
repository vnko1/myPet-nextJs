"use client";
import React from "react";
import { useWatch } from "react-hook-form";

import styles from "./styles.module.scss";
import { ImageField, RadioButtonField } from "@/components";
import { IconEnum } from "@/types";

function Info() {
  const watch = useWatch();

  const isYourPet = watch.category === "your pet";

  return (
    <div className={styles["info"]}>
      <div className={styles["info__top-wrapper"]}>
        <div className={styles["gender"]}>
          <p className={styles["gender__title"]}>The sex</p>
          <div className={styles["gender__wrapper"]}>
            <RadioButtonField
              name="sex"
              label="Female"
              value="female"
              icon={IconEnum.FEMALE}
            />
            <RadioButtonField
              name="sex"
              label="Male"
              value="male"
              icon={IconEnum.MALE}
            />
          </div>
        </div>
        <ImageField />
      </div>
      <div className={styles["info__bottom-wrapper"]}></div>
    </div>
  );
}

export default Info;
