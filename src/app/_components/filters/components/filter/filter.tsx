import React, { FC } from "react";
import { FilterProps } from "./filter.type";
import styles from "./filter.module.scss";

const Filter: FC<FilterProps> = ({ label }) => {
  return <button className={styles["filter"]}>{label}</button>;
};

export default Filter;
