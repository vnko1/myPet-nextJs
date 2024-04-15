"use client";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import { IconEnum } from "@/types";
import { UIButton } from "@/components/buttons";
import { ModalProps } from "./modal.type";
import styles from "./modal.module.scss";

const Modal: FC<ModalProps> = ({
  children,
  active,
  classNames,
  setActive,
  eventHandler,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    eventHandler && eventHandler();

    setTimeout(() => {
      setActive(false);
    }, 350);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
      document.body.classList.add(styles["no-scroll"]);
    }
    return () => {
      document.body.classList.remove(styles["no-scroll"]);
    };
  }, [active]);

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

  const backDropClassNames = cn(styles["backdrop"], {
    [styles["active"]]: isVisible,
  });

  const modalClassNames = cn(styles["modal"], classNames);

  const markup = (
    <div className={backDropClassNames} onClick={onHandleBackDropClick}>
      <div className={modalClassNames}>
        <div className={styles["button-wrapper"]}>
          <UIButton
            onClick={closeModal}
            variant="text"
            icon={IconEnum.CROSS}
            color="accent"
          />
        </div>
        {children}
      </div>
    </div>
  );

  if (!active) return null;

  return createPortal(markup, document.body);
};

export default Modal;
