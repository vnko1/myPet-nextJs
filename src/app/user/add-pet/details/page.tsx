"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import { Field, UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import styles from "./details.module.scss";
import addPet from "../addPet.module.scss";

function Details() {
  const methods = useForm();
  const router = useRouter();

  const onHandleBackClick = () => {
    router.push(LinksEnum.ADD_PET_OPTION);
  };

  const onHandleSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <form
        className={styles["details"]}
        onSubmit={methods.handleSubmit(onHandleSubmit)}
      >
        <Field name="name" label="Pet’s name" placeholder="Type name pet" />
        <div className={addPet["buttons"]}>
          <UIButton
            type="submit"
            color="secondary"
            icon={IconEnum.PET}
            alignIcon="right"
          >
            Next
          </UIButton>
          <UIButton
            variant="text"
            color="accent"
            icon={IconEnum.ARROW}
            onClick={onHandleBackClick}
          >
            Back
          </UIButton>
        </div>
      </form>
    </FormProvider>
  );
}

export default Details;
