"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { RadioButtonField } from "@/components/fields";
import { Options, useAddPetContext } from "../_context";
import { UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import addPet from "../addPet.module.scss";
import styles from "./option.module.scss";

type FormValues = { options: Options };

function Option() {
  const { setOptions, options } = useAddPetContext();
  const methods = useForm<FormValues>({
    mode: "onChange",
    values: { options: options || "your pet" },
  });

  const router = useRouter();

  const inputs = [
    {
      label: "your pet",
      name: "options",
      value: "your pet",
    },
    {
      label: "sell",
      name: "options",
      value: "sell",
    },
    {
      label: "lost/found",
      name: "options",
      value: "lost/found",
    },
    {
      label: "in good hands",
      name: "options",
      value: "in good hands",
    },
  ];

  const onHandleBackClick = () => {
    router.push(LinksEnum.USER);
    router.refresh();
  };

  const onHandleSubmit: SubmitHandler<FormValues> = (data) => {
    setOptions(data.options);
    router.push(LinksEnum.ADD_PET_DETAILS);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles["options"]}
        onSubmit={methods.handleSubmit(onHandleSubmit)}
      >
        {inputs.map((input, index) => (
          <RadioButtonField key={index} {...input} />
        ))}

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

export default Option;
