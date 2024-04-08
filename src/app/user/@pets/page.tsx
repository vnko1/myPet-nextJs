"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { IconEnum, LinksEnum } from "@/types";
import { UIButton } from "@/components";
import userStyles from "../user.module.scss";
import petsStyles from "./pets.module.scss";

function Pets() {
  const router = useRouter();
  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={userStyles["title"]}>My pets:</h2>
        <UIButton
          color="secondary"
          variant="contained"
          onClick={() => {
            router.push(LinksEnum.ADD_PET);
            router.refresh();
          }}
          icon={IconEnum.PLUS}
          alignIcon="right"
          size="small"
        >
          Add pet
        </UIButton>
      </div>
      <div className={`wrapper ${petsStyles["wrapper"]}`}>Pets</div>
    </div>
  );
}

export default Pets;
