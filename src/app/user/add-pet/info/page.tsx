"use client";
import React from "react";
import { useWatch } from "react-hook-form";

import styles from "./styles.module.scss";
import { Field, ImageField, RadioButtonField } from "@/components";
import { IconEnum } from "@/types";

function Info() {
  const watch = useWatch();

  const isYourPet = watch.category === "your pet";

  return (
    <div className={styles["info"]}>
      {!isYourPet ? (
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
      ) : null}
      <div className={styles["image"]}>
        <p className={styles["image__title"]}>Load the pet’s image:</p>
        <ImageField variant="pet" name="file" />
      </div>
      <Field name="comments" label="Comments" placeholder="Type of pet" />
    </div>
  );
}

export default Info;
