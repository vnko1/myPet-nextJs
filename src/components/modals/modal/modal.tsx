import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import { IconEnum } from "@/types";
import { UIButton } from "@/components/buttons";
import { ModalProps } from "./modal.type";
import styles from "./modal.module.scss";

const Modal: FC<ModalProps> = ({ children, active, setActive, classNames }) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  useEffect(() => {
    const handlePressESC = (event: { code: string }) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handlePressESC);
    document.body.classList.add(styles["no-scroll"]);

    return () => {
      window.removeEventListener("keydown", handlePressESC);
      document.body.classList.remove(styles["no-scroll"]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backDropClassNames = cn(styles["backdrop"], {
    [styles["active"]]: isVisible,
  });

  const modalClassNames = cn(styles["modal"], classNames);

  const markup = (
    <div className={backDropClassNames} onClick={() => closeModal()}>
      <div className={modalClassNames}>
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

  if (!active) return null;

  return createPortal(markup, document.body);
};

export default Modal;
