import React, { FC } from "react";
import { CheckBoxProps } from "./checkBox.type";
import styles from "./checkBox.module.scss";

const CheckBox: FC<CheckBoxProps> = ({ classNames, label, ...props }) => {
  return (
    <label className={`${styles["container"]} ${classNames}`}>
      <input {...props} type="checkbox" />
      <span className={styles["checkmark"]}>{label}</span>
    </label>
  );
};

export default CheckBox;
