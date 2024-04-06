"use client";
import React, { FC, useEffect, useState } from "react";
import { ModalProps } from "./customModal.type";
import styles from "./customModal.module.scss";
import { createPortal } from "react-dom";

const CustomModal: FC<ModalProps> = ({
  children,
  classNames,
  portal = false,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const markup = (
    <div className={styles["backdrop"]}>
      <div className={`${styles["modal"]} ${classNames}`}>{children}</div>
    </div>
  );
  if (portal) return mounted ? createPortal(markup, document.body) : null;

  return markup;
};

export default CustomModal;
