"use client";

import React, { FC } from "react";

import { FilterProps } from "./filters.type";
import styles from "./filters.module.scss";
import { Icon } from "@/components";
import { IconEnum } from "@/types";

const Filters: FC<FilterProps> = () => {
  return (
    <div className={styles["filters"]}>
      <button className={`${styles["button"]} ${styles["filter"]}`}>
        <Icon icon={IconEnum.FILTERS} size={24} />
      </button>
      <button className={`${styles["button"]} ${styles["nav"]}`}></button>
    </div>
  );
};

export default Filters;
