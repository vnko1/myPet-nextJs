"use client";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { IconEnum } from "@/types";
import { UIButton } from "@/components";
import { RouteModalProps } from "./routeModal.type";
import styles from "./routeModal.module.scss";

const RouteModal: FC<RouteModalProps> = ({ classNames, children }) => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.body.classList.add(styles["no-scroll"]);
    }

    return () => {
      document.body.classList.remove(styles["no-scroll"]);
    };
  }, [mounted]);

  useEffect(() => {
    const handlePressESC = (event: { code: string }) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleBackDropClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles["backdrop"]} onClick={onHandleBackDropClick}>
      <div className={`${styles["modal"]} ${classNames}`}>
        <UIButton
          onClick={closeModal}
          variant="text"
          icon={IconEnum.CROSS}
          color="accent"
          className={styles["button"]}
        />
        {children}
      </div>
    </div>
  );
};

export default RouteModal;
