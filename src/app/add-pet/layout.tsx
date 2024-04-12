"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "classnames";

import { EndpointsEnum, IconEnum, LinksEnum } from "@/types";
import { UIButton } from "@/components";
import { petsSchema } from "@/schema";

import { NavBar } from "./_components";
import { getUrl } from "./_utils/helpers";
import { FormValues } from "@/types";
import styles from "./styles.module.scss";

function AddPetLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(petsSchema),
    defaultValues: { category: "your pet" },
    mode: "all",
  });

  const onHandleNextClick = () => {
    const next = getUrl(pathName).next;

    if (next) return router.replace(next);
  };

  const onHandleBackClick = () => {
    const prev = getUrl(pathName).prev;
    if (prev) return router.replace(prev);

    // router.push(LinksEnum.USER);
    // router.refresh();
    router.back();
  };

  const onHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    const res = await fetch(EndpointsEnum.ADD_PET, {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-cache",
    });
    methods.reset();
    if (res.redirected) return router.replace(res.url);
    if (res.status === 200) {
      if (data.category === "your pet") {
        router.push(LinksEnum.USER);
        router.refresh();
      } else {
        router.push(LinksEnum.NOTICES);
        // router.refresh();
      }
    }

    setIsLoading(false);
  };

  const baseClassNames = cn("wrapper", styles["add-pet"]);

  return (
    <div className={baseClassNames}>
      <div className={styles["head"]}>
        <h1 className={styles["title"]}>Add pet</h1>
        <NavBar path={pathName} />
      </div>
      <FormProvider {...methods}>
        <form
          className={styles["form"]}
          onSubmit={methods.handleSubmit(onHandleSubmit)}
        >
          <div className={styles["fields"]}>{children}</div>
          <div className={styles["buttons"]}>
            <UIButton
              type={pathName === LinksEnum.ADD_PET_INFO ? "submit" : "button"}
              color="secondary"
              icon={IconEnum.PET}
              alignIcon="right"
              onClick={onHandleNextClick}
              fullWidth
              isLoading={
                pathName === LinksEnum.ADD_PET_INFO ? isLoading : false
              }
              disabled={
                pathName === LinksEnum.ADD_PET_INFO
                  ? !methods.formState.isValid
                  : false
              }
            >
              {pathName === LinksEnum.ADD_PET_INFO ? "Done" : "Next"}
            </UIButton>
            <UIButton
              variant="text"
              color="accent"
              icon={IconEnum.ARROW}
              onClick={onHandleBackClick}
              fullWidth
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
