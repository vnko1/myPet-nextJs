"use client";
import React from "react";
import { useWatch } from "react-hook-form";

import styles from "./styles.module.scss";
import {
  Field,
  ImageField,
  RadioButtonField,
  TextAreaField,
} from "@/components";
import { IconEnum } from "@/types";

const fields = [
  {
    name: "location",
    label: "Location",
    placeholder: "Type location of pet",
    isTextArea: false,
  },
  {
    name: "comments",
    label: "Comments",
    placeholder: "Type comments",
    isTextArea: true,
  },
];

const forSellFields = [
  {
    name: "location",
    label: "Location",
    placeholder: "Type location of pet",
    isTextArea: false,
  },
  {
    name: "price",
    label: "Price",
    placeholder: "Type price of pet",
    isTextArea: false,
  },
  {
    name: "comments",
    label: "Comments",
    placeholder: "Type comments",
    isTextArea: true,
  },
];

function Info() {
  const watch = useWatch();

  const isYourPet = watch.category === "your-pet";
  const isForSell = watch.category === "sell";

  const filtredFields = isForSell
    ? forSellFields
    : fields.slice(isYourPet ? 1 : 0);

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
        <p className={styles["image__title"]}>Add photo</p>
        <ImageField variant="pet" name="file" />
      </div>
      {filtredFields.map(({ name, label, placeholder, isTextArea }) => {
        if (isTextArea)
          return (
            <TextAreaField
              key={name}
              name={name}
              label={label}
              placeholder={placeholder}
            />
          );
        return (
          <Field
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
          />
        );
      })}
    </div>
  );
}

export default Info;
