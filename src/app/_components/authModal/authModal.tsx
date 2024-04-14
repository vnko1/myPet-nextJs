import React, { FC } from "react";
import { AuthModalProps } from "./authModal.type";
import { Modal, UIButton } from "@/components";
import styles from "./authModal.module.scss";
import { IconEnum, LinksEnum } from "@/types";

const AuthModal: FC<AuthModalProps> = ({ isActive, setIsActive }) => {
  return (
    <Modal active={isActive} setActive={setIsActive}>
      <div className={styles["modal"]}>
        <h2>Attention</h2>
        <p>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className={styles["buttons"]}>
          <UIButton
            variant="contained"
            size="small"
            icon={IconEnum.PET}
            alignIcon="right"
            href={LinksEnum.LOGIN}
          >
            Log IN
          </UIButton>
          <UIButton variant="outlined" size="small" href={LinksEnum.REGISTER}>
            Registration
          </UIButton>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
