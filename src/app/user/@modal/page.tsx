"use client";

import React, { useEffect, useState } from "react";

import { ConstantsEnum, IconEnum } from "@/types";
import styles from "./modal.module.scss";
import { CustomModal, UIButton } from "@/components";

function ModalPage() {
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    setIsNewUser(
      JSON.parse(localStorage.getItem(ConstantsEnum.IS_NEW_USER) || "true")
    );
  }, []);

  const onClick = () => {
    localStorage.setItem(ConstantsEnum.IS_NEW_USER, JSON.stringify(false));
    setIsNewUser(false);
  };

  if (isNewUser)
    return (
      <CustomModal classNames={styles["modal"]} onHandleClick={onClick}>
        <div className={styles["modal__content"]}>
          <h2 className={styles["title"]}>Congrats!</h2>
          <p className={styles["text"]}>Your registration is success</p>
          <div className={styles["button"]}>
            <UIButton
              icon={IconEnum.PET}
              color="secondary"
              alignIcon="right"
              fullWidth
              onClick={onClick}
            >
              Go to profile
            </UIButton>
          </div>
        </div>
      </CustomModal>
    );

  return null;
}

export default ModalPage;
