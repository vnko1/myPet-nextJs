"use client";
import React, { FC } from "react";
import { RadioButtonProps } from "./radioButton.type";
import styles from "./radioButton.module.scss";

const RadioButtonField: FC<RadioButtonProps> = ({ classNames, ...props }) => {
  return (
    <label className={`${styles["radio"]} ${classNames}`}>
      <input {...props} type="radio" />
    </label>
  );
};

export default RadioButtonField;
