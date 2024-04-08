"use client";
import React from "react";

import userStyles from "../user.module.scss";
import petsStyles from "./pets.module.scss";
import { UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";

function Pets() {
  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={userStyles["title"]}>My pets:</h2>
        <UIButton
          color="secondary"
          variant="contained"
          href={LinksEnum.ADD_PET}
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
