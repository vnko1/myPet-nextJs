"use client";

import React, { FC, useState } from "react";

import { useGetScreenSize } from "@/hooks";
import { Icon } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import { FilterProps } from "./filters.type";
import { AuthModal } from "./components";
import styles from "./filters.module.scss";
import { useRouter } from "next/navigation";

const Filters: FC<FilterProps> = ({ user }) => {
  const { push } = useRouter();
  const [screenSize] = useGetScreenSize();
  const [isActive, setIsActive] = useState(false);

  const onHandleNavClick = () => {
    if (user) return push(LinksEnum.ADD_PET_CATEGORY);
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
      <AuthModal isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Filters;
