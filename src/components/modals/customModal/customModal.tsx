"use client";
import React, { FC, useEffect, useState, MouseEvent } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import { ModalProps } from "./customModal.type";
import styles from "./customModal.module.scss";
import { UIButton } from "@/components/buttons";
import { IconEnum } from "@/types";

const CustomModal: FC<ModalProps> = ({
  children,
  classNames,
  portal = false,
  onCrossClick,
  onBackdropClick,
  setIsActive,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handlePressESC = (event: { code: string }) => {
      if (event.code === "Escape") {
        setIsActive && setIsActive(false);
      }
    };
    window.addEventListener("keydown", handlePressESC);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add(styles["no-scroll"]);

    return () => {
      setMounted(false);
      document.body.classList.remove(styles["no-scroll"]);
    };
  }, []);

  const onHandleBackDropClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      onBackdropClick && onBackdropClick();
      setIsActive && setIsActive(false);
    }
  };

  const onHandleCrossButtonClick = () => {
    onCrossClick && onCrossClick();
    setIsActive && setIsActive(false);
  };

  const backDropClassNames = cn(styles["backdrop"], {
    [styles["active"]]: mounted,
  });

  const modalClassNames = cn(
    styles["modal"],
    { [styles["active"]]: mounted },
    classNames
  );
  const markup = (
    <div className={backDropClassNames} onClick={onHandleBackDropClick}>
      <div className={modalClassNames}>
        <UIButton
          onClick={onHandleCrossButtonClick}
          variant="text"
          icon={IconEnum.CROSS_SMALL}
          color="accent"
          className={styles["button"]}
        />
        {children}
      </div>
    </div>
  );
  if (portal) return mounted ? createPortal(markup, document.body) : null;

  return markup;
};

export default CustomModal;
