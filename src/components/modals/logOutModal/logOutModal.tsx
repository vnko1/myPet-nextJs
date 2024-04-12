"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { Modal, UIButton } from "@/components";
import { IconEnum } from "@/types";
import { signOut } from "@/lib/actions";
import { LogOutModalProps } from "./logOutModal.type";
import styles from "./logOutModal.module.scss";

const LogOutModal: FC<LogOutModalProps> = ({
  classNames,
  isActive,
  setIsActive,
}) => {
  const router = useRouter();

  const onHandleClick = async () => {
    setIsActive(false);
    await signOut();
    router.refresh();
  };
  return (
    <Modal
      classNames={`${styles["modal"]} ${classNames}`}
      active={isActive}
      setActive={setIsActive}
    >
      <div className={styles["modal__content"]}>
        <h2 className={styles["title"]}>Already leaving?</h2>
        <div className={styles["modal__buttons"]}>
          <UIButton
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => setIsActive(false)}
          >
            Cancel
          </UIButton>
          <UIButton
            onClick={onHandleClick}
            variant="contained"
            color="secondary"
            fullWidth
            icon={IconEnum.LOGOUT}
            alignIcon="right"
          >
            Yes
          </UIButton>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
