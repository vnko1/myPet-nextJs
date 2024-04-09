"use client";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

import { RadioButtonProps } from "./radioButton.type";
import styles from "./radioButton.module.scss";

const RadioButtonField: FC<RadioButtonProps> = ({
  classNames,
  label,
  name,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <label className={`${styles["radio"]} ${classNames}`}>
      <input
        {...props}
        {...register(name)}
        type="radio"
        className={styles["field"]}
      />
      <span className={styles["button"]}>{label}</span>
    </label>
  );
};

export default RadioButtonField;
