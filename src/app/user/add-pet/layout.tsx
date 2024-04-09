"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { LinksEnum } from "@/types";
import { AddPetContext, Details, Info, Options } from "./_context";
import { NavBar } from "./_components";

import styles from "./addPet.module.scss";

function AddPetLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const [options, setOptions] = useState<Options | null>(null);
  const [details, setDetails] = useState<Details | null>(null);
  const [info, setInfo] = useState<Info | null>(null);

  return (
    <div className={`wrapper ${styles["add-pet"]}`}>
      <div className={styles["head"]}>
        <h1 className={styles["title"]}>Add pet</h1>
        <NavBar
          options={!!options && pathName !== LinksEnum.ADD_PET_OPTION}
          details={!!details && pathName !== LinksEnum.ADD_PET_DETAILS}
          info={!!info && pathName !== LinksEnum.ADD_PET_INFO}
          path={pathName}
        />
      </div>
      <AddPetContext.Provider
        value={{ options, details, info, setOptions, setDetails, setInfo }}
      >
        {children}
      </AddPetContext.Provider>
    </div>
  );
}

export default AddPetLayout;
