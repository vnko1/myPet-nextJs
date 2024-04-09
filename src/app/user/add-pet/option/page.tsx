"use client";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { RadioButtonField } from "@/components/fields";
import { useAddPetContext } from "../_context";
import { UIButton } from "@/components";
import { IconEnum, LinksEnum } from "@/types";
import addPet from "../addPet.module.scss";
import styles from "./option.module.scss";

function Option() {
  const { setOptions, options } = useAddPetContext();

  const router = useRouter();

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions(event.target.value);
  };

  const inputs = [
    {
      label: "your pet",
      name: "options",
      value: "your pet",
      checked: options === "your pet",
    },
    {
      label: "sell",
      name: "options",
      value: "sell",
      checked: options === "sell",
    },
    {
      label: "lost/found",
      name: "options",
      value: "lost/found",
      checked: options === "lost/found",
    },
    {
      label: "in good hands",
      name: "options",
      value: "in good hands",
      checked: options === "in good hands",
    },
  ];

  const onHandleBackClick = () => {
    router.push(LinksEnum.USER);
    router.refresh();
  };

  return (
    <form className={styles["options"]}>
      {inputs.map((input, index) => (
        <RadioButtonField key={index} {...input} onChange={onHandleChange} />
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
  );
}

export default Option;
