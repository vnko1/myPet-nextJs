"use client";
import React, { FC } from "react";
import { FilterProps } from "./filter.type";
import styles from "./filter.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";

const Filter: FC<FilterProps> = ({ label, setSelectedGenderCheckBoxes }) => {
  const onHandleClick = () => {
    setSelectedGenderCheckBoxes((state) => state.filter((el) => el !== label));
  };
  return (
    <button className={styles["filter"]} onClick={onHandleClick}>
      {label} <Icon icon={IconEnum.CROSS_SMALL} size={16} />
    </button>
  );
};

export default Filter;
