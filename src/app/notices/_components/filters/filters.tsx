"use client";

import React, { FC, useState } from "react";

import { useGetScreenSize } from "@/hooks";
import { Icon, Modal } from "@/components";
import { IconEnum } from "@/types";
import { FilterProps } from "./filters.type";
import styles from "./filters.module.scss";

const Filters: FC<FilterProps> = () => {
  const [screenSize] = useGetScreenSize();
  const [isActive, setIsActive] = useState(false);

  const onHandleNavClick = () => {
    setIsActive(true);
  };

  return (
    <div className={styles["filters"]}>
      <button className={`${styles["button"]} ${styles["filter"]}`}>
        <span>Filter </span>
        <Icon icon={IconEnum.FILTERS} size={24} />
      </button>
      <button
        className={`${styles["button"]} ${styles["nav"]}`}
        onClick={onHandleNavClick}
      >
        <Icon
          icon={screenSize > 768 ? IconEnum.PLUS_SMALL : IconEnum.PLUS}
          size={24}
          className={styles["icon"]}
        />
        Add pet
      </button>
      <Modal active={isActive} setActive={setIsActive}>
        <div>MODAL</div>
      </Modal>
    </div>
  );
};

export default Filters;
