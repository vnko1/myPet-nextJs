"use client";

import React, { useEffect, useState } from "react";

import { ConstantsEnum, IconEnum } from "@/types";
import styles from "./modal.module.scss";
import { Modal, UIButton } from "@/components";

function ModalPage() {
  const [isNewUser, setIsNewUser] = useState(false);

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
      <Modal
        classNames={styles["modal"]}
        eventHandler={onClick}
        active={isNewUser}
        setActive={setIsNewUser}
      >
        <div className={styles["modal__content"]}>
          <h2 className={styles["title"]}>Congrats!</h2>
          <p className={`modal__text ${styles["text"]}`}>
            Your registration is success
          </p>
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
      </Modal>
    );

  return null;
}

export default ModalPage;
