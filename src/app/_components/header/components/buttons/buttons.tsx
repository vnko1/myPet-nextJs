"use client";
import React, { FC } from "react";
import { ButtonsProps } from "./buttons.type";
import { UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";

const Buttons: FC<ButtonsProps> = ({ user }) => {
  const onHandleClick = async () => {};
  if (user)
    return (
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
    );

  return (
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
};

export default Buttons;
