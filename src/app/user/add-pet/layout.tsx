"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UIButton } from "@/components";
import { AddPetContext, Details, Info, Options } from "./_context";
import { NavBar } from "./_components";
import styles from "./addPet.module.scss";
import { IconEnum, LinksEnum } from "@/types";

const getUrl = (currentPath: string) => {
  let next: string | null;
  let prev: string | null;
  switch (currentPath) {
    case LinksEnum.ADD_PET_OPTION:
      next = LinksEnum.ADD_PET_DETAILS;
      prev = null;
      break;
    case LinksEnum.ADD_PET_DETAILS:
      next = LinksEnum.ADD_PET_INFO;
      prev = LinksEnum.ADD_PET_OPTION;
      break;
    case LinksEnum.ADD_PET_INFO:
      prev = LinksEnum.ADD_PET_DETAILS;
      next = null;
      break;
    default:
      next = "/";
      prev = "/";
  }

  return { next, prev };
};

function AddPetLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();

  const [options, setOptions] = useState<Options | null>(null);
  const [details, setDetails] = useState<Details | null>(null);
  const [info, setInfo] = useState<Info | null>(null);

  const onHandlePrevClick = () => {
    const prev = getUrl(pathName).prev;
    if (prev) return router.push(prev);

    router.push(LinksEnum.USER);
    router.refresh();
  };

  const onHandleNextClick = () => {
    const next = getUrl(pathName).next;
    if (next) return router.push(next);

    console.log("submit");
  };

  return (
    <div className={`wrapper ${styles["add-pet"]}`}>
      <div className={styles["head"]}>
        <h1 className={styles["title"]}>Add pet</h1>
        <NavBar
          options={!!options}
          details={!!details}
          info={!!info}
          path={pathName}
        />
      </div>
      <div className={styles["fields"]}>
        <AddPetContext.Provider
          value={{ options, details, info, setOptions, setDetails, setInfo }}
        >
          {children}
        </AddPetContext.Provider>
      </div>
      <div className={styles["buttons"]}>
        <UIButton
          color="secondary"
          icon={IconEnum.PET}
          alignIcon="right"
          onClick={onHandleNextClick}
        >
          {pathName === LinksEnum.ADD_PET_INFO ? "Done" : " Next"}
        </UIButton>
        <UIButton
          variant="text"
          color="accent"
          icon={IconEnum.ARROW}
          onClick={onHandlePrevClick}
        >
          {pathName === LinksEnum.ADD_PET_OPTION ? "Cancel" : "Back"}
        </UIButton>
      </div>
    </div>
  );
}

export default AddPetLayout;
