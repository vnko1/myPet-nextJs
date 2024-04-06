"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { CustomModal, UIButton } from "@/components";
import { IconEnum } from "@/types";
import { signOut } from "@/lib/actions";
import { LogOutModalProps } from "./logOutModal.type";
import styles from "./logOutModal.module.scss";

const LogOutModal: FC<LogOutModalProps> = ({ classNames, ...props }) => {
  const router = useRouter();

  const onHandleClick = async () => {
    props.setIsActive(false);
    const res = await signOut();

    if (res?.errors) router.refresh();
  };
  return (
    <CustomModal
      classNames={`${styles["modal"]} ${classNames}`}
      portal
      {...props}
    >
      <div className={styles["modal__content"]}>
        <h2 className={styles["title"]}>Already leaving?</h2>
        <div className={styles["modal__buttons"]}>
          <UIButton
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => props.setIsActive(false)}
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
    </CustomModal>
  );
};

export default LogOutModal;
