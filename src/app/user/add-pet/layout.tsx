"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IconEnum, LinksEnum } from "@/types";
import { UIButton } from "@/components";
import { petsSchema } from "@/schema";

import { NavBar } from "./_components";
import { getUrl } from "./_utils/helpers";
import { FormValues } from "./_utils/types";
import styles from "./styles.module.scss";

function AddPetLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();

  const methods = useForm<FormValues>({
    resolver: zodResolver(petsSchema),
    defaultValues: { category: "your pet" },
    mode: "all",
  });

  const onHandleNextClick = () => {
    const next = getUrl(pathName).next;
    if (next) return router.push(next);
  };

  const onHandleBackClick = () => {
    const prev = getUrl(pathName).prev;
    if (prev) return router.push(prev);

    router.push(LinksEnum.USER);
    router.refresh();
  };

  return (
    <div className={`wrapper ${styles["add-pet"]}`}>
      <div className={styles["head"]}>
        <h1 className={styles["title"]}>Add pet</h1>
        <NavBar options details info path={pathName} />
      </div>
      <FormProvider {...methods}>
        <form className={styles["form"]}>
          <div className={styles["fields"]}>{children}</div>
          <div className={styles["buttons"]}>
            <UIButton
              type={pathName === LinksEnum.ADD_PET_INFO ? "submit" : "button"}
              color="secondary"
              icon={IconEnum.PET}
              alignIcon="right"
              onClick={onHandleNextClick}
            >
              {pathName === LinksEnum.ADD_PET_INFO ? "Done" : "Next"}
            </UIButton>
            <UIButton
              variant="text"
              color="accent"
              icon={IconEnum.ARROW}
              onClick={onHandleBackClick}
            >
              {pathName === LinksEnum.ADD_PET_CATEGORY ? "Cancel" : "Back"}
            </UIButton>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddPetLayout;
