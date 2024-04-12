"use client";

import React, { FC } from "react";

import { useGetScreenSize } from "@/hooks";
import { Icon } from "@/components";
import { IconEnum } from "@/types";
import { FilterProps } from "./filters.type";
import styles from "./filters.module.scss";

const Filters: FC<FilterProps> = () => {
  const [screenSize] = useGetScreenSize();

  return (
    <div className={styles["filters"]}>
      <button className={`${styles["button"]} ${styles["filter"]}`}>
        <span>Filter </span>
        <Icon icon={IconEnum.FILTERS} size={24} />
      </button>
      <button className={`${styles["button"]} ${styles["nav"]}`}>
        <Icon
          icon={screenSize > 768 ? IconEnum.PLUS_SMALL : IconEnum.PLUS}
          size={24}
          className={styles["icon"]}
        />
        Add pet
      </button>
    </div>
  );
};

export default Filters;
