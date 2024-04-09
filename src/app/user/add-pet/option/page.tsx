"use client";
import React, { ChangeEvent } from "react";
import { RadioButtonField } from "@/components/fields";
import styles from "./option.module.scss";
import { useAddPetContext } from "../_context";

function Option() {
  const { setOptions, options } = useAddPetContext();

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

  return (
    <div className={styles["options"]}>
      {inputs.map((input, index) => (
        <RadioButtonField key={index} {...input} onChange={onHandleChange} />
      ))}
    </div>
  );
}

export default Option;
