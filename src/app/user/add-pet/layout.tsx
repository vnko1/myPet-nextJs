"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import { AddPetContext, Details, Info, Options } from "./_context";
import { NavBar } from "./_components";
import { getUrl, isDisabled } from "./_utils";
import styles from "./addPet.module.scss";

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
          disabled={isDisabled(pathName, !options, !details, !info)}
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
