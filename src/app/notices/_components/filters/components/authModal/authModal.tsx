import React, { FC } from "react";
import { AuthModalProps } from "./authModal.type";
import styles from "./authModal.module.scss";
import { Modal } from "@/components";

const AuthModal: FC<AuthModalProps> = ({ isActive, setIsActive }) => {
  return (
    <Modal active={isActive} setActive={setIsActive}>
      <div className={styles[""]}>AuthModal</div>
    </Modal>
  );
};

export default AuthModal;
