"use client";
import React, { FC, useState } from "react";
import { IconEnum, LinksEnum } from "@/types";
import { UIButton } from "@/components";
import { LogOutModal } from "@/app/_components";
import { ButtonsProps } from "./buttons.type";
import { useRouter } from "next/navigation";

const Buttons: FC<ButtonsProps> = ({ username }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const onHandleClick = async () => {
    setIsActive(true);
  };

  const navigate = (url: string) => {
    router.push(url);
    router.refresh();
  };

  const renderButtons = username ? (
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
        onClick={() => navigate(LinksEnum.USER)}
      >
        {username}
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

  const renderModal = (
    <LogOutModal setIsActive={setIsActive} isActive={isActive} />
  );
  return (
    <>
      {renderButtons}
      {renderModal}
    </>
  );
};

export default Buttons;
