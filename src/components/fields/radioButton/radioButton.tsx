"use client";
import React, { FC } from "react";
import { RadioButtonProps } from "./radioButton.type";
import styles from "./radioButton.module.scss";

const RadioButtonField: FC<RadioButtonProps> = ({ classNames, ...props }) => {
  return (
    <label className={`${styles["radio"]} ${classNames}`}>
      <span className={styles["radio__field"]}>
        <input {...props} type="radio" className={styles["field"]} />
      </span>
    </label>
  );
};

export default RadioButtonField;
