"use client";
import React, { FC, useState } from "react";
import { IconEnum, LinksEnum } from "@/types";
import { LogOutModal, UIButton } from "@/components";
import { ButtonsProps } from "./buttons.type";

const Buttons: FC<ButtonsProps> = ({ user }) => {
  const [isActive, setIsActive] = useState(false);
  const onHandleClick = async () => {
    setIsActive(true);
  };

  const renderButtons = user ? (
    <>
      <UIButton
        variant="contained"
        size="small"
        color="secondary"
        icon={IconEnum.LOGOUT}
        alignIcon="right"
        onClick={onHandleClick}
      >
        Log out
      </UIButton>
      <UIButton
        variant="text"
        size="small"
        color="secondary"
        icon={IconEnum.USER}
        alignIcon="left"
        href={LinksEnum.USER}
      >
        {user.name}
      </UIButton>
    </>
  ) : (
    <>
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
    </>
  );

  const renderModal = isActive && <LogOutModal setIsActive={setIsActive} />;
  return (
    <>
      {renderButtons}
      {renderModal}
    </>
  );
};

export default Buttons;
