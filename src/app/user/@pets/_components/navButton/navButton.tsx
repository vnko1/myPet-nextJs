"use client";
import React, { FC } from "react";
import { UIButton } from "@/components";
import { useRouter } from "next/navigation";
import { IconEnum, LinksEnum } from "@/types";

const NavButton: FC = () => {
  const router = useRouter();
  return (
    <UIButton
      color="secondary"
      variant="contained"
      onClick={() => {
        router.push(LinksEnum.ADD_PET_CATEGORY);
        // router.refresh();
      }}
      icon={IconEnum.PLUS}
      alignIcon="right"
      size="small"
    >
      Add pet
    </UIButton>
  );
};

export default NavButton;
